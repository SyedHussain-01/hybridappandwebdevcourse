var msec = 0
var sec = 0
var min = 0
var millisecond = document.getElementById('msec')
var second = document.getElementById('sec')
var minute = document.getElementById('min')
var begin;
function add() {
    msec++
    millisecond.innerHTML = msec
    if (msec >= 100) {
        sec++
        second.innerHTML = sec
        msec = 0
    } else if (sec >= 60) {
        min++
        minute.innerHTML = min
        sec = 0

    }


}

function start() {
    begin = setInterval(add, 10)
    document.getElementById('strt').disabled = true
}

function stopp() {
    clearInterval(begin)
    document.getElementById('strt').disabled = false
}

function reset() {
    min = 0
    sec = 0
    msec = 0
    second.innerHTML = sec
    millisecond.innerHTML = msec
    minute.innerHTML = min
    clearInterval(begin)
    document.getElementById("strt").disabled = false
}

function theme(code) {

    document.getElementById('bodycol').style.backgroundImage = code;

}

















