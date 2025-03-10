// script.js

document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDisplay = document.getElementById('resultDisplay');
  
    // Validate input
    if (tempInput === '' || isNaN(tempInput)) {
      resultDisplay.textContent = 'Please enter a valid number!';
      return;
    }
  
    const temperature = parseFloat(tempInput);
    let convertedTemp, resultUnit;
  
    // Conversion logic
    if (unit === 'celsius') {
      convertedTemp = (temperature * 9 / 5) + 32;
      resultUnit = '°F';
    } else if (unit === 'fahrenheit') {
      convertedTemp = (temperature - 32) * 5 / 9;
      resultUnit = '°C';
    }
  
    // Optional Kelvin logic (uncomment if you add Kelvin radio button)
    // else if (unit === 'kelvin') {
    //   convertedTemp = temperature - 273.15;
    //   resultUnit = '°C';
    // }
  
    resultDisplay.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${resultUnit}`;
  });
  