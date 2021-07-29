let mainContainer = document.getElementById('mainContainer')

let numArray = [[6], [2, 5, 3], [4], [1]]



const createSubContainer = (children) => {
    let subContainer = document.createElement('div')
    subContainer.className = 'subContainer'
    children.forEach(element => subContainer.appendChild(element))
    mainContainer.appendChild(subContainer)
    mainContainer.append(subContainer)
}

const createDice = (sideNumber) => {

    if (sideNumber > 6) {
        sideNumber = 6
    } else if (sideNumber < 1) {
        sideNumber = 1
    }

    let columnsArray = [...createColumns(sideNumber)]

    if (sideNumber % 2 === 0) {

        columnAppendDot(columnsArray[0], sideNumber / 2)
        columnAppendDot(columnsArray[2], sideNumber / 2)

    } else if (sideNumber % 2 !== 0) {

        columnAppendDot(columnsArray[0], (sideNumber - 1) / 2)
        columnAppendDot(columnsArray[1], 1)
        columnAppendDot(columnsArray[2], (sideNumber - 1) / 2)

    }

    let diceDiv = createDiceDiv(columnsArray)
    return diceDiv
}


const createDiceDiv = (children) => {
    let parentDiv = document.createElement('div')
    parentDiv.className = 'dice'
    children.forEach(element => parentDiv.appendChild(element))
    return parentDiv
}

const createColumns = (sideNumber) => {
    let columnsArray

    switch (sideNumber) {


        case 4:
        case 5:
        case 6:

            return columnsArray = [
                createColumn('column space-between'),
                createColumn('column center'),
                createColumn('column space-between')
            ]

        case 1:
        case 2:
        case 3:

            return columnsArray = [
                createColumn('column'),
                createColumn('column center'),
                createColumn('column reverse')
            ]
    }
}


const createColumn = (columnType) => {
    let column = document.createElement('div')
    column.className = columnType
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
    let finalArray = []
    for (let indexArray in numArray) {
        finalArray[indexArray] = []
        for (let indexNum in numArray[indexArray]) {
            finalArray[indexArray][indexNum] = createDice(numArray[indexArray][indexNum])
        }
    }
    return finalArray
}


const renderResult = (finalArray) => {
    for (let dice in finalArray) {
        createSubContainer(finalArray[dice])
    }
}


let finalArray = generateCubes(numArray)

renderResult(finalArray)