# 👨‍💻 Developer Guide

## Extending the Learn AI Platform

This guide helps you add content and features to the platform.

---

## 📚 Adding New Lessons

### Step 1: Choose Your Course
Navigate to `data/lessons/` and open the appropriate file (e.g., `python-basics.js`).

### Step 2: Add Lesson Object
```javascript
{
    id: 'your-lesson-id',
    title: 'Your Lesson Title',
    duration: '20 min',
    content: `
        <h2>Main Heading</h2>
        <p>Introduction paragraph...</p>
        
        <h3>Subheading</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">example</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Hello"</span></code></pre>
        
        <div class="callout callout-info">
            <div class="callout-title">💡 Tip</div>
            <p>Your helpful tip here...</p>
        </div>
    `
}
```

### Syntax Highlighting Classes
- `syntax-keyword` - Keywords (def, class, if, for, etc.)
- `syntax-function` - Function names
- `syntax-string` - String literals
- `syntax-number` - Numbers
- `syntax-comment` - Comments
- `syntax-operator` - Operators
- `syntax-class` - Class names

### Callout Types
- `callout-info` - Blue info boxes
- `callout-success` - Green success boxes
- `callout-warning` - Orange warning boxes
- `callout-error` - Red error boxes

---

## 🏆 Adding Achievements

Edit `data/achievements-data.js`:

```javascript
{
    id: 'unique-achievement-id',
    title: 'Achievement Title',
    description: 'What the user accomplished',
    icon: '🎯',  // Emoji icon
    type: 'lesson',  // lesson, streak, level, quiz, project, special
    requirement: 10,  // Number or condition
    xp: 100  // XP reward
}
```

### Achievement Types
- `lesson` - Based on lesson count
- `streak` - Based on streak days
- `level` - Based on user level
- `quiz` - Based on quiz count
- `project` - Based on project count
- `special` - Custom conditions

---

## 📖 Adding New Courses

Edit `data/courses-structure.js`:

```javascript
{
    id: 'course-id',
    title: 'Course Title',
    description: 'Course description',
    icon: '🎓',
    difficulty: 'Beginner',  // Beginner, Intermediate, Advanced
    duration: '6 hours',
    lessons: 15,
    lessonsData: 'YourCourseLessons'  // Variable name in lessons file
}
```

Then create `data/lessons/your-course.js`:

```javascript
const YourCourseLessons = [
    { id: 'lesson-1', title: 'Lesson 1', duration: '20 min', content: '...' },
    { id: 'lesson-2', title: 'Lesson 2', duration: '25 min', content: '...' }
];
```

Don't forget to include the script in `index.html`:
```html
<script src="data/lessons/your-course.js"></script>
```

---

## ❓ Adding Quiz Questions

Edit `data/quizzes.js`:

```javascript
const QuizzesData = [
    {
        id: 'quiz-1',
        courseId: 'python-basics',
        lessonId: 'variables',
        questions: [
            {
                type: 'multiple-choice',
                question: 'What is the output of print(type(5))?',
                options: [
                    '<class \'int\'>',
                    '<class \'float\'>',
                    '<class \'str\'>',
                    '<class \'bool\'>'
                ],
                correct: 0,  // Index of correct answer
                explanation: 'The number 5 is an integer, so type(5) returns <class \'int\'>.'
            },
            {
                type: 'true-false',
                question: 'Python is case-sensitive',
                correct: true,
                explanation: 'Python is case-sensitive. Variable and variable are different.'
            }
        ]
    }
];
```

---

## 🎴 Adding Flashcards

Edit `data/flashcards-data.js`:

```javascript
const FlashcardsData = [
    {
        id: 'card-1',
        deck: 'python-basics',
        front: 'What does the len() function do?',
        back: 'Returns the length (number of items) of an object',
        tags: ['python', 'functions', 'basics']
    }
];
```

---

## 🎨 Styling Guidelines

### Colors
Use CSS variables for consistency:
```css
var(--color-primary)      /* Indigo */
var(--color-secondary)    /* Purple */
var(--color-success)      /* Green */
var(--color-warning)      /* Orange */
var(--color-error)        /* Red */
var(--color-text-primary) /* Main text */
var(--color-bg-primary)   /* Background */
```

### Spacing
```css
var(--spacing-xs)   /* 4px */
var(--spacing-sm)   /* 8px */
var(--spacing-md)   /* 16px */
var(--spacing-lg)   /* 24px */
var(--spacing-xl)   /* 32px */
```

### Shadows
```css
var(--shadow-sm)
var(--shadow-md)
var(--shadow-lg)
var(--shadow-xl)
```

---

## 🧩 Creating New Components

### CSS Component
Add to `css/components.css`:

```css
.my-component {
    padding: var(--spacing-md);
    background: var(--color-surface);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-base);
}

.my-component:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
}
```

### JavaScript Component
Create in `js/`:

```javascript
const MyFeature = {
    init() {
        // Initialize feature
    },
    
    doSomething() {
        // Feature logic
    }
};
```

Add to `app.js`:
```javascript
MyFeature.init();
```

---

## 🔌 Adding New Routes

Edit `js/router.js`:

```javascript
// In setupRoutes()
this.routes = {
    // ... existing routes
    'my-page': () => this.renderMyPage()
};

// Add render method
renderMyPage() {
    const container = this.getContainer();
    container.innerHTML = `
        <div class="animate-fade-in">
            <h1>My Page</h1>
            <p>Content here...</p>
        </div>
    `;
}
```

Add navigation link in `index.html`:
```html
<a href="#/my-page" class="nav-item" data-route="my-page">
    <svg class="icon"><!-- icon --></svg>
    <span>My Page</span>
</a>
```

---

## 📊 Tracking Progress

### Mark Lesson Complete
```javascript
Progress.completeLesson('course-id', 'lesson-id');
// Automatically awards XP, updates streak, checks achievements
```

### Mark Quiz Complete
```javascript
Progress.completeQuiz('quiz-id', score);
// Score is 0-100
```

### Mark Project Complete
```javascript
Progress.completeProject('project-id');
```

---

## 🎮 Awarding XP

```javascript
XP.award(amount, reason);
// Example: XP.award(50, 'Lesson Completed');
```

### XP Amounts
- Lesson completion: 50 XP
- Quiz (varies): score * 2 XP
- Perfect quiz: 100 XP bonus
- Project: 200 XP
- Achievement: varies

---

## 🏅 Unlocking Achievements

### Manual Unlock
```javascript
Achievements.unlock('achievement-id');
```

### Automatic Check
```javascript
Achievements.check('lesson', lessonCount);
Achievements.check('streak', streakDays);
Achievements.check('level', currentLevel);
```

---

## 💾 Storage API

### Save Data
```javascript
Storage.set('key', value);
// Value can be any JSON-serializable object
```

### Get Data
```javascript
const data = Storage.get('key', defaultValue);
```

### Remove Data
```javascript
Storage.remove('key');
```

### Export All
```javascript
const allData = Storage.exportData();
```

---

## 🎨 UI Utilities

### Show Toast
```javascript
UI.showToast('Message', 'success');
// Types: success, error, warning, info
```

### Show Modal
```javascript
UI.showModal('Title', '<p>Content</p>', [
    { label: 'Cancel', class: 'btn-secondary', action: 'cancel' },
    { label: 'Confirm', class: 'btn-primary', action: 'confirm', handler: () => {} }
]);
```

### Show Confirm
```javascript
UI.showConfirm('Title', 'Message', () => {
    // Confirmed action
});
```

### Show Loading
```javascript
UI.showLoading('Loading...');
// Later:
UI.hideLoading();
```

---

## 🎭 Animations

### CSS Classes
```html
<div class="animate-fade-in">Fades in</div>
<div class="animate-slide-in-up">Slides up</div>
<div class="animate-scale-in">Scales in</div>
<div class="hover-lift">Lifts on hover</div>
```

### Stagger Animations
```html
<div class="animate-fade-in stagger-1">First</div>
<div class="animate-fade-in stagger-2">Second</div>
<div class="animate-fade-in stagger-3">Third</div>
```

---

## 🔍 Debugging

### Enable Console Logs
Check browser console (F12) for:
- Initialization messages
- Route changes
- XP awards
- Achievement unlocks
- Storage operations

### Common Issues

**Progress not saving?**
- Check localStorage is enabled
- Check browser privacy settings
- Try different browser

**Styles not applying?**
- Check CSS file is loaded
- Check class names match
- Inspect element (F12)

**JavaScript errors?**
- Check console (F12)
- Verify all scripts loaded
- Check for typos in IDs

---

## 📦 Project Structure

```
Learn AI/
├── index.html          # Entry point
├── css/                # Stylesheets
│   ├── styles.css      # Variables, base
│   ├── typography.css  # Text styles
│   ├── themes.css      # Dark/light
│   ├── layout.css      # Grid, flex
│   ├── components.css  # UI components
│   ├── animations.css  # Animations
│   └── accessibility.css # A11y
├── js/                 # JavaScript
│   ├── app.js          # Main app
│   ├── router.js       # Routing
│   ├── storage.js      # Data
│   ├── theme.js        # Themes
│   ├── ui.js           # UI utils
│   ├── xp.js           # XP system
│   ├── streak.js       # Streaks
│   ├── achievements.js # Achievements
│   ├── progress.js     # Progress
│   └── ...             # Other modules
├── data/               # Content
│   ├── courses-structure.js
│   ├── achievements-data.js
│   ├── quizzes.js
│   ├── flashcards-data.js
│   ├── projects.js
│   └── lessons/        # Lesson content
└── assets/             # Media
    ├── icons/
    └── illustrations/
```

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Open index.html in browser
- [ ] Navigate to all pages
- [ ] Complete a lesson
- [ ] Check XP increases
- [ ] Check streak increments
- [ ] Unlock an achievement
- [ ] Switch themes
- [ ] Export progress
- [ ] Import progress
- [ ] Test on mobile
- [ ] Test keyboard navigation
- [ ] Test with screen reader

---

## 🚀 Deployment

### Static Hosting
Upload entire folder to:
- GitHub Pages
- Netlify
- Vercel
- Any static host

### Local Server
```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

---

## 📝 Best Practices

### Code Style
- Use consistent indentation (2 or 4 spaces)
- Add comments for complex logic
- Use descriptive variable names
- Keep functions small and focused
- Follow existing patterns

### Content
- Write clear, concise explanations
- Include code examples
- Add tips and warnings
- Use proper syntax highlighting
- Test all code examples

### Design
- Maintain consistent spacing
- Use design system colors
- Follow animation patterns
- Ensure accessibility
- Test responsiveness

---

## 🤝 Contributing

### Adding Content
1. Fork/clone repository
2. Add lessons/quizzes/flashcards
3. Test thoroughly
4. Submit pull request

### Adding Features
1. Create new module in `js/`
2. Follow existing patterns
3. Update documentation
4. Test all browsers
5. Submit pull request

---

## 📞 Support

### Resources
- README.md - User guide
- PROJECT_SUMMARY.md - Technical overview
- IMPLEMENTATION_STATUS.md - Status report
- Code comments - Inline documentation

### Tips
- Study existing code
- Follow patterns
- Test frequently
- Ask questions
- Contribute back

---

## 🎯 Quick Reference

### Add Lesson
1. Edit `data/lessons/course-name.js`
2. Add lesson object with content
3. Test in browser

### Add Achievement
1. Edit `data/achievements-data.js`
2. Add achievement object
3. Test unlock condition

### Add Route
1. Edit `js/router.js`
2. Add route and render method
3. Add navigation link

### Style Component
1. Edit `css/components.css`
2. Use CSS variables
3. Test dark/light modes

---

**Happy coding!** 🚀

Build amazing learning experiences!
