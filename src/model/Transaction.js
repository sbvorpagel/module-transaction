module.exports = class Transaction {
    constructor({value, type, date} = {}) {
        const newDate = new Date();
        this._value = value;
        this._type = type;
        this._date = date && new Date(date.getTime());
        this._createAt = new Date(newDate.getTime());
        this._updateAt = new Date(newDate.getTime());
    }

    get value() {
        return this._value;
    }

    get type() {
        return this._type;
    }

    get date() {
        return this._date;
    }

    get createAt() {
        return this._createAt;
    }

    get updateAt() {
        return this._updateAt;
    }
}