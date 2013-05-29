function showValue(url){
	var frame = document.getElementById("mainInfoFrame");
	document.getElementById('info').style.display = 'none';
	frame.src = 'http://en.m.wikipedia.org/wiki/'+url;
}