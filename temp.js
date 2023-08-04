function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById("temperatureInput").value);
    const fromUnit = document.getElementById("unitSelect").value;
    const toUnit = document.getElementById("resultSelect").value;
    let convertedTemperature;

    if (fromUnit === toUnit) {
        convertedTemperature = inputTemperature;
    } else if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            convertedTemperature = inputTemperature + 273.15;
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            convertedTemperature = (inputTemperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            convertedTemperature = (inputTemperature + 459.67) * 5/9;
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            convertedTemperature = inputTemperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            convertedTemperature = (inputTemperature * 9/5) - 459.67;
        }
    }
    
    
    document.getElementById("resultLabel").textContent = `Result: ${convertedTemperature.toFixed(2)} ${toUnit.charAt(0).toUpperCase() + toUnit.slice(1)}`;
}