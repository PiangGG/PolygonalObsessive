import { _decorator, color, Component, Node ,Color, Sprite, CCInteger} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Attribute')
export class Attribute extends Component {
    @property(Color)
    color:Color;
    @property(CCInteger)
    Edges:number = 0;

    start() {

    }

    update(deltaTime: number) {
        
    }

    SetInfo(color:Color,number:number)
    {
        this.color = color;
        this.Edges = number;
        let sprite = this.node.parent.getComponent(Sprite)
        if(sprite)
        {
            sprite.color =  this.color;
        }else
        {
            console.log("没找到精灵");
        }
    }
}


