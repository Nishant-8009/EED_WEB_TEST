const FilterStudents = (query) => {
    const notFoundMessageElement = document.getElementById(`notFoundMessage_staff`);
    notFoundMessageElement.style.display = "none";
    const cards = document.querySelectorAll(`#card_body .card`);
    let isFound = false;
    cards.forEach((item) => {
        const text = item.innerText.trim().toString().toLowerCase();
        if (text.includes(query.toLowerCase())) {
            isFound = true;
            item.style.display = "flex";
        } else {
            item.style.display = "none";
        }
    });
    isFound ? notFoundMessageElement.style.display = "none" : notFoundMessageElement.style.display = "block";
}


window.addEventListener('load', () => {
    // Get all the elements with class="custom-select" and add custom Select2 functionality to them
    let input = document.getElementById("search_staff");
    input.addEventListener('input', () => {
        FilterStudents(input.value)
    })
})