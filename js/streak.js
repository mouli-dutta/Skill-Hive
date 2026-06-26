const Streak = {
    init() {
        this.checkStreak();
    },
    
    checkStreak() {
        const today = this.getToday();
        const streakData = Storage.get('streak', {
            current: 0,
            longest: 0,
            lastDate: null,
            freezes: 0
        });
        
        if (!streakData.lastDate) {
            streakData.lastDate = today;
            streakData.current = 0;
            Storage.set('streak', streakData);
            return;
        }
        
        const daysDiff = this.getDaysDifference(streakData.lastDate, today);
        
        if (daysDiff === 0) {
            return;
        } else if (daysDiff === 1) {
            return;
        } else if (daysDiff > 1) {
            if (streakData.freezes > 0) {
                streakData.freezes--;
                UI.showToast('Streak freeze used! Your streak is safe 🛡️', 'info');
            } else {
                streakData.current = 0;
                UI.showToast('Streak lost! Start a new one today 💪', 'warning');
            }
            streakData.lastDate = today;
            Storage.set('streak', streakData);
        }
    },
    
    increment() {
        const today = this.getToday();
        const streakData = Storage.get('streak', {
            current: 0,
            longest: 0,
            lastDate: null,
            freezes: 0
        });
        
        const daysDiff = this.getDaysDifference(streakData.lastDate, today);
        
        if (daysDiff === 0) {
            return streakData.current;
        }
        
        if (daysDiff === 1 || !streakData.lastDate) {
            streakData.current++;
            streakData.lastDate = today;
            
            if (streakData.current > streakData.longest) {
                streakData.longest = streakData.current;
            }
            
            Storage.set('streak', streakData);
            UI.updateStreak(streakData.current);
            
            this.checkMilestones(streakData.current);
            Achievements.check('streak', streakData.current);
            
            if (streakData.current % 7 === 0) {
                streakData.freezes++;
                UI.showToast(`🎁 Earned a streak freeze! (${streakData.freezes} available)`, 'success');
                Storage.set('streak', streakData);
            }
            
            return streakData.current;
        }
        
        return streakData.current;
    },
    
    getCurrent() {
        const streakData = Storage.get('streak', { current: 0 });
        return streakData.current;
    },
    
    getLongest() {
        const streakData = Storage.get('streak', { longest: 0 });
        return streakData.longest;
    },
    
    getFreezes() {
        const streakData = Storage.get('streak', { freezes: 0 });
        return streakData.freezes;
    },
    
    checkMilestones(streak) {
        const milestones = [7, 14, 30, 60, 100, 365];
        if (milestones.includes(streak)) {
            this.celebrateMilestone(streak);
        }
    },
    
    celebrateMilestone(days) {
        UI.showToast(`🎉 Amazing! ${days} day streak milestone!`, 'success', 5000);
        XP.award(days * 10, `${days} Day Streak Milestone`);
    },
    
    getToday() {
        const date = new Date();
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    },
    
    getDaysDifference(date1, date2) {
        if (!date1 || !date2) return 999;
        const d1 = new Date(date1);
        const d2 = new Date(date2);
        const diffTime = Math.abs(d2 - d1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
};
