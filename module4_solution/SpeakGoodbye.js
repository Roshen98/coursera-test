(function (window) {

	var goodbye = {};

goodbye.speak = function (name) {

  console.log("Good Bye " + name);
}

window.goodbye = goodbye;

})(window);
