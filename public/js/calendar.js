$(document).ready(function() {
    $('#dropdown-yes').click(function(event) {
        $('.dropbtn').text('Yes');
        $('.dropbtn').css("background-color", "#4f962e");

    });

    $('#dropdown-maybe').click(function(event) {
        $('.dropbtn').text('Maybe');
        $('.dropbtn').css("background-color", "#ffbe00");
        $('.dropbtn').css("color", "black");
    });

    $('#dropdown-no').click(function(event) {
        $('.dropbtn').text('No');
        $('.dropbtn').css("background-color", "#d15353");
    });
});