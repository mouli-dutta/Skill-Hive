const PythonBasicsLessons = [
    {
        id: 'variables-and-data-types',
        title: 'Variables and Data Types',
        duration: '15 min',
        content: `
            <h2>Variables and Data Types in Python</h2>
            <p>Variables are containers for storing data values. In Python, you don't need to declare the type of a variable explicitly.</p>
            
            <h3>Creating Variables</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Creating variables</span>
<span class="syntax-keyword">name</span> = <span class="syntax-string">"Alice"</span>
<span class="syntax-keyword">age</span> = <span class="syntax-number">25</span>
<span class="syntax-keyword">height</span> = <span class="syntax-number">5.6</span>
<span class="syntax-keyword">is_student</span> = <span class="syntax-keyword">True</span></code></pre>
            
            <h3>Basic Data Types</h3>
            <ul>
                <li><strong>int</strong>: Integer numbers (e.g., 42, -10)</li>
                <li><strong>float</strong>: Decimal numbers (e.g., 3.14, -0.5)</li>
                <li><strong>str</strong>: Text strings (e.g., "Hello", 'Python')</li>
                <li><strong>bool</strong>: Boolean values (True or False)</li>
            </ul>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Tip</div>
                <p>Python is dynamically typed, meaning you can change a variable's type by assigning a new value.</p>
            </div>
            
            <h3>Type Checking</h3>
            <pre><code class="language-python"><span class="syntax-keyword">x</span> = <span class="syntax-number">10</span>
<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(x))  <span class="syntax-comment"># Output: &lt;class 'int'&gt;</span>

<span class="syntax-keyword">y</span> = <span class="syntax-string">"Hello"</span>
<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(y))  <span class="syntax-comment"># Output: &lt;class 'str'&gt;</span></code></pre>
            
            <h3>Type Conversion</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Converting between types</span>
<span class="syntax-keyword">num_str</span> = <span class="syntax-string">"42"</span>
<span class="syntax-keyword">num_int</span> = <span class="syntax-function">int</span>(num_str)  <span class="syntax-comment"># Convert to integer</span>

<span class="syntax-keyword">pi</span> = <span class="syntax-number">3.14</span>
<span class="syntax-keyword">pi_str</span> = <span class="syntax-function">str</span>(pi)  <span class="syntax-comment"># Convert to string</span></code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Warning</div>
                <p>Be careful when converting types. Converting "hello" to int will raise a ValueError!</p>
            </div>
        `
    },
    {
        id: 'operators',
        title: 'Operators and Expressions',
        duration: '15 min',
        content: `
            <h2>Operators in Python</h2>
            <p>Operators are special symbols that perform operations on variables and values.</p>
            
            <h3>Arithmetic Operators</h3>
            <pre><code class="language-python"><span class="syntax-keyword">a</span> = <span class="syntax-number">10</span>
<span class="syntax-keyword">b</span> = <span class="syntax-number">3</span>

<span class="syntax-function">print</span>(a + b)   <span class="syntax-comment"># Addition: 13</span>
<span class="syntax-function">print</span>(a - b)   <span class="syntax-comment"># Subtraction: 7</span>
<span class="syntax-function">print</span>(a * b)   <span class="syntax-comment"># Multiplication: 30</span>
<span class="syntax-function">print</span>(a / b)   <span class="syntax-comment"># Division: 3.333...</span>
<span class="syntax-function">print</span>(a // b)  <span class="syntax-comment"># Floor division: 3</span>
<span class="syntax-function">print</span>(a % b)   <span class="syntax-comment"># Modulus: 1</span>
<span class="syntax-function">print</span>(a ** b)  <span class="syntax-comment"># Exponentiation: 1000</span></code></pre>
            
            <h3>Comparison Operators</h3>
            <pre><code class="language-python"><span class="syntax-keyword">x</span> = <span class="syntax-number">5</span>
<span class="syntax-keyword">y</span> = <span class="syntax-number">10</span>

<span class="syntax-function">print</span>(x == y)  <span class="syntax-comment"># Equal to: False</span>
<span class="syntax-function">print</span>(x != y)  <span class="syntax-comment"># Not equal: True</span>
<span class="syntax-function">print</span>(x < y)   <span class="syntax-comment"># Less than: True</span>
<span class="syntax-function">print</span>(x > y)   <span class="syntax-comment"># Greater than: False</span>
<span class="syntax-function">print</span>(x <= y)  <span class="syntax-comment"># Less than or equal: True</span>
<span class="syntax-function">print</span>(x >= y)  <span class="syntax-comment"># Greater than or equal: False</span></code></pre>
            
            <h3>Logical Operators</h3>
            <pre><code class="language-python"><span class="syntax-keyword">a</span> = <span class="syntax-keyword">True</span>
<span class="syntax-keyword">b</span> = <span class="syntax-keyword">False</span>

<span class="syntax-function">print</span>(a <span class="syntax-keyword">and</span> b)  <span class="syntax-comment"># False</span>
<span class="syntax-function">print</span>(a <span class="syntax-keyword">or</span> b)   <span class="syntax-comment"># True</span>
<span class="syntax-function">print</span>(<span class="syntax-keyword">not</span> a)     <span class="syntax-comment"># False</span></code></pre>
            
            <div class="callout callout-success">
                <div class="callout-title">✅ Best Practice</div>
                <p>Use parentheses to make complex expressions more readable: <code>(a and b) or (c and d)</code></p>
            </div>
        `
    },
    {
        id: 'strings',
        title: 'Working with Strings',
        duration: '20 min',
        content: `
            <h2>Strings in Python</h2>
            <p>Strings are sequences of characters enclosed in quotes. Python provides powerful string manipulation capabilities.</p>
            
            <h3>Creating Strings</h3>
            <pre><code class="language-python"><span class="syntax-keyword">single</span> = <span class="syntax-string">'Hello'</span>
<span class="syntax-keyword">double</span> = <span class="syntax-string">"World"</span>
<span class="syntax-keyword">multiline</span> = <span class="syntax-string">"""This is a
multi-line string"""</span></code></pre>
            
            <h3>String Operations</h3>
            <pre><code class="language-python"><span class="syntax-keyword">text</span> = <span class="syntax-string">"Python"</span>

<span class="syntax-comment"># Concatenation</span>
<span class="syntax-keyword">greeting</span> = <span class="syntax-string">"Hello "</span> + text  <span class="syntax-comment"># "Hello Python"</span>

<span class="syntax-comment"># Repetition</span>
<span class="syntax-keyword">repeated</span> = text * <span class="syntax-number">3</span>  <span class="syntax-comment"># "PythonPythonPython"</span>

<span class="syntax-comment"># Length</span>
<span class="syntax-keyword">length</span> = <span class="syntax-function">len</span>(text)  <span class="syntax-comment"># 6</span>

<span class="syntax-comment"># Indexing (0-based)</span>
<span class="syntax-keyword">first_char</span> = text[<span class="syntax-number">0</span>]  <span class="syntax-comment"># 'P'</span>
<span class="syntax-keyword">last_char</span> = text[<span class="syntax-number">-1</span>]  <span class="syntax-comment"># 'n'</span></code></pre>
            
            <h3>String Slicing</h3>
            <pre><code class="language-python"><span class="syntax-keyword">text</span> = <span class="syntax-string">"Python Programming"</span>

<span class="syntax-function">print</span>(text[<span class="syntax-number">0</span>:<span class="syntax-number">6</span>])    <span class="syntax-comment"># "Python"</span>
<span class="syntax-function">print</span>(text[<span class="syntax-number">7</span>:])      <span class="syntax-comment"># "Programming"</span>
<span class="syntax-function">print</span>(text[:<span class="syntax-number">6</span>])      <span class="syntax-comment"># "Python"</span>
<span class="syntax-function">print</span>(text[::<span class="syntax-number">2</span>])     <span class="syntax-comment"># "Pto rgamn"</span></code></pre>
            
            <h3>String Methods</h3>
            <pre><code class="language-python"><span class="syntax-keyword">text</span> = <span class="syntax-string">"  Hello World  "</span>

<span class="syntax-function">print</span>(text.<span class="syntax-function">upper</span>())      <span class="syntax-comment"># "  HELLO WORLD  "</span>
<span class="syntax-function">print</span>(text.<span class="syntax-function">lower</span>())      <span class="syntax-comment"># "  hello world  "</span>
<span class="syntax-function">print</span>(text.<span class="syntax-function">strip</span>())      <span class="syntax-comment"># "Hello World"</span>
<span class="syntax-function">print</span>(text.<span class="syntax-function">replace</span>(<span class="syntax-string">"World"</span>, <span class="syntax-string">"Python"</span>))  <span class="syntax-comment"># "  Hello Python  "</span>
<span class="syntax-function">print</span>(text.<span class="syntax-function">split</span>())      <span class="syntax-comment"># ['Hello', 'World']</span></code></pre>
            
            <h3>F-Strings (Formatted Strings)</h3>
            <pre><code class="language-python"><span class="syntax-keyword">name</span> = <span class="syntax-string">"Alice"</span>
<span class="syntax-keyword">age</span> = <span class="syntax-number">25</span>

<span class="syntax-keyword">message</span> = <span class="syntax-string">f"My name is {name} and I am {age} years old"</span>
<span class="syntax-function">print</span>(message)  <span class="syntax-comment"># "My name is Alice and I am 25 years old"</span>

<span class="syntax-comment"># Expressions in f-strings</span>
<span class="syntax-function">print</span>(<span class="syntax-string">f"Next year I'll be {age + 1}"</span>)  <span class="syntax-comment"># "Next year I'll be 26"</span></code></pre>
        `
    },
    {
        id: 'lists',
        title: 'Lists and List Operations',
        duration: '20 min',
        content: `
            <h2>Lists in Python</h2>
            <p>Lists are ordered, mutable collections that can contain items of different types.</p>
            
            <h3>Creating Lists</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Empty list</span>
<span class="syntax-keyword">empty</span> = []

<span class="syntax-comment"># List with items</span>
<span class="syntax-keyword">numbers</span> = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>]
<span class="syntax-keyword">fruits</span> = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>, <span class="syntax-string">"cherry"</span>]
<span class="syntax-keyword">mixed</span> = [<span class="syntax-number">1</span>, <span class="syntax-string">"hello"</span>, <span class="syntax-number">3.14</span>, <span class="syntax-keyword">True</span>]</code></pre>
            
            <h3>Accessing List Items</h3>
            <pre><code class="language-python"><span class="syntax-keyword">fruits</span> = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>, <span class="syntax-string">"cherry"</span>]

<span class="syntax-function">print</span>(fruits[<span class="syntax-number">0</span>])   <span class="syntax-comment"># "apple"</span>
<span class="syntax-function">print</span>(fruits[<span class="syntax-number">-1</span>])  <span class="syntax-comment"># "cherry"</span>
<span class="syntax-function">print</span>(fruits[<span class="syntax-number">0</span>:<span class="syntax-number">2</span>])  <span class="syntax-comment"># ["apple", "banana"]</span></code></pre>
            
            <h3>Modifying Lists</h3>
            <pre><code class="language-python"><span class="syntax-keyword">fruits</span> = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>]

<span class="syntax-comment"># Append (add to end)</span>
fruits.<span class="syntax-function">append</span>(<span class="syntax-string">"cherry"</span>)  <span class="syntax-comment"># ["apple", "banana", "cherry"]</span>

<span class="syntax-comment"># Insert at position</span>
fruits.<span class="syntax-function">insert</span>(<span class="syntax-number">1</span>, <span class="syntax-string">"orange"</span>)  <span class="syntax-comment"># ["apple", "orange", "banana", "cherry"]</span>

<span class="syntax-comment"># Remove item</span>
fruits.<span class="syntax-function">remove</span>(<span class="syntax-string">"banana"</span>)  <span class="syntax-comment"># ["apple", "orange", "cherry"]</span>

<span class="syntax-comment"># Pop (remove and return)</span>
<span class="syntax-keyword">last</span> = fruits.<span class="syntax-function">pop</span>()  <span class="syntax-comment"># "cherry", list is now ["apple", "orange"]</span></code></pre>
            
            <h3>List Methods</h3>
            <pre><code class="language-python"><span class="syntax-keyword">numbers</span> = [<span class="syntax-number">3</span>, <span class="syntax-number">1</span>, <span class="syntax-number">4</span>, <span class="syntax-number">1</span>, <span class="syntax-number">5</span>]

numbers.<span class="syntax-function">sort</span>()          <span class="syntax-comment"># [1, 1, 3, 4, 5]</span>
numbers.<span class="syntax-function">reverse</span>()       <span class="syntax-comment"># [5, 4, 3, 1, 1]</span>
<span class="syntax-keyword">count</span> = numbers.<span class="syntax-function">count</span>(<span class="syntax-number">1</span>)  <span class="syntax-comment"># 2</span>
<span class="syntax-keyword">index</span> = numbers.<span class="syntax-function">index</span>(<span class="syntax-number">4</span>)  <span class="syntax-comment"># 1</span></code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 List Comprehension</div>
                <p>Create lists efficiently with list comprehensions:</p>
                <pre><code class="language-python"><span class="syntax-keyword">squares</span> = [x**<span class="syntax-number">2</span> <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">10</span>)]
<span class="syntax-comment"># [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]</span></code></pre>
            </div>
        `
    },
    {
        id: 'dictionaries',
        title: 'Dictionaries',
        duration: '20 min',
        content: `
            <h2>Dictionaries in Python</h2>
            <p>Dictionaries store data in key-value pairs. They are unordered, mutable, and indexed by keys.</p>
            
            <h3>Creating Dictionaries</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Empty dictionary</span>
<span class="syntax-keyword">empty</span> = {}

<span class="syntax-comment"># Dictionary with data</span>
<span class="syntax-keyword">person</span> = {
    <span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>,
    <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>,
    <span class="syntax-string">"city"</span>: <span class="syntax-string">"New York"</span>
}</code></pre>
            
            <h3>Accessing Values</h3>
            <pre><code class="language-python"><span class="syntax-keyword">person</span> = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>}

<span class="syntax-comment"># Using square brackets</span>
<span class="syntax-function">print</span>(person[<span class="syntax-string">"name"</span>])  <span class="syntax-comment"># "Alice"</span>

<span class="syntax-comment"># Using get() method (safer)</span>
<span class="syntax-function">print</span>(person.<span class="syntax-function">get</span>(<span class="syntax-string">"age"</span>))  <span class="syntax-comment"># 25</span>
<span class="syntax-function">print</span>(person.<span class="syntax-function">get</span>(<span class="syntax-string">"country"</span>, <span class="syntax-string">"USA"</span>))  <span class="syntax-comment"># "USA" (default)</span></code></pre>
            
            <h3>Modifying Dictionaries</h3>
            <pre><code class="language-python"><span class="syntax-keyword">person</span> = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>}

<span class="syntax-comment"># Add or update</span>
person[<span class="syntax-string">"city"</span>] = <span class="syntax-string">"New York"</span>
person[<span class="syntax-string">"age"</span>] = <span class="syntax-number">26</span>

<span class="syntax-comment"># Remove</span>
<span class="syntax-keyword">del</span> person[<span class="syntax-string">"city"</span>]
<span class="syntax-keyword">age</span> = person.<span class="syntax-function">pop</span>(<span class="syntax-string">"age"</span>)  <span class="syntax-comment"># Remove and return value</span></code></pre>
            
            <h3>Dictionary Methods</h3>
            <pre><code class="language-python"><span class="syntax-keyword">person</span> = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>, <span class="syntax-string">"city"</span>: <span class="syntax-string">"NYC"</span>}

<span class="syntax-comment"># Get all keys</span>
<span class="syntax-keyword">keys</span> = person.<span class="syntax-function">keys</span>()  <span class="syntax-comment"># dict_keys(['name', 'age', 'city'])</span>

<span class="syntax-comment"># Get all values</span>
<span class="syntax-keyword">values</span> = person.<span class="syntax-function">values</span>()  <span class="syntax-comment"># dict_values(['Alice', 25, 'NYC'])</span>

<span class="syntax-comment"># Get all items</span>
<span class="syntax-keyword">items</span> = person.<span class="syntax-function">items</span>()  <span class="syntax-comment"># dict_items([('name', 'Alice'), ...])</span>

<span class="syntax-comment"># Check if key exists</span>
<span class="syntax-keyword">if</span> <span class="syntax-string">"name"</span> <span class="syntax-keyword">in</span> person:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Name exists!"</span>)</code></pre>
            
            <h3>Iterating Over Dictionaries</h3>
            <pre><code class="language-python"><span class="syntax-keyword">person</span> = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>}

<span class="syntax-comment"># Iterate over keys</span>
<span class="syntax-keyword">for</span> key <span class="syntax-keyword">in</span> person:
    <span class="syntax-function">print</span>(key, person[key])

<span class="syntax-comment"># Iterate over key-value pairs</span>
<span class="syntax-keyword">for</span> key, value <span class="syntax-keyword">in</span> person.<span class="syntax-function">items</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">f"{key}: {value}"</span>)</code></pre>
        `
    },
    {
        id: 'if-statements',
        title: 'Conditional Statements',
        duration: '15 min',
        content: `
            <h2>Conditional Statements</h2>
            <p>Control the flow of your program with if, elif, and else statements.</p>
            
            <h3>Basic If Statement</h3>
            <pre><code class="language-python"><span class="syntax-keyword">age</span> = <span class="syntax-number">18</span>

<span class="syntax-keyword">if</span> age >= <span class="syntax-number">18</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"You are an adult"</span>)</code></pre>
            
            <h3>If-Else Statement</h3>
            <pre><code class="language-python"><span class="syntax-keyword">temperature</span> = <span class="syntax-number">25</span>

<span class="syntax-keyword">if</span> temperature > <span class="syntax-number">30</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"It's hot!"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"It's comfortable"</span>)</code></pre>
            
            <h3>If-Elif-Else Statement</h3>
            <pre><code class="language-python"><span class="syntax-keyword">score</span> = <span class="syntax-number">85</span>

<span class="syntax-keyword">if</span> score >= <span class="syntax-number">90</span>:
    <span class="syntax-keyword">grade</span> = <span class="syntax-string">"A"</span>
<span class="syntax-keyword">elif</span> score >= <span class="syntax-number">80</span>:
    <span class="syntax-keyword">grade</span> = <span class="syntax-string">"B"</span>
<span class="syntax-keyword">elif</span> score >= <span class="syntax-number">70</span>:
    <span class="syntax-keyword">grade</span> = <span class="syntax-string">"C"</span>
<span class="syntax-keyword">else</span>:
    <span class="syntax-keyword">grade</span> = <span class="syntax-string">"F"</span>

<span class="syntax-function">print</span>(<span class="syntax-string">f"Your grade is: {grade}"</span>)</code></pre>
            
            <h3>Nested Conditions</h3>
            <pre><code class="language-python"><span class="syntax-keyword">age</span> = <span class="syntax-number">25</span>
<span class="syntax-keyword">has_license</span> = <span class="syntax-keyword">True</span>

<span class="syntax-keyword">if</span> age >= <span class="syntax-number">18</span>:
    <span class="syntax-keyword">if</span> has_license:
        <span class="syntax-function">print</span>(<span class="syntax-string">"You can drive"</span>)
    <span class="syntax-keyword">else</span>:
        <span class="syntax-function">print</span>(<span class="syntax-string">"You need a license"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"You're too young to drive"</span>)</code></pre>
            
            <h3>Ternary Operator</h3>
            <pre><code class="language-python"><span class="syntax-keyword">age</span> = <span class="syntax-number">20</span>
<span class="syntax-keyword">status</span> = <span class="syntax-string">"adult"</span> <span class="syntax-keyword">if</span> age >= <span class="syntax-number">18</span> <span class="syntax-keyword">else</span> <span class="syntax-string">"minor"</span>
<span class="syntax-function">print</span>(status)  <span class="syntax-comment"># "adult"</span></code></pre>
        `
    },
    {
        id: 'loops',
        title: 'Loops: For and While',
        duration: '20 min',
        content: `
            <h2>Loops in Python</h2>
            <p>Loops allow you to execute code repeatedly.</p>
            
            <h3>For Loop</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Iterate over a list</span>
<span class="syntax-keyword">fruits</span> = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>, <span class="syntax-string">"cherry"</span>]
<span class="syntax-keyword">for</span> fruit <span class="syntax-keyword">in</span> fruits:
    <span class="syntax-function">print</span>(fruit)

<span class="syntax-comment"># Using range()</span>
<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>):
    <span class="syntax-function">print</span>(i)  <span class="syntax-comment"># 0, 1, 2, 3, 4</span>

<span class="syntax-comment"># Range with start and step</span>
<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">2</span>, <span class="syntax-number">10</span>, <span class="syntax-number">2</span>):
    <span class="syntax-function">print</span>(i)  <span class="syntax-comment"># 2, 4, 6, 8</span></code></pre>
            
            <h3>While Loop</h3>
            <pre><code class="language-python"><span class="syntax-keyword">count</span> = <span class="syntax-number">0</span>
<span class="syntax-keyword">while</span> count < <span class="syntax-number">5</span>:
    <span class="syntax-function">print</span>(count)
    count += <span class="syntax-number">1</span>

<span class="syntax-comment"># While with condition</span>
<span class="syntax-keyword">password</span> = <span class="syntax-string">""</span>
<span class="syntax-keyword">while</span> password != <span class="syntax-string">"secret"</span>:
    password = <span class="syntax-function">input</span>(<span class="syntax-string">"Enter password: "</span>)</code></pre>
            
            <h3>Break and Continue</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Break - exit loop</span>
<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">10</span>):
    <span class="syntax-keyword">if</span> i == <span class="syntax-number">5</span>:
        <span class="syntax-keyword">break</span>
    <span class="syntax-function">print</span>(i)  <span class="syntax-comment"># 0, 1, 2, 3, 4</span>

<span class="syntax-comment"># Continue - skip iteration</span>
<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>):
    <span class="syntax-keyword">if</span> i == <span class="syntax-number">2</span>:
        <span class="syntax-keyword">continue</span>
    <span class="syntax-function">print</span>(i)  <span class="syntax-comment"># 0, 1, 3, 4</span></code></pre>
            
            <h3>Enumerate</h3>
            <pre><code class="language-python"><span class="syntax-keyword">fruits</span> = [<span class="syntax-string">"apple"</span>, <span class="syntax-string">"banana"</span>, <span class="syntax-string">"cherry"</span>]
<span class="syntax-keyword">for</span> index, fruit <span class="syntax-keyword">in</span> <span class="syntax-function">enumerate</span>(fruits):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"{index}: {fruit}"</span>)
<span class="syntax-comment"># 0: apple
# 1: banana
# 2: cherry</span></code></pre>
        `
    },
    {
        id: 'functions',
        title: 'Functions',
        duration: '25 min',
        content: `
            <h2>Functions in Python</h2>
            <p>Functions are reusable blocks of code that perform specific tasks.</p>
            
            <h3>Defining Functions</h3>
            <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello, World!"</span>)

<span class="syntax-comment"># Call the function</span>
<span class="syntax-function">greet</span>()  <span class="syntax-comment"># Output: Hello, World!</span></code></pre>
            
            <h3>Functions with Parameters</h3>
            <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>(name):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Hello, {name}!"</span>)

<span class="syntax-function">greet</span>(<span class="syntax-string">"Alice"</span>)  <span class="syntax-comment"># Hello, Alice!</span>
<span class="syntax-function">greet</span>(<span class="syntax-string">"Bob"</span>)    <span class="syntax-comment"># Hello, Bob!</span></code></pre>
            
            <h3>Return Values</h3>
            <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">add</span>(a, b):
    <span class="syntax-keyword">return</span> a + b

<span class="syntax-keyword">result</span> = <span class="syntax-function">add</span>(<span class="syntax-number">5</span>, <span class="syntax-number">3</span>)
<span class="syntax-function">print</span>(result)  <span class="syntax-comment"># 8</span>

<span class="syntax-comment"># Multiple return values</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">get_stats</span>(numbers):
    <span class="syntax-keyword">return</span> <span class="syntax-function">min</span>(numbers), <span class="syntax-function">max</span>(numbers), <span class="syntax-function">sum</span>(numbers)

<span class="syntax-keyword">minimum</span>, <span class="syntax-keyword">maximum</span>, <span class="syntax-keyword">total</span> = <span class="syntax-function">get_stats</span>([<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>])</code></pre>
            
            <h3>Default Parameters</h3>
            <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>(name, greeting=<span class="syntax-string">"Hello"</span>):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"{greeting}, {name}!"</span>)

<span class="syntax-function">greet</span>(<span class="syntax-string">"Alice"</span>)              <span class="syntax-comment"># Hello, Alice!</span>
<span class="syntax-function">greet</span>(<span class="syntax-string">"Bob"</span>, <span class="syntax-string">"Hi"</span>)          <span class="syntax-comment"># Hi, Bob!</span></code></pre>
            
            <h3>Keyword Arguments</h3>
            <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">describe_person</span>(name, age, city):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"{name} is {age} years old and lives in {city}"</span>)

<span class="syntax-function">describe_person</span>(age=<span class="syntax-number">25</span>, name=<span class="syntax-string">"Alice"</span>, city=<span class="syntax-string">"NYC"</span>)</code></pre>
            
            <h3>*args and **kwargs</h3>
            <pre><code class="language-python"><span class="syntax-comment"># *args for variable positional arguments</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">sum_all</span>(*args):
    <span class="syntax-keyword">return</span> <span class="syntax-function">sum</span>(args)

<span class="syntax-function">print</span>(<span class="syntax-function">sum_all</span>(<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>))        <span class="syntax-comment"># 6</span>
<span class="syntax-function">print</span>(<span class="syntax-function">sum_all</span>(<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>))  <span class="syntax-comment"># 15</span>

<span class="syntax-comment"># **kwargs for variable keyword arguments</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">print_info</span>(**kwargs):
    <span class="syntax-keyword">for</span> key, value <span class="syntax-keyword">in</span> kwargs.<span class="syntax-function">items</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">f"{key}: {value}"</span>)

<span class="syntax-function">print_info</span>(name=<span class="syntax-string">"Alice"</span>, age=<span class="syntax-number">25</span>, city=<span class="syntax-string">"NYC"</span>)</code></pre>
            
            <div class="callout callout-success">
                <div class="callout-title">✅ Best Practice</div>
                <p>Use descriptive function names and add docstrings to document what your functions do.</p>
            </div>
        `
    }
];
