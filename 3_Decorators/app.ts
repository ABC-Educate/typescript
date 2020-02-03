
function Component(name:string){
    return (object:Object)=>console.log(object,':object Class')
    
}

function Input(name:string){
    return (object:Object,propierty:string)=>console.log(object,':object propierty',propierty,'Propierty')
}

function Inject(object:Object,metodo:string, indice:number){
    console.log(object,metodo,indice,':object parameter')
}

@Component('name')
class AppComponent{
    @Input('name') text:any;

    constructor(@Inject person:string){
        console.log(person);
    }

}

let InputComponent = new AppComponent('juan')

console.log(InputComponent)