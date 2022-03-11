let form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(event) {
    event.preventDefault();

    let answers = document.querySelectorAll("input[type='radio']");

    let points = 0;
    answers.forEach((answer) => {
        if (answer.checked) {
            points += Number.parseInt(answer.getAttribute("data-points"))
        }
    })

    console.log(event);

    form.classList.toggle("hidden");
}