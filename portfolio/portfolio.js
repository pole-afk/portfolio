const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement; // Dobijamo <html> element

// Funkcija za promenu teme
function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
}

// Provera sačuvane teme pri učitavanju stranice
if (localStorage.getItem('color-theme') === 'dark' || (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
} else {
    htmlElement.classList.remove('dark');
}

// Dodajemo event listener na dugme
themeToggle.addEventListener('click', toggleTheme);