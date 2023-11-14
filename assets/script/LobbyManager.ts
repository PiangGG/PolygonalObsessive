import { _decorator, Button, Component ,EventHandler , Node , Event,Color,Prefab} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lobby')
export class Lobby extends Component {

   
    @property(Color)
    public colors:Color[] = [];

    @property(Prefab)
    public Polygonals: Prefab[] = [];

    private static _instance: Lobby;

    public static instance(){
        if(!this._instance){
            this._instance = new Lobby();
        }
        return this._instance;
    }
    protected onEnable(): void 
    {
       
    }
    protected onLoad(): void 
    {
        console.log("LobbyManager onLoad");
        this.colors.push(new Color(255, 0, 0)); // 红色
        this.colors.push(new Color(0, 255, 0)); // 绿色
        this.colors.push(new Color(0, 0, 255)); // 蓝色
    }

    start() 
    {
        // let color_R:Color = new Color(255,0,0,255)
        // let color_G:Color = new Color(0,255,0,255)
        // let color_B:Color = new Color(0,0,255,255)
        // this.colors.push(color_R);
        // this.colors.push(color_G);
        // this.colors.push(color_B);
        this.colors.forEach((color, index) => {
            console.log(`Color ${index + 1}: R=${color.r}, G=${color.g}, B=${color.b}, A=${color.a}`);
        });
    }

    update(deltaTime: number) {
        
    }

    StartGamecallback(event: Event, customEventData: string) 
    {    
        console.log(customEventData);
    }

    protected onDestroy(): void 
    {
        
    }

    public RendomPoly():[Color,Prefab]
    {
        this.colors.forEach((color, index) => {
            console.log(`Color ${index + 1}: R=${color.r}, G=${color.g}, B=${color.b}, A=${color.a}`);
        });
        
        console.log("随机基础多边形和颜色");

        console.log(this.colors.length);
        console.log(this.Polygonals.length);

        let  randomColor:Color = null;
        if(this.colors)
        {
            let index = Math.random() * this.colors.length;
            console.log("颜色索引:"+index);
            if(this.colors[0])
            {
                randomColor = this.colors[0];
                console.log("设置随机颜色");
            }
            else
            {
                console.log("设置随机颜色失败");
            }
        }

        let  randomPrefab:Prefab = null;
        if(this.Polygonals)
        {
            let index = Math.random() * length
            console.log("预制体索引:"+index);
            if(this.Polygonals[0])
            {
                randomPrefab = this.Polygonals[0];
                console.log("设置随机预制体");
            }
            else
            {
                console.log("设置随机预制体失败");
            }
        }
        //console.log("随机基础多边形"+randomPrefab.toString()+"和颜色"+randomColor.toString());
        return [randomColor, randomPrefab];
    }
}


