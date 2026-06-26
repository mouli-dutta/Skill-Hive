const TransformersLessons = [
    {
        id: 'attention',
        title: 'Attention Mechanism',
        duration: '30 min',
        content: `
            <h2>Attention Mechanism</h2>
            <p>Attention mechanisms allow neural networks to focus on different parts of the input when producing outputs.</p>
            
            <h3>What is Attention?</h3>
            <ul>
                <li>Mechanism for weighing the importance of different input elements</li>
                <li>Enables models to handle long-range dependencies</li>
                <li>Improves performance on sequence-to-sequence tasks</li>
            </ul>
            
            <h3>Types of Attention</h3>
            <ul>
                <li><strong>Self-Attention</strong>: Relates different positions in the same sequence</li>
                <li><strong>Cross-Attention</strong>: Relates elements from different sequences</li>
                <li><strong>Multi-Head Attention</strong>: Multiple attention mechanisms in parallel</li>
            </ul>
            
            <h3>Attention Formula</h3>
            <pre><code class="python">import torch
import torch.nn.functional as F

def attention(Q, K, V):
    # Q, K, V: Query, Key, Value matrices
    scores = torch.matmul(Q, K.transpose(-2, -1)) / math.sqrt(d_k)
    attention_weights = F.softmax(scores, dim=-1)
    output = torch.matmul(attention_weights, V)
    return output</code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Key Insight</div>
                <p>Attention allows the model to "look back" at previous tokens when processing current tokens, similar to how humans pay attention to important words.</p>
            </div>
        `
    },
    {
        id: 'transformer-architecture',
        title: 'Transformer Architecture',
        duration: '35 min',
        content: `
            <h2>Transformer Architecture</h2>
            <p>The Transformer architecture revolutionized NLP by replacing recurrent layers with attention mechanisms.</p>
            
            <h3>Key Components</h3>
            <ul>
                <li><strong>Multi-Head Self-Attention</strong>: Parallel attention mechanisms</li>
                <li><strong>Position-wise Feed-Forward Networks</strong>: Process each position independently</li>
                <li><strong>Positional Encoding</strong>: Add position information to embeddings</li>
                <li><strong>Layer Normalization</strong>: Stabilize training</li>
                <li><strong>Residual Connections</strong>: Prevent vanishing gradients</li>
            </ul>
            
            <h3>Encoder-Decoder Structure</h3>
            <pre><code class="python">class Transformer(nn.Module):
    def __init__(self, encoder, decoder, embedding, generator):
        super().__init__()
        self.encoder = encoder
        self.decoder = decoder
        self.embedding = embedding
        self.generator = generator
    
    def forward(self, src, tgt, src_mask, tgt_mask):
        # Encode source sequence
        encoded = self.encode(src, src_mask)
        # Decode target sequence
        decoded = self.decode(encoded, src_mask, tgt, tgt_mask)
        return decoded</code></pre>
            
            <h3>Positional Encoding</h3>
            <pre><code class="python">def positional_encoding(max_len, d_model):
    pe = torch.zeros(max_len, d_model)
    position = torch.arange(0, max_len).unsqueeze(1)
    
    div_term = torch.exp(torch.arange(0, d_model, 2) * 
                        -(math.log(10000.0) / d_model))
    
    pe[:, 0::2] = torch.sin(position * div_term)
    pe[:, 1::2] = torch.cos(position * div_term)
    return pe</code></pre>
        `
    },
    {
        id: 'bert',
        title: 'BERT and Pre-training',
        duration: '30 min',
        content: `
            <h2>BERT: Bidirectional Encoder Representations from Transformers</h2>
            <p>BERT revolutionized NLP by pre-training on massive amounts of text data.</p>
            
            <h3>Key Innovations</h3>
            <ul>
                <li><strong>Bidirectional Context</strong>: Considers both left and right context</li>
                <li><strong>Masked Language Modeling</strong>: Predict masked tokens</li>
                <li><strong>Next Sentence Prediction</strong>: Understand sentence relationships</li>
            </ul>
            
            <h3>Pre-training Tasks</h3>
            <pre><code class="python"># Masked Language Modeling
text = "The [MASK] is brown."
# Model predicts: "dog", "cat", "bear", etc.

# Next Sentence Prediction
sentence1 = "The dog played in the park."
sentence2 = "It was very happy."
# Model predicts: IsNext</code></pre>
            
            <h3>Using BERT</h3>
            <pre><code class="python">from transformers import BertTokenizer, BertModel

# Load pre-trained BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Encode text
text = "Hello, how are you?"
inputs = tokenizer(text, return_tensors='pt')

# Get embeddings
outputs = model(**inputs)
last_hidden_states = outputs.last_hidden_state</code></pre>
            
            <h3>Fine-tuning BERT</h3>
            <ul>
                <li>Classification tasks (sentiment analysis)</li>
                <li>Named Entity Recognition</li>
                <li>Question Answering</li>
                <li>Text Summarization</li>
            </ul>
        `
    },
    {
        id: 'gpt',
        title: 'GPT and Autoregressive Models',
        duration: '25 min',
        content: `
            <h2>GPT: Generative Pre-trained Transformer</h2>
            <p>GPT models are designed for text generation using autoregressive training.</p>
            
            <h3>Autoregressive Training</h3>
            <ul>
                <li>Train to predict next token given previous tokens</li>
                <li>Unidirectional (left-to-right) context</li>
                <li>Excellent for text generation tasks</li>
            </ul>
            
            <h3>GPT Architecture</h3>
            <pre><code class="python">class GPT(nn.Module):
    def __init__(self, vocab_size, n_embd, n_head, n_layer):
        super().__init__()
        self.transformer = nn.TransformerDecoder(
            nn.TransformerDecoderLayer(
                d_model=n_embd,
                nhead=n_head,
                batch_first=True
            ),
            num_layers=n_layer
        )
        self.lm_head = nn.Linear(n_embd, vocab_size)
    
    def forward(self, x):
        x = self.transformer(x)
        return self.lm_head(x)</code></pre>
            
            <h3>Using GPT for Generation</h3>
            <pre><code class="python">from transformers import GPT2LMHeadModel, GPT2Tokenizer

# Load GPT-2
tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2LMHeadModel.from_pretrained('gpt2')

# Generate text
prompt = "The future of AI is"
inputs = tokenizer(prompt, return_tensors='pt')

outputs = model.generate(
    inputs.input_ids,
    max_length=100,
    num_return_sequences=1,
    temperature=0.7
)

generated_text = tokenizer.decode(outputs[0], skip_special_tokens=True)</code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Considerations</div>
                <p>GPT models can generate plausible but incorrect information. Always verify important information from reliable sources.</p>
            </div>
        `
    },
    {
        id: 'vision-transformers',
        title: 'Vision Transformers',
        duration: '30 min',
        content: `
            <h2>Vision Transformers (ViT)</h2>
            <p>Vision Transformers apply transformer architecture to computer vision tasks.</p>
            
            <h3>From Images to Sequences</h3>
            <ul>
                <li>Split images into patches</li>
                <li>Flatten patches into sequences</li>
                <li>Apply standard transformer architecture</li>
            </ul>
            
            <h3>ViT Architecture</h3>
            <pre><code class="python">class VisionTransformer(nn.Module):
    def __init__(self, img_size=224, patch_size=16, num_classes=1000):
        super().__init__()
        self.patch_size = patch_size
        self.num_patches = (img_size // patch_size) ** 2
        
        # Patch embedding
        self.patch_embedding = nn.Conv2d(
            3, 768, kernel_size=patch_size, stride=patch_size
        )
        
        # Position embedding
        self.pos_embedding = nn.Parameter(
            torch.randn(1, self.num_patches + 1, 768)
        )
        
        # Transformer encoder
        self.transformer = nn.TransformerEncoder(
            nn.TransformerEncoderLayer(
                d_model=768, nhead=12, batch_first=True
            ),
            num_layers=12
        )
        
        # Classification head
        self.classifier = nn.Linear(768, num_classes)
    
    def forward(self, x):
        # Create patches and embed
        x = self.patch_embedding(x)
        x = x.flatten(2).transpose(1, 2)
        
        # Add position embedding
        x = x + self.pos_embedding
        
        # Apply transformer
        x = self.transformer(x)
        
        # Classify
        return self.classifier(x[:, 0])</code></pre>
            
            <h3>Advantages of ViT</h3>
            <ul>
                <li>Global receptive field from first layer</li>
                <li>Scalable to large datasets</li>
                <li>Transfer learning capabilities</li>
                <li>State-of-the-art performance on many vision tasks</li>
            </ul>
        `
    }
];
