var button = document.getElementById('button').onclick = showDate;

function showDate() {
    document.getElementById('info').innerHTML = Date();
}