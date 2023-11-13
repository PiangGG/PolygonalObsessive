import { _decorator, Component, Node ,EventTouch,Input,input,Prefab,Vec2} from 'cc';
import { PolygonalManager } from '../Polygonal/PolygonalManager';
const { ccclass, property } = _decorator;

@ccclass('PolygonalSpawner')
export class PolygonalSpawner extends Component {
    
    @property(Prefab)
    public Polygonal: Prefab = null;

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
        
       if(this.Polygonal)
       {
            const SpawnLocation : Vec2 = new Vec2(event.getUILocation().x-360,900);
            PolygonalManager.instance().Spawn(SpawnLocation,this.Polygonal)

            // const SpawnLocation2 : Vec2 = new Vec2(event.getUILocation().x-100,1350);
            // PolygonalManager.instance().Spawn(SpawnLocation2,this.Polygonal)
       }    
    }
}
