const Product = class {};

const ConcreteProduct = class extends Product {
    constructor() {
        super();
        console.log('ConcreteProduct created');
    }
};

const Creator = class {
    factoryMethod() {}

    anOperation() {
        console.log('anOperation()');
        this.product = this.factoryMethod();
        console.log(this.product instanceof ConcreteProduct);
    }
};

const ConcreteCreator = class extends Creator {
    constructor() {
        super();
        console.log('ConcreteCreator created');
    }

    factoryMethod() {
        return new ConcreteProduct();
    }
};

const factory = new ConcreteCreator();
factory.anOperation();