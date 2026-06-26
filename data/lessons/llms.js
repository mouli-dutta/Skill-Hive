const LLMsLessons = [
    {
        id: 'llm-intro',
        title: 'Introduction to LLMs',
        duration: '30 min',
        content: `
            <h2>Introduction to Large Language Models</h2>
            <p>Large Language Models (LLMs) are AI systems trained on vast amounts of text data to understand and generate human-like text.</p>
            
            <h3>What are LLMs?</h3>
            <ul>
                <li>Neural networks with billions of parameters</li>
                <li>Trained on diverse text from the internet</li>
                <li>Capable of understanding context and generating coherent text</li>
                <li>Foundation for many AI applications</li>
            </ul>
            
            <h3>Key Characteristics</h3>
            <ul>
                <li><strong>Scale</strong>: Models range from millions to trillions of parameters</li>
                <li><strong>Training Data</strong>: Diverse text from books, websites, articles</li>
                <li><strong>Capabilities</strong>: Text generation, translation, summarization, reasoning</li>
                <li><strong>Emergent Abilities</strong>: Skills that appear at larger scales</li>
            </ul>
            
            <h3>Famous LLMs</h3>
            <ul>
                <li><strong>GPT Series</strong>: GPT-3, GPT-4 by OpenAI</li>
                <li><strong>BERT</strong>: Google's bidirectional model</li>
                <li><strong>T5</strong>: Text-to-Text Transfer Transformer</li>
                <li><strong>LLaMA</strong>: Meta's efficient models</li>
            </ul>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Scale Matters</div>
                <p>As models scale up, they develop emergent abilities like reasoning, few-shot learning, and code generation that weren't present in smaller models.</p>
            </div>
        `
    },
    {
        id: 'llm-architecture',
        title: 'LLM Architecture and Training',
        duration: '35 min',
        content: `
            <h2>LLM Architecture and Training</h2>
            <p>Understanding how LLMs are built and trained is essential for effective usage.</p>
            
            <h3>Transformer Architecture</h3>
            <ul>
                <li><strong>Self-Attention</strong>: Weighs importance of different tokens</li>
                <li><strong>Multi-Head Attention</strong>: Parallel attention mechanisms</li>
                <li><strong>Feed-Forward Networks</strong>: Process representations</li>
                <li><strong>Positional Encoding</strong>: Understand token order</li>
            </ul>
            
            <h3>Training Process</h3>
            <pre><code class="python"># Simplified training loop
for batch in dataloader:
    inputs = batch['text']
    targets = batch['target']
    
    # Forward pass
    outputs = model(inputs)
    loss = loss_function(outputs, targets)
    
    # Backward pass
    loss.backward()
    optimizer.step()
    optimizer.zero_grad()</code></pre>
            
            <h3>Training Objectives</h3>
            <ul>
                <li><strong>Causal Language Modeling</strong>: Predict next token</li>
                <li><strong>Masked Language Modeling</strong>: Predict masked tokens</li>
                <li><strong>Sequence-to-Sequence</strong>: Input-output mapping</li>
            </ul>
            
            <h3>Computational Requirements</h3>
            <ul>
                <li><strong>GPU Clusters</strong>: Thousands of GPUs for training</li>
                <li><strong>Memory</strong>: Hundreds of GB for large models</li>
                <li><strong>Time</strong>: Weeks to months of training</li>
                <li><strong>Cost</strong>: Millions of dollars for largest models</li>
            </ul>
        `
    },
    {
        id: 'prompt-engineering',
        title: 'Prompt Engineering',
        duration: '30 min',
        content: `
            <h2>Prompt Engineering</h2>
            <p>Prompt engineering is the art and science of crafting effective inputs to get desired outputs from LLMs.</p>
            
            <h3>Key Principles</h3>
            <ul>
                <li><strong>Clarity</strong>: Be specific and unambiguous</li>
                <li><strong>Context</strong>: Provide relevant background information</li>
                <li><strong>Format</strong>: Specify desired output format</li>
                <li><strong>Examples</strong>: Show what good output looks like</li>
            </ul>
            
            <h3>Prompt Techniques</h3>
            <pre><code class="python"># Zero-shot prompting
prompt = "Translate 'Hello world' to French."

# Few-shot prompting
prompt = """
Translate English to French:
'Hello world' -> 'Bonjour le monde'
'How are you?' -> 'Comment allez-vous?'
'Good morning' -> ?
"""

# Chain-of-thought prompting
prompt = """
Solve this step by step:
If a train travels 60 mph for 2 hours, how far does it travel?
Let's think step by step...
"""</code></pre>
            
            <h3>Advanced Techniques</h3>
            <ul>
                <li><strong>Chain-of-Thought</strong>: Encourage step-by-step reasoning</li>
                <li><strong>Self-Consistency</strong>: Generate multiple solutions and vote</li>
                <li><strong>Tree-of-Thoughts</strong>: Explore multiple reasoning paths</li>
                <li><strong>Retrieval-Augmented</strong>: Provide external context</li>
            </ul>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Common Pitfalls</div>
                <p>Avoid ambiguous prompts, insufficient context, and contradictory instructions. Test prompts thoroughly before deployment.</p>
            </div>
        `
    },
    {
        id: 'fine-tuning',
        title: 'Fine-Tuning LLMs',
        duration: '35 min',
        content: `
            <h2>Fine-Tuning Large Language Models</h2>
            <p>Fine-tuning adapts pre-trained models to specific tasks or domains.</p>
            
            <h3>When to Fine-Tune</h3>
            <ul>
                <li>Domain-specific terminology</li>
                <li>Particular format requirements</li>
                <li>Improved performance on specific tasks</li>
                <li>Cost efficiency vs. prompt engineering</li>
            </ul>
            
            <h3>Fine-Tuning Methods</h3>
            <pre><code class="python"># Full fine-tuning
model = AutoModelForCausalLM.from_pretrained("base-model")
model.train()
optimizer = AdamW(model.parameters(), lr=5e-5)

# Parameter-efficient fine-tuning (PEFT)
from peft import LoraConfig, get_peft_model
config = LoraConfig(r=16, lora_alpha=32)
model = get_peft_model(model, config)</code></pre>
            
            <h3>Dataset Preparation</h3>
            <ul>
                <li><strong>Quality</strong>: Ensure accurate, relevant examples</li>
                <li><strong>Quantity</strong>: Balance between cost and performance</li>
                <li><strong>Diversity</strong>: Cover various scenarios and edge cases</li>
                <li><strong>Format</strong>: Consistent input-output structure</li>
            </ul>
            
            <h3>Best Practices</h3>
            <ul>
                <li>Start with small learning rates (1e-5 to 5e-5)</li>
                <li>Use validation sets to prevent overfitting</li>
                <li>Monitor loss and perplexity</li>
                <li>Consider parameter-efficient methods for cost savings</li>
            </ul>
        `
    },
    {
        id: 'llm-applications',
        title: 'LLM Applications and Use Cases',
        duration: '25 min',
        content: `
            <h2>LLM Applications and Use Cases</h2>
            <p>LLMs are powering a wide range of applications across industries.</p>
            
            <h3>Content Creation</h3>
            <ul>
                <li><strong>Writing Assistance</strong>: Emails, reports, articles</li>
                <li><strong>Creative Writing</strong>: Stories, scripts, poetry</li>
                <li><strong>Marketing Copy</strong>: Ads, social media posts</li>
                <li><strong>Technical Documentation</strong>: Manuals, guides</li>
            </ul>
            
            <h3>Business Applications</h3>
            <ul>
                <li><strong>Customer Support</strong>: Chatbots, ticket routing</li>
                <li><strong>Data Analysis</strong>: Summarization, insights</li>
                <li><strong>Code Generation</strong>: Development assistance</li>
                <li><strong>Research</strong>: Literature review, synthesis</li>
            </ul>
            
            <h3>Integration Examples</h3>
            <pre><code class="python"># API integration
import openai

def generate_summary(text):
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Summarize the following text:"},
            {"role": "user", "content": text}
        ]
    )
    return response.choices[0].message.content</code></pre>
            
            <h3>Emerging Applications</h3>
            <ul>
                <li><strong>Education</strong>: Personalized tutoring, assessment</li>
                <li><strong>Healthcare</strong>: Medical documentation, diagnosis support</li>
                <li><strong>Legal</strong>: Contract analysis, research</li>
                <li><strong>Finance</strong>: Analysis, reporting, compliance</li>
            </ul>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Ethical Considerations</div>
                <p>Consider bias, privacy, accuracy, and appropriate use when deploying LLM applications.</p>
            </div>
        `
    }
];
