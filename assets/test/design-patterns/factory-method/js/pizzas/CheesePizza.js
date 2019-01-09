import Pizza from '../Pizza.js';

const CheesePizza = class extends Pizza {
    constructor(style) {
        super({
            name: `${style} Cheese Pizza`
        });

        console.log('Cheese Pizza 레시피 준비 완료');
    }

    prepare() {
        console.log(`${this.name} 준비`);
    }
};

export default CheesePizza;