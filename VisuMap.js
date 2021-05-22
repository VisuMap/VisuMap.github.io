var TimeOut         	= 300;
var currentLayer	= null;
var currentitem		= null;
var currentLayerNum 	= 0;
var noClose		= 0;
var closeTimer		= null;

// Open Hidden Layer
function mopen(n)
{
	var l	= document.getElementById("menu"+n);
	var mm	= document.getElementById("mmenu"+n);
	
	if(l)
	{
		mcancelclosetime();
		l.style.visibility='visible';

		if(currentLayer && (currentLayerNum != n))
			currentLayer.style.visibility='hidden';

		currentLayer = l;
		currentitem = mm;
		currentLayerNum = n;			
	}
	else if(currentLayer)
	{
		currentLayer.style.visibility='hidden';
		currentLayerNum = 0;
		currentitem = null;
		currentLayer = null;
	}
}

function selectMenu(idx) {
    var mrow = document.getElementById("menurow").getElementsByTagName("LI");
    mrow[idx].getElementsByTagName("A")[0].style.color = "white";
}

// Turn On Close Timer
function mclosetime()
{
	closeTimer = window.setTimeout(mclose, TimeOut);
}

// Cancel Close Timer
function mcancelclosetime()
{
	if(closeTimer)
	{
		window.clearTimeout(closeTimer);
		closeTimer = null;
	}
}

// Close Showed Layer
function mclose()
{
	if(currentLayer && noClose!=1)
	{
		currentLayer.style.visibility='hidden';
		currentLayerNum = 0;
		currentLayer = null;
		currentitem = null;
	}
	else
	{
		noClose = 0;
	}

	currentLayer = null;
	currentitem = null;
}

document.onclick = mclose; 

function LoadContent() {
        var cc = document.getElementById("Content");
        var fs = window.location.href.split("?");
        var pg = ( fs.length < 2 ) ? "HomePage" : fs[1]; 
        pg += ".html";

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
	  if (this.readyState == 4) {
	    if (this.status == 200) {
	      cc.innerHTML = this.responseText;
		  var ss = document.getElementById("PageScript");
		  if ( ss != null)
		  	eval( ss.innerText )
		} else if (this.status == 404)
	      cc.innerHTML = "Page not found."
	  }
        }
        xhttp.open("GET", pg, true);
        xhttp.send();
}



