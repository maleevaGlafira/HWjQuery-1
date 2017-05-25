$( document ).ready(function() {

    $("#showTextButton").click(function() {
        if ($("#showText").is(':hidden') ){
            $("#showText").show(750);
            $(this).html("Hide text");
        }else{

            $("#showText").hide(750);
            $(this).html("Show text");
        }

    })

    $("#showWindow").click(function () {
        $("#parent-window").slideDown("slow");
        $("#window").slideDown("slow");
        $("#parent-window").css("display","flex");
    })

    $("#window #exit").click(function(){
        $("#window").slideUp( "slow" );
        $("#parent-window").slideUp( "slow" );

    })
});