---
title: "팩토리 메서드 (Factory Method)"
description: ""
categories: design-patterns
tags: [design patterns, factory method, 디자인 패턴, 팩토리 메서드]
---

# 팩토리 메서드 (Factory Method)

객체를 생성하기 위해 인터페이스를 정의하지만, 어떤 클래스의 인스턴스를 생성할 지에 대한 결정은 서브클래스가 내리도록 한다.

```javascript
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
        console.log("anOperation()");
        this.product = this.factoryMethod();
        console.log(this.product instanceof ConcreteProduct)
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
```
