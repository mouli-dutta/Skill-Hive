const DeepLearningLessons = [
    {
        id: 'neural-networks',
        title: 'Neural Networks Fundamentals',
        duration: '30 min',
        content: `
            <h2>Neural Networks Fundamentals</h2>
            <p>Neural networks are computing systems inspired by biological neural networks in animal brains.</p>
            
            <h3>Basic Components</h3>
            <ul>
                <li><strong>Neurons</strong>: Basic processing units</li>
                <li><strong>Connections</strong>: Links between neurons with weights</li>
                <li><strong>Activation Functions</strong>: Non-linear transformations</li>
                <li><strong>Bias</strong>: Additional parameter to shift activation</li>
            </ul>
            
            <h3>Forward Propagation</h3>
            <pre><code class="python">import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Simple neural network layer
def forward_pass(X, weights, bias):
    z = np.dot(X, weights) + bias
    a = sigmoid(z)
    return a</code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Key Concept</div>
                <p>Neural networks learn by adjusting weights through backpropagation to minimize prediction errors.</p>
            </div>
        `
    },
    {
        id: 'backpropagation',
        title: 'Backpropagation',
        duration: '35 min',
        content: `
            <h2>Backpropagation</h2>
            <p>Backpropagation is the algorithm used to train neural networks by calculating gradients and updating weights.</p>
            
            <h3>Learning Process</h3>
            <ul>
                <li><strong>Forward Pass</strong>: Calculate predictions</li>
                <li><strong>Calculate Loss</strong>: Measure prediction error</li>
                <li><strong>Backward Pass</strong>: Compute gradients</li>
                <li><strong>Update Weights</strong>: Adjust parameters</li>
            </ul>
            
            <h3>Gradient Descent</h3>
            <pre><code class="python"># Simple gradient descent update
learning_rate = 0.01
weights = weights - learning_rate * gradients
bias = bias - learning_rate * bias_gradient</code></pre>
            
            <h3>Chain Rule</h3>
            <p>Backpropagation uses the chain rule to efficiently compute gradients through multiple layers.</p>
        `
    },
    {
        id: 'activation-functions',
        title: 'Activation Functions',
        duration: '25 min',
        content: `
            <h2>Activation Functions</h2>
            <p>Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns.</p>
            
            <h3>Common Activation Functions</h3>
            <ul>
                <li><strong>Sigmoid</strong>: Maps values to (0, 1)</li>
                <li><strong>Tanh</strong>: Maps values to (-1, 1)</li>
                <li><strong>ReLU</strong>: Returns max(0, x)</li>
                <li><strong>Leaky ReLU</strong>: Returns max(0.01x, x)</li>
                <li><strong>Softmax</strong>: Converts to probability distribution</li>
            </ul>
            
            <h3>ReLU Implementation</h3>
            <pre><code class="python">def relu(x):
    return np.maximum(0, x)

def relu_derivative(x):
    return (x > 0).astype(float)</code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Vanishing Gradients</div>
                <p>Sigmoid and tanh can suffer from vanishing gradients in deep networks, making ReLU more popular for deep learning.</p>
            </div>
        `
    },
    {
        id: 'convolutional-networks',
        title: 'Convolutional Neural Networks',
        duration: '40 min',
        content: `
            <h2>Convolutional Neural Networks (CNNs)</h2>
            <p>CNNs are specialized neural networks designed for processing grid-like data, such as images.</p>
            
            <h3>Key Components</h3>
            <ul>
                <li><strong>Convolutional Layers</strong>: Apply filters to detect features</li>
                <li><strong>Pooling Layers</strong>: Reduce spatial dimensions</li>
                <li><strong>Fully Connected Layers</strong>: Final classification</li>
            </ul>
            
            <h3>Convolution Operation</h3>
            <pre><code class="python">import tensorflow as tf

# Simple CNN layer
model = tf.keras.Sequential([
    tf.keras.layers.Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),
    tf.keras.layers.MaxPooling2D((2, 2)),
    tf.keras.layers.Flatten(),
    tf.keras.layers.Dense(10, activation='softmax')
])</code></pre>
            
            <h3>Applications</h3>
            <ul>
                <li>Image classification</li>
                <li>Object detection</li>
                <li>Medical imaging</li>
                <li>Face recognition</li>
            </ul>
        `
    },
    {
        id: 'recurrent-networks',
        title: 'Recurrent Neural Networks',
        duration: '35 min',
        content: `
            <h2>Recurrent Neural Networks (RNNs)</h2>
            <p>RNNs are designed to process sequential data by maintaining internal memory of previous inputs.</p>
            
            <h3>Key Concepts</h3>
            <ul>
                <li><strong>Hidden State</strong>: Memory of previous inputs</li>
                <li><strong>Time Steps</strong>: Sequential processing</li>
                <li><strong>Backpropagation Through Time</strong>: Training algorithm</li>
            </ul>
            
            <h3>LSTM Networks</h3>
            <p>Long Short-Term Memory networks solve the vanishing gradient problem in RNNs.</p>
            
            <pre><code class="python">import tensorflow as tf

# LSTM layer for sequence processing
model = tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size, 128),
    tf.keras.layers.LSTM(64),
    tf.keras.layers.Dense(1, activation='sigmoid')
])</code></pre>
            
            <h3>Applications</h3>
            <ul>
                <li>Natural language processing</li>
                <li>Time series prediction</li>
                <li>Speech recognition</li>
                <li>Music generation</li>
            </ul>
        `
    }
];
