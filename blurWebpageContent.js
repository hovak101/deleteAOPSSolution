var solution = document.firstElementChild.innerHTML;

document.addEventListener("DOMContentLoaded", removeSolution); 

function removeContent (element) { 
	element.innerHTML = " "; 
}

function returnSolution () {
	document.firstElementChild.innerHTML = solution;  
}

function getFirstP () {
	return document.getElementById("Solution").parentElement.nextSibling;
}

function elementIsNotSeeAlso (current) {
	if (current.childElementCount > 0) {
		return current.firstElementChild.innerHTML != document.getElementById("See_Also").innerHTML;
	}
	else {
		return true;
	} 
}

function removeSolution () {
	console.log("Hello?");
	// start from solution header. 
	var current = getFirstP(); 
	// if next element is not see also header, remove content
	while (elementIsNotSeeAlso(current)) {
		removeContent(current); 
		current = current.nextSibling; 
	}
}

document.addEventListener(onclick, removeSolution); 
document.addEventListener(onClick, returnSolution); 
