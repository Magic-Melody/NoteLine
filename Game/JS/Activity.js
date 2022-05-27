var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var day = month + "-" + date;
switch (day) {
    case "4-23":
        console.log("HelloWorld!");
        document.getElementById("theme").setAttribute("href","ActivityTheme/CaiXin_Brithday.css");
        break;
    case "6-18":
        document.getElementById("theme").setAttribute("href","ActivityTheme/Melody_Brithday.css");
        break;
    case "7-13":
        document.getElementById("theme").setAttribute("href","ActivityTheme/CaiXin_Brithday.css");
        break;
    // case "9-3":
    //     console.log("平淡的一天，却是 快乐jv君 的生日!");
    //     break;
    case "5-8":
        document.querySelector("#thanks").querySelector("div").innerHTML = "<h1>“妈妈，母亲节快乐”<h1>";
        break;
    case "4-1":
        document.querySelector("body").style.transform = "rotateX(180deg)";
        break;
}
function rotate() {
    document.querySelector("body").style.transform = "rotateX(180deg)";
    return "请不要倒着读".split("").reverse().join("");
}