import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {

     firstNumber = 0;
     secondNumber = 0;
     selectedOperation = 'add';
     result = 0;

    operations = [
        { label: 'Addition', value: 'add' },
        { label: 'Subtraction', value: 'subtract' },
        { label: 'Multiplication', value: 'multiply' },
        { label: 'Division', value: 'divide' }
    ];

    handleNumberChange(event) {
        if (event.target.dataset.id === 'first') {
            this.firstNumber = parseFloat(event.target.value);
        } else if (event.target.dataset.id === 'second') {
            this.secondNumber = parseFloat(event.target.value);
        }
    }

    handleOperationChange(event) {
        this.selectedOperation = event.target.value;
    }

    calculateResult() {
        switch (this.selectedOperation) {
            case 'add':
                this.result = this.firstNumber + this.secondNumber;
                break;
            case 'subtract':
                this.result = this.firstNumber - this.secondNumber;
                break;
            case 'multiply':
                this.result = this.firstNumber * this.secondNumber;
                break;
            case 'divide':
                this.result = this.secondNumber !== 0 ? this.firstNumber / this.secondNumber : 'Error: Division by zero';
                break;
        }
    }

}