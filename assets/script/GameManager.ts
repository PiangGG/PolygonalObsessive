import { _decorator, Component, Node ,PhysicsSystem2D,EPhysics2DDrawFlags, CCBoolean} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    @property(CCBoolean)
    bShowDebugPhysics2D:Boolean = false;
    
    protected onLoad(): void {
        
        if(this.bShowDebugPhysics2D)
        {
            console.log("显示物理碰撞");
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb |
            EPhysics2DDrawFlags.Pair |
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape;
        }
       
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}


