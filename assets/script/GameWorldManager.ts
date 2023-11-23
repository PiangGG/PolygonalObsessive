import { _decorator, Component, Node,PolygonCollider2D,Contact2DType,AudioSource,IPhysics2DContact} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameWorldManager')
export class GameWorldManager extends Component {
    start() {
        let polygonCollider2D:PolygonCollider2D = this.node.getComponent(PolygonCollider2D);

        if(polygonCollider2D)
        {
            polygonCollider2D.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            polygonCollider2D.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            polygonCollider2D.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            polygonCollider2D.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
    }

    update(deltaTime: number) {
        
    }

    onBeginContact(selfCollider:PolygonCollider2D,otherCollider:PolygonCollider2D,contact:IPhysics2DContact | null)
    {
        let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        SoudPlay.play();
    }

    onEndContact(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        //console.log(this);
    }
    onPreSolve(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        // let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        // SoudPlay.play();
    }

    onPostSolve(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        // console.log("碰撞"+selfCollider+":"+otherCollider);
        // let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        // SoudPlay.play();
    }
}


