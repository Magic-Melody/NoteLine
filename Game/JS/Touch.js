TouchMode()

var cssTouchTheme = document.querySelector("#touchCSS");
function TouchMode() {
    if (localStorage.getItem("TouchMode") == "true") {
        document.getElementById("touchCSS").setAttribute("href","MoreTheme/Touch.css");
    }
}

if (TouchMode)
var touchPart = document.querySelectorAll(".touchPart")
// 触屏事件
// 第一轨道
touchPart[0].addEventListener('touchstart',function() {
    nowTime[0] = new Date().getTime();
    judgment[0].className = "btnOn";
    var audio2 = new Audio("audio/audio2.mp3");
    // audio2.play();
})
touchPart[0].addEventListener('touchend',function() {
    judgment[0].className = "judgment";
})

// 第二轨道
touchPart[1].addEventListener('touchstart',function() {
    nowTime[1] = new Date().getTime();
    judgment[1].className = "btnOn";
    var audio2 = new Audio("audio/audio2.mp3");
    // audio2.play();
})
touchPart[1].addEventListener('touchend',function() {
    judgment[1].className = "judgment";
})

// 第三轨道
touchPart[2].addEventListener('touchstart',function() {
    nowTime[2] = new Date().getTime();
    judgment[2].className = "btnOn";
    var audio2 = new Audio("audio/audio2.mp3");
    // audio2.play();
})
touchPart[2].addEventListener('touchend',function() {
    judgment[2].className = "judgment";
})

// 第四轨道
touchPart[3].addEventListener('touchstart',function() {
    nowTime[3] = new Date().getTime();
    judgment[3].className = "btnOn";
    var audio2 = new Audio("audio/audio2.mp3");
    // audio2.play();
})
touchPart[3].addEventListener('touchend',function() {
    judgment[3].className = "judgment";
})