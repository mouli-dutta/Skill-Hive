const NLPLessons = [
    {
        id: 'nlp-intro',
        title: 'Introduction to NLP',
        duration: '25 min',
        content: `
            <h2>Introduction to Natural Language Processing</h2>
            <p>Natural Language Processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret and manipulate human language.</p>
            
            <h3>What is NLP?</h3>
            <ul>
                <li>Bridge between human communication and computer understanding</li>
                <li>Enables machines to process and analyze large amounts of natural language data</li>
                <li>Combines computational linguistics with statistical machine learning</li>
            </ul>
            
            <h3>Applications of NLP</h3>
            <ul>
                <li><strong>Machine Translation</strong>: Google Translate, language translation</li>
                <li><strong>Sentiment Analysis</strong>: Analyzing emotions in text</li>
                <li><strong>Chatbots</strong>: Customer service, virtual assistants</li>
                <li><strong>Text Summarization</strong>: Condensing long documents</li>
                <li><strong>Speech Recognition</strong>: Voice commands, transcription</li>
            </ul>
            
            <h3>NLP Pipeline</h3>
            <pre><code class="text">Text Input → Preprocessing → Feature Extraction → Model → Output</code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Key Challenge</div>
                <p>Human language is ambiguous, context-dependent, and full of nuances, making NLP a challenging field.</p>
            </div>
        `
    },
    {
        id: 'text-preprocessing',
        title: 'Text Preprocessing',
        duration: '30 min',
        content: `
            <h2>Text Preprocessing Techniques</h2>
            <p>Preprocessing is crucial for preparing text data for NLP tasks.</p>
            
            <h3>Basic Preprocessing Steps</h3>
            <pre><code class="python">import re
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Hello! This is a sample text for NLP preprocessing."

# Lowercase conversion
text = text.lower()

# Remove punctuation
text = re.sub(r'[^\w\s]', '', text)

# Tokenization
tokens = word_tokenize(text)

# Remove stopwords
stop_words = set(stopwords.words('english'))
tokens = [word for word in tokens if word not in stop_words]

print(tokens)
# ['hello', 'sample', 'text', 'nlp', 'preprocessing']</code></pre>
            
            <h3>Advanced Preprocessing</h3>
            <ul>
                <li><strong>Stemming</strong>: Reducing words to their root form</li>
                <li><strong>Lemmatization</strong>: Reducing words to their dictionary form</li>
                <li><strong>Part-of-Speech Tagging</strong>: Identifying grammatical parts</li>
                <li><strong>Named Entity Recognition</strong>: Identifying names, places, organizations</li>
            </ul>
            
            <h3>Stemming vs Lemmatization</h3>
            <pre><code class="python">from nltk.stem import PorterStemmer, WordNetLemmatizer

stemmer = PorterStemmer()
lemmatizer = WordNetLemmatizer()

words = ['running', 'ran', 'runs']

# Stemming
stems = [stemmer.stem(word) for word in words]
print(stems)  # ['run', 'ran', 'run']

# Lemmatization
lemmas = [lemmatizer.lemmatize(word, pos='v') for word in words]
print(lemmas)  # ['run', 'run', 'run']</code></pre>
        `
    },
    {
        id: 'text-representation',
        title: 'Text Representation Methods',
        duration: '35 min',
        content: `
            <h2>Text Representation Methods</h2>
            <p>Computers need numerical representations of text for processing.</p>
            
            <h3>Bag of Words (BoW)</h3>
            <pre><code class="python">from sklearn.feature_extraction.text import CountVectorizer

texts = [
    "The cat sat on the mat",
    "The dog sat on the log",
    "The cat ate the dog"
]

vectorizer = CountVectorizer()
bow_matrix = vectorizer.fit_transform(texts)

print("Vocabulary:", vectorizer.vocabulary_)
print("BoW Matrix:\n", bow_matrix.toarray())</code></pre>
            
            <h3>TF-IDF (Term Frequency-Inverse Document Frequency)</h3>
            <pre><code class="python">from sklearn.feature_extraction.text import TfidfVectorizer

tfidf_vectorizer = TfidfVectorizer()
tfidf_matrix = tfidf_vectorizer.fit_transform(texts)

print("TF-IDF Matrix:\n", tfidf_matrix.toarray())</code></pre>
            
            <h3>Word Embeddings</h3>
            <ul>
                <li><strong>Word2Vec</strong>: Predictive word embeddings</li>
                <li><strong>GloVe</strong>: Global vector representations</li>
                <li><strong>FastText</strong>: Subword embeddings</li>
                <li><strong>BERT</strong>: Contextual embeddings</li>
            </ul>
            
            <h3>Word2Vec Example</h3>
            <pre><code class="python">from gensim.models import Word2Vec

sentences = [
    ['the', 'cat', 'sat', 'on', 'the', 'mat'],
    ['the', 'dog', 'sat', 'on', 'the', 'log']
]

model = Word2Vec(sentences, vector_size=100, window=5, min_count=1, workers=4)

# Get vector for a word
vector = model.wv['cat']
print("Vector for 'cat':", vector[:5])  # First 5 dimensions</code></pre>
        `
    },
    {
        id: 'sentiment-analysis',
        title: 'Sentiment Analysis',
        duration: '30 min',
        content: `
            <h2>Sentiment Analysis</h2>
            <p>Sentiment analysis determines the emotional tone behind text.</p>
            
            <h3>Types of Sentiment Analysis</h3>
            <ul>
                <li><strong>Polarity Detection</strong>: Positive, negative, neutral</li>
                <li><strong>Emotion Detection</strong>: Joy, anger, sadness, etc.</li>
                <li><strong>Intent Analysis</strong>: Understanding user intent</li>
            </ul>
            
            <h3>Rule-Based Approach</h3>
            <pre><code class="python">from textblob import TextBlob

text = "I love this product! It's amazing."
blob = TextBlob(text)

sentiment = blob.sentiment
print(f"Polarity: {sentiment.polarity}")  # Range: -1 to 1
print(f"Subjectivity: {sentiment.subjectivity}")  # Range: 0 to 1</code></pre>
            
            <h3>Machine Learning Approach</h3>
            <pre><code class="python">from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# Sample data
texts = ["I love this movie!", "This is terrible.", "Amazing product!", "Worst experience."]
labels = [1, 0, 1, 0]  # 1: positive, 0: negative

# Vectorize text
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(texts)

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.3)
model = MultinomialNB()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
print(f"Accuracy: {accuracy_score(y_test, predictions)}")</code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Challenges</div>
                <p>Sarcasm, irony, and context can make sentiment analysis difficult. "This movie was sick!" could be positive or negative depending on context.</p>
            </div>
        `
    },
    {
        id: 'named-entity-recognition',
        title: 'Named Entity Recognition',
        duration: '25 min',
        content: `
            <h2>Named Entity Recognition (NER)</h2>
            <p>NER identifies and classifies named entities in text into predefined categories.</p>
            
            <h3>Common Entity Types</h3>
            <ul>
                <li><strong>PERSON</strong>: People's names (e.g., "John Doe")</li>
                <li><strong>ORGANIZATION</strong>: Companies, institutions (e.g., "Google")</li>
                <li><strong>LOCATION</strong>: Places, geographic entities (e.g., "New York")</li>
                <li><strong>DATE</strong>: Temporal expressions (e.g., "January 1, 2023")</li>
                <li><strong>MONEY</strong>: Monetary values (e.g., "$100")</li>
            </ul>
            
            <h3>Using spaCy for NER</h3>
            <pre><code class="python">import spacy

# Load English model
nlp = spacy.load("en_core_web_sm")

text = "Apple Inc. was founded by Steve Jobs in Cupertino, California in 1976."

doc = nlp(text)

# Extract named entities
for ent in doc.ents:
    print(f"Entity: {ent.text}, Label: {ent.label_}, Start: {ent.start_char}, End: {ent.end_char}")

# Output:
# Entity: Apple Inc., Label: ORG, Start: 0, End: 11
# Entity: Steve Jobs, Label: PERSON, Start: 25, End: 35
# Entity: Cupertino, Label: GPE, Start: 39, End: 48
# Entity: California, Label: GPE, Start: 50, End: 60
# Entity: 1976, Label: DATE, Start: 64, End: 68</code></pre>
            
            <h3>Custom NER with NLTK</h3>
            <pre><code class="python">import nltk
from nltk.tokenize import word_tokenize
from nltk.tag import pos_tag
from nltk.chunk import ne_chunk

text = "Barack Obama was born in Hawaii."

# Tokenize and POS tag
tokens = word_tokenize(text)
pos_tags = pos_tag(tokens)

# Named entity recognition
entities = ne_chunk(pos_tags)

print(entities)</code></pre>
            
            <h3>Applications of NER</h3>
            <ul>
                <li>Information extraction from documents</li>
                <li>Resume parsing and analysis</li>
                <li>Content recommendation systems</li>
                <li>Search engine optimization</li>
            </ul>
        `
    }
];
