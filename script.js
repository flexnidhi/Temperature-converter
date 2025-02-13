let temp = document.getElementById("temp");
let temperature =document.getElementById("Temp")
let degree =document.getElementById("Changer")
let converter =document.getElementById("Convert");
let result =document.getElementById("Result");

converter.addEventListener('click',function(){
    if(temperature.value=='c' && degree.value=='Fahrenheit' )  {
        result.textContent=Math.round((9/5 * temp.value)+32)
    }
    if(temperature.value=='c' && degree.value=='celsius' )  {
        result.textContent=Math.round( temp.value)
    }
    if(temperature.value=='c' && degree.value=='Kelvin' )  {
        result.textContent=Math.round(parseInt(temp.value)+273.15)
    }
    if(temperature.value=='F' && degree.value=='Fahrenheit' )  {
        result.textContent=Math.round(temp.value)
    }
    if(temperature.value=='F' && degree.value=='celsius' )  {
        result.textContent=Math.round( (temp.value-32)*5/9)
    }
    if(temperature.value=='F' && degree.value=='Kelvin' )  {
        result.textContent=Math.round( (temp.value-32)*5/9 +273.15)
    }
    if(temperature.value=='K' && degree.value=='Fahrenheit' )  {
        result.textContent=Math.round((temp.value-273.15)* 9/5 +32)
    }
    if(temperature.value=='K' && degree.value=='celsius' )  {
        result.textContent=Math.round( temp.value -273.15)
    }
    if(temperature.value=='K' && degree.value=='Kelvin' )  {
        result.textContent=Math.round(temp.value)
    }
})