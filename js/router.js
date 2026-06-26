const Router = {
    routes: {},
    currentRoute: null,
    
    init() {
        this.setupRoutes();
        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute();
    },
    
    setupRoutes() {
        this.routes = {
            'dashboard': () => this.renderDashboard(),
            'courses': () => this.renderCourses(),
            'course': (id) => this.renderCourse(id),
            'lesson': (courseId, lessonId) => this.renderLesson(courseId, lessonId),
            'quiz': (id) => this.renderQuiz(id),
            'projects': () => this.renderProjects(),
            'project': (id) => this.renderProject(id),
            'playground': () => this.renderPlayground(),
            'achievements': () => this.renderAchievements(),
            'flashcards': () => this.renderFlashcards(),
            'notes': () => this.renderNotes(),
            'statistics': () => this.renderStatistics(),
            'settings': () => this.renderSettings()
        };
    },
    
    handleRoute() {
        const hash = window.location.hash.slice(1) || '/dashboard';
        const [path, ...params] = hash.split('/').filter(Boolean);
        
        this.currentRoute = path;
        UI.setActivePage(path);
        
        const handler = this.routes[path];
        if (handler) {
            handler(...params);
        } else {
            this.render404();
        }
    },
    
    navigate(path) {
        window.location.hash = path;
    },
    
    getContainer() {
        return document.getElementById('page-container');
    },
    
    renderDashboard() {
        const user = Storage.get('user', { name: 'User', level: 1, xp: 0 });
        const streak = Streak.getCurrent();
        const todayProgress = Progress.getTodayProgress();
        const recentLessons = Progress.getRecentLessons(3);
        
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="hero">
                    <h1 class="hero-title">Welcome back, ${user.name}! 👋</h1>
                    <p class="hero-description">Continue your learning journey and master AI & Python</p>
                </div>
                
                <div class="grid grid-cols-3 gap-lg mb-xl">
                    <div class="card">
                        <div class="flex items-center gap-md mb-md">
                            <div style="width: 48px; height: 48px; background: var(--gradient-primary); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                ⚡
                            </div>
                            <div>
                                <div class="text-xs text-secondary">Current Level</div>
                                <div class="text-2xl font-bold">${user.level}</div>
                            </div>
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${XP.getProgressToNextLevel()}%"></div>
                        </div>
                        <div class="text-xs text-secondary mt-sm">${user.xp} / ${XP.getXPForLevel(user.level + 1)} XP</div>
                    </div>
                    
                    <div class="card">
                        <div class="flex items-center gap-md mb-md">
                            <div style="width: 48px; height: 48px; background: var(--gradient-warm); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                                🔥
                            </div>
                            <div>
                                <div class="text-xs text-secondary">Day Streak</div>
                                <div class="text-2xl font-bold">${streak}</div>
                            </div>
                        </div>
                        <div class="text-sm text-secondary">Keep it going! ${streak > 0 ? '🎉' : 'Start today!'}</div>
                    </div>
                    
                    <div class="card">
                        <div class="flex items-center gap-md mb-md">
                            <div style="width: 48px; height: 48px; background: var(--gradient-success); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
                                ✓
                            </div>
                            <div>
                                <div class="text-xs text-secondary">Today's Progress</div>
                                <div class="text-2xl font-bold">${todayProgress.completed}</div>
                            </div>
                        </div>
                        <div class="text-sm text-secondary">${todayProgress.completed} lessons completed</div>
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">Continue Learning</h2>
                        <p class="section-description">Pick up where you left off</p>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-lg">
                        ${this.renderContinueLearning()}
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">Recommended for You</h2>
                        <p class="section-description">Based on your progress</p>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-lg">
                        ${this.renderRecommendedCourses()}
                    </div>
                </div>
                
                <div class="section">
                    <div class="section-header">
                        <h2 class="section-title">Recent Achievements</h2>
                    </div>
                    
                    <div class="grid grid-cols-4 gap-md">
                        ${this.renderRecentAchievements()}
                    </div>
                </div>
            </div>
        `;
    },
    
    renderContinueLearning() {
        const lastLesson = Progress.getLastLesson();
        if (!lastLesson) {
            return `
                <div class="card col-span-2">
                    <div class="empty-state">
                        <div class="empty-state-title">Start Your Journey</div>
                        <div class="empty-state-description">Begin with Python Basics to build your foundation</div>
                        <button class="btn btn-primary mt-md" onclick="Router.navigate('/course/python-basics')">Start Learning</button>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="card card-hover" onclick="Router.navigate('/lesson/${lastLesson.courseId}/${lastLesson.id}')">
                <div class="badge badge-primary mb-md">Continue</div>
                <h3 class="card-title">${lastLesson.title}</h3>
                <p class="card-description">${lastLesson.course}</p>
                <div class="progress-bar mt-md">
                    <div class="progress-fill" style="width: ${lastLesson.progress}%"></div>
                </div>
            </div>
        `;
    },
    
    renderRecommendedCourses() {
        const courses = [
            { id: 'python-basics', title: 'Python Basics', description: 'Start your programming journey', icon: '🐍', difficulty: 'Beginner' },
            { id: 'ml-basics', title: 'Machine Learning', description: 'Learn ML fundamentals', icon: '🤖', difficulty: 'Intermediate' },
            { id: 'deep-learning', title: 'Deep Learning', description: 'Neural networks and more', icon: '🧠', difficulty: 'Advanced' }
        ];
        
        return courses.map(course => `
            <div class="card card-hover" onclick="Router.navigate('/course/${course.id}')">
                <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">${course.icon}</div>
                <h3 class="card-title">${course.title}</h3>
                <p class="card-description">${course.description}</p>
                <div class="mt-md">
                    <span class="badge badge-${course.difficulty === 'Beginner' ? 'success' : course.difficulty === 'Intermediate' ? 'warning' : 'error'}">${course.difficulty}</span>
                </div>
            </div>
        `).join('');
    },
    
    renderRecentAchievements() {
        const achievements = Achievements.getRecent(4);
        if (achievements.length === 0) {
            return '<div class="card col-span-4"><div class="empty-state-description">Complete lessons to unlock achievements!</div></div>';
        }
        
        return achievements.map(ach => `
            <div class="card text-center">
                <div style="font-size: 2.5rem; margin-bottom: var(--spacing-sm);">${ach.icon}</div>
                <div class="font-semibold">${ach.title}</div>
                <div class="text-xs text-secondary mt-xs">${ach.description}</div>
            </div>
        `).join('');
    },
    
    renderCourses() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">All Courses</h1>
                    <p class="section-description">Choose your learning path</p>
                </div>
                
                <div class="grid grid-auto-fit gap-lg">
                    ${CoursesData.map(course => `
                        <div class="card card-hover" onclick="Router.navigate('/course/${course.id}')">
                            <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">${course.icon || '📚'}</div>
                            <h3 class="card-title">${course.title}</h3>
                            <p class="card-description line-clamp-2">${course.description}</p>
                            <div class="flex gap-sm mt-md">
                                <span class="badge badge-${course.difficulty === 'Beginner' ? 'success' : course.difficulty === 'Intermediate' ? 'warning' : 'error'}">${course.difficulty}</span>
                                <span class="badge badge-info">${course.lessons} lessons</span>
                            </div>
                            <div class="progress-bar mt-md">
                                <div class="progress-fill" style="width: ${Progress.getCourseProgress(course.id)}%"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    renderCourse(id) {
        const course = CoursesData.find(c => c.id === id);
        if (!course) return this.render404();
        
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="breadcrumb">
                    <span class="breadcrumb-item"><a href="#/courses">Courses</a></span>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-item">${course.title}</span>
                </div>
                
                <div class="hero">
                    <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">${course.icon || '📚'}</div>
                    <h1 class="hero-title">${course.title}</h1>
                    <p class="hero-description">${course.description}</p>
                    
                    <div class="flex gap-md justify-center mt-lg">
                        <span class="badge badge-${course.difficulty === 'Beginner' ? 'success' : course.difficulty === 'Intermediate' ? 'warning' : 'error'}">${course.difficulty}</span>
                        <span class="badge badge-info">${course.lessons} lessons</span>
                        <span class="badge badge-primary">${course.duration || '4 hours'}</span>
                    </div>
                </div>
                
                <div class="section">
                    <h2 class="section-title">Course Content</h2>
                    <div class="stack-lg">
                        ${this.renderCourseLessons(course)}
                    </div>
                </div>
            </div>
        `;
    },
    
    renderCourseLessons(course) {
        console.log('Rendering lessons for course:', course.id);
        console.log('Looking for lessons data:', course.lessonsData);
        
        if (!course.lessonsData) {
            console.error('Course missing lessonsData property:', course);
            return '<div class="card"><div class="empty-state-description">Course data is incomplete. Please contact support.</div></div>';
        }
        
        let lessons = [];
        try {
            const fromWindow = window[course.lessonsData];
            if (Array.isArray(fromWindow)) {
                lessons = fromWindow;
            } else {
                // Also try resolving global lexical bindings created with const/let
                let evaluated;
                try {
                    evaluated = eval(course.lessonsData);
                } catch (err) {
                    evaluated = undefined;
                }
                if (Array.isArray(evaluated)) lessons = evaluated;
            }
        } catch (e) {
            console.error('Error resolving lessons data for', course.lessonsData, e);
            lessons = [];
        }
        console.log('Found lessons:', lessons.length, 'for course:', course.id);
        console.log('Lessons data:', lessons);
        
        if (!lessons || lessons.length === 0) {
            return `
                <div class="card">
                    <div class="empty-state">
                        <div class="empty-state-title">No Lessons Available</div>
                        <div class="empty-state-description">This course doesn't have any lessons yet. Check back soon!</div>
                        <button class="btn btn-primary mt-md" onclick="Router.navigate('/courses')">Browse Other Courses</button>
                    </div>
                </div>
            `;
        }
        
        return lessons.map((lesson, index) => {
            console.log('Rendering lesson:', lesson.id, lesson.title);
            return `
                <div class="card card-hover" onclick="Router.navigate('/lesson/${course.id}/${lesson.id}')">
                    <div class="flex items-center gap-md">
                        <div style="width: 40px; height: 40px; background: var(--gradient-primary); border-radius: var(--radius-full); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                            ${index + 1}
                        </div>
                        <div class="flex-1">
                            <h3 class="font-semibold">${lesson.title || 'Untitled Lesson'}</h3>
                            <p class="text-sm text-secondary">${lesson.duration || '15 min'}</p>
                        </div>
                        ${Progress.isLessonCompleted(course.id, lesson.id) ? '<span class="badge badge-success">✓ Completed</span>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    },
    
    renderLesson(courseId, lessonId) {
        const container = this.getContainer();
        const course = CoursesData.find(c => c.id === courseId);
        if (!course) return this.render404();

        // Resolve lessons array (supports const-declared globals)
        let lessons = [];
        try {
            const fromWindow = window[course.lessonsData];
            if (Array.isArray(fromWindow)) {
                lessons = fromWindow;
            } else {
                let evaluated;
                try {
                    evaluated = eval(course.lessonsData);
                } catch (err) {
                    evaluated = undefined;
                }
                if (Array.isArray(evaluated)) lessons = evaluated;
            }
        } catch (e) {
            console.error('Error resolving lessons data for', course.lessonsData, e);
        }

        const lesson = lessons.find(l => String(l.id) === String(lessonId));
        if (!lesson) {
            container.innerHTML = `
                <div class="animate-fade-in">
                    <div class="breadcrumb">
                        <span class="breadcrumb-item"><a href="#/courses">Courses</a></span>
                        <span class="breadcrumb-separator">/</span>
                        <span class="breadcrumb-item"><a href="#/course/${course.id}">${course.title}</a></span>
                        <span class="breadcrumb-separator">/</span>
                        <span class="breadcrumb-item">Lesson not found</span>
                    </div>
                    <div class="card">
                        <div class="empty-state">
                            <div class="empty-state-title">Lesson Not Found</div>
                            <div class="empty-state-description">We couldn't find this lesson in ${course.title}.</div>
                            <button class="btn btn-primary mt-md" onclick="Router.navigate('/course/${course.id}')">Back to Course</button>
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="breadcrumb">
                    <span class="breadcrumb-item"><a href="#/courses">Courses</a></span>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-item"><a href="#/course/${course.id}">${course.title}</a></span>
                    <span class="breadcrumb-separator">/</span>
                    <span class="breadcrumb-item">${lesson.title}</span>
                </div>

                <div class="lesson-container">
                    <h1 class="section-title">${lesson.title}</h1>
                    <div class="text-sm text-secondary mb-md">${course.title} • ${lesson.duration || '15 min'}</div>

                    <div class="card">
                        <div class="card-body">
                            ${lesson.content || '<p>No content available for this lesson.</p>'}
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary" onclick="Progress.completeLesson('${course.id}', '${lesson.id}'); UI.showToast('Lesson completed! +50 XP', 'success')">Mark Complete</button>
                            <button class="btn" onclick="Router.navigate('/course/${course.id}')">Back to Course</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderProjects() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Projects</h1>
                    <p class="section-description">Build real-world applications</p>
                </div>
                <div class="empty-state">
                    <div class="empty-state-title">Projects Coming Soon</div>
                    <div class="empty-state-description">Hands-on projects will be available here</div>
                </div>
            </div>
        `;
    },
    
    renderProject(id) {
        const container = this.getContainer();
        container.innerHTML = `<div class="animate-fade-in"><h1>Project: ${id}</h1></div>`;
    },
    
    renderPlayground() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Code Playground</h1>
                    <p class="section-description">Experiment with code</p>
                </div>
                <div class="empty-state">
                    <div class="empty-state-title">Playground Coming Soon</div>
                    <div class="empty-state-description">Interactive code editor will be available here</div>
                </div>
            </div>
        `;
    },
    
    renderAchievements() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Achievements</h1>
                    <p class="section-description">Track your milestones</p>
                </div>
                <div class="grid grid-cols-4 gap-lg">
                    ${AchievementsData.map(ach => `
                        <div class="card text-center ${Achievements.isUnlocked(ach.id) ? '' : 'opacity-50'}">
                            <div style="font-size: 3rem; margin-bottom: var(--spacing-md);">${Achievements.isUnlocked(ach.id) ? ach.icon : '🔒'}</div>
                            <h3 class="font-semibold mb-sm">${ach.title}</h3>
                            <p class="text-xs text-secondary">${ach.description}</p>
                            ${Achievements.isUnlocked(ach.id) ? '<div class="badge badge-success mt-md">Unlocked</div>' : `<div class="text-xs text-tertiary mt-md">${ach.requirement}</div>`}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },
    
    renderFlashcards() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Flashcards</h1>
                    <p class="section-description">Review and memorize key concepts</p>
                </div>
                <div class="empty-state">
                    <div class="empty-state-title">Flashcards Coming Soon</div>
                </div>
            </div>
        `;
    },
    
    renderNotes() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">My Notes</h1>
                    <p class="section-description">Your personal learning notes</p>
                </div>
                <div class="empty-state">
                    <div class="empty-state-title">No Notes Yet</div>
                    <div class="empty-state-description">Start taking notes during lessons</div>
                </div>
            </div>
        `;
    },
    
    renderStatistics() {
        const stats = Progress.getStatistics();
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Statistics</h1>
                    <p class="section-description">Track your learning progress</p>
                </div>
                
                <div class="grid grid-cols-4 gap-lg mb-xl">
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-gradient">${stats.totalLessons}</div>
                        <div class="text-sm text-secondary mt-sm">Lessons Completed</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-gradient">${stats.totalTime}</div>
                        <div class="text-sm text-secondary mt-sm">Hours Learned</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-gradient">${stats.currentStreak}</div>
                        <div class="text-sm text-secondary mt-sm">Day Streak</div>
                    </div>
                    <div class="card text-center">
                        <div class="text-3xl font-bold text-gradient">${stats.achievements}</div>
                        <div class="text-sm text-secondary mt-sm">Achievements</div>
                    </div>
                </div>
            </div>
        `;
    },
    
    renderSettings() {
        const settings = Storage.get('settings', {});
        const container = this.getContainer();
        container.innerHTML = `
            <div class="animate-fade-in">
                <div class="section-header">
                    <h1 class="section-title">Settings</h1>
                    <p class="section-description">Customize your experience</p>
                </div>
                
                <div class="card">
                    <h3 class="card-title">Appearance</h3>
                    <div class="stack">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="font-medium">Theme</div>
                                <div class="text-sm text-secondary">Choose your preferred theme</div>
                            </div>
                            <select class="input" style="width: 200px;" onchange="Theme.set(this.value)">
                                <option value="light" ${Theme.current === 'light' ? 'selected' : ''}>Light</option>
                                <option value="dark" ${Theme.current === 'dark' ? 'selected' : ''}>Dark</option>
                                <option value="auto" ${Theme.current === 'auto' ? 'selected' : ''}>Auto</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="card mt-lg">
                    <h3 class="card-title">Data</h3>
                    <div class="stack">
                        <button class="btn btn-secondary" onclick="Router.exportData()">Export Progress</button>
                        <button class="btn btn-secondary" onclick="Router.importData()">Import Progress</button>
                        <button class="btn btn-danger" onclick="Router.resetProgress()">Reset All Progress</button>
                    </div>
                </div>
            </div>
        `;
    },
    
    render404() {
        const container = this.getContainer();
        container.innerHTML = `
            <div class="empty-state">
                <div style="font-size: 4rem; margin-bottom: var(--spacing-lg);">404</div>
                <div class="empty-state-title">Page Not Found</div>
                <div class="empty-state-description">The page you're looking for doesn't exist</div>
                <button class="btn btn-primary mt-lg" onclick="Router.navigate('/dashboard')">Go to Dashboard</button>
            </div>
        `;
    },
    
    exportData() {
        const data = Storage.exportData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `learnai-backup-${Date.now()}.json`;
        a.click();
        UI.showToast('Progress exported successfully', 'success');
    },
    
    importData() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const data = JSON.parse(event.target.result);
                    Storage.importData(data);
                    UI.showToast('Progress imported successfully', 'success');
                    location.reload();
                } catch (error) {
                    UI.showToast('Failed to import data', 'error');
                }
            };
            reader.readAsText(file);
        };
        input.click();
    },
    
    resetProgress() {
        UI.showConfirm(
            'Reset Progress',
            'Are you sure you want to reset all your progress? This action cannot be undone.',
            () => {
                Storage.clear();
                UI.showToast('Progress reset successfully', 'success');
                location.reload();
            }
        );
    }
};
