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

function GetRandomVideo() {
  var srcList = [ "-kL5wCViR6s", "u6qN-9JDm-A", "6Z9UAvoo8EA", "b_nJQX-uRo4", "m3vdXby_gxM", "ZeVLEMvwtMY",
	"_8GPTqWZeLA", "SOf7dJAl8-I", "KRE_cMnIBkw", "BY6nGUY3J3A", "kmQOIsTj-HE", "NWV2kWqEB54",
	"HEElHMVvxfc", "ouZf5SZQRfI", "8rdak8Pz_Mw", "BEARox4UwEk", "Urt2JPgrxUQ", ];
  var idx = Math.floor(Math.random() * 100 ) % srcList.length;
  return "http://www.youtube.com/embed/" + srcList[idx] + "?hd=1&vq=hd720";
}

function LoadContent() {
        var cc = document.getElementById("Content");
        var fs = window.location.href.split("?");
        var pg = ( fs.length < 2 ) ? "HomePage" : fs[1]; 
        pg += ".html";

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                        if (this.status == 200) {
				var htmlStr = this.responseText;
			        if (pg == "HomePage.html") 
				       htmlStr = htmlStr.replace("xxxyyy", GetRandomVideo());
                                cc.innerHTML = htmlStr;
			} else if (this.status == 404)
                                cc.innerHTML = "Page not found."
                }
        }
        xhttp.open("GET", pg, true);
        xhttp.send();
}



