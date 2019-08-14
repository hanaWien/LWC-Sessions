import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    @track displayDiv = true;
    @track cityList = ['Tel-Aviv','New York', 'London', 'Berlin'];n

    showDivHandler(event){
        this.displayDiv = event.target.checked; 
    }
}