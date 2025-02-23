
function thanks() {
    alert("Thank you for submitting the contact form! We'll be in touch shortly.")
}

/*
 Used with onclick on the submit button in the contact form...this will display a message when they submit the form/click the button.
*/



let tShirt = 20
let hoodie = 30
let hat = 15
let backpack = 20

let customerOrder = [tShirt, hoodie, hat, backpack]

function getOrderPrice() {
    return customerOrder.reduce ((total, price) => total + price, 0);
}

console.log(`Total Price = $${getOrderPrice()}`);

/*
 This is intended to display the cost of a customers order. So I set variable for all the different items in this customers order. Then I had them all added up using the reduce function.
*/



function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }

  console.log(validateEmail("test@example.com")); // true
  console.log(validateEmail("text2@examplecom")); // false

/*
 This function validates whether an email contains both "." and "@". If it contains both, it returns as "true". If it contains neither or only one, it returns "false".
*/

let age = 26

if (age >= 18) {
    console.log("Welcome to District 142!");
} else {
    console.log("You must be 18 or older to attend any events at District 142.")
}

/*
This function checks the customers age. If they are 18 and up it displays a message. If not, it displays a different message.
*/