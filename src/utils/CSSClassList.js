export default class CSSClassList {
    constructor(cssClass) {
        this.value = cssClass;
        this.cssClassList = cssClass.split(' ');
    }

    add(className) {
        if (!this.cssClassList.includes(className)) {
            this.cssClassList.push(className);
            this.value = this.cssClassList.join(' ');
        }

        return this.value;
    }

    remove(className) {
        const index = this.cssClassList.indexOf(className);

        if (~index) {
            this.cssClassList.splice(index, 1);
            this.value = this.cssClassList.join(' ');
        }

        return this.value;
    }

    toggle(className) {
        const index = this.cssClassList.indexOf(className);

        if (~index) {
            this.cssClassList.splice(index, 1);
            this.value = this.cssClassList.join(' ');
        } else {
            this.cssClassList.push(className);
            this.value = this.cssClassList.join(' ');
        }

        return this.value;
    }

    getClassList() {
        return this.cssClassList;
    }

    getClassString() {
        return this.value;
    }

    toString() {
        return this.getClassString();
    }
}
