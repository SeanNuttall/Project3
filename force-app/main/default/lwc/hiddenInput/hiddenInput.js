import { LightningElement } from 'lwc';

export default class HiddenInput extends LightningElement {

    displayText = 'Display Text Here';
    displayInput = false;

    handleClick() {
        this.displayInput = !this.displayInput;
    }

    handleChange(event) {
        this.displayText = event.detail.value
    }
}