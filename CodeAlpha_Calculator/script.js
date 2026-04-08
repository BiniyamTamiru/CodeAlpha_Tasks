const display = document.getElementById("display");

/* Append values */
function appendValue(value) {
    display.value += value;
}

/* Clear display */
function clearDisplay() {
    display.value = "";
}

/* Delete last character */
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

/* Calculate result */
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Real-time calculation (auto result preview) */
display.addEventListener("input", () => {
    try {
        if (display.value !== "") {
            let result = eval(display.value);
            console.log("Preview:", result);
        }
    } catch {
        // ignore errors while typing
    }
});

/* Keyboard Support */
document.addEventListener("keydown", function(e) {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});