<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting Hat</title>
</head>
<body>

<script>
    var studentName = prompt("Enter the student's name:");

    var randomNumber = Math.floor(Math.random() * 4) + 1;

    var house;
    switch (randomNumber) {
        case 1:
            house = "Gryffindor";
            break;
        case 2:
            house = "Slytherin";
            break;
        case 3:
            house = "Hufflepuff";
            break;
        case 4:
            house = "Ravenclaw";
            break;
        default:
            house = "Unknown House";
    }

    document.body.innerHTML = "<h2>Sorting Hat Result</h2>" +
                              "<p>" + studentName + ", you are in " + house + ".</p>";
</script>

</body>
</html>
