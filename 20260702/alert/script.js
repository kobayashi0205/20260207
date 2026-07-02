$(function() {
    $("#bg").hide();
    $("#click").click(function(){
        $("#bg").fadeIn(300);
    })
    $("#od").click(function(){
        $("#bg").fadeOut(300)
    })
});