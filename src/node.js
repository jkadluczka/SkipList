class Node {
    constructor() {
        this._value = null;
        this._next = null;
    }


    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }
}

