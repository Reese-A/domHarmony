/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

// 1. In the nav element, target the span element with the id of "count" and change the number from 0 to 8.

var myElement = document.getElementById("count");
myElement.innerHTML = 8;

// 2. Target the div with the id of 'age' and change the contents to: "21 year old vibrant stud".

var ageElement = document.getElementById("age");
ageElement.innerHTML = "21 year old vibrant stud.";

// 3. Target the span element with the id of "distance" and change the number from 1000 to 168.

var distanceElement = document.getElementById("distance");
distanceElement.innerHTML = 168;

// 4. Create a paragraph element with the id of "pro2". In this paragraph, add the following content: "My main objective is to find a Mrs. McDonald." Append this element inside of the paragraph element with the id of "profile".

var newElement = document.createElement('p');
newElement.id = "pro2";
newElement.innerHTML = "My main objective is to find a Mrs. McDonald.";
profile.appendChild(newElement);

// 5. Create a span element of the id of "mail" and give it a content of 11. Append this element into the "Messages" li element.
var menuElement = document.getElementsByClassName('menu');

var spanElem = document.createElement('span');
spanElem.id = 'mail';
spanElem.innerHTML = 11;
menuElement[2].appendChild(spanElem);


