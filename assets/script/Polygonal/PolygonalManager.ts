import { _decorator, Component, instantiate, Node, Prefab, Vec2 ,director, Color} from 'cc';

import { Attribute } from '../Polygonal/PolygonalAttribute';
import { Lobby } from '../LobbyManager';

const { ccclass, property } = _decorator;

@ccclass('PlolygonalManager')
export class PolygonalManager extends Component {

    private static _instance: PolygonalManager;

    @property(Node)
    World:Node = null;

    @property(Prefab)
    Poly3:Prefab = null;
    @property(Prefab)
    Poly4:Prefab = null;
    @property(Prefab)
    Poly5:Prefab = null;
    @property(Prefab)
    Poly6:Prefab = null;
    @property(Prefab)
    Poly7:Prefab = null;
    @property(Prefab)
    Poly8:Prefab = null;
    @property(Prefab)
    PolyN:Prefab = null;

    @property(Prefab)
    CollsionParticle:Prefab = null;

    public PolyTopBarMap = new Map();

    public static PolyEdgesMap = new Map();

    public static instance(){
        if(!this._instance){
            this._instance = new PolygonalManager();
        }
        return this._instance;
    }

    protected onLoad(): void 
    {
        PolygonalManager.PolyEdgesMap.set(0,this.Poly3);
        PolygonalManager.PolyEdgesMap.set(1,this.Poly4);
        PolygonalManager.PolyEdgesMap.set(2,this.Poly5);
        PolygonalManager.PolyEdgesMap.set(3,this.Poly6);
        PolygonalManager.PolyEdgesMap.set(4,this.Poly7);
        PolygonalManager.PolyEdgesMap.set(5,this.Poly8);
        PolygonalManager.PolyEdgesMap.set(6,this.PolyN);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    SpawnPloy(slotIndex:number,PolyTopBar:Prefab,PolyNumber:number,color:Color,bMove:Boolean)
    {
        if(PolyTopBar)
        {
            const LocalPolygonal = instantiate(PolyTopBar);
            let attribute = LocalPolygonal.getComponent(Attribute)
            if(attribute)
            {
                attribute.SetInfoTopBaritem(color,PolyNumber);
            }
            this.PolyTopBarMap.set(slotIndex,LocalPolygonal)
            if(LocalPolygonal)
            {
                let scene = director.getScene();
                if(scene)
                {
                    var child = scene.getChildByName("UI");

                    if(child)
                    {
                        child.addChild(LocalPolygonal);

                        //设置在顶部的位置
                        switch(slotIndex)
                        {
                            case 0:
                                LocalPolygonal.setPosition(slotIndex*128-10,-555);
                                break;
                            // case 1:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            // case 2:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            case 3:
                                if(bMove)
                                {
                                    LocalPolygonal.setPosition((slotIndex+2)*128-10+5*slotIndex,-555);
                                    let attribute = LocalPolygonal.getComponent(Attribute)
                                    attribute.SetTimerTickLocation(3)
                                }else
                                {
                                    LocalPolygonal.setPosition(slotIndex*128-10+5*slotIndex,-555);
                                }
                                break;
                            case 4:
                                if(bMove)
                                {
                                    LocalPolygonal.setPosition((slotIndex+2)*128-10+5*slotIndex,-555);
                                    let attribute = LocalPolygonal.getComponent(Attribute)
                                    attribute.SetTimerTickLocation(4)
                                }else
                                {
                                    LocalPolygonal.setPosition(slotIndex*128-10+5*slotIndex,-555);
                                }
                                break;
                            default:
                                LocalPolygonal.setPosition(slotIndex*128-10+5*slotIndex,-555);
                                break;
                        }
                        //LocalPolygonal.setPosition(slotIndex*128+10,530);
                    }else
                    {
                        console.log("UI节点没找到");
                    }
                }else
                {
                    console.log("scene节点没找到");
                }
            } else
            {
                console.log("LocalPolygonal节点没找到");
            } 
        }
    }

    Spawn(location:Vec2,Polygonal:Prefab,color:Color)
    {
        if(Polygonal)
        {
            const LocalPolygonal = instantiate(Polygonal);
            console.log("生成位置:x = "+location);

            let attribute = LocalPolygonal.getComponent(Attribute)
            if(attribute)
            {
                attribute.SetInfo(color,3);
            }

            if(LocalPolygonal)
            {
                let scene = director.getScene();
                if(scene)
                {
                    var child = scene.getChildByName("UI");

                    if(child)
                    {
                        child.addChild(LocalPolygonal);
                        LocalPolygonal.setPosition(location.x,location.y);
                    }else
                    {
                        console.log("UI节点没找到");
                    }
                }else
                {
                    console.log("scene节点没找到");
                }
            } else
            {
                console.log("LocalPolygonal节点没找到");
            } 
        }else
        {
            console.log("生成Polygonal失败"+location);
        }
    }

    MoveLeft()
    {
        if(this.PolyTopBarMap.has(2))
        {
            this.PolyTopBarMap.set(0,this.PolyTopBarMap.get(2))
            if(this.PolyTopBarMap.has(0))
            {
                let attribute = this.PolyTopBarMap.get(0).getComponent(Attribute)
                attribute.SetTimerTickLocation(0)
            }
        }

        if(this.PolyTopBarMap.has(3))
        {
            this.PolyTopBarMap.set(1,this.PolyTopBarMap.get(3))
            if(this.PolyTopBarMap.has(1))
            {
                let attribute = this.PolyTopBarMap.get(1).getComponent(Attribute)
                attribute.SetTimerTickLocation(1)
            }
        }
        if(this.PolyTopBarMap.has(4))
        {
            this.PolyTopBarMap.set(2,this.PolyTopBarMap.get(4))
            if(this.PolyTopBarMap.has(2))
            {
                let attribute = this.PolyTopBarMap.get(2).getComponent(Attribute)
                attribute.SetTimerTickLocation(2)
            }
        }

        for(let index:number = 3;index < 5;index++)
        {
            let result: [Color, number] = Lobby.instance().RendomPoly();
            if(Lobby.PolyTopBarOut)
            {
                PolygonalManager.instance().SpawnPloy(index,Lobby.PolyTopBarOut,result[1],result[0],true);
            }
        }
    }

    CreateCollsionParticle(CreateLocation:Vec2)
    {
        if(this.CollsionParticle)
        {
            const Particle = instantiate(this.CollsionParticle);
            if(Particle)
            {
                let scene = director.getScene();
                if(scene)
                {
                    var child = scene.getChildByName("UI");

                    if(child)
                    {
                        child.addChild(Particle);
                        Particle.setPosition(CreateLocation.x,CreateLocation.y,0);
                    }else
                    {
                        console.log("UI节点没找到");
                    }
                }else
                {
                    console.log("scene节点没找到");
                }
            } else
            {
                console.log("LocalPolygonal节点没找到");
            } 
        }else
        {
            console.warn("生成预制体没找到")
        }
    }
}


