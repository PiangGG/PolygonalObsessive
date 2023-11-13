import { _decorator, Component, instantiate, Node, Prefab, Vec2 ,director} from 'cc';
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

    Spawn(location:Vec2,Polygonal:Prefab)
    {
        if(Polygonal)
        {
            const LocalPolygonal = instantiate(Polygonal);
            console.log("生成位置:x = "+location);

            if(LocalPolygonal)
            {
                let scene = director.getScene();
                if(scene)
                {
                    scene.addChild(LocalPolygonal);
                    LocalPolygonal.setPosition(location.x,1400,0);
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


