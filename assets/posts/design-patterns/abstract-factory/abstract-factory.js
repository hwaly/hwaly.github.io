const AbstractFactory = class {
    createProductA() {}
    createProductB() {}
};
const ConcreteFactory1 = class extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory1 class created");
    }
    createProductA() {
        console.log('ConcreteFactory1 createProductA');
        return new ProductA1();
    }
    createProductB() {
        console.log('ConcreteFactory1 createProductB');
        return new ProductB1();
    }
};
const ConcreteFactory2 = class extends AbstractFactory {
    constructor() {
        super();
        console.log("ConcreteFactory2 class created");
    }
    createProductA() {
        console.log('ConcreteFactory2 createProductA');
        return new ProductA2();
    }
    createProductB() {
        console.log('ConcreteFactory2 createProductB');
        return new ProductB2();
    }
};

const AbstractProductA = class {};
const ProductA1 = class extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA1 created');
    }
};
const ProductA2 = class extends AbstractProductA {
    constructor() {
        super();
        console.log('ProductA2 created');
    }
};

const AbstractProductB = class {};
const ProductB1 = class extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB1 created');
    }
};
const ProductB2 = class extends AbstractProductB {
    constructor() {
        super();
        console.log('ProductB2 created');
    }
};

(function client() {
    const factory1 = new ConcreteFactory1();
    const productB1 = factory1.createProductB();

    const factory2 = new ConcreteFactory2();
    const productA2 = factory2.createProductA();
})();