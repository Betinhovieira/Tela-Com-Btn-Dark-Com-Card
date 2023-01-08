    const changeThemeBtn = document.querySelector("#change-theme")

    // Toggle dark mode
    function toggleDarkmode() {
    document.body.classList.toggle("dark");
    }

    // Load ligth or dar mode
    function loadTheme(){
        const darkMode = localStorage.getItem("dark")

        if(darkMode){
            toggleDarkmode();

        }
    }

    loadTheme();

    // Load ligth or dark mode
    changeThemeBtn.addEventListener("change", function() {
    document.body.classList.toggle("dark");

    // save or remove dark mode
    localStorage.removeItem("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
})