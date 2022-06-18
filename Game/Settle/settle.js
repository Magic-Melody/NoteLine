var wordsList = {
    S: ["看来你很擅长嘛", "考虑过加入我们的开发行列吗（滑稽）", "有时候文字也是可以点的", "在特殊的日子可能会有特殊的事情", "打的太好了！！", "你已经比我打的厉害了"],
    A: ["也许你离 S 也不远了", "你知道这个游戏有个隐藏的窗口吗？"],
}

function settle(data,num) {
    
    document.querySelector("#settle").className = "windowSP";
    
    var window = document.querySelector(".windowSP");
    window.querySelector(".combo").innerHTML = Math.max.apply(Math,data);
    var whole = eval(data.join("+"));
    var grade = "";
    var words = "你是怎么看到我的";
    if (whole / noteData.number > 0.95) {
        grade = "S";
        words = "干得漂亮"
    } else if (whole / noteData.number > 0.9) {
        grade = "A";
        words = "还不错"
    } else if (whole / noteData.number > 0.8) {
        grade = "B";
        words = "嗯嗯嗯";
    } else if (whole / noteData.number > 0.6) {
        grade = "C";
        words = "这只是个音乐播放器！";
    } else {
        grade = "D";
        words = "再努力一点";
    }
    if (whole == noteData.number) {
        words = "WOW!全连了耶！";

    } else if (whole == 0) {
        grade = "L";
        words = "认真点可以吗？"
    }
    window.querySelector(".grade").innerHTML = grade;
    window.querySelector(".num").innerHTML = ((whole / noteData.number) * 100).toFixed(2) + "%";
    window.querySelector(".score").innerHTML = num;
    window.querySelector(".words").innerHTML = words;

    document.querySelector(".windowSP").querySelector(".ok").addEventListener("click",function() {
        document.querySelector("#settle").style.opacity = "0";
        document.querySelector("#settle").style.transform = "scale(0.5,0.5)";
        document.querySelector("#settle").style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)";
        show("showMusic");
        setTimeout(function() {
            document.querySelector("#settle").className = "none";
            document.querySelector("#settle").setAttribute("style","");
        },1000);
    });

    
}
