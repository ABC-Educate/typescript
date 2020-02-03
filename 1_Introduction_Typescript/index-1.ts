let select: HTMLInputElement = document.getElementById('operation') as HTMLInputElement;
let numberOne: HTMLInputElement = document.getElementById('numberOne') as HTMLInputElement;
let numberTwo: HTMLInputElement = document.getElementById('numberTwo') as HTMLInputElement;


const enum AlertType {
    success = "success Type",
    danger = "danger Type",
    warning = "warning Type"
}

let renderResult = (result: number, type: AlertType): string => {
    return (
        `
            <div class="col-12">
                <div class="alert alert-${type}" role="alert">
                    ${result}
                </div>
            </div>
        `
    )
}

select.addEventListener('change', (e: Event) => {
    let row = document.createElement('div')
    let result;
    console.log(e.target)
    switch ((e.target as HTMLInputElement).value) {
        case 'add':
            result = Number(numberOne.value) + Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result, AlertType.success);
            document.body.appendChild(row)
            break;
        case 'minus':
            result = Number(numberOne.value) - Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result, AlertType.danger);
            document.body.appendChild(row)
            break;
        case 'times':
            result = Number(numberOne.value) * Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result, AlertType.warning),
                document.body.appendChild(row)
            break;
        case 'divided':
            result = Number(numberOne.value) / Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result, AlertType.success),
                document.body.appendChild(row)
            break;
        default:
            break;
    }
})