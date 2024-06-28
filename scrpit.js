document.addEventListener('DOMContentLoaded', () => {

    // Calculate Power
    function circuitPower(voltage, current) {
        return voltage * current;
    }

    document.getElementById('powerForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const voltage = parseFloat(document.getElementById('voltage').value);
        const current = parseFloat(document.getElementById('current').value);
        const result = circuitPower(voltage, current);
        document.getElementById('powerResult').textContent = `Power: ${result} W`;
    });

    // Find Max Number in Array
    function findMaxNumber(arr) {
        if (arr.length === 0) {
            return null;
        }
        return Math.max(...arr);
    }

    document.getElementById('maxNumberForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const numbers = document.getElementById('numbers').value.split(',').map(Number);
        const result = findMaxNumber(numbers);
        document.getElementById('maxNumberResult').textContent = `Max Number: ${result}`;
    });

    // Merge Two Arrays
    function mergeArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }

    document.getElementById('mergeArraysForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const array1 = document.getElementById('array1').value.split(',');
        const array2 = document.getElementById('array2').value.split(',');
        const result = mergeArrays(array1, array2);
        document.getElementById('mergedArraysResult').textContent = `Merged Array: [${result.join(', ')}]`;
    });

    // Get Types of Values in Array
    function arrayValuesTypes(arr) {
        return arr.map(value => typeof value);
    }

    document.getElementById('arrayValuesTypesForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const valuesArray = document.getElementById('valuesArray').value.split(',').map(value => {
            if (!isNaN(value)) {
                return Number(value);
            }
            return value;
        });
        const result = arrayValuesTypes(valuesArray);
        document.getElementById('arrayValuesTypesResult').textContent = `Types: [${result.join(', ')}]`;
    });
});
