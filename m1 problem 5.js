<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leap Year Checker</title>
</head>
<body>

<script>
    var inputYear = prompt("Enter a year:");

    var year = parseInt(inputYear);

    var isLeapYear = false;

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        isLeapYear = true;
    }

    document.body.innerHTML = "<h2>Leap Year Checker</h2>" +
                              "<p>" + year + " is " + (isLeapYear ? "" : "not ") + "a leap year.</p>";
</script>

</body>
</html>
