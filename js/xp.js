const XP = {
    init() {
        const user = Storage.get('user', this.createDefaultUser());
        Storage.set('user', user);
    },
    
    createDefaultUser() {
        return {
            name: 'Learner',
            level: 1,
            xp: 0,
            totalXP: 0,
            coins: 0,
            gems: 0,
            createdAt: Date.now()
        };
    },
    
    award(amount, reason = '') {
        const user = Storage.get('user');
        user.xp += amount;
        user.totalXP += amount;
        
        const oldLevel = user.level;
        while (user.xp >= this.getXPForLevel(user.level + 1)) {
            user.xp -= this.getXPForLevel(user.level + 1);
            user.level++;
        }
        
        Storage.set('user', user);
        
        if (user.level > oldLevel) {
            this.onLevelUp(user.level);
        }
        
        this.showXPGain(amount, reason);
        
        return user;
    },
    
    getXPForLevel(level) {
        return Math.floor(100 * Math.pow(1.5, level - 1));
    },
    
    getProgressToNextLevel() {
        const user = Storage.get('user');
        const required = this.getXPForLevel(user.level + 1);
        return Math.floor((user.xp / required) * 100);
    },
    
    getCurrentLevel() {
        const user = Storage.get('user');
        return user.level;
    },
    
    getCurrentXP() {
        const user = Storage.get('user');
        return user.xp;
    },
    
    getTotalXP() {
        const user = Storage.get('user');
        return user.totalXP;
    },
    
    onLevelUp(newLevel) {
        UI.showToast(`🎉 Level Up! You're now level ${newLevel}!`, 'success', 5000);
        Achievements.check('level', newLevel);
        
        const user = Storage.get('user');
        user.coins += newLevel * 10;
        user.gems += Math.floor(newLevel / 5);
        Storage.set('user', user);
        
        this.showLevelUpAnimation(newLevel);
    },
    
    showXPGain(amount, reason) {
        const xpElement = document.createElement('div');
        xpElement.className = 'xp-gain';
        xpElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--gradient-primary);
            color: white;
            padding: 1rem 2rem;
            border-radius: var(--radius-lg);
            font-weight: bold;
            font-size: 1.5rem;
            z-index: 10000;
            animation: xpFloat 1s ease-out forwards;
            box-shadow: var(--shadow-xl);
        `;
        xpElement.textContent = `+${amount} XP`;
        if (reason) {
            xpElement.innerHTML += `<div style="font-size: 0.875rem; opacity: 0.9; margin-top: 0.25rem;">${reason}</div>`;
        }
        
        document.body.appendChild(xpElement);
        setTimeout(() => xpElement.remove(), 1000);
    },
    
    showLevelUpAnimation(level) {
        const animation = document.createElement('div');
        animation.className = 'level-up-animation';
        animation.innerHTML = `
            <div style="background: var(--gradient-primary); padding: 2rem 3rem; border-radius: var(--radius-xl); color: white; text-align: center; box-shadow: var(--shadow-2xl);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                <div style="font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem;">Level Up!</div>
                <div style="font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem;">Level ${level}</div>
                <div style="font-size: 1rem; opacity: 0.9;">Keep up the great work!</div>
            </div>
        `;
        
        document.body.appendChild(animation);
        setTimeout(() => {
            animation.style.animation = 'fadeOut 0.5s ease-out';
            setTimeout(() => animation.remove(), 500);
        }, 3000);
    },
    
    getTitle(level) {
        if (level < 5) return 'Beginner';
        if (level < 10) return 'Learner';
        if (level < 20) return 'Practitioner';
        if (level < 30) return 'Expert';
        if (level < 50) return 'Master';
        return 'Grandmaster';
    }
};
