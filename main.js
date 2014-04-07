var firstName=prompt("Enter first name here: ");
alert("Your first name is: " + firstName + "\n"
	 + "It is " + firstName.length + " characters long.\n"
	  + "The third character is " + firstName.charAt(2) + "\n"
	   + "Lowercase: " + firstName.toLowerCase() + "\n"
	    + "Uppercase: " + firstName.toUpperCase() + "\n"
	     + "Example: " + firstName + " is one of the most common names in the Western World.\n"
	      + "Subword: " + firstName.substring(1,4));