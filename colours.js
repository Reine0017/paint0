var colours=['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(var i=0, n=colours.length;i<n;i++){
	var swatch=document.createElement('div');
	swatch.className='swatch';
	swatch.style.backgroundColor=colours[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colours').appendChild(swatch);
}

function setColour(colour){
	context.fillStyle=colour;
	context.strokeStyle=colour;
	var active=document.getElementsByClassName('active')[0];
	if(active){
		active.className="swatch";
	}
}

function setSwatch(e){
	//identify swatch
	var swatch=e.target;
	//set color
	setColour(swatch.style.backgroundColor);
	//give active class
	swatch.className+=' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});