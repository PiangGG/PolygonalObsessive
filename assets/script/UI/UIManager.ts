import { _decorator, Component, Node ,Button ,EventHandler,Event, director} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {

    @property(Button)
    StartGame_Button:Button = null;

    protected onLoad(): void
    {
        //初始化开始游戏按钮
        const clickEventHandler = new EventHandler();
        clickEventHandler.target = this.node; // 这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = 'UIManager';// 这个是脚本类名
        clickEventHandler.handler = 'StartGameCallback';
        clickEventHandler.customEventData = 'foobar';
        //this.StartGame_Button = this.node.getComponent(Button);
        this.StartGame_Button.clickEvents.push(clickEventHandler);

        console.log("UIManager OnLoad");    
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    StartGameCallback (event: Event, customEventData: string) {
        // 这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        const node = event.target as Node;
        const button = node.getComponent(Button);
        console.log(customEventData); // foobar

        //director.
    }
}


