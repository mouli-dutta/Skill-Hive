const Achievements = {
    init() {
        const unlocked = Storage.get('achievements', []);
        Storage.set('achievements', unlocked);
    },
    
    check(type, value) {
        const toCheck = AchievementsData.filter(ach => ach.type === type);
        
        toCheck.forEach(achievement => {
            if (this.isUnlocked(achievement.id)) return;
            
            if (this.meetsRequirement(achievement, value)) {
                this.unlock(achievement.id);
            }
        });
    },
    
    meetsRequirement(achievement, value) {
        switch (achievement.type) {
            case 'lesson':
                return value >= achievement.requirement;
            case 'streak':
                return value >= achievement.requirement;
            case 'level':
                return value >= achievement.requirement;
            case 'quiz':
                return value >= achievement.requirement;
            case 'xp':
                return value >= achievement.requirement;
            default:
                return false;
        }
    },
    
    unlock(achievementId) {
        const unlocked = Storage.get('achievements', []);
        
        if (unlocked.includes(achievementId)) return;
        
        unlocked.push(achievementId);
        Storage.set('achievements', unlocked);
        
        const achievement = AchievementsData.find(a => a.id === achievementId);
        if (achievement) {
            this.showUnlockNotification(achievement);
            XP.award(achievement.xp, `Achievement: ${achievement.title}`);
        }
    },
    
    isUnlocked(achievementId) {
        const unlocked = Storage.get('achievements', []);
        return unlocked.includes(achievementId);
    },
    
    getUnlocked() {
        const unlocked = Storage.get('achievements', []);
        return AchievementsData.filter(a => unlocked.includes(a.id));
    },
    
    getRecent(count = 3) {
        const unlocked = Storage.get('achievements', []);
        return AchievementsData
            .filter(a => unlocked.includes(a.id))
            .slice(-count)
            .reverse();
    },
    
    getProgress() {
        const unlocked = Storage.get('achievements', []);
        return {
            unlocked: unlocked.length,
            total: AchievementsData.length,
            percentage: Math.floor((unlocked.length / AchievementsData.length) * 100)
        };
    },
    
    showUnlockNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-unlock';
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--color-surface-elevated);
            border: 2px solid var(--color-primary);
            border-radius: var(--radius-lg);
            padding: 1.5rem;
            box-shadow: var(--shadow-xl);
            z-index: 10000;
            min-width: 300px;
        `;
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="font-size: 3rem;">${achievement.icon}</div>
                <div style="flex: 1;">
                    <div style="font-size: 0.75rem; color: var(--color-primary); font-weight: 600; text-transform: uppercase; margin-bottom: 0.25rem;">Achievement Unlocked!</div>
                    <div style="font-weight: 600; margin-bottom: 0.25rem;">${achievement.title}</div>
                    <div style="font-size: 0.875rem; color: var(--color-text-secondary);">${achievement.description}</div>
                    <div style="margin-top: 0.5rem;">
                        <span class="badge badge-gradient">+${achievement.xp} XP</span>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }
};
