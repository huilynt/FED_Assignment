/* Other Option*/
var otherCheckbox = document.querySelector('input[value="other"]');
var otherText = document.querySelector('input[id="other-text"]');
otherText.style.visibility = 'hidden';

otherCheckbox.onchange = function () {
    if (otherCheckbox.checked) {
        otherText.style.visibility = 'visible';
        otherText.value = '';
    } else {
        otherText.style.visibility = 'hidden';
    }
};

function greeting() {
    alert("Form submitted. Thank you for volunteering!");
}

function confirmation() {
    return confirm("Reset?");
}