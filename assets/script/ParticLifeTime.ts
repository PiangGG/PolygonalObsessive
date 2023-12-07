import { _decorator, Component, Node ,macro} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ParticLifeTime')
export class ParticLifeTime extends Component 
{
    start() {
        this.schedule(this.LiftEnd,1,1,1);
       
    }

    update(deltaTime: number) {
        
    }

    LiftEnd()
    {
        this.node.destroy();
    }
}


