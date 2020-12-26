function uSet(a, b) {
    document.getElementById(a).innerHTML = b
}
let pageLoc = new URL(window.location.href)
const uint_regex = RegExp('^[0-9]{1,}$');
let from = pageLoc.searchParams.get("from");
const to = pageLoc.searchParams.get("to");
let time = pageLoc.searchParams.get("time");
if (!uint_regex.test(time)) { time = 5 }
uSet("countDowntime", time + "s ")
let countDownTime = time
function intervalRun() {
    uSet("countDowntime", countDownTime + "s ")
    if (countDownTime < 1) {
        clearInterval(countInterval);
        uSet("countDowntime", "0")
        window.location.href = to
        document.getElementById("link_div").click();
    }
    countDownTime -= 1;
}
intervalRun()
var countInterval = setInterval(function () {
   intervalRun()
}, 1000);
if (to != null && to != undefined) {
    let to_url
    try{
        to_url = new URL(decodeURIComponent(to))
    } catch {
        uSet("url_scheme", "Error: url cannot parsed.")
        uSet("countDowntime", "∞ ")
        clearInterval(countInterval);
    }
    
    if (to_url.protocol == "https:") {
        uSet("url_scheme_https", to_url.protocol + "//")
    } else {
        uSet("url_scheme", to_url.protocol + "//")
    }
    uSet("url_host", to_url.host)
    uSet("url_pathname", to_url.pathname)
    uSet("url_pathname", to_url.pathname)
    uSet("url_search", to_url.search)
    uSet("url_hash", to_url.hash)
} else {
    uSet("url_scheme", "Error: Nothing given to redirect.")
    uSet("countDowntime", "∞ ")
    clearInterval(countInterval);
}