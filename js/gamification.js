const Gamification = {
    init() {
        this.checkDailyMissions();
    },
    
    checkDailyMissions() {
        const missions = Storage.get('daily_missions', []);
        const today = new Date().toDateString();
        
        if (missions.length === 0 || missions[0]?.date !== today) {
            this.generateDailyMissions();
        }
    },
    
    generateDailyMissions() {
        const today = new Date().toDateString();
        const missions = [
            { id: 1, title: 'Complete 3 lessons', progress: 0, goal: 3, reward: 100, date: today },
            { id: 2, title: 'Score 80%+ on a quiz', progress: 0, goal: 1, reward: 50, date: today },
            { id: 3, title: 'Study for 30 minutes', progress: 0, goal: 30, reward: 75, date: today }
        ];
        
        Storage.set('daily_missions', missions);
    },
    
    updateMission(missionId, progress) {
        const missions = Storage.get('daily_missions', []);
        const mission = missions.find(m => m.id === missionId);
        
        if (mission) {
            mission.progress = Math.min(progress, mission.goal);
            
            if (mission.progress >= mission.goal && !mission.completed) {
                mission.completed = true;
                XP.award(mission.reward, `Mission: ${mission.title}`);
                UI.showToast(`Mission completed! +${mission.reward} XP`, 'success');
            }
            
            Storage.set('daily_missions', missions);
        }
    }
};
