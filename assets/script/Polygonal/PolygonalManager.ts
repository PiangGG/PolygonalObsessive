import { _decorator, Component, instantiate, Node, Prefab, Vec2 ,director, Color} from 'cc';

import { Attribute } from '../Polygonal/PolygonalAttribute';
const { ccclass, property } = _decorator;

@ccclass('PlolygonalManager')
export class PolygonalManager extends Component {

    private static _instance: PolygonalManager;

    @property(Node)
    World:Node = null;
    //PolygonalPool

    // @property(Prefab)
    // public Polygonal: Prefab = null;

    public static instance(){
        if(!this._instance){
            this._instance = new PolygonalManager();
        }
        return this._instance;
    }
z
    start() {

    }

    update(deltaTime: number) {
        
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


