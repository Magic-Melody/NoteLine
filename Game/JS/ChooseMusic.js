var headClickTime = 0;
document.querySelector("#showMusic").querySelector("h1").onclick = () => {
    headClickTime++;
    if (headClickTime == 5) {
        headClickTime = 0;
        document.querySelector("#showMusic").classList.remove("firstShow");
        document.querySelector("#showMusic").classList.remove("show");
        document.querySelector("#showMusic").classList.add("close");
        document.querySelector("#thanks").classList.remove("close");
        document.querySelector("#thanks").classList.add("show");
    }
}
function closeThanks() {
    document.querySelector("#thanks").className = "thanksClose";
}


var songBox = document.querySelector(".songBox");

// 在这里加入选歌脚本
songBox.querySelector("#song1").onclick = () => {
    document.querySelector("#songTheme").setAttribute("href","");
    noteData = JSON.parse(localStorage.getItem("song1Data"));
    closeTheMusicWindow();
    musicPlay.src = "Song/song1.mp3";
}

songBox.querySelector("#song2").onclick = () => {
    noteData = JSON.parse(localStorage.getItem("song2Data"));
    closeTheMusicWindow();
    musicPlay.src = "Song/song2.mp3";
}

songBox.querySelector("#song3").onclick = () => {
    noteData = JSON.parse(localStorage.getItem("song3Data"));
    closeTheMusicWindow();
    musicPlay.src = "Song/song3.mp3";
}

songBox.querySelector("#song4").onclick = () => {
    document.querySelector("#songTheme").setAttribute("href","SongTheme/RevoltTheme.css");
    noteData = JSON.parse(localStorage.getItem("song4Data"));
    closeTheMusicWindow();
    musicPlay.src = "Song/song4.mp3";
}

songBox.querySelector("#sp1").onclick = () => {
    document.querySelector("#songTheme").setAttribute("href","SongTheme/SP/Genshin_Impact.css");
    noteData = JSON.parse(localStorage.getItem("sp1Data"));
    closeTheMusicWindow();
    musicPlay.src = "Song/sp1.mp3";
}



var clickTime = 0;
function clearData() {
    clickTime++;
    if (clickTime == 5) {
        alert("清除成功");
        localStorage.clear();
        clickTime = 0;
    }
}
function closeTheMusicWindow() {
    allClose();
    musicPlay.load();
    startBtn.click();
    ComboList[ComboList.length] = combo;
    if (musicPlay.src != "") {
        combo = 0;
        time = [0,0,0,0];
        nowTime = [0,0,0,0];
        ComboList = [];
        score = 0;
        musicPlay.load();
    }
}