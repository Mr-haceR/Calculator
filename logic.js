const display = document.getElementById("display");

function appendToDisplay(input)
{
    display.value += input;
}



function calculate()
{
    try
    {
        display.value = eval(display.value);
    }
    catch
    {
        display.value = "Syntax Error";
    }
}
function clearDisplay()
{
    display.value = "";
}

function clearsingle()
{
    var currentValue = display.value;
    if (currentValue.length > 0) {
        var newValue = currentValue.slice(0, -1);
        display.value = newValue;
    }
}