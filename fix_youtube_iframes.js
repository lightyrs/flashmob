jQuery('iframe[src*="youtube"]').each(function(){
  var url_fragment = jQuery(this).attr("src").split("?");
  if (url_fragment[1] == undefined) {
    var new_url = jQuery(this).attr("src") + "?wmode=Opaque"
  } else {
    var new_url = jQuery(this).attr("src") + "&wmode=Opaque"   
  }
  jQuery(this).attr("src", new_url);
});