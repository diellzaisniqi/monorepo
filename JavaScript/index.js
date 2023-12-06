function shuffleValues() {
    const checkboxContainer = document.getElementById('checkboxContainer');
    const checkboxPairs = Array.from(checkboxContainer.children);

    // Shuffle the pairs
    for (let i = checkboxPairs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        checkboxContainer.insertBefore(checkboxPairs[j], checkboxPairs[i]);
    }
}

function changeValues() {
    const checkboxInputs = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxInputs.forEach(input => {
        // Change the value of the checkbox
        input.value = "NewValue";

        // Change the text content of the associated label
        const label = document.querySelector(`label[for="${input.id}"]`);
        if (label) {
            label.textContent = "NewValue";
        }
    });
}


function showSelectedValues(){
const selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
const selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

alert("Selected Values :" + selectedValues.join(", "));

}
