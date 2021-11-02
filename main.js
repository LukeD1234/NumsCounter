// Set initial count to 0
let count = 0;

// Select the buttons and value
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Create a forEach to loop through buttons
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        // If statement for each button type, decrease, reset and increase
        if (styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }

        // If statement to set colour depending on number value whether its positive, negative or 0
        if (count < 0) {
            value.style.color = '#FFAD00';
        }
        if (count > 0) {
            value.style.color = '#30FFAC';
        }
        if (count === 0) {
            value.style.color = '#00D7FF';
        }

        // Printing value to screen
        value.textContent = count;
    });
});
