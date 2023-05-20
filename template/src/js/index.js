
window.onload = function() {
	console.log("Page loaded");
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var href = links[i].getAttribute("href");
		if (href.endsWith(".html")) {
			links[i].setAttribute("href", href.slice(0, -5));
		}
	}
};
	
	// // Get the reaction buttons
	// const disappointedBtn = document.querySelector('[data-reaction-text="disappointed"]');
	// const neutralBtn = document.querySelector('[data-reaction-text="neutral"]');
	// const smileyBtn = document.querySelector('[data-reaction-text="smiley"]');

	// // Add click event listeners to the reaction buttons
	// disappointedBtn.addEventListener('click', function() {
	//   // Perform action when disappointed button is clicked
	//   console.log('Disappointed button clicked');
	// });

	// neutralBtn.addEventListener('click', function() {
	//   // Perform action when neutral button is clicked
	//   console.log('Neutral button clicked');
	// });

	// smileyBtn.addEventListener('click', function() {
	//   // Perform action when smiley button is clicked
	//   console.log('Smiley button clicked');
	// });

	// fetch('http://localhost:8082/reactions/counts')
	//   .then(response => response.json())
	//   .then(data => {
	// 	document.getElementById('disappointed-count').textContent = data.disappointed;
	//     document.getElementById('neutral-count').textContent = data.neutral;
	//     document.getElementById('smiley-count').textContent = data.smiley;
	//   })
	//   .catch(error => console.error(error));
