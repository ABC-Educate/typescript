import { Operation } from "../models/Operation.js";
export class OperationService {
    constructor() {
        this.results = [];
    }
    add(valueOne, valueTwo) {
        let operation = new Operation(Number(valueOne), Number(valueTwo));
        operation.result = operation.valueOne + operation.valueTwo;
        this.results.push(operation);
    }
    minus(valueOne, valueTwo) {
        let operation = new Operation(Number(valueOne), Number(valueTwo));
        operation.result = operation.valueOne - operation.valueTwo;
        this.results.push(operation);
    }
    times(valueOne, valueTwo) {
        let operation = new Operation(Number(valueOne), Number(valueTwo));
        operation.result = operation.valueOne * operation.valueTwo;
        this.results.push(operation);
    }
    divideBy(valueOne, valueTwo) {
        let operation = new Operation(Number(valueOne), Number(valueTwo));
        operation.result = operation.valueOne / operation.valueTwo;
        this.results.push(operation);
    }
}
