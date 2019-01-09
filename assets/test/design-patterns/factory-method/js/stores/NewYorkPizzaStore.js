import PizzaStore from './PizzaStore.js';
import CheesePizza from '../pizzas/CheesePizza.js';

const PIZZAS = {
    cheese: CheesePizza
};

const NewYorkPizzaStore = class extends PizzaStore {
    createPizza(type) {
        const PizzaConstructor = PIZZAS[type];
        let pizza;

        if (PizzaConstructor) {
            pizza = new PizzaConstructor('뉴욕 스타일');
        }

        return pizza;
    }
};

export default NewYorkPizzaStore;