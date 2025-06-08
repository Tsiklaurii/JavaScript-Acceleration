// localStorage
const toggleBtn = document.getElementById("toggle-theme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const theme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
});



// sessionStorage
// მონაცემები არ დაიკარგება გვერდის განახლებისას
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

// sessionStorage-ის შემოწმება
if (sessionStorage.getItem("name")) {
    step1.value = sessionStorage.getItem("name");
}
if (sessionStorage.getItem("email")) {
    step2.value = sessionStorage.getItem("email");
}

// შენახვა sessionStorage-ში 
step1.addEventListener("input", () => {
    sessionStorage.setItem("name", step1.value);
});
step2.addEventListener("input", () => {
    sessionStorage.setItem("email", step2.value);
});



// Cookies
// checkbox-ის მომიშვნის შემთხვევაში ელფოსტა შენახულია cookie-ში

// ფორმის გაგზავნა
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = step2.value;
    const remember = document.getElementById("remember-email").checked;

    if (remember) {
        setCookie("email", email, 7);
    } else {
        setCookie("email", "", -1); // წაშლა
    }

    alert("ფორმა წარმატებით გაიგზავნა!");
});

// Cookies დამახსოვრება
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}
// document.cookie = "email=user@example.com; expires=Tue, 11 Jun 2025 12:00:00 GMT; path=/";

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return null;
}

// თუ cookie არსებობს, ვავსებთ email ველს
const savedEmail = getCookie("email");
if (savedEmail) {
    step2.value = savedEmail;
    document.getElementById("remember-email").checked = true;
}