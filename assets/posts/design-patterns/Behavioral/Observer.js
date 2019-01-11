const Subject = class {
    constructor() {
        this._observers = [];
    }

    subscribe(observer) {
        this._observers.push(observer);
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter(obs => observer !== obs);
    }

    fire(change) {
        this._observers.forEach(observer => observer.update(change));
    }
};

const Observer = class {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update(change) {
        switch (change) {
            case 'INCREMENT':
                ++this.state;
                break;
            case 'DECREMENT':
                --this.state;
                break;
            default:
                this.state = this.initialState;
        }
    }
};

export {Subject, Observer};