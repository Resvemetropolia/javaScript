<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dice Probability Calculator</title>
</head>
<body>

<script>
    var numDice = prompt("Enter the number of dice:");
    var sumOfEyes = prompt("Enter the sum of eye numbers of interest:");
    var simulations = 10000; // Number of simulations
    var dice = parseInt(numDice);
    var targetSum = parseInt(sumOfEyes);
    if (isNaN(dice) || isNaN(targetSum) || dice <= 0 || targetSum <= 0) {
        document.body.innerHTML = "<h2>Dice Probability Calculator</h2>" +
                                  "<p>Invalid input. Please enter valid numbers greater than 0.</p>";
    } else {
        var successfulOutcomes = 0;
        for (var i = 0; i < simulations; i++) {
            var currentSum = 0;
            for (var j = 0; j < dice; j++) {
                currentSum += Math.floor(Math.random() * 6) + 1; // Assuming a six-sided die
            }
            if (currentSum === targetSum) {
                successfulOutcomes++;
            }
        }

        var probability = (successfulOutcomes / simulations) * 100;
        document.body.innerHTML = "<h2>Dice Probability Calculator</h2>" +
                                  "<p>Probability to get sum " + targetSum + " with " + dice + " dice is " +
                                  probability.toFixed(2) + "%.</p>";
    }
</script>
</body>
</html>
