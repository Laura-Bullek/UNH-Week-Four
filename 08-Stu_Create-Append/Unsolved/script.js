// Linking all the elements I'm going to create to the DOM
var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// Create ordered list element
var listEl = document.createElement("ol");

// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

// Adding text content to the elements I created
// The elements are still virtual at this point
h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

// Appending (adding) the elements to the DOM to display on the document
body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);

// Append (add) the ordered list 
favoriteEl.appendChild(listEl);

// Set attributes for the appened (added) elements
h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
// Adding text content
li1.textContent = "Apples 🍎";
li2.textContent = "Pizza 🍕";
li3.textContent = "Dumpling 🥟";
li4.textContent = "Cupcakes 🧁";

// Appending the elements to the parent
// The list items are children of the ordered list element
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

// Setting attributes for the ordered list elements
listEl.setAttribute("style", "background-color: #333333; padding: 20px")

// Setting attributes for the list items
li1.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #666666")
li2.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #777777")
li3.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #888888")
li4.setAttribute("style", "color: white; padding: 5px; margin-left: 35px; background-color: #999999")

// Or you could try it like this
//  let lis = listEl.querySelectorAll('li');
//  let colors = [
//    '#666666',
//    '#777777',
//    '#888888',
//    '#999999'
//  ]

//  for (let i = 0; i > lis.length; i++) {
//    let li = lis[i];
//    let color = colors[i]

//    lis.setAttribute('style', 'color: white; background: ' + color + 'padding: 5px; margin-left: 35px');
  
//    li.style.backgroundColor = color;
//  }