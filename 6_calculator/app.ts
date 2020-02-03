import {OperationService} from './src/services/operation.service'

const enum AlertType {
    success = "success Type",
    danger = "danger Type",
    warning = "warning Type"
}


class App {
    private select: HTMLInputElement;
    private numberOne: HTMLInputElement;
    private numberTwo: HTMLInputElement;
    private OperationService: OperationService
    
    constructor() {
        this.select = document.getElementById('operation') as HTMLInputElement;
        this.numberOne = document.getElementById('numberOne') as HTMLInputElement;
        this.numberTwo = document.getElementById('numberTwo') as HTMLInputElement;
        this.OperationService = new OperationService();
        this.onChange()
    }

    public renderResult(result: number, type: AlertType){
        let row = document.createElement('div')
        row.className = 'row justify-content-center'
        row.innerHTML = (
            `
                <div class="col-12">
                    <div class="alert alert-${type}" role="alert">
                        ${result}
                    </div>
                </div>
            `
        )
        document.body.appendChild(row);
    }

    onChange(){
        this.select.addEventListener('change', (e: Event) => {
            switch ((e.target as HTMLInputElement).value) {
                case 'add':
                    this.OperationService.add(this.numberOne.value,this.numberTwo.value)
                    break;
                case 'minus':
                    this.OperationService.minus(this.numberOne.value,this.numberTwo.value)
                    break;
                case 'times':
                    this.OperationService.times(this.numberOne.value,this.numberTwo.value)
                    break;
                case 'divided':
                    this.OperationService.divideBy(this.numberOne.value,this.numberTwo.value)
                    break;
                default:
                    break;
            }
            let index = this.OperationService.results.length
            let item:number = <number> this.OperationService.results[index-1].result
            this.renderResult(item,AlertType.danger);
        })
    }

}

var app = new App()

//console.log(app)