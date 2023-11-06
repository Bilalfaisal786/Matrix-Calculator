function calculateMatrices() {
    const matrix1 = getMatrixValues(".matrix1");
    const matrix2 = getMatrixValues(".matrix2");

    if (!matrix1 || !matrix2) {
        alert("Please enter valid numbers in all matrix cells.");
        return;
    }

    const operation = document.getElementById("operation").value;
    const resultMatrix = performMatrixOperation(matrix1, matrix2, operation);

    displayResult(resultMatrix);
}

function getMatrixValues(className) {
    const elements = document.querySelectorAll(className);
    const values = [];

    elements.forEach((element) => {
        const value = parseFloat(element.value);

        if (isNaN(value)) {
            return null;
        }

        values.push(value);
    });

    return values.length === 9 ? values : null;
}

function performMatrixOperation(matrix1, matrix2, operation) {
    const resultMatrix = [];

    for (let i = 0; i < 9; i++) {
        switch (operation) {
            case "addition":
                resultMatrix.push(matrix1[i] + matrix2[i]);
                break;
            case "subtraction":
                resultMatrix.push(matrix1[i] - matrix2[i]);
                break;
            default:
                break;
        }
    }

    return resultMatrix;
}

function displayResult(resultMatrix) {
    const outputElements = document.querySelectorAll(".matrix3");

    outputElements.forEach((element, index) => {
        element.value = resultMatrix[index];
    });
}
