let mainContainer = document.getElementById('mainContainer')

let numArray = [[6], [2, 5, 3], [4], [1]]


const createLineContainer = (children) => {
    let subContainer = document.createElement('div')
    subContainer.className = 'subContainer'
    children.forEach(element => subContainer.appendChild(element))

    mainContainer.appendChild(subContainer)
    mainContainer.append(subContainer)
}

const createDice = (diceValue) => {

    let checkedDiceValue = checkValue(diceValue)

    let columnsArray = [...createColumnsOfDots(checkedDiceValue)]

    let amountOfDots


    if (diceValue % 2 === 0) {

        amountOfDots = checkedDiceValue / 2

        columnAppendDot(columnsArray[0], amountOfDots)
        columnAppendDot(columnsArray[2], amountOfDots)

    } else {

        amountOfDots = (checkedDiceValue - 1) / 2

        columnAppendDot(columnsArray[0], amountOfDots)
        columnAppendDot(columnsArray[1], 1)
        columnAppendDot(columnsArray[2], amountOfDots)

    }

    let diceDiv = createDiceDiv(columnsArray)
    return diceDiv
}


const checkValue = (value) => {
    if (value > 6) {
        value = 6
    } else if (value < 1 || isNaN(value) || typeof (value) !== 'number') {
        value = 1
    }
    return value
}


const createDiceDiv = (children) => {
    let parentDiv = document.createElement('div')
    parentDiv.className = 'dice'
    children.forEach(element => parentDiv.appendChild(element))
    return parentDiv
}

const createColumnsOfDots = (diceValue) => {

    switch (diceValue) {
        case 4:
        case 5:
        case 6:

            return [
                createColumn('space-between'),
                createColumn('center'),
                createColumn('space-between')
            ]

        case 1:
        case 2:
        case 3:

            return [
                createColumn(),
                createColumn('center'),
                createColumn('reverse')
            ]
    }
}


const createColumn = (columnClass = "") => {
    let column = document.createElement('div')
    column.className = `column ${columnClass}`
    return column
}


const columnAppendDot = (parent, quantity) => {
    for (let i = 0; i < quantity; i++) {
        let dot = document.createElement('div')
        dot.className = 'dot'
        parent.appendChild(dot)
    }
}

const generateCubes = (numArray) => {
    return numArray.map(element => element.map(element => createDice(element)))
}


const renderResult = (finalArray) => {
    finalArray.forEach(element => createLineContainer(element))
}

let cubesArray = generateCubes(numArray)

renderResult(cubesArray)