let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox-logo.png') {
    myImage.setAttribute('src', 'images/firefox-logo2.jpg');
  } else {
    myImage.setAttribute('src', 'images/firefox-logo.png');
  }
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了，' + name + '!';
}

function setUserName() {
  let myName = prompt('请输入您的名字');
  localStorage.setItem('name', myName);
  setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName) {
  setUserName();
} else {
  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;