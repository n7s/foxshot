// foxshot: a simple javascript template to snapshot webpages for testing
// to be used with the foxshot shellscript and the on-disk html/css/ttf assets of the target webpage.
var page = require('webpage').create();

// the target webpage
var file = "testpage.html"

// filename helpers
var timestamp = new Date().toISOString().replace('T', '-').replace(':', '-').substr(0, 16) 
var filename = "Firefox-snapshot" + '-' + timestamp 

page.open(file, function(status) {
         if (status == "success") {
	     console.log(" ")
	     console.log("Opening " + page.url + " (" + page.title + ") " + "for rendering and snapshotting...");
	     console.log(" ")
         }
         else {
             console.log("Sorry, the page could not be loaded. Make sur your file is named testpage.html");
         }
	page.paperSize = {
		format:"A4",
		orientation:"landscape",
		margin:{ left:"0.2cm", right:"0.2cm", top:"2cm", bottom:"0.2cm" },
		headerStr:{center:'Firefox-rendered snapshot (via slimerjs)       &U     &D' }};
	page.viewportSize = { width: 2280, height: 2024 };
	page.zoomFactor = 0.80;
	page.render(filename + '.pdf', {
			format:'pdf',
			onlyViewport:true
			});
	page.render(filename + '.png', {
			format:'png',
			onlyViewport:true
			});
	slimer.exit();
});
