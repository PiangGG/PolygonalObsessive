import { _decorator, color, Component, Node ,Color, Sprite, CCInteger, SpriteFrame, CCBoolean,Scheduler,macro, PolygonCollider2D,Contact2DType,IPhysics2DContact,AudioSource, Prefab, RigidBody2D, Vec2,IPhysics2DManifold,IPhysics2DWorldManifold} from 'cc';
const { ccclass, property } = _decorator;

import { PolygonalManager } from '../Polygonal/PolygonalManager';
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

    @property(CCInteger)
    index:number = -1;
    @property(CCInteger)
    MoveSpeed:number = 15;

    OverlopPerfabs:Map<string,Node> = new Map();

    protected onLoad(): void 
    {
        
    }
    start() 
    {
        let polygonCollider2D:PolygonCollider2D = this.node.getComponent(PolygonCollider2D);

        if(polygonCollider2D)
        {
            // polygonCollider2D.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this,true);
            // polygonCollider2D.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // polygonCollider2D.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            polygonCollider2D.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        let rigidBody2D:RigidBody2D = this.node.getComponent(RigidBody2D);
        
    }

    update(deltaTime: number) {
        
        // if(this.bupdate)
        // {

        // }
        if(this.OverlopPerfabs.size>0)
        {
            this.OverlopPerfabs.forEach((value,key)=>
            {
                let va = value.name;
                console.log(this.node.uuid+":"+va);
            });
        }
        //console.log("Tick颜色和边数:"+this.color+":"+ this.Edges);
    }

    SetInfo(color:Color,number:number)
    {
        this.color = color;
        this.Edges = number;
        let sprite = this.node.getComponent(Sprite);
        //console.log(this.node);
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

    SetTimerTickLocation(index:number)
    {
        //不管是否激活定时器，先清除定时器
        this.unschedule(this.SetTimerTickLocationCallback);
        //设置index，根据index移动
        this.index = index;
        //设置定时器
        this.schedule(this.SetTimerTickLocationCallback, 0.0167,macro.REPEAT_FOREVER,0);
    }

    SetTimerTickLocationCallback(index:number)
    {
        if(this.index!=-1)
        {
            switch(this.index)
            {
                case 0:
                    if(this.node.getPosition().x>-10)
                    {
                        this.node.setPosition(this.node.getPosition().x-(1*this.MoveSpeed),this.node.getPosition().y);
                    }else
                    {
                        this.node.setPosition(-10,this.node.getPosition().y);
                    }
                    break;
                case 1:
                    if(this.node.getPosition().x>123)
                    {
                        this.node.setPosition(this.node.getPosition().x-(1*this.MoveSpeed),this.node.getPosition().y);
                    }else
                    {
                        this.node.setPosition(123,this.node.getPosition().y);
                    }
                    break;
                case 2:
                    if(this.node.getPosition().x>256)
                    {
                        this.node.setPosition(this.node.getPosition().x-(1*this.MoveSpeed),this.node.getPosition().y);
                    }else
                    {
                        this.node.setPosition(256,this.node.getPosition().y);
                    }
                    break;
                case 3:
                    if(this.node.getPosition().x>389)
                    {
                        this.node.setPosition(this.node.getPosition().x-(1*this.MoveSpeed),this.node.getPosition().y);
                    }else
                    {
                        this.node.setPosition(389,this.node.getPosition().y);
                    }
                    break;
                case 4:
                    if(this.node.getPosition().x>522)
                    {
                        this.node.setPosition(this.node.getPosition().x-(1*this.MoveSpeed),this.node.getPosition().y);
                    }else
                    {
                        this.node.setPosition(522,this.node.getPosition().y);
                    }
                    break;
            }
        }
        //console.log("ticktime"+this.index);
    }
    protected onDestroy(): void 
    {
        this.unschedule(this.SetTimerTickLocationCallback);
    }
    

    onBeginContact(selfCollider:PolygonCollider2D,otherCollider:PolygonCollider2D,contact:IPhysics2DContact | null)
    {
        // let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        // SoudPlay.play();
        //this.OverlopPerfabs.set(otherCollider.node.uuid,otherCollider.node);
        
    }

    onEndContact(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        // if(this.OverlopPerfabs.has(otherCollider.node.uuid))
        // {
        //     this.OverlopPerfabs.delete(otherCollider.node.uuid);
        // }
        
    }
    onPreSolve(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        // let SoudPlay:AudioSource =  this.node.getComponent(AudioSource)
        // SoudPlay.play();
        
    }

    onPostSolve(selfCollider: PolygonCollider2D, otherCollider: PolygonCollider2D, contact: IPhysics2DContact | null)
    {
        if(selfCollider.node.getComponent(Attribute)&&otherCollider.node.getComponent(Attribute))
        {
            // console.log("碰撞后颜色和边数:"+selfCollider.node.getComponent(Attribute).Edges+":"+ selfCollider.node.getComponent(Attribute).color);
            // console.log("碰撞后颜色和边数:"+otherCollider.node.getComponent(Attribute).Edges+":"+ otherCollider.node.getComponent(Attribute).color);
            if(selfCollider.node.getComponent(Attribute).Edges == otherCollider.node.getComponent(Attribute).Edges)
            {
                if(selfCollider.node.getComponent(Attribute).color == otherCollider.node.getComponent(Attribute).color)
                {   
                    let newlocation:Vec2 = new Vec2((selfCollider.node.position.x + otherCollider.node.position.x)/2,(selfCollider.node.position.y + otherCollider.node.position.y)/2);
                    let newColor:Color = selfCollider.node.getComponent(Attribute).color;
                    let newEdges:number = selfCollider.node.getComponent(Attribute).Edges+1;
                    
                    PolygonalManager.instance().SpawnNext(newlocation,newColor,newEdges)
                    selfCollider.node.destroy();
                    otherCollider.node.destroy(); 
                }
            }
        }
    }

    SetTimerSpawnNextCallback(location:Vec2,color:Color,edges:number)
    {
        
    }
}