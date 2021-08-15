window.onload = function() {
    main();
}

function main() {
    const display = document.getElementById('counter')
    const intervalNumber = document.getElementsByName('intervalNumber')
    document.getElementById("initialValue").value = 0

    // Add initial number with Counter
    document.getElementById('initialValueSet').addEventListener('click', function() {
        const initialValue = document.getElementById("initialValue").value
        display.innerText = Number(initialValue)

    })

    // Calculate from buttons
    for (let i = 0; i < intervalNumber.length; i++) {
        intervalNumber[i].addEventListener('click', function() {
            const addSub = document.querySelector("input[name=addSub]:checked").value
            if (addSub === "+") {
                display.innerText = Number(intervalNumber[i].value) + Number(display.innerText)
            } else if (addSub === "-") {
                display.innerText = Number(display.value) - Number(intervalNumber[i].innerText)

            }
        })
    }

    //Calculate From Custom Input
    document.getElementById('customValueSet').addEventListener('click', function() {
        const customValue = document.getElementById('customValue').value
        const addSub = document.querySelector("input[name=addSub]:checked").value
        if (addSub === "+") {
            display.innerText = Number(display.innerText) + Number(customValue)
        } else if (addSub === "-") {
            display.innerText = Number(display.innerText) - Number(customValue)

        }

    })

}