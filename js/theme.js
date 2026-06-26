const Theme = {
    current: 'auto',
    
    init() {
        const saved = Storage.get('theme', 'auto');
        this.set(saved);
        this.setupToggle();
        this.watchSystemTheme();
    },
    
    set(theme) {
        this.current = theme;
        Storage.set('theme', theme);
        
        document.body.classList.add('theme-transition');
        
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
        
        this.updateToggleIcon();
        
        setTimeout(() => {
            document.body.classList.remove('theme-transition');
        }, 300);
    },
    
    toggle() {
        const themes = ['light', 'dark', 'auto'];
        const currentIndex = themes.indexOf(this.current);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        this.set(nextTheme);
    },
    
    setupToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }
    },
    
    updateToggleIcon() {
        const sunIcon = document.querySelector('.icon-sun');
        const moonIcon = document.querySelector('.icon-moon');
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (sunIcon && moonIcon) {
            if (isDark) {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        }
    },
    
    watchSystemTheme() {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', () => {
            if (this.current === 'auto') {
                this.set('auto');
            }
        });
    },
    
    isDark() {
        return document.documentElement.getAttribute('data-theme') === 'dark';
    }
};
