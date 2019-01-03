---
title: "추상 팩토리 (Abstract Factory)"
description: "모듈내 요소간의 응집도 대하여 알아보자"
categories: design-patterns
tags: [design patterns, abstract factory, 디자인 패턴, 추상 팩토리]
---

# 추상 팩토리 (Abstract Factory)

구체적인 클래스를 지정하지 않고 관련성을 갖는 객체들의 집합을 생성하거나 서로 독립적인 객체들의 집합을 생성할 수 있는 인터페이스 제공.

```javascript
const AbstractFactory = class {
    createProductA() {}
    createProductB() {}
};

const ConcreateFactory1 = class extends AbstractFactory {
    createProductA() {
        console.log('ConcreateFactory1 createProductA');
        return new ProductA1();
    }
    createProductB() {
        console.log('ConcreateFactory1 createProductB');
        return new ProductB1();
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
```
