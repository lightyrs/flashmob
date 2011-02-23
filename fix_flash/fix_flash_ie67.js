window.fix_wmode2transparent_swf = function () {
  
	jQuery("embed:visible").not(".sIFR-flash").each(function(i) {
		var elClone = this.cloneNode(true);
		if (jQuery(elClone).attr("wmode") == null || jQuery(elClone).attr("wmode") == "window" || jQuery(elClone).attr("wmode") == "direct") {
		  jQuery(elClone).attr("wmode", "transparent");  
		}
		jQuery(this).before(elClone);
		jQuery(this).remove();
	});
  // loop through every object tag on the site
  var objects = $("object:visible").not("#HeadlessAdManager");
  for(i=0; i<objects.length; i++) {
      object = objects[i];
      var new_object;
      // object is an IE specific tag so we can use outerHTML here
      if(object.outerHTML) {
          var html = object.outerHTML;
          // replace an existing wmode parameter
          if(html.match(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")[a-zA-Z]+('|")\s*\/?\>/i))
              new_object = html.replace(/<param\s+name\s*=\s*('|")wmode('|")\s+value\s*=\s*('|")window('|")\s*\/?\>/i,"<param name='wmode' value='transparent' />");
          // add a new wmode parameter
          else 
              new_object = html.replace(/<\/object\>/i,"<param name='wmode' value='transparent' />\n</object>");
          // loop through each of the param tags
          var children = object.childNodes;
          for(j=0; j<children.length; j++) {
              if(children[j].getAttribute('name').match(/flashvars/i)) {
                  new_object = new_object.replace(/<param\s+name\s*=\s*('|")flashvars('|")\s+value\s*=\s*('|")[^'"]*('|")\s*\/?\>/i,"<param name='flashvars' value='"+children[j].getAttribute('value')+"' />");
              }
          }
          // replace the old embed object with the fixed versiony
          object.insertAdjacentHTML('beforeBegin',new_object);
          object.parentNode.removeChild(object);
      }
  }
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