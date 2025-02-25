import { Order } from '../Order.js';

describe("Domino's Pizza Order Tests", function() {

    it("display a welcome message", function() {
        const oOrder = new Order("999-999-9999");
        const aResults = oOrder.handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Domino SMS Chat Ordering.");
    });

    it("test yes", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("yes");
        expect(aResults[0]).toBe("Wonderful! What type of pizza would you like?");
    });

    it("test no", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        const aResults = oOrder.handleInput("no");
        expect(aResults[0]).toBe("Thank you for visiting Domino's! Have a great day.");
    });

    it("test for pizza selection", function() {
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        const aResults = oOrder.handleInput("Veggie");
        expect(aResults[0]).toBe("You chose veggie pizza.");
    });

    it("confirming order at the end", function(){  
        const oOrder = new Order("999-999-9999");
        oOrder.handleInput("hello");
        oOrder.handleInput("yes");
        oOrder.handleInput("Pepperoni");
        oOrder.handleInput("Medium");
        oOrder.handleInput("Yes");
        const aResults = oOrder.handleInput("No");
        expect(aResults[0]).toBe("Your order is confirmed!");
    });

});