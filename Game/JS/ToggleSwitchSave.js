var settingItems = ["TouchMode","BlurMode"];
for (let i = 0; i < settingItems.length; i++) {
    if (localStorage.getItem(settingItems[i]) == "true") {
        document.querySelector("#settingBox").querySelector(".main").querySelector("#" + settingItems[i]).querySelector(".toggle").querySelector("div").className = "toggleSwitchOn";
    }
}

if (localStorage.getItem("BlurMode") == "true") {
    document.getElementById("BlurCSS").setAttribute("href","MoreTheme/Blur.css");
}