<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prime Number Checker</title>
</head>
<body>

<script>
    var userInput = prompt("Enter an integer:");
    var number = parseInt(userInput);
    if (isNaN(number) || number <= 1) {
        document.body.innerHTML = "<h2>Prime Number Checker</h2>" +
                                  "<p>Invalid input. Please enter a valid integer greater than 1.</p>";
    } else {
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        document.body.innerHTML = "<h2>Prime Number Checker</h2>" +
                                  "<p>" + number + " is " + (isPrime ? "" : "not ") + "a prime number.</p>";
    }
</script>

</body>
</html>
