const clickMe = () => {
    alert("If you can dream it, you can do it!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
});



