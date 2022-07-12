// TODO：完善此函数 显示红色颜色的灯
function red() {
    // 页面加载3秒钟后显示红色颜色的灯，通过display属性设置灯的显示和隐藏
    document.getElementById("redlight").style.display = "inline-block";
    //设置灯的位置
    document.getElementById("defaultlight").style.display = "none";
    document.getElementById("greenlight").style.display = "none";


}

// TODO：完善此函数  显示绿色颜色的灯
function green() {
    //页面加载6秒钟后显示绿色颜色的灯
    document.getElementById("greenlight").style.display = "inline-block";
    document.getElementById("defaultlight").style.display = "none";

    document.getElementById("redlight").style.display = "none";


    
}
function defaultlight() {
    document.getElementById("defaultlight").style.display = "inline-block";
    document.getElementById("redlight").style.display = "none";
    document.getElementById("greenlight").style.display = "none";

}
// TODO：完善此函数
function trafficlights() {
    //页面加载3秒钟后显示红色颜色的灯,加载6秒钟后显示绿色颜色的灯,随后颜色不在变化
    setTimeout("red()", 3000);
    setTimeout("green()", 6000);

    //显示默认的灯，以后不在显示

    setTimeout("defaultlight()", 9000);


    
}

trafficlights();
