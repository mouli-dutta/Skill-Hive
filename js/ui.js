const UI = {
    showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toast-container');
        if (!container) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icons = {
            success: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>',
            error: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>',
            warning: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
            info: '<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
        };
        
        toast.innerHTML = `
            ${icons[type] || icons.info}
            <div class="toast-content">
                <div class="toast-message">${message}</div>
            </div>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },
    
    showModal(title, content, actions = []) {
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.innerHTML = `
            <div class="modal animate-scale-in">
                <div class="modal-header">
                    <h3 class="modal-title">${title}</h3>
                    <button class="modal-close" aria-label="Close">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="modal-body">${content}</div>
                ${actions.length ? `<div class="modal-footer">${actions.map(a => `<button class="btn ${a.class || 'btn-secondary'}" data-action="${a.action}">${a.label}</button>`).join('')}</div>` : ''}
            </div>
        `;
        
        document.body.appendChild(backdrop);
        
        const closeModal = () => {
            backdrop.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => backdrop.remove(), 300);
        };
        
        backdrop.querySelector('.modal-close').addEventListener('click', closeModal);
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeModal();
        });
        
        actions.forEach(action => {
            const btn = backdrop.querySelector(`[data-action="${action.action}"]`);
            if (btn) {
                btn.addEventListener('click', () => {
                    if (action.handler) action.handler();
                    closeModal();
                });
            }
        });
        
        return { close: closeModal };
    },
    
    showConfirm(title, message, onConfirm) {
        return this.showModal(title, `<p>${message}</p>`, [
            { label: 'Cancel', class: 'btn-secondary', action: 'cancel' },
            { label: 'Confirm', class: 'btn-primary', action: 'confirm', handler: onConfirm }
        ]);
    },
    
    showLoading(message = 'Loading...') {
        const loading = document.createElement('div');
        loading.className = 'modal-backdrop';
        loading.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <p>${message}</p>
            </div>
        `;
        loading.id = 'loading-overlay';
        document.body.appendChild(loading);
    },
    
    hideLoading() {
        const loading = document.getElementById('loading-overlay');
        if (loading) loading.remove();
    },
    
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
        }
    },
    
    updateStreak(days) {
        const streakElements = document.querySelectorAll('#sidebar-streak, .streak-number');
        streakElements.forEach(el => {
            el.textContent = days;
        });
    },
    
    setActivePage(route) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.route === route) {
                item.classList.add('active');
            }
        });
    }
};
