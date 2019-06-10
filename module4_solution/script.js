
(function () {

	names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

	for (name in names) {

    	Initial_letter = names[name].charAt(0).toLowerCase();

    	if (Initial_letter == 'j') {

          goodbye.speak(names[name]);} 

        else {

    	  hello.speak(names[name]);
  }
}

})();
