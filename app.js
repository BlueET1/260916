/**
 * Leo Watterson — Personal Editorial & Liquid Glass Timepiece
 * Core JavaScript Engine
 */

(function () {
    'use strict';

    // State
    let is24Hour = localStorage.getItem('leo_clock_24h') === 'true';
    let currentTheme = localStorage.getItem('leo_theme') || 'light';

    // Elements
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const periodEl = document.getElementById('period');
    const fullDateEl = document.getElementById('fullDateDisplay');
    const weekdayEl = document.getElementById('weekdayDisplay');
    const timezoneEl = document.getElementById('timezoneDisplay');
    const greetingEl = document.getElementById('greetingMessage');
    const themeBtn = document.getElementById('themeToggle');
    const formatBtn = document.getElementById('formatToggle');
    const copyBtn = document.getElementById('copyTimestampBtn');
    const liquidPanel = document.getElementById('liquidTimepiece');

    // Profile Elements
    const heroNameEl = document.getElementById('heroName');
    const profileDeptEl = document.getElementById('profileDept');
    const profileBioEl = document.getElementById('profileBio');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editModal = document.getElementById('editProfileModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const profileForm = document.getElementById('profileForm');
    const inputName = document.getElementById('inputName');
    const inputDept = document.getElementById('inputDept');
    const inputBio = document.getElementById('inputBio');

    // 1. Initialize Theme
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeBtn.textContent = 'Theme : Paper';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.textContent = 'Theme : Dark';
        }
        localStorage.setItem('leo_theme', theme);
    }
    applyTheme(currentTheme);

    themeBtn.addEventListener('click', () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
    });

    // 2. 12H / 24H Toggle
    function updateFormatBtn() {
        if (formatBtn) {
            formatBtn.textContent = is24Hour ? 'Mode: 24H' : 'Mode: 12H';
        }
    }
    updateFormatBtn();

    if (formatBtn) {
        formatBtn.addEventListener('click', () => {
            is24Hour = !is24Hour;
            localStorage.setItem('leo_clock_24h', is24Hour);
            updateFormatBtn();
            updateClock();
        });
    }

    // 3. Live Clock Engine
    function updateClock() {
        const now = new Date();
        const rawHours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        if (is24Hour) {
            hoursEl.textContent = String(rawHours).padStart(2, '0');
            periodEl.textContent = '24H';
        } else {
            const displayHours = String(rawHours % 12 || 12).padStart(2, '0');
            hoursEl.textContent = displayHours;
            periodEl.textContent = rawHours >= 12 ? 'PM' : 'AM';
        }

        minutesEl.textContent = minutes;
        secondsEl.textContent = seconds;

        // Calendar Date
        const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
        fullDateEl.textContent = now.toLocaleDateString('en-US', optionsDate);

        // Weekday
        weekdayEl.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });

        // Timezone
        try {
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
            timezoneEl.textContent = tz || 'Local Time';
        } catch (e) {
            timezoneEl.textContent = 'Local Time';
        }

        // Editorial Greeting
        if (rawHours >= 5 && rawHours < 12) {
            greetingEl.textContent = '“A tranquil morning with endless possibilities.”';
        } else if (rawHours >= 12 && rawHours < 18) {
            greetingEl.textContent = '“Focus and elegance through the afternoon.”';
        } else if (rawHours >= 18 && rawHours < 22) {
            greetingEl.textContent = '“Embrace the quiet beauty of twilight.”';
        } else {
            greetingEl.textContent = '“Midnight clarity in silent contemplation.”';
        }
    }

    updateClock();
    setInterval(updateClock, 1000);

    // 4. Copy Timestamp to Clipboard
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const now = new Date();
            const timestampText = `${now.toLocaleDateString()} ${now.toLocaleTimeString()} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`;
            navigator.clipboard.writeText(timestampText).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = 'Copied!';
                copyBtn.style.borderColor = 'var(--accent)';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                    copyBtn.style.borderColor = '';
                }, 2000);
            }).catch(() => {
                alert(`Timestamp: ${timestampText}`);
            });
        });
    }

    // 5. Interactive Liquid Glass 3D Refraction on Mouse Hover
    if (liquidPanel) {
        liquidPanel.addEventListener('mousemove', (e) => {
            const rect = liquidPanel.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            liquidPanel.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        });

        liquidPanel.addEventListener('mouseleave', () => {
            liquidPanel.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
        });
    }

    // 6. Editable Profile with localStorage
    const savedName = localStorage.getItem('leo_profile_name');
    const savedDept = localStorage.getItem('leo_profile_dept');
    const savedBio = localStorage.getItem('leo_profile_bio');

    if (savedName) heroNameEl.innerHTML = savedName;
    if (savedDept) profileDeptEl.textContent = savedDept;
    if (savedBio) profileBioEl.textContent = savedBio;

    if (editProfileBtn && editModal) {
        editProfileBtn.addEventListener('click', () => {
            inputName.value = heroNameEl.textContent.trim();
            inputDept.value = profileDeptEl.textContent.trim();
            inputBio.value = profileBioEl.textContent.trim();
            editModal.classList.add('active');
        });

        closeModalBtn.addEventListener('click', () => {
            editModal.classList.remove('active');
        });

        editModal.addEventListener('click', (e) => {
            if (e.target === editModal) editModal.classList.remove('active');
        });

        profileForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = inputName.value.trim() || 'Leo Watterson';
            const newDept = inputDept.value.trim() || 'Dept. of Computer Science & Engineering';
            const newBio = inputBio.value.trim() || 'Passionate about IoT and Software Architecture.';

            heroNameEl.textContent = newName;
            profileDeptEl.textContent = newDept;
            profileBioEl.textContent = newBio;

            localStorage.setItem('leo_profile_name', newName);
            localStorage.setItem('leo_profile_dept', newDept);
            localStorage.setItem('leo_profile_bio', newBio);

            editModal.classList.remove('active');
        });
    }

})();
