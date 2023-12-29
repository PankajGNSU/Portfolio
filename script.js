let toggle_button = document
  .getElementById("toggle_btn")
  .addEventListener("click", () => {
    let body = document.getElementsByTagName("body")[0];
    let body_curr_theme = document.getElementsByTagName("body")[0].classList[0];
    if (body_curr_theme == "dark_theme") {
      body.classList.remove("dark_theme");
      body.classList.add("light_theme");
    } else {
      body.classList.remove("light_theme");
      body.classList.add("dark_theme");
    }
  });
