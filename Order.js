export class Order {
  constructor(sFrom) {
      this.OrderState = {
          WELCOMING: () => {
              let aReturn = [];
              this.stateCur = this.OrderState.PIZZA_TYPE;
              aReturn.push("Welcome to Domino SMS Chat Ordering.");
              aReturn.push("Would you like to order a pizza? (Yes/No)");
              return aReturn;
          },
          PIZZA_TYPE: (sInput) => {
              let aReturn = [];
              if (sInput.toLowerCase().startsWith('y')) {
                  this.stateCur = this.OrderState.PIZZA_SIZE;
                  aReturn.push("Wonderful! What type of pizza would you like?");
                  aReturn.push("Options: Pepperoni, Veggie");
              } else {
                  this.isDone = true;
                  aReturn.push("Thank you for visiting Domino's! Have a great day.");
              }
              return aReturn;
          },
          PIZZA_SIZE: (sInput) => {
              let aReturn = [];
              this.pizzaType = sInput.toLowerCase();
              this.stateCur = this.OrderState.TOPPINGS;
              aReturn.push(`You chose ${this.pizzaType} pizza.`);
              aReturn.push("What size would you like? (Small, Medium, Large)");
              return aReturn;
          },
          TOPPINGS: (sInput) => {
              let aReturn = [];
              this.pizzaSize = sInput.toLowerCase();
              this.stateCur = this.OrderState.UPSELL;
              aReturn.push(`You selected a ${this.pizzaSize} ${this.pizzaType} pizza.`);
              aReturn.push("Would you like extra toppings? (Yes/No)");
              return aReturn;
          },
          UPSELL: (sInput) => {
              let aReturn = [];
              this.toppings = sInput.toLowerCase().startsWith('y') ? "with extra toppings" : "without extra toppings";
              this.stateCur = this.OrderState.CONFIRM_DRINK;
              aReturn.push(`Got it! Your pizza will be ${this.toppings}.`);
              aReturn.push("Would you like a drink to go with it? (Coke, Sprite, Fanta, Water) or type 'No' to skip.");
              return aReturn;
          },
          CONFIRM_DRINK: (sInput) => {
              let aReturn = [];
              this.drink = sInput.toLowerCase();
              this.isDone = true;
              
              let drinkMessage = this.drink !== "no" ? `with a ${this.drink}.` : "without a drink.";
              
              aReturn.push(`Your order is confirmed!`);
              aReturn.push(`You ordered a ${this.pizzaSize} ${this.pizzaType} pizza ${this.toppings} ${drinkMessage}`);
              aReturn.push("Please pick up your order at 893 Domino Lane Rd in 30 minutes.");
              return aReturn;
          }
      };

      this.stateCur = this.OrderState.WELCOMING;
      this.isDone = false;
      this.sFrom = sFrom;
  }

  handleInput(sInput) {
      return this.stateCur(sInput);
  }

  isDone() {
      return this.isDone;
  }
}