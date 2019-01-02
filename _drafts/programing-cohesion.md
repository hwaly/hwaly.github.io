---
title: "응집도 (Cohesion)"
description: "모듈내 요소간의 응집도 대하여 알아보자"
author: 연병화
categories: programing
tags: [programing, 응집도]
---

# 응집도 (Cohesion)

- 각 모듈의 응집도는 강할수록 이상적이다

> 우연적 (Coincidental) < 논리적 (Logical) < 시간적 (Temporal) < 절차적 (Procedural) < 교환적 (Communication) < 순차적 (Sequential) < 기능적 (Functional)


## 우연적 (Coincidental)

- 아무 관계 없는 처리 요소들로 모듈이 형성
- 모듈의 개념이 없어 이해와 유지보수가 어렵다

```javascript
const Common = class {
    static isChecked() {}
    static closest() {}
    static isLogin() {}
};
```

## 논리적 (Logical)

- 비슷한 성격이나 형태로 분류되는 요소들은을 하나의 모듈로 형성

```javascript
const Math = class {
    static round(number) {}
    static floor(number) {}
    static ceil(number) {}
};
```


## 시간적 (Temporal)

- 특정 시점을 기준으로 수행되는 기능을 묶어 놓은 모듈
- 관계가 아니라 순서가 실행을 결정

```javascript
const App = class {
    init() {
        this.database.init();
        this.auth.init();
        this.user.init();
        this.build.init();
    }
};
```

## 절차적 (Procedural)

- 모듈의 일부가 항상 특정 실행 순서를 따르기 때문에 그룹화 
- 모듈의 기능 집합이 모두 특정 목표를 달성하기 위해 일련의 단계를 수행해야하는 절차 (알고리즘)의 일부인 경우 모듈은 절차적 응집력을 소유

```javascript
const Cake = class {
    make() {
        const ingredients = this.addIngredients();
        const mix = this.mix(ingredients);
        const bake = this.bake(mix);
    }
}

## 교환적 (Communication)

- 동일한 입력과 출력을 사용하는 여러 작업들이 모인 경우

## 순차적 (Sequential)

- 모듈 내 한 작업의 출력이 다른 작업의 입력이 되는 경우

## 기능적 (Functional)

- 잘 정의된 하나의 기능이 하나의 모듈을 이룬 경우