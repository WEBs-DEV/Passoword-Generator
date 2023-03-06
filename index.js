var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var specialChar = ".$#&@/^%";

var passOutput = document.getElementById('pass-output');
var passNum = document.getElementById('passNum');
var upper = document.getElementById('upperChar');
var lower = document.getElementById('lowerChar');
var num = document.getElementById('num');
var special = document.getElementById('specialChar');
var submit = document.getElementById('submit')
var password;

function generatePassword(password = "") {
    if (upper.checked) {
        password += upperChar[Math.floor(Math.random() * 26) + 0];
    }
    if (lower.checked) {
        password += lowerChar[Math.floor(Math.random() * 26) + 0];
    }
    if (special.checked) {
        password += specialChar[Math.floor(Math.random() * 6) + 0];
    }
    if (num.checked) {
        password += number[Math.floor(Math.random() * 10) + 0];
    }
    if (password.length < passNum.value) {
        return generatePassword(password);
    }
/*     console.log(password); */
    passOutput.innerText = password.substr(0,passNum.value);

}
generatePassword();
submit.addEventListener('click', function () {
    generatePassword();
})




