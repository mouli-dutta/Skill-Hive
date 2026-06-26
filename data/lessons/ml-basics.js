const MLBasicsLessons = [
    {
        id: 'ml-intro',
        title: 'Introduction to Machine Learning',
        duration: '25 min',
        content: `
            <h2>Introduction to Machine Learning</h2>
            <p>Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.</p>
            
            <h3>What is Machine Learning?</h3>
            <p>Machine Learning algorithms build mathematical models based on sample data, known as "training data", in order to make predictions or decisions.</p>
            
            <h3>Types of Machine Learning</h3>
            <ul>
                <li><strong>Supervised Learning</strong>: Learning with labeled data</li>
                <li><strong>Unsupervised Learning</strong>: Finding patterns in unlabeled data</li>
                <li><strong>Reinforcement Learning</strong>: Learning through trial and error</li>
            </ul>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Key Concept</div>
                <p>Machine Learning is about creating algorithms that can learn patterns from data and make predictions.</p>
            </div>
        `
    },
    {
        id: 'supervised-learning',
        title: 'Supervised Learning',
        duration: '30 min',
        content: `
            <h2>Supervised Learning</h2>
            <p>Supervised learning is the most common type of machine learning where algorithms learn from labeled training data.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Training Data</strong>: Input-output pairs used for training</li>
                <li><strong>Features</strong>: Input variables used to make predictions</li>
                <li><strong>Labels</strong>: Output values we want to predict</li>
            </ul>
            
            <h3>Common Algorithms</h3>
            <ul>
                <li>Linear Regression</li>
                <li>Logistic Regression</li>
                <li>Decision Trees</li>
                <li>Random Forests</li>
                <li>Support Vector Machines</li>
            </ul>
        `
    },
    {
        id: 'unsupervised-learning',
        title: 'Unsupervised Learning',
        duration: '30 min',
        content: `
            <h2>Unsupervised Learning</h2>
            <p>Unsupervised learning deals with unlabeled data and focuses on finding hidden patterns or intrinsic structures.</p>
            
            <h3>Key Techniques</h3>
            <ul>
                <li><strong>Clustering</strong>: Grouping similar data points</li>
                <li><strong>Dimensionality Reduction</strong>: Reducing feature space</li>
                <li><strong>Association</strong>: Discovering relationships between variables</li>
            </ul>
            
            <h3>Common Algorithms</h3>
            <ul>
                <li>K-Means Clustering</li>
                <li>Hierarchical Clustering</li>
                <li>Principal Component Analysis (PCA)</li>
                <li>Autoencoders</li>
            </ul>
        `
    },
    {
        id: 'model-evaluation',
        title: 'Model Evaluation Metrics',
        duration: '25 min',
        content: `
            <h2>Evaluating Machine Learning Models</h2>
            <p>Proper evaluation is crucial to understand how well your model performs.</p>
            
            <h3>Classification Metrics</h3>
            <ul>
                <li><strong>Accuracy</strong>: Overall correct predictions</li>
                <li><strong>Precision</strong>: True positives / (True positives + False positives)</li>
                <li><strong>Recall</strong>: True positives / (True positives + False negatives)</li>
                <li><strong>F1 Score</strong>: Harmonic mean of precision and recall</li>
            </ul>
            
            <h3>Regression Metrics</h3>
            <ul>
                <li><strong>Mean Squared Error (MSE)</strong></li>
                <li><strong>Root Mean Squared Error (RMSE)</strong></li>
                <li><strong>Mean Absolute Error (MAE)</strong></li>
                <li><strong>R-squared</strong></li>
            </ul>
        `
    },
    {
        id: 'feature-engineering',
        title: 'Feature Engineering',
        duration: '35 min',
        content: `
            <h2>Feature Engineering</h2>
            <p>Feature engineering is the process of creating new features or modifying existing ones to improve model performance.</p>
            
            <h3>Techniques</h3>
            <ul>
                <li><strong>Feature Scaling</strong>: Normalization and Standardization</li>
                <li><strong>Encoding</strong>: Converting categorical variables to numerical</li>
                <li><strong>Feature Selection</strong>: Choosing relevant features</li>
                <li><strong>Feature Creation</strong>: Creating new features from existing ones</li>
            </ul>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Important</div>
                <p>Good features can often make a simple model perform better than a complex model with poor features.</p>
            </div>
        `
    }
];
