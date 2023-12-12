<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Leap Year List</title>
</head>
<body>

<script>
    var startYear = prompt("Enter the start year:");
    var endYear = prompt("Enter the end year:");
    var start = parseInt(startYear);
    var end = parseInt(endYear);
    if (isNaN(start) || isNaN(end) || start > end) {
        document.body.innerHTML = "<h2>Leap Year List</h2>" +
                                  "<p>Invalid input. Please enter valid start and end years.</p>";
    } else {
        var leapYearList = document.createElement("ul");
        for (var year = start; year <= end; year++) {
            if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
                var listItem = document.createElement("li");
                listItem.textContent = year;
                leapYearList.appendChild(listItem);
            }
        }
        document.body.appendChild(leapYearList);
    }
</script>

</body>
</html>
