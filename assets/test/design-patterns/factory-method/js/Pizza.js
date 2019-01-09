const Pizza = class {
    constructor({name = '', dough, sauce, veggies = [], cheese, pepperoni, clams}) {
        Object.assign(this, {name, dough, sauce, veggies, cheese, pepperoni, clams});
    }

    prepare() {
        throw new Error('오버라이드 (Override) 필수!!');
    }

    bake() {
        console.log('350도에 25분간 굽습니다');
    }

    cut() {
        console.log('피자를 대각선으로 자릅니다');
    }

    box() {
        console.log('공식 피자가게 상자에 피자를 담습니다');
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
};

export default Pizza;