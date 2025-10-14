function hide_disclamer() {
    document.getElementById("disclamer").style.display = "none";
}

function ChangeCommand() {
    var command = document.getElementById("command");
    var ErrorScreen = document.getElementById("error");
    var video = document.getElementById("systemd-video");

    if (command.innerHTML == "sudo systemctl status apache2.service") {
        command.innerHTML = "sudo systemctl stop apache2.service";
    }
    else {
        video.pause();
        ErrorScreen.style.display = "block";
        document.title = "shashon-bio.shash29.ru"
        document.body.style.overflow = "hidden";

    }
}