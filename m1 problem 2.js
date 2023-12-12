<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Greeting Program</title>
</head>
<body>

<script>
    var userName = prompt("Please enter your name:");
    var greetingMessage = "Hello, " + userName + "!";
    document.body.innerHTML = "<h1>" + greetingMessage + "</h1>";
</script>

</body>
</html>
