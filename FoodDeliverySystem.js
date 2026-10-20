
class FoodItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    setPrice(price) {
        if (price > 0) {
            this.price = price;
        }
    }

    getDeliveryFee() {
        return 0;
    }

    getType() {
        return "Food Item";
    }
}

class Pizza extends FoodItem {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getDeliveryFee() {
        return 30;
    }

    getType() {
        return "Pizza";
    }
}

class Burger extends FoodItem {
    constructor(name, price, pattyFlavour) {
        super(name, price);
        this.pattyFlavour = pattyFlavour;
    }

    getDeliveryFee() {
        return 20;
    }

    getType() {
        return "Burger";
    }
}

class Drink extends FoodItem {
    constructor(name, price, size) {
        super(name, price);
        this.size = size;
    }

    getDeliveryFee() {
        return 10;
    }

    getType() {
        return "Drink";
    }
}

class Order {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    displayOrder() {
        let foodTotal = 0;
        let deliveryTotal = 0;

        console.log("Food Deluvery Orders");
        console.log("-----------------------------");

        this.items.forEach(item => {
            console.log("Name: " + item.name);
            console.log("Type: " + item.getType());
            console.log("Price: R" + item.getPrice());
            console.log("Delivery Fee: R" + item.getDeliveryFee());

            if (item instanceof Pizza) {
                console.log("Size: " + item.size);
            } else if (item instanceof Burger) {
                console.log("Patty Flavour: " + item.pattyFlavour);
            } else if (item instanceof Drink) {
                console.log("Size: " + item.size);
            }

            console.log("-----------------------------");

            foodTotal += item.getPrice();
            deliveryTotal += item.getDeliveryFee();
        });

        console.log("Food Total: R" + foodTotal);
        console.log("Delivery Total: R" + deliveryTotal);
        console.log("Final Total: R" + (foodTotal + deliveryTotal));
    }
}

// Create food items
const pizza = new Pizza("Pepperoni Pizza", 140, "Medium");
const burger = new Burger("Bacon and Cheese Burger", 78, "Beef");
const drink = new Drink("Strawberry Summer Fun Drink", 55, "330ml");

// Create an order
const order = new Order();

// Add food items
order.addItem(pizza);
order.addItem(burger);
order.addItem(drink);

// Display order summary
order.displayOrder();
