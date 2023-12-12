<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Roller</title>
</head>
<body>

<script>
    var numDiceRolls = prompt("Enter the number of dice rolls:");
    var sum = 0;
    var rolls = parseInt(numDiceRolls);
    if (isNaN(rolls) || rolls <= 0) {
        console.log("Invalid input. Please enter a valid number of dice rolls.");
    } else {
        for (var i = 0; i < rolls; i++) {
            var result = Math.floor(Math.random() * 6) + 1; // Assuming a six-sided die
            sum += result;
        }

        console.log("Number of Dice Rolls: " + rolls);
        console.log("Sum of Results: " + sum);
    }
</script>

</body>
</html>
