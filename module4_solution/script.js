
(function () {

	names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (name in names) {

    	Initial_letter = names[name].charAt(0).toLowerCase();

    	if (Initial_letter == 'j') {

          byeSpeaker.speak(names[name]);} 

        else {

    	  helloSpeaker.speak(names[name]);
  }
}

})();
