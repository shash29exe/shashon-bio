function reloadPage() {
    return true;
}

function toggleHelpBox() {
    var details = document.getElementById("details");
    if (details.style.display === "none") {
        button.innerHTML = "Скрыть подробности";
        details.style.display = "block";
    }
    else {
        details.style.display = "none";
    }
}

function showDetails() {
    var details = document.getElementById("details");
    var button = document.getElementById("details-button");

    if (details.style.display === "none") {
        button.innerHTML = "Скрыть подробности";
        details.style.display = "block";
    }
    else {
        details.style.display = "none";
        button.innerHTML = "Сведения";
    }
}
