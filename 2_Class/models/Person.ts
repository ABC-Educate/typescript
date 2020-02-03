import { IPersona} from './IPersona';

export class Person implements IPersona {
    constructor(public name: string,public age:number,private state: string ){
    }

}