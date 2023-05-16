export function initializeColorMode() {
  const darkButton = document.getElementById("dark");
  const lightButton = document.getElementById("light");

  const setDarkMode = () => {
    document.querySelector("body").classList = "dark";
    document.querySelector("header").classList = "header container";
    document.querySelector(".header__title").classList = "header__title";
    localStorage.setItem("colorMode", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").classList = "light";
    document.querySelector("header").classList = "header container";
    document.querySelector(".header__title").classList = "header__title";
    localStorage.setItem("colorMode", "light");
  };

  const getColorModeFromLocalStorage = () => {
    return localStorage.getItem("colorMode");
  };

  const getColorModeFromPreferences = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"; // If preference is set or does not match anything (light is default)
  };

  const loadAndUpdateColor = () => {
    // Local storage has precedence over the prefers-color-scheme
    const color =
      getColorModeFromLocalStorage() || getColorModeFromPreferences();
    color === "dark" ? darkButton.click() : lightButton.click();
  };

  const handleRadioClick = (event) => {
    if (darkButton.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  const radioButtons = document.querySelectorAll(".toggle__wrapper input");
  radioButtons.forEach((button) => {
    button.addEventListener("click", handleRadioClick);
  });

  loadAndUpdateColor();
}
