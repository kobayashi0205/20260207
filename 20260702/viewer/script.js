$(function(){
    $("a").click(function(){
        $("figure ima").attr("src",$(this).attr("href"));
        return false;
    });
});