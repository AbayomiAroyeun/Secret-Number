function showModal(question) {
    // logic for showing and implenting user input

    return new Promise((resolve) => {
        // modal implentation here 
        const userInput = prompt(question, "");
        resolve(userInput);
    });

}



function startGame() {
    let category = document.getElementById("category").value.toLocaleLowerCase();

    if (category === "even") {
        getSecretNumberEven();

    } else if (category === "odd") {
        getSecretNumberOdd();

    } else {
        alert("please enter either 'even' or 'odd'.");
    }

}

function getSecretNumberEven() {
    let secretNumber = -1;

    let lettersEven, isLessThan3, isMoreThan5, isDivisibleBy5;

    showModal("How many letters does it have?")
        .then((letters) => {
            lettersEven = parseInt(letters);
            return showModal("Is the number less than 3?");
        })
        .then((lessThan3) => {
            isLessThan3 = lessThan3;
            return showModal("Is the Number more than 5?");
        })
        .then((moreThan5) => {
            isMoreThan5 = moreThan5;
            return showModal("Is the number didvible by 5?");
        })
        .then((divisibleBy5) => {
            isDivisibleBy5 = divisibleBy5;

            if (!isNaN(lettersEven)) {
                if (lettersEven === 3 && !isMoreThan5 && isDivisibleBy5) secretNumber = 10;
                else if (lettersEven === 3 && isLessThan3) secretNumber = 2;
                else if (lettersEven === 4 && isLessThan3) secretNumber = 0 
                else if (lettersEven === 4) {
                  if (isLessThan3)secretNumber = 0
                  else secretNumber = 4;
                }
                else if (lettersEven === 5) secretNumber = 8;
                else if (lettersEven === 3) secretNumber = 6;
                else {
                    alert("please answer the question correctly");
                }
                displayResult(secretNumber);
            }

        })
        .catch((error) => {
            console.error("Error ocurred:", error);
        });
}

function getSecretNumberOdd() {
    let secretNumber = -1;

    let lettersOdd, isMultipleOf3, isLessThan6;

    showModal("How many letters does it have?")
        .then((letters) => {
            lettersOdd = parseInt(letters);
            return showModal("Is it a multiple of 3?");
        })
        .then((multipleOf3) => {
             isMultipleOf3 = multipleOf3;
            return showModal("Is the number less than 6?");
        })
        .then((lessThan6) => {
             isLessThan6 = lessThan6;

        if (!isNaN(lettersOdd)) {
            if (lettersOdd === 3) secretNumber = 1;
            else if (lettersOdd === 4 && isMultipleOf3) secretNumber = 9;
            else if (lettersOdd === 4) secretNumber = 5;
            else if (lettersOdd === 5 && isLessThan6) secretNumber = 3;
            else if (lettersOdd === 5) secretNumber = 7;
            else {
                 alert("please answer the question correctly");
            }
            displayResult(secretNumber);
        
        }
    
    })
    .catch((error) => {
        console.error("Error occurred:", error);
    });
}


function displayResult(secretNumber) {
    let resultContainer = document.getElementById("result");

    if (secretNumber !== -1) {
        resultContainer.innerHTML = "Your Secret Number is: " + secretNumber + ".";
    } else {
        resultContainer.innerHTML = "Your Secret Number could not be revealed!";
    }
}


