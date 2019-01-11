const Subject = class {
    registerObserver() {
        throw new Error('오버라이드 필수!!');
    }

    removeObserver() {
        throw new Error('오버라이드 필수!!');
    }

    notifyObservers() {
        throw new Error('오버라이드 필수!!');
    }
};

export default Subject;