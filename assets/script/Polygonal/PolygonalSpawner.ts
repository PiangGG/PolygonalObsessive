import { _decorator, Component, Node ,EventTouch,Input,input,Prefab,Vec2, Color, CCInteger} from 'cc';
import { PolygonalManager } from '../Polygonal/PolygonalManager';
import { Lobby } from '../LobbyManager';
import { Attribute } from '../Polygonal/PolygonalAttribute';
const { ccclass, property } = _decorator;

@ccclass('PolygonalSpawner')
export class PolygonalSpawner extends Component {

    @property(Color)
    public colors:Color[] = Color[3];

    @property(Prefab)
    public Polygonals: Prefab[] = Prefab[2];

    @property(CCInteger)
    BeginPlayRendomPloyNum:number = 5;
    start() 
    {
        console.log("开始监听触摸结束");  
        input.on(Input.EventType.TOUCH_END, this.SpawnPolygonal, this);

        //游戏开始随机一定数量的个多边形
        
        for(let index:number = 0;index < this.BeginPlayRendomPloyNum;index++)
        {
            let result: [Color, number] = Lobby.instance().RendomPoly();
            if(Lobby.PolyTopBarOut)
            {
                PolygonalManager.instance().SpawnPloy(index,Lobby.PolyTopBarOut,result[1],result[0],false);
            }
        }
    }

    update(deltaTime: number) 
    {
        

    }

    SpawnPolygonal(event: EventTouch)
    {
        console.log(event.getLocation());  // Location on screen space
        console.log(event.getUILocation()); 

        const location_1:Vec2 = event.getUILocation();
        
        // let result: [Color, Prefab] = Lobby.instance().RendomPolyPrefab();
        
        // if(result[1])
        // {
        //         console.log("随机预制体成功:"+result[1].toString);
        //         const SpawnLocation : Vec2 = new Vec2(event.getUILocation().x-360,900);
        //         PolygonalManager.instance().Spawn(SpawnLocation,result[1],result[0])
        // }
        // else
        // {
        //         console.log("随机预制体失败");
        // }
        if(PolygonalManager.instance().PolyTopBarMap.has(0)&&PolygonalManager.instance().PolyTopBarMap.has(1))
        {
            let PolyTopBarMap0 =  PolygonalManager.instance().PolyTopBarMap.get(0);
            if(PolyTopBarMap0)
            {
                let attribute:Attribute = PolyTopBarMap0.getComponent(Attribute)
                const SpawnLocation : Vec2 = new Vec2(event.getUILocation().x-360,900);
                if( PolygonalManager.PolyEdgesMap.has(attribute.Edges))
                {
                    const var2 =  PolygonalManager.PolyEdgesMap.get(attribute.Edges)
                    if(var2)
                    {
                        PolygonalManager.instance().Spawn(SpawnLocation,var2,attribute.color)
                    }
                    
                }
                PolyTopBarMap0.destroy();
                PolygonalManager.instance().PolyTopBarMap.delete(0)
            }

            let PolyTopBarMap1 =  PolygonalManager.instance().PolyTopBarMap.get(1);
            if(PolyTopBarMap1)
            {
                let attribute:Attribute = PolyTopBarMap1.getComponent(Attribute)
                const SpawnLocation : Vec2 = new Vec2(event.getUILocation().x-360,1100);
                if( PolygonalManager.PolyEdgesMap.has(attribute.Edges))
                {
                    const var2 =  PolygonalManager.PolyEdgesMap.get(attribute.Edges)
                    if(var2)
                    {
                        PolygonalManager.instance().Spawn(SpawnLocation,var2,attribute.color)
                    }
                    
                }
                PolyTopBarMap1.destroy();
                PolygonalManager.instance().PolyTopBarMap.delete(1)
            }

            PolygonalManager.instance().MoveLeft();

        }
       
    }
}
