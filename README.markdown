re-flash
=============
re-flash is a collection of 'flash-fixing' javascript files that can be used in various situations to force a given wmode on arbitrary flash files that you may or may not control.  It's intent is to prevent flash from appearing above elements with higher priority.

Inspiration
-------------
This collection is inspired by the work of many others before me, namely:

* [flash_heed.js](https://github.com/scribd/flash_heed)
* [Josh Fraser](http://www.onlineaspect.com/2009/08/13/javascript_to_fix_wmode_parameter)
* [Qindex](http://www.qindex.info/Q_get.php?g_clss=forum&g_prcss=thrd&g_tmplt=&g_brd=5&g_pg=1&g_thrd=98)
* [José Nobile](http://www.nobilesoft.com/Scripts/fix_wmode2transparent_swf.js)

Usage
-------------
The scripts in **fix_flash/** should all be included on the affected page and called like so:

`function fix_flash() {
  if($.browser.msie && (parseFloat($.browser.version.substr(0,1)) < 8)){
	$.getScript('http://bro1.sonymusicd2c.com/js/fix_flash_ie67.js', function(){
	    window.fix_wmode2transparent_swf();
	});
  } else if($.browser.msie && (parseFloat($.browser.version.substr(0,1)) == 8)){
	$.getScript('http://bro1.sonymusicd2c.com/js/fix_flash_ie8.js', function(){
	    window.fix_wmode2transparent_swf();
	});
  } else {
	$.getScript('http://bro1.sonymusicd2c.com/js/fix_flash.js', function(){
	    window.fix_wmode2transparent_swf();
	});
  }
}
window.onload = fix_flash;`

**fix_youtube_iframes.js** should be called with window.onload.

**These scripts require jQuery.**
