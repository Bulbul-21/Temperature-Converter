// Function to convert the temperature
function convertTemperature() {
  const temperature = parseFloat(
    document.getElementById("temperatureInput").value
  );
  const fromUnit = document.getElementById("unitSelect").value;
  const toUnit = document.getElementById("resultUnitSelect").value;
  // Use the selected unit

  let result = 0;

  if (fromUnit === "celsius") {
    if (toUnit === "fahrenheit") {
      result = (temperature * 9) / 5 + 32;
    } else if (toUnit === "kelvin") {
      result = temperature + 273.15;
    } else {
      result = temperature;
    }
  } else if (fromUnit === "fahrenheit") {
    if (toUnit === "celsius") {
      result = ((temperature - 32) * 5) / 9;
    } else if (toUnit === "kelvin") {
      result = ((temperature - 32) * 5) / 9 + 273.15;
    } else {
      result = temperature;
    }
  } else if (fromUnit === "kelvin") {
    if (toUnit === "celsius") {
      result = temperature - 273.15;
    } else if (toUnit === "fahrenheit") {
      result = ((temperature - 273.15) * 9) / 5 + 32;
    } else {
      result = temperature;
    }
  }

  document.getElementById("result").innerText = `Result: ${result.toFixed(
    2
  )} °${toUnit}`;
}

// Event listener for the "Convert" button
document.addEventListener("DOMContentLoaded", function () {
  const convertButton = document.getElementById("convertButton");
  convertButton.addEventListener("click", function () {
    convertTemperature();
  });
});
