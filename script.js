function convertTemperature() {
    var temperature = document.getElementById("temperature").value;
    var convertTo = document.getElementById("convertTo").value;
    
    if (convertTo === "kelvin") {
      var result = parseFloat(temperature) + 273.15;
      document.getElementById("result").innerHTML = temperature + "°C is equivalent to " + result + " K.";
    } else if (convertTo === "celsius") {
      var result = parseFloat(temperature) - 273.15;
      document.getElementById("result").innerHTML = temperature + " K is equivalent to " + result + "°C.";
    } else if (convertTo === "fahrenheit") {
      var result = (parseFloat(temperature) - 273.15) * 9/5 + 32;
      document.getElementById("result").innerHTML = temperature + " K is equivalent to " + result + "°F.";
    }
  }
