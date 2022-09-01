function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message")
}


document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.querySelector("#login");
    const body = document.querySelector("#body");
    const bodys = document.querySelector("#bodys");
    const test = document.querySelector("#test");
    const play = document.querySelector("#play");

    document.querySelector("#pagrindas").addEventListener("click", e => {
        e.preventDefault();
        body.classList.add("form--hidden");
        bodys.classList.remove("bodys");
        play.classList.remove("form--hidden");
        play.classList.add("play");
        test.classList.remove("form--hidden");
        test.classList.add("job");

    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
    var input1 = text.value;
        if (input1 == "1" ) {


            body.classList.add("form--hidden");
            bodys.classList.remove("bodys");
            play.classList.remove("form--hidden");
            play.classList.add("play");
            test.classList.remove("form--hidden");
            test.classList.add("job");
        } else {
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 3) {
                setInputError(inputElement, "Username must be at least 3 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});