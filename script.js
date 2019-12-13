var amountCharacters = 0

function prompter (){


     amountCharacters = prompt('How many characters would you like your password to contain?')

    
    if (amountCharacters == null || amountCharacters == '') {
        alert('User has cancelled password generation')
        prompter()

    } else if (amountCharacters < 8) {
        alert('Password length must be greater than 8 characters')
        prompter()

    } else if (amountCharacters > 128) {
        alert('Password length must be less than 129 characters')
        prompter()
    }
}

prompter()

var specialCharArray = ['!' ,' ', '"', '#', '$', '%','@','(','[',']','{','}']
var numericCharArray = [ '1','2','3','4','5','6','7','8','9','0']
var lowerCharArray = ['a','b','c','d','e','f','g','h','i','j','k']
var upperCharArray = ['A','B','C','D','E','F','G','H','I','J','K']


var arrayOfArrays = []

var specialCharacters = confirm('Click OK to include special characters');
var numericCharacters = confirm ('Click OK to include numeric characters');
var lowerCharacters = confirm ('Click OK to include lowercase characters');
var upperCharacters = confirm ('Click OK to include uppercase characters');



if (specialCharacters = true) {
    arrayOfArrays.push(specialCharArray);
}
if (numericCharacters = true) {
    arrayOfArrays.push(numericCharArray);
}
if (lowerCharacters = true) {
    arrayOfArrays.push(lowerCharArray);
}
if (upperCharacters = true) {
    arrayOfArrays.push(upperCharArray);
}

var rng1 = Math.floor((Math.random()) * arrayOfArrays.length)

var rng2 = Math.floor(Math.random()* arrayOfArrays[rng1].length) 


var copyButton = document.getElementById('pwCopier');
var generateButton = document.getElementById('pwGenerator');
var passwordText = document.getElementById('exampleFormControlTextarea1');



copyButton.onclick = function copier() {
    passwordText.select('');
    document.execCommand('copy');
    alert ("The following password is copied to your clipboard: " + passwordText.value);
}
generateButton.onclick = function (){
    var password = ""
    for (var i = 0; i < amountCharacters - 1; i++) {
    
        var rng1 = Math.floor((Math.random()) * arrayOfArrays.length)
    
        var rng2 = Math.floor(Math.random()* arrayOfArrays[rng1].length) 
    
        password = password + arrayOfArrays[rng1][rng2]
    
        
    }
    
    
    passwordText.textContent = password
    
}
