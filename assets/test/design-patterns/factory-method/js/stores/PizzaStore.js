const PizzaStore = class {
    createPizza() {
        throw new Error('오버라이드 (Override) 필수!!');
    }

    orderPizza(type) {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
    }
};

export default PizzaStore;