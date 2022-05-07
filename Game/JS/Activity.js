var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var day = month + "-" + date;
switch (day) {
    case "4-23":
        console.log("HelloWorld!");
        document.getElementById("theme").setAttribute("href","ActivityTheme/CaiXin_Brithday.css");
        break;
    case "6-18":
        document.getElementById("theme").setAttribute("href","ActivityTheme/SaltFish_Brithday.css");
        break;
    case "4-23":
        document.getElementById("theme").setAttribute("href","ActivityTheme/CaiXin_Brithday.css");
        break;
    case "9-3":
        console.log("平淡的一天，却是 快乐jv君 的生日!");
        break;
    case "5-8":
        document.querySelector("#thanks").querySelector("div").innerHTML = "<h1><br>向那个曾经照顾你的她<br>表示感谢<h1>";
        break;
}