import { _decorator, Button, Component ,EventHandler , Node , Event} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lobby')
export class Lobby extends Component {

    protected onLoad(): void {
        console.log("LobbyManager onLoad");

        // const clickEventHandler = new EventHandler();
        // clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        // clickEventHandler.component = 'Lobby';// 这个是脚本类名
        // clickEventHandler.handler = 'StartGamecallback';
        // clickEventHandler.customEventData = 'foobar';

        // const button = this.node.getComponent(Button);
        // button.clickEvents.push(clickEventHandler);

        // if(this.StartButton)
        // {
        //     this.StartButton.node.on(Button.EventType.CLICK, this.StartGamecallback, this);
        //     console.log("开始游戏按钮监听");
        // }else
        // {
        //     console.log("开始游戏按钮监听失败");
        // }
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    StartGamecallback(event: Event, customEventData: string) {
      
        // const node = event.target as Node;
        // const button = node.getComponent(Button);
        console.log(customEventData);
    }

    protected onDestroy(): void {
        
    }
}


