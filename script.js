var exp = "";
var display = document.getElementById("p");
var curr = "";

document.getElementById("1").addEventListener("click", () => {
  exp += "1";
  curr += "1";
  display.innerText = curr;
});
document.getElementById("2").addEventListener("click", () => {
  exp += "2";
  curr += "2";
  display.innerText = curr;
});
document.getElementById("3").addEventListener("click", () => {
  exp += "3";
  curr += "3";
  display.innerText = curr;
});
document.getElementById("4").addEventListener("click", () => {
  exp += "4";
  curr += "4";
  display.innerText = curr;
});
document.getElementById("5").addEventListener("click", () => {
  exp += "5";
  curr += "5";
  display.innerText = curr;
});
document.getElementById("6").addEventListener("click", () => {
  exp += "6";
  curr += "6";
  display.innerText = curr;
});
document.getElementById("7").addEventListener("click", () => {
  exp += "7";
  curr += "7";
  display.innerText = curr;
});
document.getElementById("8").addEventListener("click", () => {
  exp += "8";
  curr += "8";
  display.innerText = curr;
});
document.getElementById("9").addEventListener("click", () => {
  exp += "9";
  curr += "9";
  display.innerText = curr;
});
document.getElementById("0").addEventListener("click", () => {
  exp += "0";
  curr += "0";
  display.innerText = curr;
});
document.getElementById(".").addEventListener("click", () => {
  exp += ".";
  curr += ".";
  display.innerText = curr;
});
document.getElementById("plus").addEventListener("click", () => {
  curr = "";
  exp += "+";
  display.innerText = curr;
});
document.getElementById("-").addEventListener("click", () => {
  alert("brf");
  exp += "-";
  curr = "";
  display.innerText = curr;
});
document.getElementById("*").addEventListener("click", () => {
  exp += "*";
  curr = "";
  display.innerText = curr;
});
document.getElementById("/").addEventListener("click", () => {
  exp += "/";
  curr = "";
  display.innerText = curr;
});
document.getElementById("%").addEventListener("click", () => {
  exp += "%";
  curr = "";
  display.innerText = curr;
});
document.getElementById("ac").addEventListener("click", () => {
  exp = "";
  curr = "";
  display.innerText = curr;
});
document.getElementById("=").addEventListener("click", () => {
  var ans = eval(exp);
  display.innerText = ans;
  curr = ans;
  exp = ans;
});
