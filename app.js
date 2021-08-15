window.onload = function() {
    main();
}

function main() {
    const display = document.getElementById('counter')
    const intervalNumber = document.getElementsByName('intervalNumber')

    // Add initial number with Counter
    document.getElementById('initialValueSet').addEventListener('click', function() {
        const initialValue = document.getElementById("initialValue").value
        display.innerText = Number(initialValue)

    })

    function addsubCondition(e) {
        const addSub = document.querySelector("input[name=addSub]:checked").value
        if (addSub === "+") {
            display.innerText = Number(e) + Number(display.innerText)
        } else if (addSub === "-") {
            display.innerText = Number(display.value) - Number(e)
        }
    }

    // Calculate from buttons
    for (let i = 0; i < intervalNumber.length; i++) {
        intervalNumber[i].addEventListener('click', function() {
            addsubCondition(intervalNumber[i].value)
        })
    }

    //Calculate From Custom Input
    document.getElementById('customValueSet').addEventListener('click', function() {
        const customValue = document.getElementById('customValue').value
        addsubCondition(customValue)
    })
}