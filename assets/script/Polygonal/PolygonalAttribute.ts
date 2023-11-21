import { _decorator, color, Component, Node ,Color, Sprite, CCInteger, SpriteFrame} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Attribute')
export class Attribute extends Component {
    @property(Color)
    color:Color;
    @property(CCInteger)
    Edges:number = 0;

    @property(SpriteFrame)
    SpriteFrame3:SpriteFrame = null;
    @property(SpriteFrame)
    SpriteFrame4:SpriteFrame = null;

    protected onLoad(): void 
    {
        
    }
    start() {

    }

    update(deltaTime: number) {
        
    }

    SetInfo(color:Color,number:number)
    {
        this.color = color;
        this.Edges = number;
        let sprite = this.node.getComponent(Sprite);
        console.log(this.node);
        if(sprite)
        {
            sprite.color =  color;
        }else
        {
            console.log("没找到精灵");
        }
    }
    SetInfoTopBaritem(color:Color,number:number)
    {
        this.color = color;
        this.Edges = number;
        let sprite = this.node.getChildByName("Sprite").getComponent(Sprite);
        console.log(this.node);
        if(sprite)
        {
            sprite.color =  color;
            switch(this.Edges)
            {
                case 0:
                    sprite.spriteFrame = this.SpriteFrame3;
                    break;
                case 1:
                    sprite.spriteFrame = this.SpriteFrame4;
                    break;
            }
        }else
        {
            console.log("没找到精灵");
        }
    }
}


