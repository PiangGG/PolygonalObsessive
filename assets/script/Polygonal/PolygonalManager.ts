import { _decorator, Component, instantiate, Node, Prefab, Vec2 ,director, Color} from 'cc';

import { Attribute } from '../Polygonal/PolygonalAttribute';
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

    SpawnPloy(slotIndex:number,PolyTopBar:Prefab,PolyNumber:number,color:Color)
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
                                LocalPolygonal.setPosition(slotIndex*128-10,530);
                                break;
                            // case 1:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            // case 2:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            // case 3:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            // case 4:
                            //     LocalPolygonal.setPosition(location.x,location.y);
                            //     break;
                            default:
                                LocalPolygonal.setPosition(slotIndex*128-10+5*slotIndex,530);
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
    
}


