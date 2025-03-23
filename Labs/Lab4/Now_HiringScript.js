// Age - Potential employees must be at least 21 and unfortunately,
// they cannot be older than 99 years old.
// Also, make sure data type is a number in final form

// Phone - numbers need to be consistent and all applicants must submit one.
// HR has recommended that phone numbers follow a 111-222-3333 formatting and users
// will probably need a reminder.

//     More Info – text area with room for 4 lines of entries and a max number of thirty
//     characters. As the user enters characters, there should be a counter
//     indicating how many characters the user still has to enter.

const textarea = document.getElementById('aboutMyself');
const charRemainingTextBox = document.getElementById('charsRemaining');
const maxLength = 30

textarea.addEventListener('input', function() {
    const currentLength = textarea.value.length;
    if (currentLength < maxLength)
        charRemainingTextBox.textContent = maxLength - currentLength + " Characters remaining";
    else
        charRemainingTextBox.textContent = "ERROR: Too many characters!";

});

    document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = {};

    // Grab values from standard inputs and textareas
    form.querySelectorAll("input[type='number'], input[type='text'], input[type='email'], input[type='password'], textarea").forEach(input => {
    if (input.id)
        formData[input.id] = input.value;
    });

    // State selector
    const stateSelect = form.querySelector("#inputState");
    formData["inputState"] = stateSelect.value;

    // MaritalStatus radio
    const maritalStatus = form.querySelector("input[name='MaritalStatus']:checked");
    if (maritalStatus)
        formData["MaritalStatus"] = maritalStatus.value;

    // Favorite Color checkboxes
    const checkboxes = form.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(checkbox => {
    formData[checkbox.name] = checkbox.checked ? checkbox.value : null;
    });

    // Begin validation

    // Age
    formData.age = parseInt(formData.age)
        // console.log(formData.age. NaN)
    if (isNaN(formData.age) || formData.age == "")
        console.log("ERROR: Age must be entered as a number!")
    if (formData.age < 21 || formData.age > 100)
        console.log("ERROR: Age must be between 21 and 100!")

    // Number
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/
    if (!phonePattern.test(formData.phone))
        console.log("ERROR: Phone number must be entered as 'XXX-XXX-XXXX'");


    // About myself section
        if (formData.aboutMyself.length > 30)
            console.log("ERROR: Too many characters!");

        // Output data
        console.log(formData);
});


