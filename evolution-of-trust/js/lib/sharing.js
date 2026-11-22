window.addEventListener("load",function(){

	// JonGem: the play frame cannot open Facebook, Twitter or mail, so the share links are left out.
	var sharingDOM = document.body.querySelector("sharing");
	if(sharingDOM) sharingDOM.parentNode.removeChild(sharingDOM);

});