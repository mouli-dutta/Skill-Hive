const App = {
    init() {
        console.log('🚀 Learn AI - Initializing...');
        
        XP.init();
        Streak.init();
        Achievements.init();
        Progress.init();
        Gamification.init();
        Theme.init();
        
        this.setupEventListeners();
        this.hideLoadingScreen();
        this.showApp();
        
        Router.init();
        
        console.log('✅ Learn AI - Ready!');
    },
    
    setupEventListeners() {
        const sidebarToggle = document.getElementById('sidebar-toggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => UI.toggleSidebar());
        }
        
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
        });
        
        const searchTrigger = document.getElementById('search-trigger');
        if (searchTrigger) {
            searchTrigger.addEventListener('click', () => this.openSearch());
        }
    },
    
    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => loadingScreen.remove(), 300);
            }, 500);
        }
    },
    
    showApp() {
        document.getElementById('top-nav')?.classList.remove('hidden');
        document.getElementById('sidebar')?.classList.remove('hidden');
        document.getElementById('main-content')?.classList.remove('hidden');
    },
    
    openSearch() {
        UI.showModal('Search', `
            <input type="text" class="input" placeholder="Search lessons, courses..." autofocus>
            <div class="mt-lg">
                <div class="text-sm text-secondary">Popular searches:</div>
                <div class="flex gap-sm mt-sm flex-wrap">
                    <span class="badge badge-secondary">Python Basics</span>
                    <span class="badge badge-secondary">Machine Learning</span>
                    <span class="badge badge-secondary">Neural Networks</span>
                </div>
            </div>
        `);
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => App.init());
} else {
    App.init();
}
