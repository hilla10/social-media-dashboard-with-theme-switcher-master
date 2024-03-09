const switchTheme = document.getElementById('switch-theme');
const rootElement = document.documentElement;
const localStorageKey = 'themePreference';

// Check if a theme preference exists in localStorage
const savedThemePreference = localStorage.getItem(localStorageKey);

// Check if the user's browser or operating system prefers dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: light)').matches;

// Determine the initial theme preference based on localStorage or browser/OS preference

if (savedThemePreference) {
    rootElement.setAttribute('data-theme', savedThemePreference);
} else if (prefersDarkMode) {
    rootElement.setAttribute('data-theme', 'light');
} else{
    rootElement.setAttribute('data-theme', 'dark');
};

// Event listener fo the toggle switch
switchTheme.addEventListener('change', (event) => {
    event.preventDefault();
    if (switchTheme.checked) {
        rootElement.setAttribute('data-theme', 'light');
        localStorage.setItem(localStorageKey, 'light')
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(localStorageKey, 'dark')
    }
});

if (savedThemePreference === 'light') {
    switchTheme.checked = true;
}