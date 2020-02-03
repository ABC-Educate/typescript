import { OperationService } from './src/services/operation.service.js';
class App {
    constructor() {
        this.select = document.getElementById('operation');
        this.numberOne = document.getElementById('numberOne');
        this.numberTwo = document.getElementById('numberTwo');
        this.OperationService = new OperationService();
        this.onChange();
    }
    renderResult(result, type) {
        let row = document.createElement('div');
        row.className = 'row justify-content-center';
        row.innerHTML = (`
                <div class="col-12">
                    <div class="alert alert-${type}" role="alert">
                        ${result}
                    </div>
                </div>
            `);
        document.body.appendChild(row);
    }
    onChange() {
        this.select.addEventListener('change', (e) => {
            switch (e.target.value) {
                case 'add':
                    this.OperationService.add(this.numberOne.value, this.numberTwo.value);
                    break;
                case 'minus':
                    this.OperationService.minus(this.numberOne.value, this.numberTwo.value);
                    break;
                case 'times':
                    this.OperationService.times(this.numberOne.value, this.numberTwo.value);
                    break;
                case 'divided':
                    this.OperationService.divideBy(this.numberOne.value, this.numberTwo.value);
                    break;
                default:
                    break;
            }
            let index = this.OperationService.results.length;
            let item = this.OperationService.results[index - 1].result;
            this.renderResult(item, "danger Type" /* danger */);
        });
    }
}
var app = new App();
//console.log(app)
