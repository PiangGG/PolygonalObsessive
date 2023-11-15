import { _decorator, Button, Component ,EventHandler , Node , Event,Color,Prefab} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Lobby')
export class Lobby extends Component {

   
    @property(Color)
    public color_r = null;
    @property(Color)
    public color_g= null;
    @property(Color)
    public color_b = null;
    public static colors:Color[] = [];

    @property(Prefab)
    public Prefab_1 : Prefab = null; 
    @property(Prefab)
    public Prefab_2 : Prefab = null; 
    @property(Prefab)
    public static Polygonals: Prefab[] = [];

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
        Lobby.colors.push(this.color_r); // 红色
        Lobby.colors.push(this.color_g); // 绿色
        Lobby.colors.push(this.color_b); // 蓝色

        Lobby.Polygonals.push(this.Prefab_1);
        Lobby.Polygonals.push(this.Prefab_2);

    }

    start() 
    {
        // let color_R:Color = new Color(255,0,0,255)
        // let color_G:Color = new Color(0,255,0,255)
        // let color_B:Color = new Color(0,0,255,255)
        // this.colors.push(color_R);
        // this.colors.push(color_G);
        // this.colors.push(color_B);
        Lobby.colors.forEach((color, index) => {
            console.log(`Color ${index + 1}: R=${color.r}, G=${color.g}, B=${color.b}, A=${color.a}`);
        });
        console.log(Lobby.colors.length);
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
        // Lobby.colors.forEach((color, index) => {
        //     console.log(`Color ${index + 1}: R=${color.r}, G=${color.g}, B=${color.b}, A=${color.a}`);
        // });
        
        console.log("随机基础多边形和颜色");

        console.log(Lobby.colors.length);
        console.log(Lobby.Polygonals.length);

        let  randomColor:Color = null;
        if(Lobby.colors)
        {
            let index = Math.floor(Math.random() * Lobby.colors.length);
            console.log("颜色索引:"+index);
            if(Lobby.colors[index])
            {
                randomColor = Lobby.colors[index];
                console.log("设置随机颜色");
            }
            else
            {
                console.log("设置随机颜色失败");
            }
        }

        let  randomPrefab:Prefab = null;
        if(Lobby.Polygonals)
        {
            let index = Math.floor(Math.random() * Lobby.Polygonals.length);
            console.log("预制体索引:"+index);
            if(Lobby.Polygonals[index])
            {
                randomPrefab = Lobby.Polygonals[index];
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


