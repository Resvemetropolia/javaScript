<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Number Operations</title>
</head>
<body>

<script>
    // JavaScript code to prompt for three integers and perform operations
    var num1 = prompt("Enter the first integer:");
    var num2 = prompt("Enter the second integer:");
    var num3 = prompt("Enter the third integer:");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    var sum = num1 + num2 + num3;
    var product = num1 * num2 * num3;
    var average = sum / 3;

    document.body.innerHTML = "<h2>Results</h2>" +
                              "<p>Sum: " + sum + "</p>" +
                              "<p>Product: " + product + "</p>" +
                              "<p>Average: " + average + "</p>";
</script>

</body>
</html>
