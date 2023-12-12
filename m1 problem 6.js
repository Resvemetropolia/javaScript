<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Square Root Calculator</title>
</head>
<body>

<script>
    var shouldCalculate = confirm("Should I calculate the square root?");

    if (shouldCalculate) {
        var inputNumber = prompt("Enter a number:");
        var number = parseFloat(inputNumber);
        if (isNaN(number)) {
            document.body.innerHTML = "<h2>Square Root Calculator</h2>" +
                                      "<p>Invalid input. Please enter a valid number.</p>";
        } else if (number < 0) {
            document.body.innerHTML = "<h2>Square Root Calculator</h2>" +
                                      "<p>The square root of a negative number is not defined.</p>";
        } else {
            var squareRoot = Math.sqrt(number);
            document.body.innerHTML = "<h2>Square Root Calculator</h2>" +
                                      "<p>The square root of " + number + " is " + squareRoot + ".</p>";
        }
    } else {
        document.body.innerHTML = "<h2>Square Root Calculator</h2>" +
                                  "<p>The square root is not calculated.</p>";
    }
</script>
</body>
</html>
