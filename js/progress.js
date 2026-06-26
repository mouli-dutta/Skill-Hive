const Progress = {
    init() {
        const progress = Storage.get('progress', {
            lessons: {},
            quizzes: {},
            projects: {},
            lastLesson: null
        });
        Storage.set('progress', progress);
    },
    
    completeLesson(courseId, lessonId) {
        const progress = Storage.get('progress');
        const key = `${courseId}:${lessonId}`;
        
        if (!progress.lessons[key]) {
            progress.lessons[key] = {
                completedAt: Date.now(),
                courseId,
                lessonId
            };
            
            progress.lastLesson = { courseId, lessonId };
            Storage.set('progress', progress);
            
            XP.award(50, 'Lesson Completed');
            Streak.increment();
            Achievements.check('lesson', Object.keys(progress.lessons).length);
            
            return true;
        }
        
        return false;
    },
    
    isLessonCompleted(courseId, lessonId) {
        const progress = Storage.get('progress');
        const key = `${courseId}:${lessonId}`;
        return !!progress.lessons[key];
    },
    
    getCourseProgress(courseId) {
        const progress = Storage.get('progress');
        const course = CoursesData.find(c => c.id === courseId);
        if (!course) return 0;
        
        const totalLessons = course.lessons || 10;
        const completed = Object.keys(progress.lessons).filter(key => key.startsWith(courseId + ':')).length;
        
        return Math.floor((completed / totalLessons) * 100);
    },
    
    getLastLesson() {
        const progress = Storage.get('progress');
        if (!progress.lastLesson) return null;
        
        const { courseId, lessonId } = progress.lastLesson;
        const course = CoursesData.find(c => c.id === courseId);
        
        if (!course) return null;
        
        return {
            courseId,
            lessonId,
            course: course.title,
            title: `Lesson ${lessonId}`,
            progress: this.getCourseProgress(courseId)
        };
    },
    
    getRecentLessons(count = 5) {
        const progress = Storage.get('progress');
        const lessons = Object.values(progress.lessons)
            .sort((a, b) => b.completedAt - a.completedAt)
            .slice(0, count);
        
        return lessons.map(lesson => {
            const course = CoursesData.find(c => c.id === lesson.courseId);
            return {
                ...lesson,
                courseName: course ? course.title : 'Unknown Course'
            };
        });
    },
    
    getTodayProgress() {
        const progress = Storage.get('progress');
        const today = new Date().toDateString();
        
        const completed = Object.values(progress.lessons).filter(lesson => {
            const lessonDate = new Date(lesson.completedAt).toDateString();
            return lessonDate === today;
        }).length;
        
        return { completed, goal: 3 };
    },
    
    getStatistics() {
        const progress = Storage.get('progress');
        const user = Storage.get('user');
        const streak = Streak.getCurrent();
        const achievements = Achievements.getProgress();
        
        return {
            totalLessons: Object.keys(progress.lessons).length,
            totalQuizzes: Object.keys(progress.quizzes).length,
            totalProjects: Object.keys(progress.projects).length,
            totalTime: Math.floor(Object.keys(progress.lessons).length * 0.25),
            currentStreak: streak,
            longestStreak: Streak.getLongest(),
            level: user.level,
            totalXP: user.totalXP,
            achievements: achievements.unlocked
        };
    },
    
    completeQuiz(quizId, score) {
        const progress = Storage.get('progress');
        
        progress.quizzes[quizId] = {
            score,
            completedAt: Date.now()
        };
        
        Storage.set('progress', progress);
        
        const xpReward = Math.floor(score * 2);
        XP.award(xpReward, `Quiz Score: ${score}%`);
        
        if (score === 100) {
            Achievements.check('perfect_quiz', 1);
        }
        
        Achievements.check('quiz', Object.keys(progress.quizzes).length);
    },
    
    getQuizScore(quizId) {
        const progress = Storage.get('progress');
        return progress.quizzes[quizId]?.score || 0;
    },
    
    completeProject(projectId) {
        const progress = Storage.get('progress');
        
        progress.projects[projectId] = {
            completedAt: Date.now()
        };
        
        Storage.set('progress', progress);
        XP.award(200, 'Project Completed');
        Achievements.check('project', Object.keys(progress.projects).length);
    }
};
