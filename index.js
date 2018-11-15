// Here we target the header and replace
// its innerHtml and add a style to it.
let heading = document.querySelector("h1");
heading.innerHTML = "Fruits & Vegetables Corp";
heading.style.color = "red";

// We target the href of "Banana" to replace innerHtml and link
let listItem = document.querySelector("a[href='#bananas']");
listItem.href = "#vegetables";
listItem.innerHTML = "Vegetables";


// Creating varaibles for the different section
//  of the website that we will work with.
let contact = document.getElementById('contact');
let main = document.getElementById('main');
let about = document.getElementById('about');


//We create a header and a paragraph that will
//be appended into the about section
let hAbout = document.createElement("H1");
let hContact = document.createElement("H1");
let para = document.createElement("P");



//First we remove the contact inside the about section
//To then append a "Header" and a "Paragraph" in the about section.
about.innerHTML = "";
hAbout.innerHTML = "About";
para.innerHTML = "We're the best in fruits & vegetables";
about.appendChild(hAbout);
about.appendChild(para);

// The contact section is appending into the main because
// This will put it below the about section. How do we append in the start of an element?
main.appendChild(contact);

//Change the innerHTML of contact header and appending it above the paragraph
hContact.innerHTML = "Contact";
contact.insertBefore(hContact, contact.childNodes[0]);


// We select the Name and Email table datas and change their fontweight to bold and center the text
let tdOne = document.querySelector('td:first-child');
let tdTwo = document.querySelector('td:nth-child(2');

tdOne.style.fontWeight = "Bold";
tdOne.style.textAlign ="Center";

tdTwo.style.fontWeight = "Bold";
tdTwo.style.textAlign ="Center";


let head = document.querySelector('head');
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = 'main.css';
head.appendChild(link);
