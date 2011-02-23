window.fix_wmode2transparent_swf = function () {
	if(typeof (jQuery) == "undefined") {
		window.setTimeout('window.fix_wmode2transparent_swf()', 100);
		return;
	}
	if(window.noConflict){
		jQuery.noConflict();
	}
	jQuery("embed:visible").not(".sIFR-flash").each(function(i) {
		var elClone = this.cloneNode(true);
		if (jQuery(elClone).attr("wmode") == null || jQuery(elClone).attr("wmode") == "window" || jQuery(elClone).attr("wmode") == "direct") {
		  jQuery(elClone).attr("wmode", "transparent");  
		}
		jQuery(this).before(elClone);
		jQuery(this).remove();
	});	
  jQuery("object:visible").not("#HeadlessAdManager").each(function() { 
    var elClone = this.cloneNode(true);
    if (jQuery(elClone).find("param[name=wmode]").attr("value") == null){
      var param = jQuery("<param name='wmode' value='transparent'></param>");
      param.appendTo(elClone);
    } else if (jQuery(elClone).find("param[name=wmode]").attr("value") == "window" || jQuery(elClone).find("param[name=wmode]").attr("value") == "direct") {
      jQuery(elClone).find("param[name=wmode]").attr("value", "transparent");
    }
  	jQuery(this).before(elClone);
  	jQuery(this).remove();
  });
  jQuery('iframe[src*="youtube"]').each(function(){
      var url_fragment = jQuery(this).attr("src").split("?");
      if (url_fragment[1] == undefined) {
          var new_url = jQuery(this).attr("src") + "?wmode=Opaque"
      } else {
          var new_url = jQuery(this).attr("src") + "&wmode=Opaque"   
      }
      jQuery(this).attr("src", new_url);
  });
}