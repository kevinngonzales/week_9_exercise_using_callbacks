function prepareIngredients(callback) {
    setTimeout(() => {
      callback("Ingredients are prepared.");
    }, 2000); // Simulate a 2-second delay
  }
  
  function makeSandwich() {
    prepareIngredients((message1) => {
      console.log(message1);
    });
    assembleSandwich((message2) => {
      console.log(message2);
    });
    serveSandwich((message3) => {
      console.log(message3);
    });
  }
  
  function assembleSandwich(callback) {
    setTimeout(() => {
      callback("Sandwich is assembled.");
    }, 1500);
  }
  
  function serveSandwich(callback) {
    setTimeout(() => {
      callback("Sandwich is served.");
    }, 1000);
  }
  
  makeSandwich();