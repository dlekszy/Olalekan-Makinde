function switchCase(){
var sentence="maDam aYO Who Stays In oYo Was in a Bus to Lagos whEn Her Son Sold the rAceCar";
var str=sentence.split('');
for(var i=0; i<str.length; i++){
if(str[i]===str[i].toUpperCase()){
str[i]=str[i].toLowerCase();
}
else if(str[i]===str[i].toLowerCase()){
str[i]=str[i].toUpperCase();
}
}
var words=str.join("");

 var wordsplit=words.split(' ');
var upperCase=[]; var ing=[]; var lowereverse=[]; var palindrome=[];
var lowerCase=[];
for(j=0; j<wordsplit.length; j++){
if(wordsplit[j][0]===wordsplit[j][0].toUpperCase())
{upperCase.push(wordsplit[j]);
}
}
for(k=0; k<upperCase.length; k++){
lowerCase.push(upperCase[k].toLowerCase());
}
for(l=0; l<lowerCase.length; l++){
lowereverse.push(lowerCase[l].split('').reverse().join(""));
if(lowereverse[l]===lowerCase[l]){
palindrome.push(lowereverse[l]);
}
}
var myResult={
palindromes:palindrome,
uppercase:upperCase
};
return myResult;
}
