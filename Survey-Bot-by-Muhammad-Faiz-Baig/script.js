document.addEventListener("DOMContentLoaded", function () {
    let questions = [
        'What\'s your name?',
        'Where are you from?',
        'What\'s your Date of birth?',
        'What project are you working on?',
        'It was nice talking to you :)'
    ];

    let num = 0;
    let inputBox = document.querySelector("#ans");
    let output = document.querySelector("#result");

    if (output) {
        output.innerHTML = questions[num];
    }

    function showResponse() {
        let input = inputBox.value;
        if (inputBox.value == "") {
            // Handle empty input
        } else {
            let botResponse = generateBotResponse(num, input);
            output.innerHTML = botResponse;

            inputBox.value = "";
            inputBox.setAttribute("placeholder", "Wait for 2 secs");
            ++num;
            setTimeout(changeQuestion, 2000);
        }
    }

    function generateBotResponse(questionNum, userInput) {
        switch (questionNum) {
            case 0:
                return 'Hey ' + userInput;
            case 1:
                return userInput + ' must be a good place';
            case 2:
                return 'So you are ' + (2023 - parseInt(userInput)) + ' years old';
            case 3:
                return 'Sound interesting!';
            case 4:
                return 'Awesome Thank you....';
            default:
                return '';
        }
    }

    function changeQuestion() {
        inputBox.setAttribute("placeholder", "Enter your response");
        if (num < questions.length) {
            output.innerHTML = questions[num];
        } else {
            inputBox.style.display = "none";
            document.querySelector("h1").style.display = "block"; // Show the h1 element
        }
    }
    

    function checkKeyPress(e) {
        if (e.which == 13) {
            showResponse();
        }
    }

    $(document).on('keypress', function (e) {
        checkKeyPress(e);
    });

    $("#ans").focus();
});
console.log("Made By Muhammad Faiz Baig");