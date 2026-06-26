const Courses = {
    getAll() {
        return CoursesData;
    },
    
    getById(id) {
        return CoursesData.find(c => c.id === id);
    },
    
    getLessons(courseId) {
        const course = this.getById(courseId);
        if (!course || !course.lessonsData) return [];
        return window[course.lessonsData] || [];
    }
};
