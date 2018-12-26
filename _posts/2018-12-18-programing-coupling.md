---
layout: post
title: "결합도 (Coupling)"
date: 2018-12-18
author: 연병화
categories: programing
---

# 결합도 (Coupling)

- 모듈간 상호 의존하는 정도
- 모듈간 결합도가 낮을수록 이상적이다

> 내용 (Content) > 공통 (Common) > 외부 (External) > 제어 (Control) > 스탬프 (Stamp) > 자료 (Data)

## 내용 (Content)

- 한 모듈이 다른 모듈의 내부 기능과 자료를 직접 참조

```javascript
const ModuleA = class {
    constructor(value) {
        this.value = value;
    }
};

const ModuleB = class {
    constructor(moduleA) {
        this.value = moduleA.value;
    }
};

const moduleB = new ModuleB(new ModuleA('moduleA'));
```


## 공통 (Common)

- 공통 모듈을 여러 다른 모듈에서 참조
- 공통 모듈이 조금만 변경되어도 이를 사용하는 모든 모듈에 영향

```javascript
const CommonModule = class {
    constructor(value) {
        this.value = value;
    }
};

const ModuleA = class {
    constructor(commonModule) {
        this.value = commonModule.value;
    }
};

const ModuleB = class {
    constructor(commonModule) {
        this.value = commonModule.value;
    }
};

const moduleA = new ModuleA(new CommonModule('commonModuleA'));
const moduleB = new ModuleB(new CommonModule('commonModuleB'));
```


## 외부 (External)

- 어떤 모듈에서 외부로 선언한 데이터를 다른 모듈에서 참조
- 참조되는 데이터를 각 모듈에서 제한할 수 있음

```javascript
const ModuleA = class {
    constructor(value) {
        this.value = value;
    }
    
    getValue() {
        return this.value;
    }
};

const ModuleB = class {
    constructor(moduleA) {
        this.value = moduleA.getValue();
    }
};

const moduleB = new ModuleB(new ModuleA('moduleA'));
```


## 제어 (Control)

- 한 모듈이 다른 모듈의 내부에서 작용하는 논리적 흐름을 제어하기 위하여 플래그나 정보를 매개변수로 전달

```javascript
const ModuleA = class {
    process(flag, value) {
        switch (flag) {
            case 'A':
                this.runA(value);
                break;
            case 'B':
                this.runB(value);
                break;
        }
    }
    
    runA(value) {}
    runB(value) {}
};

const ModuleB = class {
    constructor(moduleA) {
        this.moduleA = moduleA;
    }

    doA() {
        this.moduleA.process('A');
    }
    
    doB(value) {
        this.moduleA.process('B', value);
    }
};

const moduleB = new ModuleB(new ModuleA());
moduleB.doA();
moduleB.doB('doB');
```


## 스탬프 (Stamp)

- 모듈 간의 인터페이스로 참조 타입의 자료 구조가 전달될 때 결합

```javascript
const ModuleA = class {
    count(value) {
        value.count++;
    }
};

const ModuleB = class {
    constructor(module) {
        this.module = module;
        
        this.counter = {
            count: 0
        };
    }

    count() {
        this.module.count(this.counter);
    }
};

const moduleB = new ModuleB(new ModuleA());
moduleB.count();
```


## 자료 (Data)

- 모듈간 인터페이스가 값으로만 구성
- 어떤 모듈이 다른 모듈을 호출하며 매개 변수, 인수로 값 넘겨주며 호출받은 모듈은 받은 데이터에 대한 처리결과를 돌려준다 

```javascript
const ModuleA = class {
    count(value) {
        return ++value;
    }
};

const ModuleB = class {
    constructor(module) {
        this.module = module;
        this.counter = 0;
    }

    count() {
        this.counter = this.module.count(this.counter);
    }
};

const moduleB = new ModuleB(new ModuleA());
moduleB.count();
```