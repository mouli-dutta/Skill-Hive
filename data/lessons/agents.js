const AgentsLessons = [
{
    id: 'agents-intro',
    title: 'Introduction to AI Agents',
    duration: '30 min',
    content: `
        <h2>Welcome to AI Agents</h2>

        <p>
            Artificial Intelligence has evolved rapidly over the last few years.
            You've probably interacted with chatbots like ChatGPT, Gemini, or Claude.
            While these systems are impressive, they are primarily designed to answer
            questions or generate text.
        </p>

        <p>
            An <strong>AI Agent</strong> goes one step further. Instead of only responding,
            it can <strong>plan, reason, use tools, remember information, and complete
            tasks autonomously.</strong>
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Think of an AI Agent as an Assistant</div>
            <p>
                A chatbot answers questions. An AI agent completes work on your behalf.
            </p>
        </div>

        <h2>What is an AI Agent?</h2>

        <p>
            An AI Agent is a software system that observes its environment, understands
            a goal, decides what actions to perform, executes those actions, and learns
            from the results.
        </p>

        <p>For example, imagine asking:</p>

        <blockquote>
            "Find the cheapest flight to Tokyo next month, compare hotel prices,
            summarize the options, and email me the results."
        </blockquote>

        <p>
            A normal chatbot may explain how to search for flights.
            An AI agent can actually perform those steps using external tools.
        </p>

        <h2>How Does an Agent Work?</h2>

        <p>
            Almost every AI agent follows a simple workflow:
        </p>

        <ol>
            <li>Receive a goal.</li>
            <li>Understand the objective.</li>
            <li>Create a plan.</li>
            <li>Use tools if necessary.</li>
            <li>Evaluate the outcome.</li>
            <li>Repeat until the task is complete.</li>
        </ol>

        <pre><code class="language-python"><span class="syntax-comment"># Simplified agent workflow</span>

goal = <span class="syntax-string">"Book the cheapest flight"</span>

<span class="syntax-keyword">while</span> <span class="syntax-keyword">not</span> task_completed:
    plan = create_plan(goal)
    action = choose_action(plan)
    execute(action)
    evaluate_progress()</code></pre>

        <h2>Real-World Examples</h2>

        <ul>
            <li>Customer support assistants</li>
            <li>Personal scheduling assistants</li>
            <li>Email management systems</li>
            <li>Research assistants</li>
            <li>Coding assistants</li>
            <li>Financial analysis tools</li>
        </ul>

        <h2>Chatbot vs AI Agent</h2>

        <table>
            <tr>
                <th>Chatbot</th>
                <th>AI Agent</th>
            </tr>
            <tr>
                <td>Answers questions</td>
                <td>Completes tasks</td>
            </tr>
            <tr>
                <td>Limited memory</td>
                <td>Can maintain memory</td>
            </tr>
            <tr>
                <td>No planning</td>
                <td>Plans multiple steps</td>
            </tr>
            <tr>
                <td>Rarely uses tools</td>
                <td>Can use APIs, databases, browsers and software</td>
            </tr>
        </table>

        <div class="callout callout-success">
            <div class="callout-title">✅ Key Idea</div>
            <p>
                Intelligence is only one part of an AI agent.
                The ability to act makes an agent truly useful.
            </p>
        </div>

        <h2>Common Misconception</h2>

        <p>
            Many beginners believe an AI agent is simply a large language model.
            This isn't true.
        </p>

        <p>
            The language model is the <strong>brain</strong>,
            while planning, memory, and tools allow the system to become an agent.
        </p>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Remember</div>
            <p>
                Every AI agent contains intelligence,
                but not every AI model is an AI agent.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>An AI agent performs actions instead of only generating text.</li>
            <li>Agents solve multi-step problems.</li>
            <li>Agents can interact with external software.</li>
            <li>Planning and memory are essential features.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Think of three tasks you perform every day.
            Which of those could be delegated to an AI agent?
            Explain why.
        </p>
    `
},

{
    id: 'what-is-an-agent',
    title: 'What Makes an AI Agent?',
    duration: '35 min',
    content: `
        <h2>Beyond Simple AI</h2>

        <p>
            If an AI agent is more than a chatbot, then what exactly gives it
            that extra capability?
        </p>

        <p>
            Every modern AI agent is built from several components working together.
            Think of it like a robot made from different parts.
        </p>

        <h2>The Five Core Components</h2>

        <ol>
            <li>Brain (LLM)</li>
            <li>Memory</li>
            <li>Planning</li>
            <li>Tools</li>
            <li>Actions</li>
        </ol>

        <div class="callout callout-info">
            <div class="callout-title">💡 Analogy</div>
            <p>
                Humans use a brain to think,
                memory to remember,
                hands to interact,
                and planning to achieve goals.
                AI agents work in a very similar way.
            </p>
        </div>

        <h2>1. Brain</h2>

        <p>
            The brain is usually a Large Language Model (LLM).
            It understands instructions,
            reasons about problems,
            and generates responses.
        </p>

        <pre><code class="language-python"><span class="syntax-comment"># Asking the model for a plan</span>

prompt = <span class="syntax-string">"Plan a weekend trip to Paris."</span>

response = llm.generate(prompt)</code></pre>

        <h2>2. Memory</h2>

        <p>
            Memory allows the agent to remember previous conversations,
            preferences, and completed tasks.
        </p>

        <pre><code class="language-python">memory.save(
    <span class="syntax-string">"Favorite programming language"</span>,
    <span class="syntax-string">"Python"</span>
)

favorite = memory.load(
    <span class="syntax-string">"Favorite programming language"</span>
)</code></pre>

        <h2>3. Planning</h2>

        <p>
            Instead of immediately answering,
            the agent breaks large tasks into smaller ones.
        </p>

        <pre><code class="language-python"><span class="syntax-comment"># Example plan</span>

steps = [
    <span class="syntax-string">"Search flights"</span>,
    <span class="syntax-string">"Compare prices"</span>,
    <span class="syntax-string">"Choose cheapest"</span>,
    <span class="syntax-string">"Generate report"</span>
]</code></pre>

        <h2>4. Tools</h2>

        <p>
            Tools allow the agent to interact with the outside world.
        </p>

        <ul>
            <li>Search engines</li>
            <li>Databases</li>
            <li>Email services</li>
            <li>Weather APIs</li>
            <li>Python code execution</li>
            <li>Calendars</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-comment"># Using a weather API</span>

weather = weather_api(
    city=<span class="syntax-string">"London"</span>
)</code></pre>

        <h2>5. Actions</h2>

        <p>
            After deciding what to do,
            the agent performs the action.
        </p>

        <pre><code class="language-python">send_email(
    to=<span class="syntax-string">"boss@example.com"</span>,
    subject=<span class="syntax-string">"Weekly Report"</span>,
    body=report
)</code></pre>

        <h2>Putting Everything Together</h2>

        <pre><code class="language-python"><span class="syntax-comment"># Simplified agent architecture</span>

goal = get_user_goal()

plan = planner(goal)

<span class="syntax-keyword">for</span> step <span class="syntax-keyword">in</span> plan:
    tool = choose_tool(step)
    result = tool.run(step)
    memory.store(result)

answer = summarize(memory)</code></pre>

        <h2>Architecture Overview</h2>

        <pre>
User
  │
  ▼
LLM (Brain)
  │
  ▼
Planner
  │
  ▼
Tools ───► External APIs
  │
  ▼
Memory
  │
  ▼
Final Response
        </pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Important Insight</div>
            <p>
                Modern AI agents are not one giant model.
                They are collections of specialized components working together.
            </p>
        </div>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Assuming the LLM can remember everything forever.</li>
            <li>Giving the agent too many tools.</li>
            <li>Skipping planning for complex tasks.</li>
            <li>Ignoring error handling.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Best Practice</div>
            <p>
                Keep your agent as simple as possible.
                Add memory, tools, and planning only when they solve a real problem.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>The LLM provides intelligence.</li>
            <li>Memory stores information.</li>
            <li>Planning breaks tasks into steps.</li>
            <li>Tools connect the agent to the outside world.</li>
            <li>Actions are what make an agent useful.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design an AI travel assistant.
            List which tools it would need,
            what information it should remember,
            and how it would plan a vacation.
        </p>
    `
},

{
    id: 'llms-as-brains',
    title: 'Large Language Models as the Agent Brain',
    duration: '40 min',
    content: `
        <h2>The Brain of an AI Agent</h2>

        <p>
            In the previous lesson, we learned that an AI agent is made up of several
            components. The most important of these is the <strong>Large Language Model (LLM)</strong>.
        </p>

        <p>
            Think of the LLM as the brain of your agent. Just as your brain understands
            language, makes decisions, and solves problems, an LLM performs these tasks
            for an AI agent.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Idea</div>
            <p>
                The LLM does not directly perform actions—it decides <strong>what</strong>
                should happen. Other components carry out those decisions.
            </p>
        </div>

        <h2>What is a Large Language Model?</h2>

        <p>
            A Large Language Model is a neural network trained on enormous amounts
            of text from books, websites, research papers, and code.
        </p>

        <p>
            During training, it learns patterns in language so it can predict the
            next word in a sequence. Surprisingly, this simple objective allows the
            model to answer questions, write code, summarize text, translate languages,
            and solve many reasoning tasks.
        </p>

        <h2>How Does an LLM Work?</h2>

        <p>
            Every interaction follows the same high-level process:
        </p>

        <ol>
            <li>Receive a prompt.</li>
            <li>Convert text into tokens.</li>
            <li>Analyze the context.</li>
            <li>Predict the next token.</li>
            <li>Repeat until a response is complete.</li>
        </ol>

        <pre><code class="language-python"><span class="syntax-comment"># Conceptual interaction</span>

prompt = <span class="syntax-string">"Explain recursion."</span>

response = llm.generate(prompt)

print(response)</code></pre>

        <h2>Tokens</h2>

        <p>
            Computers don't understand words directly. Instead, text is broken into
            smaller pieces called <strong>tokens</strong>.
        </p>

        <p>
            For example:
        </p>

        <pre>
"Artificial Intelligence is amazing."

↓

["Artificial", " Intelligence", " is", " amazing", "."]
        </pre>

        <p>
            Every token becomes a number before entering the model.
        </p>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Context Window</div>
            <p>
                Every LLM has a maximum number of tokens it can remember in one
                conversation. This is called its <strong>context window</strong>.
            </p>
        </div>

        <h2>Reasoning</h2>

        <p>
            Modern LLMs can solve surprisingly complex problems by breaking them into
            smaller steps internally.
        </p>

        <pre><code class="language-python">question = <span class="syntax-string">"If a train travels 80 km/h for 3 hours,
how far does it travel?"</span>

answer = llm.generate(question)</code></pre>

        <p>
            The model performs reasoning before producing:
        </p>

        <pre>
Distance = Speed × Time

80 × 3 = 240 km
        </pre>

        <h2>Strengths of LLMs</h2>

        <ul>
            <li>Natural language understanding</li>
            <li>Code generation</li>
            <li>Summarization</li>
            <li>Creative writing</li>
            <li>Question answering</li>
            <li>Pattern recognition</li>
        </ul>

        <h2>Limitations</h2>

        <ul>
            <li>May generate incorrect facts (hallucinations)</li>
            <li>Limited context window</li>
            <li>Cannot access live information without tools</li>
            <li>Cannot perform actions independently</li>
        </ul>

        <div class="callout callout-error">
            <div class="callout-title">❌ Common Misconception</div>
            <p>
                An LLM does not "know" the answer in the same way humans do.
                It predicts the most likely next tokens based on patterns learned
                during training.
            </p>
        </div>

        <h2>LLM + Agent</h2>

        <p>
            Imagine asking:
        </p>

        <blockquote>
            "Book me the cheapest flight to Delhi."
        </blockquote>

        <p>
            The LLM understands the request, identifies the need to search for
            flights, and decides which tool should be used. It doesn't book the
            ticket itself—the surrounding agent system performs the action.
        </p>

        <pre><code class="language-python"><span class="syntax-comment"># Conceptual workflow</span>

goal = user_input()

plan = llm.generate(goal)

tool.execute(plan)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Lesson Summary</div>
            <ul>
                <li>The LLM is the intelligence behind the agent.</li>
                <li>It predicts tokens to generate responses.</li>
                <li>It reasons using context.</li>
                <li>It cannot use tools without an agent framework.</li>
            </ul>
        </div>

        <h2>Practice Exercise</h2>

        <p>
            Explain why an LLM alone cannot book a hotel reservation.
            Which additional components would be required?
        </p>
    `
},

{
    id: 'agent-components',
    title: 'Core Components of an AI Agent',
    duration: '45 min',
    content: `
        <h2>Building an AI Agent</h2>

        <p>
            Now that you understand what an LLM does, let's explore the complete
            architecture of an AI agent.
        </p>

        <p>
            A successful AI agent combines multiple components that work together,
            each with a specific responsibility.
        </p>

        <h2>Agent Architecture</h2>

<pre>
                 User
                   │
                   ▼
            +---------------+
            |      LLM      |
            +---------------+
                   │
      ┌────────────┼────────────┐
      ▼            ▼            ▼
 Planner       Memory       Tool Manager
      │            │            │
      └────────────┼────────────┘
                   ▼
               Final Answer
</pre>

        <div class="callout callout-info">
            <div class="callout-title">💡 Architecture Matters</div>
            <p>
                Powerful agents are not created by bigger language models alone.
                Good architecture often matters even more.
            </p>
        </div>

        <h2>1. The Brain (LLM)</h2>

        <p>
            Responsible for understanding language, reasoning, and deciding what
            should happen next.
        </p>

        <h2>2. Planner</h2>

        <p>
            The planner breaks large goals into smaller tasks.
        </p>

        <pre><code class="language-python">goal = <span class="syntax-string">"Write a research report"</span>

steps = [
    <span class="syntax-string">"Search papers"</span>,
    <span class="syntax-string">"Summarize findings"</span>,
    <span class="syntax-string">"Write report"</span>,
    <span class="syntax-string">"Review report"</span>
]</code></pre>

        <h2>3. Memory</h2>

        <p>
            Memory stores information that may be useful later.
        </p>

        <p>
            Examples include:
        </p>

        <ul>
            <li>User preferences</li>
            <li>Conversation history</li>
            <li>Previous tool results</li>
            <li>Completed tasks</li>
        </ul>

        <pre><code class="language-python">memory.store(
    key=<span class="syntax-string">"favorite_language"</span>,
    value=<span class="syntax-string">"Python"</span>
)</code></pre>

        <h2>4. Tool Manager</h2>

        <p>
            The Tool Manager decides which external tool should be used for each task.
        </p>

        <p>
            Examples include:
        </p>

        <ul>
            <li>Search engines</li>
            <li>Weather APIs</li>
            <li>Email clients</li>
            <li>SQL databases</li>
            <li>Python interpreter</li>
        </ul>

        <pre><code class="language-python">tool = select_tool(
    <span class="syntax-string">"weather"</span>
)

forecast = tool.run(
    city=<span class="syntax-string">"London"</span>
)</code></pre>

        <h2>5. Action Executor</h2>

        <p>
            After a plan has been created, the Action Executor carries it out.
        </p>

        <pre><code class="language-python">execute(
    action=<span class="syntax-string">"Send Email"</span>,
    recipient=<span class="syntax-string">"team@example.com"</span>
)</code></pre>

        <h2>Agent Lifecycle</h2>

        <ol>
            <li>User gives a goal.</li>
            <li>LLM understands the request.</li>
            <li>Planner creates steps.</li>
            <li>Tools gather information.</li>
            <li>Memory stores useful data.</li>
            <li>Agent evaluates progress.</li>
            <li>Final response is generated.</li>
        </ol>

        <pre><code class="language-python"><span class="syntax-comment"># Simplified workflow</span>

goal = receive_goal()

plan = planner(goal)

<span class="syntax-keyword">for</span> step <span class="syntax-keyword">in</span> plan:

    tool = choose_tool(step)

    result = tool.run(step)

    memory.save(result)

response = llm.generate(memory)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Design Principle</div>
            <p>
                Keep each component responsible for one job.
                Modular agents are easier to maintain and improve.
            </p>
        </div>

        <h2>Common Beginner Mistakes</h2>

        <ul>
            <li>Using the LLM for everything.</li>
            <li>Not storing important information.</li>
            <li>Giving the agent unnecessary tools.</li>
            <li>Skipping validation of tool outputs.</li>
            <li>Creating overly complex workflows.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Best Practice</div>
            <p>
                Build your agent incrementally. Start with an LLM, then add memory,
                planning, and tools only when needed.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Agents consist of multiple specialized components.</li>
            <li>The LLM provides intelligence.</li>
            <li>The planner organizes work.</li>
            <li>Memory retains useful information.</li>
            <li>Tools connect the agent to external systems.</li>
            <li>The executor performs actions.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design an AI email assistant. Identify the planner, memory, tools,
            and actions it would require to automatically organize a user's inbox.
        </p>
    `
},

{
    id: 'prompt-engineering-agents',
    title: 'Prompt Engineering for AI Agents',
    duration: '45 min',
    content: `
        <h2>Why Prompt Engineering Matters</h2>

        <p>
            An AI agent is only as effective as the instructions it receives.
            Even the most powerful Large Language Model can produce poor results
            if it is given vague or incomplete prompts.
        </p>

        <p>
            <strong>Prompt Engineering</strong> is the practice of designing clear,
            structured instructions that guide an AI agent toward the desired behavior.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Think of a Prompt as a Job Description</div>
            <p>
                Imagine hiring a new employee. If you simply say
                "Do the work," they'll be confused.
                But if you explain their responsibilities, available tools,
                and expected output, they'll perform much better.
                AI agents work the same way.
            </p>
        </div>

        <h2>The Anatomy of a Good Prompt</h2>

        <p>
            A well-designed prompt usually contains several parts:
        </p>

        <ol>
            <li>Role</li>
            <li>Objective</li>
            <li>Context</li>
            <li>Available Tools</li>
            <li>Constraints</li>
            <li>Desired Output Format</li>
        </ol>

        <h2>Example: Poor Prompt</h2>

<pre><code class="language-python"><span class="syntax-string">"Write an email."</span></code></pre>

        <p>
            This instruction is too vague. The model doesn't know the recipient,
            tone, purpose, or required information.
        </p>

        <h2>Example: Better Prompt</h2>

<pre><code class="language-python"><span class="syntax-string">
You are a professional assistant.

Task:
Write a polite email to a customer informing them
that their package will arrive tomorrow.

Tone:
Friendly and professional.

Output:
Only return the email.
</span></code></pre>

        <h2>Role Prompting</h2>

        <p>
            Assigning a role helps the model respond consistently.
        </p>

<pre><code class="language-python"><span class="syntax-string">
You are a cybersecurity expert.

Analyze the following log file and identify
possible security threats.
</span></code></pre>

        <h2>Providing Context</h2>

        <p>
            Context allows the model to make informed decisions.
        </p>

<pre><code class="language-python"><span class="syntax-string">
Customer Name: Alice

Subscription:
Premium Plan

Previous Issue:
Payment failed last month.

Task:
Respond to the customer's latest question.
</span></code></pre>

        <h2>Setting Constraints</h2>

        <p>
            Constraints prevent the model from generating unnecessary or
            incorrect output.
        </p>

<pre><code class="language-python"><span class="syntax-string">
Rules:

- Maximum 150 words
- Do not mention pricing
- Use bullet points
- Be professional
</span></code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>
                Tell the agent exactly what success looks like.
                The more specific your instructions,
                the more consistent the results.
            </p>
        </div>

        <h2>Prompt Templates</h2>

        <p>
            Most production AI agents don't create prompts from scratch.
            They use reusable templates with placeholders.
        </p>

<pre><code class="language-python">template = <span class="syntax-string">"""
You are {role}.

Goal:
{goal}

Available Tools:
{tools}

Rules:
{rules}

Return:
{format}
"""</span></code></pre>

        <h2>System Prompts</h2>

        <p>
            A <strong>System Prompt</strong> defines the overall behavior of the
            agent. Users normally don't see this prompt, but it strongly influences
            every response.
        </p>

<pre><code class="language-python"><span class="syntax-string">
You are an AI travel assistant.

Always provide accurate information.

Never invent flight prices.

Use the search tool whenever current
information is required.
</span></code></pre>

        <h2>Common Prompting Mistakes</h2>

        <ul>
            <li>Giving multiple unrelated tasks in one prompt.</li>
            <li>Providing insufficient context.</li>
            <li>Leaving the output format unspecified.</li>
            <li>Using ambiguous instructions.</li>
            <li>Assuming the model knows private information.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Remember</div>
            <p>
                Better prompts improve reliability,
                but they cannot compensate for missing tools or outdated information.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Prompt engineering controls agent behavior.</li>
            <li>Good prompts define a role, goal, context, constraints, and output format.</li>
            <li>System prompts establish long-term behavior.</li>
            <li>Templates make prompts reusable.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Create a prompt for an AI customer support agent that:
        </p>

        <ul>
            <li>Greets customers politely</li>
            <li>Uses the company knowledge base</li>
            <li>Escalates billing issues</li>
            <li>Answers in under 200 words</li>
        </ul>
    `
},

{
    id: 'memory',
    title: 'Memory Systems in AI Agents',
    duration: '45 min',
    content: `
        <h2>Why Do AI Agents Need Memory?</h2>

        <p>
            Imagine talking to someone who forgets everything you said
            after every sentence. Conversations would quickly become frustrating.
        </p>

        <p>
            AI agents face the same challenge. Without memory,
            they cannot remember user preferences, previous tasks,
            or important information gathered during execution.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Memory Makes Agents Personal</div>
            <p>
                Memory allows an AI agent to learn about users,
                maintain conversations, and improve future interactions.
            </p>
        </div>

        <h2>Types of Memory</h2>

        <ol>
            <li>Short-Term Memory</li>
            <li>Long-Term Memory</li>
            <li>Semantic Memory</li>
            <li>Vector Memory</li>
        </ol>

        <h2>Short-Term Memory</h2>

        <p>
            Short-term memory stores information needed during the current task.
            It usually consists of the current conversation and recent tool outputs.
        </p>

<pre><code class="language-python">conversation = [
    <span class="syntax-string">"User asked about Python."</span>,
    <span class="syntax-string">"Explained variables."</span>,
    <span class="syntax-string">"User requested examples."</span>
]</code></pre>

        <h2>Long-Term Memory</h2>

        <p>
            Long-term memory stores information across multiple conversations.
        </p>

<pre><code class="language-python">memory.save(
    key=<span class="syntax-string">"favorite_language"</span>,
    value=<span class="syntax-string">"Python"</span>
)</code></pre>

        <p>
            During future sessions, the agent can retrieve this information
            without asking the user again.
        </p>

        <h2>Semantic Memory</h2>

        <p>
            Semantic memory stores facts rather than conversation history.
        </p>

        <p>
            Examples include:
        </p>

        <ul>
            <li>Company policies</li>
            <li>Documentation</li>
            <li>Product manuals</li>
            <li>Knowledge bases</li>
        </ul>

        <h2>Vector Memory</h2>

        <p>
            Instead of storing plain text,
            many modern AI agents convert information into numerical vectors,
            called <strong>embeddings</strong>.
        </p>

        <p>
            Similar ideas produce similar vectors,
            allowing the agent to retrieve relevant information
            using semantic similarity instead of exact keyword matching.
        </p>

<pre><code class="language-python"><span class="syntax-comment"># Simplified example</span>

embedding = create_embedding(
    <span class="syntax-string">"Python is a programming language."</span>
)

vector_database.store(embedding)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Why Embeddings Matter</div>
            <p>
                Embeddings allow an agent to find related information
                even when the wording is different.
            </p>
        </div>

        <h2>Retrieving Memories</h2>

<pre><code class="language-python">query = create_embedding(
    <span class="syntax-string">"Tell me about Python."</span>
)

results = vector_database.search(query)</code></pre>

        <h2>Memory Lifecycle</h2>

<pre>
User Input
     │
     ▼
Store Important Information
     │
     ▼
Create Embeddings
     │
     ▼
Save to Database
     │
     ▼
Retrieve When Needed
</pre>

        <h2>When Should Information Be Stored?</h2>

        <ul>
            <li>User preferences</li>
            <li>Frequently used settings</li>
            <li>Completed tasks</li>
            <li>Important project details</li>
            <li>Relevant documents</li>
        </ul>

        <h2>When Should Information NOT Be Stored?</h2>

        <ul>
            <li>Temporary calculations</li>
            <li>Duplicate information</li>
            <li>Irrelevant conversations</li>
            <li>Outdated data</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Best Practice</div>
            <p>
                Store only useful information.
                Saving everything increases costs,
                slows retrieval,
                and may introduce irrelevant context.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Memory allows agents to remember information over time.</li>
            <li>Short-term memory supports the current task.</li>
            <li>Long-term memory stores persistent user information.</li>
            <li>Embeddings enable semantic search.</li>
            <li>Vector databases power modern AI memory systems.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design the memory system for a personal AI tutor.
            What information should be stored temporarily,
            and what should be remembered across multiple lessons?
        </p>
    `
},

{
    id: 'tools-function-calling',
    title: 'Tool Use and Function Calling',
    duration: '50 min',
    content: `
        <h2>Why Do AI Agents Need Tools?</h2>

        <p>
            Large Language Models are excellent at understanding and generating text,
            but they have an important limitation—they cannot directly interact with
            the outside world.
        </p>

        <p>
            For example, an LLM cannot:
        </p>

        <ul>
            <li>Check today's weather</li>
            <li>Search the internet</li>
            <li>Read a database</li>
            <li>Send an email</li>
            <li>Book a meeting</li>
            <li>Execute Python code</li>
        </ul>

        <p>
            To overcome these limitations, AI agents use <strong>tools</strong>.
            A tool is simply a function or external service that the agent can call
            whenever it needs information or wants to perform an action.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Think of Tools as Superpowers</div>
            <p>
                The LLM decides <strong>what</strong> to do.
                Tools actually <strong>do it</strong>.
            </p>
        </div>

        <h2>How Tool Calling Works</h2>

        <ol>
            <li>User gives a task.</li>
            <li>The LLM analyzes the request.</li>
            <li>The LLM decides a tool is needed.</li>
            <li>The framework executes the tool.</li>
            <li>The tool returns data.</li>
            <li>The LLM generates the final response.</li>
        </ol>

<pre>
User
 │
 ▼
LLM
 │
 ▼
Choose Tool
 │
 ▼
Execute Tool
 │
 ▼
Tool Result
 │
 ▼
Final Response
</pre>

        <h2>Example: Weather Tool</h2>

<pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">get_weather</span>(city):
    <span class="syntax-keyword">return</span> {
        <span class="syntax-string">"city"</span>: city,
        <span class="syntax-string">"temperature"</span>: <span class="syntax-number">28</span>,
        <span class="syntax-string">"condition"</span>: <span class="syntax-string">"Sunny"</span>
    }</code></pre>

        <p>
            When the user asks:
        </p>

        <blockquote>
            "What's the weather in Delhi?"
        </blockquote>

        <p>
            The agent doesn't guess. It calls the weather tool,
            receives fresh data, and builds a response.
        </p>

        <h2>Function Calling</h2>

        <p>
            Modern LLMs can produce structured outputs that tell the application
            exactly which function should be executed.
        </p>

<pre><code class="language-python">{
    <span class="syntax-string">"function"</span>: <span class="syntax-string">"get_weather"</span>,
    <span class="syntax-string">"arguments"</span>: {
        <span class="syntax-string">"city"</span>: <span class="syntax-string">"Delhi"</span>
    }
}</code></pre>

        <p>
            Your application receives this object,
            executes the function,
            and sends the result back to the LLM.
        </p>

        <h2>Popular Agent Tools</h2>

        <ul>
            <li>Web Search</li>
            <li>Python Interpreter</li>
            <li>Email APIs</li>
            <li>Calendar APIs</li>
            <li>SQL Databases</li>
            <li>File Readers</li>
            <li>Vector Databases</li>
            <li>Image Generation</li>
            <li>Maps</li>
            <li>Payment APIs</li>
        </ul>

        <h2>Using Multiple Tools</h2>

        <p>
            A single task often requires several tools working together.
        </p>

<pre>
User:
Plan my vacation.

↓

Search Flights

↓

Search Hotels

↓

Check Weather

↓

Create Itinerary

↓

Generate Final Report
</pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Modular Design</div>
            <p>
                Each tool should perform one specific job.
                Small, focused tools are easier to maintain than one massive tool.
            </p>
        </div>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Giving one tool too many responsibilities.</li>
            <li>Skipping validation of tool outputs.</li>
            <li>Allowing unrestricted tool access.</li>
            <li>Ignoring error handling.</li>
            <li>Calling tools when reasoning alone is sufficient.</li>
        </ul>

<pre><code class="language-python"><span class="syntax-keyword">try</span>:
    result = weather_tool(city)
<span class="syntax-keyword">except</span> Exception:
    result = <span class="syntax-string">"Unable to retrieve weather information."</span></code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Security Tip</div>
            <p>
                Never allow an AI agent to execute sensitive actions
                without proper permissions and validation.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Tools extend the capabilities of LLMs.</li>
            <li>Function calling lets an LLM request tool execution.</li>
            <li>Applications execute tools—not the LLM itself.</li>
            <li>Good tools perform one clear task.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design a weather assistant.
            List the tools it needs and explain when each should be called.
        </p>
    `
},

{
    id: 'planning-reasoning',
    title: 'Planning and Reasoning',
    duration: '50 min',
    content: `
        <h2>Why Planning Matters</h2>

        <p>
            Some problems can be solved immediately.
            Others require multiple decisions and actions.
        </p>

        <p>
            AI agents use <strong>planning</strong> to divide large goals into
            manageable steps before taking action.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Think Like a Project Manager</div>
            <p>
                Before building a house, you don't start laying bricks randomly.
                You create a blueprint first.
                Planning gives AI agents that blueprint.
            </p>
        </div>

        <h2>Example Goal</h2>

        <blockquote>
            "Create a weekly sales report."
        </blockquote>

        <p>
            Instead of producing an answer immediately,
            the agent first creates a plan.
        </p>

<pre>
1. Read sales database
2. Calculate totals
3. Generate charts
4. Write summary
5. Export PDF
6. Email report
</pre>

        <h2>Planning Algorithm</h2>

<pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">plan</span>(goal):

    steps = []

    steps.append(<span class="syntax-string">"Analyze goal"</span>)
    steps.append(<span class="syntax-string">"Choose tools"</span>)
    steps.append(<span class="syntax-string">"Execute tasks"</span>)
    steps.append(<span class="syntax-string">"Evaluate results"</span>)

    <span class="syntax-keyword">return</span> steps</code></pre>

        <h2>Reasoning</h2>

        <p>
            Planning determines <strong>what to do</strong>.
            Reasoning determines <strong>why</strong> each step makes sense.
        </p>

        <p>
            During reasoning, the LLM evaluates information,
            compares alternatives,
            and selects the best option.
        </p>

        <h2>Example</h2>

<blockquote>
Find the cheapest hotel with a rating above 4.5 stars.
</blockquote>

        <p>
            The agent might:
        </p>

        <ol>
            <li>Search hotels.</li>
            <li>Filter ratings.</li>
            <li>Compare prices.</li>
            <li>Select the best option.</li>
        </ol>

        <h2>ReAct Pattern</h2>

        <p>
            A common agent workflow is called
            <strong>ReAct (Reason + Act)</strong>.
        </p>

<pre>
Think

↓

Choose Action

↓

Execute Tool

↓

Observe Result

↓

Think Again

↓

Repeat Until Finished
</pre>

<pre><code class="language-python"><span class="syntax-keyword">while</span> <span class="syntax-keyword">not</span> task_complete:

    thought = reason()

    action = choose_action(thought)

    observation = execute(action)

    update_memory(observation)</code></pre>

        <h2>Evaluating Results</h2>

        <p>
            Good agents don't stop after one action.
            They evaluate whether the result satisfies the original goal.
        </p>

<pre><code class="language-python"><span class="syntax-keyword">if</span> report_complete:

    finish()

<span class="syntax-keyword">else</span>:

    continue_planning()</code></pre>

        <h2>Common Planning Strategies</h2>

        <ul>
            <li>Sequential Planning</li>
            <li>Tree Search</li>
            <li>Goal Decomposition</li>
            <li>Iterative Refinement</li>
            <li>ReAct Loops</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Good Planning Saves Time</div>
            <p>
                A few extra seconds spent planning often prevents expensive mistakes
                later during execution.
            </p>
        </div>

        <h2>Common Mistakes</h2>

        <ul>
            <li>Executing before planning.</li>
            <li>Ignoring failed tool results.</li>
            <li>Skipping verification.</li>
            <li>Creating unnecessarily long plans.</li>
            <li>Repeating the same failed action.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Best Practice</div>
            <p>
                Large goals should always be divided into smaller,
                measurable tasks that can be verified independently.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Planning breaks complex tasks into steps.</li>
            <li>Reasoning helps choose the best action.</li>
            <li>Agents continuously evaluate their progress.</li>
            <li>ReAct combines reasoning and tool usage into a feedback loop.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design a plan for an AI research assistant that must write a report on
            renewable energy using online sources. List each planning step and
            identify where reasoning and tool usage are required.
        </p>
    `
},

{
    id: 'retrieval-augmented-generation',
    title: 'Retrieval-Augmented Generation (RAG)',
    duration: '55 min',
    content: `
        <h2>What is Retrieval-Augmented Generation (RAG)?</h2>

        <p>
            Imagine asking an AI agent about your company's employee handbook.
            Unless that handbook was part of the model's training data, the LLM
            won't know its contents.
        </p>

        <p>
            Instead of retraining the model every time new information is available,
            modern AI agents use <strong>Retrieval-Augmented Generation (RAG)</strong>.
            RAG allows an agent to search external knowledge, retrieve relevant
            information, and use it to generate accurate responses.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Idea</div>
            <p>
                RAG doesn't teach the model new knowledge. It gives the model
                relevant information <strong>at runtime</strong>.
            </p>
        </div>

        <h2>Why is RAG Important?</h2>

        <p>
            Large Language Models have fixed knowledge after training.
            They cannot automatically learn about:
        </p>

        <ul>
            <li>Company documents</li>
            <li>Private databases</li>
            <li>Latest news</li>
            <li>Product manuals</li>
            <li>Research papers published yesterday</li>
        </ul>

        <p>
            RAG solves this limitation by connecting the LLM to an external
            knowledge source.
        </p>

        <h2>RAG Workflow</h2>

<pre>
User Question
      │
      ▼
Create Embedding
      │
      ▼
Search Vector Database
      │
      ▼
Retrieve Relevant Documents
      │
      ▼
Send Documents + Question
to the LLM
      │
      ▼
Generate Final Answer
</pre>

        <h2>Example Workflow</h2>

        <blockquote>
            User: "What is our company's vacation policy?"
        </blockquote>

        <ol>
            <li>Create an embedding of the user's question.</li>
            <li>Search the vector database.</li>
            <li>Retrieve the employee handbook.</li>
            <li>Provide the handbook as context.</li>
            <li>Generate the answer.</li>
        </ol>

        <pre><code class="language-python"><span class="syntax-comment"># Conceptual RAG pipeline</span>

query = <span class="syntax-string">"Vacation policy"</span>

embedding = create_embedding(query)

documents = vector_db.search(embedding)

response = llm.generate(
    question=query,
    context=documents
)</code></pre>

        <h2>Components of a RAG System</h2>

        <ul>
            <li>Knowledge Source</li>
            <li>Embedding Model</li>
            <li>Vector Database</li>
            <li>Retriever</li>
            <li>Large Language Model</li>
        </ul>

        <h2>Chunking Documents</h2>

        <p>
            Large documents are usually divided into smaller pieces called
            <strong>chunks</strong>. Searching smaller chunks improves retrieval
            speed and relevance.
        </p>

<pre>
Employee Handbook

↓

Chunk 1

↓

Chunk 2

↓

Chunk 3

↓

Store Each Chunk
</pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>
                Choose chunk sizes carefully. Very small chunks lose context,
                while very large chunks reduce retrieval accuracy.
            </p>
        </div>

        <h2>Advantages of RAG</h2>

        <ul>
            <li>Uses up-to-date information.</li>
            <li>No need to retrain the LLM.</li>
            <li>Supports private knowledge bases.</li>
            <li>Reduces hallucinations.</li>
            <li>Scales to millions of documents.</li>
        </ul>

        <h2>Limitations</h2>

        <ul>
            <li>Retrieval quality affects answer quality.</li>
            <li>Poor chunking leads to poor results.</li>
            <li>Vector databases require maintenance.</li>
            <li>Incorrect documents produce incorrect answers.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Remember</div>
            <p>
                RAG improves accuracy by providing relevant information,
                but it cannot fix incorrect or outdated documents.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>RAG retrieves external knowledge before generation.</li>
            <li>Embeddings enable semantic search.</li>
            <li>Vector databases store document embeddings.</li>
            <li>Retrieved context helps the LLM answer accurately.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design a RAG system for a university chatbot.
            What documents should be indexed, and how would the chatbot retrieve
            relevant information for student questions?
        </p>
    `
},

{
    id: 'agent-workflows',
    title: 'AI Agent Workflows',
    duration: '50 min',
    content: `
        <h2>What is an Agent Workflow?</h2>

        <p>
            A workflow defines the sequence of steps an AI agent follows to
            complete a task.
        </p>

        <p>
            Some tasks require only one step, while others involve planning,
            tool usage, memory retrieval, reasoning, and evaluation.
        </p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Think of a Workflow as a Recipe</div>
            <p>
                Just as recipes guide cooking, workflows guide AI agents through
                complex tasks.
            </p>
        </div>

        <h2>Simple Workflow</h2>

<pre>
User

↓

LLM

↓

Answer
</pre>

        <p>
            This workflow works well for simple questions that don't require
            external information.
        </p>

        <h2>Tool-Based Workflow</h2>

<pre>
User

↓

LLM

↓

Choose Tool

↓

Execute Tool

↓

Generate Answer
</pre>

        <p>
            The agent decides whether external tools are required before
            responding.
        </p>

        <h2>RAG Workflow</h2>

<pre>
Question

↓

Create Embedding

↓

Retrieve Documents

↓

LLM

↓

Final Answer
</pre>

        <h2>Planning Workflow</h2>

<pre>
Goal

↓

Planner

↓

Task List

↓

Execute Tasks

↓

Evaluate

↓

Finish
</pre>

        <h2>Research Agent Example</h2>

        <blockquote>
            "Write a report about renewable energy."
        </blockquote>

        <ol>
            <li>Search the web.</li>
            <li>Retrieve research papers.</li>
            <li>Summarize findings.</li>
            <li>Generate report.</li>
            <li>Review for accuracy.</li>
        </ol>

        <pre><code class="language-python"><span class="syntax-comment"># Simplified workflow</span>

goal = receive_goal()

plan = planner(goal)

<span class="syntax-keyword">for</span> step <span class="syntax-keyword">in</span> plan:

    result = execute(step)

    memory.store(result)

report = summarize(memory)</code></pre>

        <h2>Workflow Loops</h2>

        <p>
            Sometimes the first attempt isn't successful.
            AI agents often repeat steps until the task is completed.
        </p>

<pre>
Plan

↓

Execute

↓

Evaluate

↓

Need Improvement?

↓

Yes ───────────────┐
                   │
                   ▼
              Repeat Step
</pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Iterative Improvement</div>
            <p>
                Modern AI agents improve results by evaluating and refining
                their work rather than stopping after the first attempt.
            </p>
        </div>

        <h2>Choosing the Right Workflow</h2>

        <table>
            <tr>
                <th>Problem</th>
                <th>Recommended Workflow</th>
            </tr>
            <tr>
                <td>Simple Question</td>
                <td>LLM Only</td>
            </tr>
            <tr>
                <td>Current Information</td>
                <td>Tool Workflow</td>
            </tr>
            <tr>
                <td>Private Documents</td>
                <td>RAG Workflow</td>
            </tr>
            <tr>
                <td>Complex Project</td>
                <td>Planning Workflow</td>
            </tr>
        </table>

        <h2>Common Workflow Mistakes</h2>

        <ul>
            <li>Adding unnecessary steps.</li>
            <li>Skipping evaluation.</li>
            <li>Ignoring failed tool executions.</li>
            <li>Not storing useful intermediate results.</li>
            <li>Creating workflows that are difficult to maintain.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Design Tip</div>
            <p>
                Keep workflows as simple as possible. Add complexity only when
                it improves the quality or reliability of the agent.
            </p>
        </div>

        <h2>Lesson Summary</h2>

        <ul>
            <li>Workflows define how an agent completes tasks.</li>
            <li>Different tasks require different workflow designs.</li>
            <li>Planning, tools, memory, and RAG can be combined.</li>
            <li>Evaluation loops improve reliability.</li>
        </ul>

        <h2>Practice Exercise</h2>

        <p>
            Design a workflow for an AI travel planner that searches flights,
            compares hotel prices, checks weather, creates an itinerary, and
            emails the final plan to the user.
        </p>
    `
}

];

