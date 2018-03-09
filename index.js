window.onload = function() {
	var hName = document.getElementById("name");
	var hGreeting = document.getElementById("greeting");
	hName.addEventListener("keyup", function() {
		var name = hName.value;
		hGreeting.innerHTML = "Hello " + name;
	});
};