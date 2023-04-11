import { LightningElement } from 'lwc';

export default class AddToList extends LightningElement {

    _textValue;
    textValues = [];
    counter = 0;

    handleInputChange(event) {
        this._textValue = event.detail.value;
    }

    handleClick() {
        this.textValues[this.counter] = this._textValue;
        this.counter++;
        console.log(this.textValues);
        console.log(this.counter);
        this._textValue = '';
    }
}