import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
    #cartItems = [];


    static #allCarts = [];
    constructor() {
        this.id = getId();
        ShoppingCart.#allCarts.push(this);
    }

    createItem(name, price) {
    const cart = new CartItem(name, price);
    this.#cartItems.push(cart);
    return cart;
    }
    getItems() {
        return [...this.#cartItems];
    }
    removeItem(id) {
        this.#cartItems.splice(this.#cartItems.findIndex((cart) => cart.id === id), 1);
    } 
    getTotal() {
        return this.#cartItems.reduce((total, cartItem) => total + cartItem.price, 0);
        /// looks through the cartItems aray and `reduces` / sums up the value of each cartItem's price
        /// starting from 0
    }
    static listAll() {
        return [...ShoppingCart.#allCarts];
    }
    static findBy(id) {
        return ShoppingCart.#allCarts.find(cart => cart.id === id)
    }

}

export default ShoppingCart;