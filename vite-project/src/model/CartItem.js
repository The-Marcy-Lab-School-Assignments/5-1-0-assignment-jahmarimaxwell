import getId from "../utils/getId";

class CartItem {
    constructor(name, price) {
        this.id = getId();
        this.name = name;
        this.price = price;
    }
    getId() {
        id = 1;
        id++;
    }
    createItem(itemName, itemPrice) {
        return new CartItem(itemName, itemPrice)
    }
}

export default CartItem;