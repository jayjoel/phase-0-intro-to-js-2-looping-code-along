// Code your solutions in this file
// Function to create thank you cards
function writeCards(namesArray, eventName) {
    let thankYouMessages = [];
    for (let i = 0; i < namesArray.length; i++) {
      thankYouMessages.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // Function to count down from a given number
  function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
  
  // Testing writeCards function
  console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));
  
  // Testing countDown function
  countDown(10);
  