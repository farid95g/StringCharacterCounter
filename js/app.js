let text = document.getElementById("text");
let warning = document.querySelector("span");
let button = document.getElementById("submit");
let table = document.querySelector("table");
let tableBody = document.querySelector("table tbody");

function countCharacters(text) {
    let char_counter = {};
    for (let char of text) {
        if (char_counter[char] === undefined)
            char_counter[char] = 1;
        else
            char_counter[char]++;
    }
    return char_counter;
}

text.addEventListener("keyup", function(e) {
    if (this.value.trim() === "") {
        warning.style.display = "block";
        table.classList.add("d-none");
    } else {
        warning.style.display = "none";
    }
    if (e.keyCode === 13) {
        this.value = "";
        this.blur();
    }
});

button.addEventListener("click", function() {
    tableBody.innerHTML = null;
    let counts = countCharacters(text.value);
    let i = 1;
    for (let char in counts) {
        let row = document.createElement("tr");
        let number = document.createElement("th");
        number.setAttribute("scope", "row");
        number.innerText = i;
        let character = document.createElement("td");
        character.innerText = `" ${char} "`;
        let quantity = document.createElement("td");
        quantity.innerText = counts[char];
        row.appendChild(number);
        row.appendChild(character);
        row.appendChild(quantity);
        tableBody.appendChild(row);
        i++;
    }
    table.classList.remove("d-none");
    text.value = "";
});

text.addEventListener("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        tableBody.innerHTML = null;
        let counts = countCharacters(text.value);
        let i = 1;
        for (let char in counts) {
            let row = document.createElement("tr");
            let number = document.createElement("th");
            number.setAttribute("scope", "row");
            number.innerText = i;
            let character = document.createElement("td");
            character.innerText = `" ${char} "`;
            let quantity = document.createElement("td");
            quantity.innerText = counts[char];
            row.appendChild(number);
            row.appendChild(character);
            row.appendChild(quantity);
            tableBody.appendChild(row);
            i++;
        }
        table.classList.remove("d-none");
    }
})