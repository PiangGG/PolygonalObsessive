import { _decorator, Component, Node ,EventTouch,Input,input,Prefab,Vec2, Color} from 'cc';
import { PolygonalManager } from '../Polygonal/PolygonalManager';
import { Lobby } from '../LobbyManager';
const { ccclass, property } = _decorator;

@ccclass('PolygonalSpawner')
export class PolygonalSpawner extends Component {

    @property(Color)
    public colors:Color[] = Color[3];

    @property(Prefab)
    public Polygonals: Prefab[] = Prefab[2];

    start() 
    {
        console.log("开始监听触摸结束");  
        input.on(Input.EventType.TOUCH_END, this.SpawnPolygonal, this);
    }

    update(deltaTime: number) 
    {
        

    }

    SpawnPolygonal(event: EventTouch)
    {
        console.log(event.getLocation());  // Location on screen space
        console.log(event.getUILocation()); 

        const location_1:Vec2 = event.getUILocation();
        
        let result: [Color, Prefab] = Lobby.instance().RendomPoly();
        
        if(result[1])
        {
                console.log("随机预制体成功:"+result[1].toString);
                const SpawnLocation : Vec2 = new Vec2(event.getUILocation().x-360,900);
                PolygonalManager.instance().Spawn(SpawnLocation,result[1],result[0])

                // const SpawnLocation2 : Vec2 = new Vec2(event.getUILocation().x-100,1350);
                // PolygonalManager.instance().Spawn(SpawnLocation2,this.Polygonal)
        }else
        {
                console.log("随机预制体失败");
        }    
    }

    public RendomPoly():[Color,Prefab]
    {
        console.log("随机基础多边形和颜色");

        console.log(this.colors.length);
        console.log(this.Polygonals.length);

        let  randomColor:Color = null;
        if(this.colors)
        {
            randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
        }

        let  randomPrefab:Prefab = null;
        if(this.Polygonals)
        {
            randomPrefab = this.Polygonals[Math.floor(Math.random() * length)];
        }
       
        return [randomColor, randomPrefab];
    }
}
