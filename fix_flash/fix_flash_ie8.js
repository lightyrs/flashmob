window.fix_wmode2transparent_swf = function () {
	if(typeof (jQuery) == "undefined") {
		window.setTimeout('window.fix_wmode2transparent_swf()', 200);
		return;
	}
	if(window.noConflict)jQuery.noConflict();
	// For embed
	jQuery("embed:visible").not(".sIFR-flash").each(function(i) {
		var elClone = this.cloneNode(true);
		elClone.setAttribute("WMode", "Transparent");
		jQuery(this).before(elClone);
		jQuery(this).remove();
	});	
	// For object and/or embed into objects
	jQuery("object:visible").not("#HeadlessAdManager").each(function (i, v) {
	var elEmbed = jQuery(this).children("embed:visible");
	if(typeof (elEmbed.get(0)) != "undefined") {
		if(typeof (elEmbed.get(0).outerHTML) != "undefined") {
			elEmbed.attr("wmode", "transparent");
			jQuery(this.outerHTML).insertAfter(this);
			jQuery(this).remove();
		}
		return true;
	}
	var algo = this.attributes;
	var str_tag = '<OBJECT ';
	for (var i=0; i < algo.length; i++) str_tag += algo[i].name + '="' + algo[i].value + '" ';	
	str_tag += '>';
	var flag = false;
	jQuery(this).children().each(function (elem) {
		if(this.nodeName == "PARAM") {
			if (this.name == "wmode") {
				flag=true;
				str_tag += '<PARAM NAME="' + this.name + '" VALUE="transparent">';		
			}
			else  str_tag += '<PARAM NAME="' + this.name + '" VALUE="' + this.value + '">';
		}
	});
	if(!flag)
		str_tag += '<PARAM NAME="wmode" VALUE="transparent">';		
	str_tag += '</OBJECT>';
	jQuery(str_tag).insertAfter(this);
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
}();