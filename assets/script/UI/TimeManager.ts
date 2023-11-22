import { _decorator, Component, Label, Node ,macro, AudioSource} from 'cc';
const { ccclass, property } = _decorator;

let CurrentTime:number = 0;
let Time_H:number = 0;
let Time_M:number = 0;
@ccclass('TimeManager')
export class TimeManager extends Component {
    start() {

        this.schedule(this.updateTime,1,macro.REPEAT_FOREVER,0);    
    }

    update(deltaTime: number) {
        
    }
    updateTime()
    {
        CurrentTime++;//+;
        
        let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        SoudPlay.play();

        let label:Label =  this.node.getComponent(Label)

        if(CurrentTime>=59)
        {
            Time_M++;
            CurrentTime = 0;
        }

        if(Time_M>=59)
        {
            Time_H++;
            Time_M = 0;
            CurrentTime = 0;
        }

    
        let Time_SS:string = "";
        if(CurrentTime<9)
        {
            Time_SS = 0 + CurrentTime.toString();
        }else
        {
            Time_SS = CurrentTime.toString()
        }

        let Time_SM:string = "";
        if(Time_M<9)
        {
            Time_SM = 0 + Time_M.toString();
        }else
        {
            Time_SM = Time_M.toString()
        }

        let Time_SH:string = "";
        if(Time_H<9)
        {
            Time_SH = 0+Time_H.toString()
        }else
        {
            Time_SH = Time_H.toString()
        }

        label.string = Time_SH+":"+Time_SM+":"+Time_SS;
    }
}


