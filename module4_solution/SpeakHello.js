(function (window) {

	var hello = {};

hello.speak = function (name) {

  console.log("Hello " + name);
  
}

window.hello = hello;

})(window);
