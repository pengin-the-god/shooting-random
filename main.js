//audioの定義。
const audio1 = new Audio("ビームガン.mp3");
const audio2 = new Audio("拳銃.mp3");
const audio3 = new Audio("ショットガン.mp3");
const audio4 = new Audio("歓声と拍手1.mp3");

//クリアテキストを隠す処理。
document.querySelector(".clear").classList.add("close");
document.querySelector(".a1").classList.add("close");
document.querySelector(".a2").classList.add("close");

//ゲームを終了させるための変数numを定義。start,clearを定義
let num = 0;
let start = 0;
let clear = 0;

//スタートボタンを押した際の処理。
document.querySelector(".start-btn").addEventListener("click", () => {
    //カーソル変更の処理。
    document.querySelector("*").style.cursor = "crosshair"
    //スタート項目を隠す処理。
    document.querySelector(".start").classList.add("close");
    //.a1を出現させる処理。
    document.querySelector(".a1").classList.remove("close");

    return num++, start = Date.now();
});


//.a1をクリック際に.a2を出す処理
document.querySelector(".a1").addEventListener("click", () => {
    document.querySelector(".a1").classList.add("close");
    //射撃音の処理。
    audio1.load();
    audio1.play();
    //変数numが20に達した際にゲーム終了の処理
    if (num > 19) {
        document.querySelector(".clear").classList.remove("close")
        //クリアタイムを取得＆表示。
        clear = Date.now();
        const time = ((clear - start) / 1000).toFixed(2);
        document.querySelector(".clear-text span").textContent = time;
        //カーソル変更を戻す処理。
        document.querySelector("*").style.cursor = "auto"
        //クリア音声を流す。
        audio4.load();
        audio4.play();

    } else {


        //ターゲットの値をランダムで決める処理。
        const wid = Math.floor((Math.random() * 200) + 100);//辺の長さ。（100以上300未満）
        const hei = Math.floor((Math.random() * 500));//ブラウザのtopからターゲットまでの距離。（0以上500未満）
        const lef = Math.floor((Math.random() * 80) + 10);//ブラウザのleftからの距離。（％で表す）（10以上90未満）
        const col = Math.floor(Math.random() * 5)//ターゲットのカラーを決めるための数値を出力。（０から４）

        document.querySelector(".a2").style.height = `${wid}px`;//辺の長さ。
        document.querySelector(".a2").style.width = `${wid}px`;//辺の長さ。
        document.querySelector(".a2").style.top = `${hei}px`;//ブラウザのtopからの位置。
        document.querySelector(".a2").style.left = `${lef}%`//ブラウザのleftからの位置。

        //ターゲットのカラー設定。
        switch (col) {
            case 0:
                document.querySelector(".a2").style.background = "red"
                break;
            case 1:
                document.querySelector(".a2").style.background = "blue"
                break;
            case 2:
                document.querySelector(".a2").style.background = "green"
                break;
            case 3:
                document.querySelector(".a2").style.background = "yellow"
                break;
            case 4:
                document.querySelector(".a2").style.background = "pink"
                break;
        }

        document.querySelector(".a2").classList.remove("close");
        return num++;
    }
});

//.a2をクリック際に.a1を出す処理
document.querySelector(".a2").addEventListener("click", () => {
    document.querySelector(".a2").classList.add("close");
    //射撃音の処理。
    audio1.load();
    audio1.play();
    //変数numが20に達した際にゲーム終了の処理
    if (num > 19) {
        document.querySelector(".clear").classList.remove("close")
        //クリアタイムを取得＆表示。
        clear = Date.now();
        const time = ((clear - start) / 1000).toFixed(2);
        document.querySelector(".clear-text span").textContent = time;
        //カーソル変更を戻す処理。
        document.querySelector("*").style.cursor = "auto"
        //クリア音声を流す。
        audio4.load();
        audio4.play();

    } else {


        //ターゲットの値をランダムで決める処理。
        const wid = Math.floor((Math.random() * 200) + 100);//辺の長さ。（100以上300未満）
        const hei = Math.floor((Math.random() * 500));//ブラウザのtopからターゲットまでの距離。（0以上500未満）
        const lef = Math.floor((Math.random() * 80) + 10);//ブラウザのleftからの距離。（％で表す）（10以上90未満）
        const col = Math.floor(Math.random() * 5)//ターゲットのカラーを決めるための数値を出力。（０から４）

        document.querySelector(".a1").style.height = `${wid}px`;
        document.querySelector(".a1").style.width = `${wid}px`;
        document.querySelector(".a1").style.top = `${hei}px`;
        document.querySelector(".a1").style.left = `${lef}%`

        //ターゲットのカラー設定。
        switch (col) {
            case 0:
                document.querySelector(".a1").style.background = "red"
                break;
            case 1:
                document.querySelector(".a1").style.background = "blue"
                break;
            case 2:
                document.querySelector(".a1").style.background = "green"
                break;
            case 3:
                document.querySelector(".a1").style.background = "yellow"
                break;
            case 4:
                document.querySelector(".a1").style.background = "pink"
                break;
        }

        document.querySelector(".a1").classList.remove("close");
        return num++;
    }
});
