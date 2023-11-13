import { _decorator, Component, Node, SystemEvent ,EventTouch,Input,input,Prefab} from 'cc';
import { PolygonalManager } from '../script/PolygonalManager';
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

       if(this.Polygonal)
       {
            PolygonalManager.instance().Spawn(event.getUILocation(),this.Polygonal)
       }    
    }
}
