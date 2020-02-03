import { Operation } from "../models/Operation";

export class OperationService {
    public results: Operation[] = [];

    add(valueOne:any, valueTwo:any) {
        let operation = new Operation(Number(valueOne),Number(valueTwo))
        operation.result = operation.valueOne + operation.valueTwo;
        this.results.push(operation);
    }

    minus(valueOne:any, valueTwo:any) {
        let operation = new Operation(Number(valueOne),Number(valueTwo))
        operation.result = operation.valueOne - operation.valueTwo;
        this.results.push(operation);
    }
    times(valueOne:any, valueTwo:any) {
        let operation = new Operation(Number(valueOne),Number(valueTwo))
        operation.result = operation.valueOne * operation.valueTwo;
        this.results.push(operation);
    }

    divideBy(valueOne:any, valueTwo:any){
        let operation = new Operation(Number(valueOne),Number(valueTwo))
        operation.result = operation.valueOne / operation.valueTwo;
        this.results.push(operation);
    }

}