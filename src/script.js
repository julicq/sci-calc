document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = "";

    function evaluateResult() {
        // do not use following string in production!

        console.log('currentValue:', currentValue);
        const convertedValue = currentValue
            .replace("×", "*")
            .replace("%", '*0.01')
            .replace("÷", "/")
            .replace('sin', 'Math.sin')
            .replace('ln', 'Math.log')
            .replace('cos', 'Math.cos')
            .replace('π', 'Math.PI')
            .replace('log', 'Math.log10')
            .replace('e', 'Math.e')
            .replace('tan', 'Math.tan')
            .replace('√', 'Math.sqrt');

        console.log('convertedValue:', convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;

        display.value += " = " + currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;

            try {

                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                } else if (value == "=") {
                    evaluateResult();
                } else {
                    currentValue += value;
                    display.value = currentValue;
                }
            } catch (error) {
                    console.error(error);
                    currentValue = "ERROR";
                    display.value = currentValue;
                }
            })
    }
});