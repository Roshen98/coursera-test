(function (window) {

var byeSpeaker = {};

byeSpeaker.speak = function (name) {

  console.log("Good Bye " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);
