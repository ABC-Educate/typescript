var select = document.getElementById('operation');
var numberOne = document.getElementById('numberOne');
var numberTwo = document.getElementById('numberTwo');
var renderResult = function (result, type) {
    return ("\n            <div class=\"col-12\">\n                <div class=\"alert alert-" + type + "\" role=\"alert\">\n                    " + result + "\n                </div>\n            </div>\n        ");
};
select.addEventListener('change', function (e) {
    var row = document.createElement('div');
    var result;
    console.log(e.target);
    switch (e.target.value) {
        case 'add':
            result = Number(numberOne.value) + Number(numberTwo.value);
            row.className = 'row justify-content-center';
            console.log(row);
            row.innerHTML = renderResult(result, "success Type" /* success */),
                document.body.appendChild(row);
            break;
        case 'minus':
            result = Number(numberOne.value) - Number(numberTwo.value);
            row.className = 'row justify-content-center';
            console.log(row);
            row.innerHTML = renderResult(result, "danger Type" /* danger */);
            document.body.appendChild(row);
            break;
        case 'times':
            result = Number(numberOne.value) * Number(numberTwo.value);
            row.className = 'row justify-content-center';
            console.log(row);
            row.innerHTML = renderResult(result, "warning Type" /* warning */),
                document.body.appendChild(row);
            break;
        case 'divided':
            result = Number(numberOne.value) / Number(numberTwo.value);
            row.className = 'row justify-content-center';
            console.log(row);
            row.innerHTML = renderResult(result, "success Type" /* success */),
                document.body.appendChild(row);
            break;
        default:
            break;
    }
});
