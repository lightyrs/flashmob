$("iframe.youtube-player").each(function(){
    var url_fragment = $(this).attr("src").split("?");
    if (url_fragment[1] == undefined) {
        var new_url = $(this).attr("src") + "?wmode=Opaque"
    } else {
        var new_url = $(this).attr("src") + "&wmode=Opaque"   
    }
    $(this).attr("src", new_url);
});