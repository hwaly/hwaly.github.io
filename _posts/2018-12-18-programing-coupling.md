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

const moduleB = new ModuleB(new ModuleA(1));
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

const moduleA = new ModuleA(new CommonModule(1));
const moduleB = new ModuleB(new CommonModule(3));
```

## 외부 (External)



## 제어 (Control)



## 스탬프 (Stamp)



## 자료 (Data)


