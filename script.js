document.addEventListener('DOMContentLoaded', () => {
    // Function to set dark mode preference in localStorage
    function setDarkModePreference(darkModeEnabled) {
        localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
    }

    // Function to toggle dark mode on or off
    function toggleDarkMode(darkModeEnabled) {
        const body = document.body;
        body.classList.toggle('dark-mode', darkModeEnabled);
        setDarkModePreference(darkModeEnabled);
    }

    // Function to check dark mode preference and apply styles accordingly
    function applyDarkModePreference() {
        const darkModePreference = localStorage.getItem('darkMode');
        const darkModeEnabled = darkModePreference === 'enabled';
        toggleDarkMode(darkModeEnabled);
    }

    // Apply dark mode preference on page load
    applyDarkModePreference();

    // Event listener for the dark mode toggle switch
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('change', () => {
        const darkModeEnabled = darkModeToggle.checked;
        toggleDarkMode(darkModeEnabled);
    });

    // People list creation
    const people = [
        { name: 'Ken Ymil Paragas', imgSrc: 'IMGS/ken.jpg', infoPage: 'ken.html' },
        { name: 'Adrianne Alvarez', imgSrc: 'IMGS/ian.jpg', infoPage: 'ian.html' },
        { name: 'John Riswan Calisaan', imgSrc: 'IMGS/ris.jpg', infoPage: 'ris.html' },
        { name: 'John Andrei Avila', imgSrc: 'IMGS/dre.jpg', infoPage: 'dre.html' },
        { name: 'Miguel Rodriguez', imgSrc: 'IMGS/mig.jpeg', infoPage: 'mig.html' }
    ];

    const peopleList = document.getElementById('people-list');

    people.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person');
        
        const link = document.createElement('a');
        link.href = person.infoPage;
        link.target = '_blank';
        
        const img = document.createElement('img');
        img.src = person.imgSrc;
        img.alt = person.name;
        
        const name = document.createElement('h3');
        name.textContent = person.name;
        
        link.appendChild(img);
        link.appendChild(name);
        personDiv.appendChild(link);
        
        peopleList.appendChild(personDiv);
    });

    // Add touch event listeners
    let touchStartX = null;
    let touchStartY = null;

    document.addEventListener('touchstart', (event) => {
        touchStartX = event.touches[0].clientX;
        touchStartY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', (event) => {
        if (!touchStartX || !touchStartY) return;

        const touchEndX = event.touches[0].clientX;
        const touchEndY = event.touches[0].clientY;

        const deltaX = touchEndX - touchStartX;
        const deltaY = touchEndY - touchStartY;

        // Detect swipe direction
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            // Horizontal swipe
            if (deltaX > 0) {
                // Swipe right
                console.log('Swipe right');
            } else {
                // Swipe left
                console.log('Swipe left');
            }
        } else {
            // Vertical swipe
            if (deltaY > 0) {
                // Swipe down
                console.log('Swipe down');
            } else {
                // Swipe up
                console.log('Swipe up');
            }
        }

        touchStartX = null;
        touchStartY = null;
    });
});