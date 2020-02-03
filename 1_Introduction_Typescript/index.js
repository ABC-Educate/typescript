/*let select = document.getElementById('operation');
let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let renderResult = (result,type)=>{
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

select.addEventListener('change', (e) => {
    let row = document.createElement('div')
    let result;
    switch (e.target.value) {
        case 'add':
            result = Number(numberOne.value) + Number(numberTwo.value);
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result,'success'),
            document.body.appendChild(row)
            break;
        case 'minus':
            result =  Number(numberOne.value) - Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result,'danger'),
            document.body.appendChild(row)
            break;
        case 'times':
            result =  Number(numberOne.value) * Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result,'danger'),
            document.body.appendChild(row)
            break;
        case 'divided':
            result =  Number(numberOne.value) / Number(numberTwo.value)
            row.className = 'row justify-content-center'
            console.log(row)
            row.innerHTML = renderResult(result,'danger'),
            document.body.appendChild(row)
            break;

        default:
            break;
    }
})*/