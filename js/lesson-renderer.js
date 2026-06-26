const LessonRenderer = {
    render(lesson) {
        return `<div class="lesson-content">${lesson.content || 'Lesson content here'}</div>`;
    }
};
