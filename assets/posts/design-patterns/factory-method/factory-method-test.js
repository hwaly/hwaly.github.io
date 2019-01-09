const Pizza = class {
    prepare() {
        console.log('prepare');
    }

    bake() {
        console.log('bake');
    }

    cut() {
        console.log('cut');
    }

    box() {
        console.log('box');
    }
};

const CheesePizza = class extends Pizza {
    prepare() {
        console.log('prepare: 치즈 준비');
    }
};

const GreekPizza = class extends Pizza {

};

const PeperoniPizza = class extends Pizza {

};

const SimplePizzaFactory = class {
    static createPizza(type) {
        let pizza;

        if (type === 'cheese') {
            pizza = new CheesePizza();
        } else if (type === 'greek') {
            pizza = new GreekPizza();
        } else if (type === 'peperoni') {
            pizza = new PeperoniPizza();
        }

        return pizza;
    }
};

const NYPizzaFactory = class {

};

const ChicagoPizzaFactory = class {

};

const CaliforniaPizzaFactory = class {

};

const PizzaStore = class {
    constructor() {
        this.factory = SimplePizzaFactory;
    }

    orderPizza(type) {
        this.pizza = this.factory.createPizza(type);

        this.pizza.prepare();
        this.pizza.bake();
        this.pizza.cut();
        this.pizza.box();
    }
};

export {CheesePizza, GreekPizza, PeperoniPizza};
export default PizzaStore;