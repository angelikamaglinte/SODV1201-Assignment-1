/*
* @name: Assignement1
* @Course Code: SODV1201
* @class: Software Development Diploma program.
* @author: Marie Angelika Maglinte
*/

function MarkToGrade() {
    // The MarkToGrade function scrapes the student mark out of the mark-input-box element and verifies it is realistic.
    var mark = document.getElementById('mark-input-box').value;
    // If an invalid mark is entered, it displays a message back to the user in the validation-message element.
    var validationMessage = document.getElementById('validation-message');
    var gradeResult = document.getElementById('grade-result');

    try {
        var markValue = parseInt(mark);
        // A Mark must be number only, nonnegative
        if (isNaN(markValue)) {
            throw "Please enter a valid number.";
        }
        // A Mark must be less than 101
        if (markValue < 0 || markValue > 100) {
            throw "Mark must be between 0 and 100.";
        }
        // If the user entered any value above 90 Grade A should be displayed as a result
        if (markValue > 90) {
            gradeResult.textContent = "Grade: A";
            // If user entered any value above 80 Grade B should be displayed
        } else if (markValue > 80) {
            gradeResult.textContent = "Grade: B";
            // If user entered any value above 70 Grade C should be displayed
        } else if (markValue > 70) {
            gradeResult.textContent = "Grade: C";
            // If user entered any value above 50 Grade D should be displayed
        } else if (markValue > 50) {
            gradeResult.textContent = "Grade: D";
            // If user entered any value less than 50 Grade F should be displayed
        } else {
            gradeResult.textContent = "Grade: F";
        }

        validationMessage.textContent = "";
    } catch (error) {
        validationMessage.textContent = error;
        gradeResult.textContent = "";
    }
}

function createFooter() {
    var footer = document.getElementById('footer');
    var fullName = "Marie Angelika Maglinte";
    var currentYear = new Date().getFullYear();
    footer.textContent = fullName + " © " + currentYear;
}

createFooter();


// Instructions:
// Build a Mark to Grade converter web page with the following specification and create a link to it in
// your profile page (20 points)
// • The MarkToGrade function scrapes the student mark out of the mark-input-box element
// and verifies it is realistic.
// • A Mark must be number only, nonnegative, and less than 101.
// • If an invalid mark is entered, it displays a message back to the user in the. validationmessage element.
// • Messages should be informative... return as many different messages as you can to
// guide the user what kind of erroneous value has entered
// - If the user entered any value above 90 Grade A should be displayed as a result
// - If user entered any value above 80 Grade B should be displayed
// - If user entered any value above 70 Grade C should be displayed
// - If user entered any value above 50 Grade D should be displayed
// - If user entered any value less than 50 Grade F should be displayed
// - Hint 1: In JavaScript, we can use the global parseInt function to try and convert a string
// to a number.
// • Hint 2: Use exception handling.
// • Hint 3: Use HTML and JavaScript 