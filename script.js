const gear = document.querySelector("#gear");
const gearbox = document.querySelector("#gearbox");
var deg = 0;
var deg2 = 0;
window.addEventListener("wheel", function(e) {
    if (e.deltaY < 0) {
        if (deg2 > -60) {
            deg2 = deg2 - 10;
        }
        deg = deg - 10;
        gear.style.transform = "rotate(" + deg + "deg)";
    } else {
        if (deg2 < 60) {
            deg2 = deg2 + 10;
        }
        deg = deg + 10;
        gear.style.transform = "rotate(" + deg + "deg)";
    }


    if (deg2 > 0) {
        document.documentElement.style.setProperty("--color-bg", "#222");
        document.documentElement.style.setProperty("--color-gear", "Khaki");
    } else {
        document.documentElement.style.setProperty("--color-bg", "Khaki");
        document.documentElement.style.setProperty("--color-gear", "#222");
    }
});

gearbox.addEventListener("click", function() {
    if (deg2 < 50) {
        deg2 = 50;
        document.documentElement.style.setProperty("--color-bg", "#222");
        document.documentElement.style.setProperty("--color-gear", "Khaki");
    } else {
        deg2 = -50;
        document.documentElement.style.setProperty("--color-bg", "Khaki");
        document.documentElement.style.setProperty("--color-gear", "#222");
    }
});