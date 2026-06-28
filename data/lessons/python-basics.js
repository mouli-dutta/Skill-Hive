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
    id: 'numbers-and-math',
    title: 'Numbers and Math',
    duration: '20 min',
    content: `
        <h2>Numbers and Math in Python</h2>
        <p>Python provides powerful tools for working with numbers, calculations, and mathematical operations.</p>


        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>Python supports different numeric types including integers, floating-point numbers, and complex numbers.</p>
        </div>


        <h3>Integer Numbers</h3>

        <p>Integers are whole numbers without decimal points.</p>

        <pre><code class="language-python"><span class="syntax-keyword">age</span> = <span class="syntax-number">25</span>
<span class="syntax-keyword">year</span> = <span class="syntax-number">2026</span>

<span class="syntax-function">print</span>(age)
<span class="syntax-function">print</span>(year)</code></pre>


        <h3>Floating Point Numbers</h3>

        <p>Float values contain decimal numbers.</p>

        <pre><code class="language-python"><span class="syntax-keyword">price</span> = <span class="syntax-number">99.99</span>
<span class="syntax-keyword">temperature</span> = <span class="syntax-number">36.5</span>

<span class="syntax-function">print</span>(price)
<span class="syntax-function">print</span>(temperature)</code></pre>


        <h3>Checking Number Types</h3>

        <pre><code class="language-python"><span class="syntax-keyword">number</span> = <span class="syntax-number">10</span>

<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(number))

<span class="syntax-comment"># Output: &lt;class 'int'&gt;</span></code></pre>


        <h3>Basic Arithmetic Operators</h3>

        <pre><code class="language-python">a = <span class="syntax-number">10</span>
b = <span class="syntax-number">3</span>

<span class="syntax-comment"># Addition</span>
<span class="syntax-function">print</span>(a + b)

<span class="syntax-comment"># Subtraction</span>
<span class="syntax-function">print</span>(a - b)

<span class="syntax-comment"># Multiplication</span>
<span class="syntax-function">print</span>(a * b)

<span class="syntax-comment"># Division</span>
<span class="syntax-function">print</span>(a / b)

<span class="syntax-comment"># Floor division</span>
<span class="syntax-function">print</span>(a // b)

<span class="syntax-comment"># Modulus (remainder)</span>
<span class="syntax-function">print</span>(a % b)

<span class="syntax-comment"># Power</span>
<span class="syntax-function">print</span>(a ** b)</code></pre>


        <h3>Rounding Numbers</h3>

        <pre><code class="language-python"><span class="syntax-keyword">number</span> = <span class="syntax-number">12.56789</span>

<span class="syntax-function">print</span>(<span class="syntax-function">round</span>(number))

<span class="syntax-function">print</span>(<span class="syntax-function">round</span>(number, <span class="syntax-number">2</span>))

<span class="syntax-comment"># Output:</span>
<span class="syntax-comment"># 13</span>
<span class="syntax-comment"># 12.57</span></code></pre>


        <h3>Finding Minimum and Maximum Values</h3>

        <pre><code class="language-python">numbers = [<span class="syntax-number">10</span>, <span class="syntax-number">5</span>, <span class="syntax-number">30</span>, <span class="syntax-number">2</span>]

<span class="syntax-function">print</span>(<span class="syntax-function">min</span>(numbers))

<span class="syntax-function">print</span>(<span class="syntax-function">max</span>(numbers))

<span class="syntax-comment"># Output:</span>
<span class="syntax-comment"># 2</span>
<span class="syntax-comment"># 30</span></code></pre>


        <h3>Finding Sum of Numbers</h3>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>]

total = <span class="syntax-function">sum</span>(numbers)

<span class="syntax-function">print</span>(total)

<span class="syntax-comment"># Output: 10</span></code></pre>


        <h3>Absolute Value</h3>

        <pre><code class="language-python">number = <span class="syntax-number">-50</span>

<span class="syntax-function">print</span>(<span class="syntax-function">abs</span>(number))

<span class="syntax-comment"># Output: 50</span></code></pre>


        <h3>The math Module</h3>

        <p>The math module provides advanced mathematical functions.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> math

<span class="syntax-function">print</span>(math.sqrt(<span class="syntax-number">25</span>))

<span class="syntax-comment"># Output: 5</span></code></pre>


        <h3>Common Math Functions</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> math

<span class="syntax-comment"># Square root</span>
<span class="syntax-function">print</span>(math.sqrt(<span class="syntax-number">16</span>))

<span class="syntax-comment"># Power</span>
<span class="syntax-function">print</span>(math.pow( <span class="syntax-number">2</span>, <span class="syntax-number">3</span>))

<span class="syntax-comment"># Ceiling</span>
<span class="syntax-function">print</span>(math.ceil(<span class="syntax-number">4.2</span>))

<span class="syntax-comment"># Floor</span>
<span class="syntax-function">print</span>(math.floor(<span class="syntax-number">4.8</span>))</code></pre>


        <h3>Generating Random Numbers</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> random

number = random.randint( <span class="syntax-number">1</span>, <span class="syntax-number">10</span>)
<span class="syntax-function">print</span>(number)</code></pre>


        <h3>Working With Complex Numbers</h3>

        <pre><code class="language-python">number = <span class="syntax-number">3</span> + <span class="syntax-number">4j</span>
<span class="syntax-function">print</span>(number.real)
<span class="syntax-function">print</span>(number.imag)</code></pre>


        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Remember that division using / always returns a float, even when the result is a whole number.</p>
        </div>


        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use built-in functions like min(), max(), sum(), and round() before writing custom logic.</p>
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
    },

    {
    id: 'input-output',
    title: 'User Input and Output',
    duration: '15 min',
    content: `
        <h2>User Input and Output in Python</h2>
        <p>Input and output allow programs to communicate with users. Python uses the <code>input()</code> function to receive data and the <code>print()</code> function to display information.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Remember</div>
            <p>The <code>input()</code> function always returns data as a string. Convert it to another type when needed.</p>
        </div>

        <h3>Using print()</h3>

        <pre><code class="language-python"><span class="syntax-function">print</span>(<span class="syntax-string">"Hello, Python!"</span>)

<span class="syntax-function">print</span>(<span class="syntax-string">"Learning Python is fun"</span>)</code></pre>

        <h3>Printing Multiple Values</h3>

        <pre><code class="language-python">name = <span class="syntax-string">"Alice"</span>
age = <span class="syntax-number">20</span>

<span class="syntax-function">print</span>(name, age)

<span class="syntax-comment"># Output: Alice 20</span></code></pre>

        <h3>Using Variables with print()</h3>

        <pre><code class="language-python">name = <span class="syntax-string">"John"</span>
city = <span class="syntax-string">"London"</span>

<span class="syntax-function">print</span>(<span class="syntax-string">"Name:"</span>, name)
<span class="syntax-function">print</span>(<span class="syntax-string">"City:"</span>, city)</code></pre>

        <h3>String Formatting</h3>

        <p>F-strings provide an easy way to insert variables inside strings.</p>

        <pre><code class="language-python">name = <span class="syntax-string">"Alice"</span>
age = <span class="syntax-number">25</span>

<span class="syntax-function">print</span>(<span class="syntax-string">f"My name is {name} and I am {age} years old"</span>)</code></pre>

        <h3>Using sep Parameter</h3>

        <pre><code class="language-python"><span class="syntax-function">print</span>(
    <span class="syntax-string">"Python"</span>,
    <span class="syntax-string">"JavaScript"</span>,
    <span class="syntax-string">"Java"</span>,
    sep=<span class="syntax-string">" - "</span>
)

<span class="syntax-comment"># Python - JavaScript - Java</span></code></pre>

        <h3>Using end Parameter</h3>

        <pre><code class="language-python"><span class="syntax-function">print</span>(<span class="syntax-string">"Hello"</span>, end=<span class="syntax-string">" "</span>)
<span class="syntax-function">print</span>(<span class="syntax-string">"World"</span>)

<span class="syntax-comment"># Hello World</span></code></pre>

        <h3>Getting User Input</h3>

        <pre><code class="language-python">name = <span class="syntax-function">input</span>(<span class="syntax-string">"Enter your name: "</span>)

<span class="syntax-function">print</span>(<span class="syntax-string">f"Hello {name}!"</span>)</code></pre>

        <h3>Taking Numbers as Input</h3>

        <p>Since input returns a string, use type conversion for numbers.</p>

        <pre><code class="language-python">age = <span class="syntax-function">int</span>(<span class="syntax-function">input</span>(<span class="syntax-string">"Enter your age: "</span>))

<span class="syntax-function">print</span>(age + <span class="syntax-number">5</span>)</code></pre>

        <h3>Taking Float Input</h3>

        <pre><code class="language-python">price = <span class="syntax-function">float</span>(
    <span class="syntax-function">input</span>(<span class="syntax-string">"Enter price: "</span>)
)

<span class="syntax-function">print</span>(price)</code></pre>

        <h3>Multiple Inputs</h3>

        <pre><code class="language-python">name, age = <span class="syntax-function">input</span>(
    <span class="syntax-string">"Enter name and age: "</span>
).<span class="syntax-function">split</span>()

<span class="syntax-function">print</span>(name)
<span class="syntax-function">print</span>(age)</code></pre>

        <h3>Converting Multiple Inputs</h3>

        <pre><code class="language-python">a, b = <span class="syntax-function">map</span>(
    <span class="syntax-function">int</span>,
    <span class="syntax-function">input</span>(<span class="syntax-string">"Enter numbers: "</span>).<span class="syntax-function">split</span>()
)

result = a + b

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Simple User Program</h3>

        <pre><code class="language-python">name = <span class="syntax-function">input</span>(<span class="syntax-string">"Your name: "</span>)
year = <span class="syntax-function">int</span>(
    <span class="syntax-function">input</span>(<span class="syntax-string">"Birth year: "</span>)
)

current_year = <span class="syntax-number">2025</span>
age = current_year - year

<span class="syntax-function">print</span>(
    <span class="syntax-string">f"{name}, you are {age} years old"</span>
)</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Trying to add input values directly can create unexpected results because input values are strings.</p>
        </div>

        <pre><code class="language-python"><span class="syntax-comment"># Wrong</span>
a = <span class="syntax-function">input</span>(<span class="syntax-string">"Number: "</span>)
b = <span class="syntax-function">input</span>(<span class="syntax-string">"Number: "</span>)

<span class="syntax-function">print</span>(a + b)

<span class="syntax-comment"># 5 + 5 becomes "55"</span></code></pre>

        <pre><code class="language-python"><span class="syntax-comment"># Correct</span>
a = <span class="syntax-function">int</span>(<span class="syntax-function">input</span>(<span class="syntax-string">"Number: "</span>))
b = <span class="syntax-function">int</span>(<span class="syntax-function">input</span>(<span class="syntax-string">"Number: "</span>))

<span class="syntax-function">print</span>(a + b)

<span class="syntax-comment"># 10</span></code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use meaningful prompts with input() and convert user data to the correct type before performing calculations.</p>
        </div>
    `
},


{
    id: 'type-conversion-data-validation',
    title: 'Type Conversion and Data Validation',
    duration: '20 min',
    content: `
        <h2>Type Conversion and Data Validation</h2>
        <p>Type conversion allows us to change data from one type to another. Data validation helps us check if the provided data is correct before using it.</p>


        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>User input is always received as a string. Convert and validate it before performing calculations.</p>
        </div>


        <h3>Checking Data Types</h3>

        <pre><code class="language-python">name = <span class="syntax-string">"Alice"</span>
age = <span class="syntax-number">25</span>
price = <span class="syntax-number">99.99</span>

<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(name))
<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(age))
<span class="syntax-function">print</span>(<span class="syntax-function">type</span>(price))

<span class="syntax-comment"># Output: class 'str'</span>
<span class="syntax-comment"># Output: class 'int'</span>
<span class="syntax-comment"># Output: class 'float'</span></code></pre>


        <h3>Converting String to Integer</h3>

        <p>The int() function converts text into a whole number.</p>

        <pre><code class="language-python">age = <span class="syntax-string">"25"</span>
age_number = <span class="syntax-function">int</span>(age)
<span class="syntax-function">print</span>(age_number + <span class="syntax-number">5</span>)

<span class="syntax-comment"># Output: 30</span></code></pre>


        <h3>Converting String to Float</h3>

        <pre><code class="language-python">price = <span class="syntax-string">"49.99"</span>
number = <span class="syntax-function">float</span>(price)
<span class="syntax-function">print</span>(number)

<span class="syntax-comment"># Output: 49.99</span></code></pre>


        <h3>Converting Numbers to String</h3>

        <pre><code class="language-python">age = <span class="syntax-number">20</span>
message = <span class="syntax-string">"Age: "</span> + <span class="syntax-function">str</span>(age)
<span class="syntax-function">print</span>(message)

<span class="syntax-comment"># Output: Age: 20</span></code></pre>


        <h3>Converting Values to Boolean</h3>

        <pre><code class="language-python"><span class="syntax-function">print</span>(<span class="syntax-function">bool</span>(<span class="syntax-number">1</span>))
<span class="syntax-function">print</span>(<span class="syntax-function">bool</span>(<span class="syntax-number">0</span>))

<span class="syntax-comment"># Output: True</span>
<span class="syntax-comment"># Output: False</span></code></pre>


        <h3>Truthy and Falsy Values</h3>

        <p>Some values are automatically treated as True or False.</p>

        <pre><code class="language-python"><span class="syntax-function">print</span>(<span class="syntax-function">bool</span>(<span class="syntax-string">""</span>))
<span class="syntax-function">print</span>(<span class="syntax-function">bool</span>([]))
<span class="syntax-function">print</span>(<span class="syntax-function">bool</span>(<span class="syntax-number">100</span>))

<span class="syntax-comment"># Output: False</span>
<span class="syntax-comment"># Output: False</span>
<span class="syntax-comment"># Output: True</span></code></pre>


        <h3>Taking Numeric Input</h3>

        <p>input() always returns a string, so conversion is required.</p>

        <pre><code class="language-python">age = <span class="syntax-function">input</span>(<span class="syntax-string">"Enter your age: "</span>)
age = <span class="syntax-function">int</span>(age)
<span class="syntax-function">print</span>(age + <span class="syntax-number">1</span>)</code></pre>


        <h3>Handling Conversion Errors</h3>

        <p>Invalid conversions create errors. Use try and except to handle them.</p>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    number = <span class="syntax-function">int</span>(<span class="syntax-string">"hello"</span>)
<span class="syntax-keyword">except</span> ValueError:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid number"</span>)</code></pre>


        <h3>Checking Types with isinstance()</h3>

        <pre><code class="language-python">age = <span class="syntax-number">25</span>
<span class="syntax-keyword">if</span> <span class="syntax-function">isinstance</span>(age, <span class="syntax-class">int</span>):
    <span class="syntax-function">print</span>(<span class="syntax-string">"Age is a number"</span>)</code></pre>


        <h3>Validating User Input</h3>

        <pre><code class="language-python">age = <span class="syntax-function">input</span>(<span class="syntax-string">"Enter age: "</span>)
<span class="syntax-keyword">if</span> age.<span class="syntax-function">isdigit</span>():
    age = <span class="syntax-function">int</span>(age)
    <span class="syntax-function">print</span>(<span class="syntax-string">"Your age is"</span>, age)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Please enter a valid number"</span>)</code></pre>


        <h3>Validating Multiple Options</h3>

        <pre><code class="language-python">choice = <span class="syntax-function">input</span>(<span class="syntax-string">"Continue? yes/no: "</span>)
choice = choice.<span class="syntax-function">lower</span>()

<span class="syntax-keyword">if</span> choice <span class="syntax-keyword">in</span> [<span class="syntax-string">"yes"</span>, <span class="syntax-string">"no"</span>]:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Valid choice"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid choice"</span>)</code></pre>


        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Never assume input data is correct. Invalid data can break your program.</p>
        </div>


        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Convert values early and validate data before using it in calculations or logic.</p>
        </div>
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
        id: 'tuples',
        title: 'Tuples',
        duration: '15 min',
        content: `
            <h2>Tuples in Python</h2>
            <p>A tuple is an ordered collection of items, just like a list. However, unlike lists, tuples are <strong>immutable</strong>, meaning their values cannot be changed after they are created.</p>

            <div class="callout callout-info">
                <div class="callout-title">💡 What is Immutable?</div>
                <p>Immutable means you cannot add, remove, or modify elements after creating the tuple. If you need to change the data, use a list instead.</p>
            </div>

            <h3>Creating Tuples</h3>
            <pre><code class="language-python"><span class="syntax-comment"># Empty tuple</span>
    empty_tuple = ()

    <span class="syntax-comment"># Tuple with values</span>
    fruits = (<span class="syntax-string">"Apple"</span>, <span class="syntax-string">"Banana"</span>, <span class="syntax-string">"Orange"</span>)

    <span class="syntax-comment"># Parentheses are optional</span>
    colors = <span class="syntax-string">"Red"</span>, <span class="syntax-string">"Green"</span>, <span class="syntax-string">"Blue"</span>

    <span class="syntax-function">print</span>(fruits)
    <span class="syntax-function">print</span>(colors)</code></pre>

            <h3>Creating a Single-Element Tuple</h3>
            <p>To create a tuple with only one element, you must include a trailing comma.</p>

            <pre><code class="language-python">number = (<span class="syntax-number">10</span>,)
    <span class="syntax-function">print</span>(<span class="syntax-function">type</span>(number))

    <span class="syntax-comment"># Without comma, it becomes an integer</span>
    value = (<span class="syntax-number">10</span>)
    <span class="syntax-function">print</span>(<span class="syntax-function">type</span>(value))</code></pre>

            <h3>Accessing Tuple Elements</h3>

            <pre><code class="language-python">languages = (<span class="syntax-string">"Python"</span>, <span class="syntax-string">"Java"</span>, <span class="syntax-string">"C++"</span>, <span class="syntax-string">"JavaScript"</span>)

    <span class="syntax-function">print</span>(languages[<span class="syntax-number">0</span>])      <span class="syntax-comment"># Python</span>
    <span class="syntax-function">print</span>(languages[<span class="syntax-number">2</span>])      <span class="syntax-comment"># C++</span>
    <span class="syntax-function">print</span>(languages[-<span class="syntax-number">1</span>])     <span class="syntax-comment"># JavaScript</span></code></pre>

            <h3>Slicing Tuples</h3>

            <pre><code class="language-python">numbers = (<span class="syntax-number">10</span>, <span class="syntax-number">20</span>, <span class="syntax-number">30</span>, <span class="syntax-number">40</span>, <span class="syntax-number">50</span>)

    <span class="syntax-function">print</span>(numbers[<span class="syntax-number">1</span>:<span class="syntax-number">4</span>])      <span class="syntax-comment"># (20, 30, 40)</span>
    <span class="syntax-function">print</span>(numbers[:<span class="syntax-number">3</span>])       <span class="syntax-comment"># (10, 20, 30)</span>
    <span class="syntax-function">print</span>(numbers[::<span class="syntax-number">2</span>])      <span class="syntax-comment"># (10, 30, 50)</span></code></pre>

            <h3>Tuple Packing and Unpacking</h3>

            <pre><code class="language-python"><span class="syntax-comment"># Packing</span>
    student = (<span class="syntax-string">"Alice"</span>, <span class="syntax-number">21</span>, <span class="syntax-string">"Computer Science"</span>)

    <span class="syntax-comment"># Unpacking</span>
    name, age, course = student

    <span class="syntax-function">print</span>(name)
    <span class="syntax-function">print</span>(age)
    <span class="syntax-function">print</span>(course)</code></pre>

            <h3>Looping Through a Tuple</h3>

            <pre><code class="language-python">colors = (<span class="syntax-string">"Red"</span>, <span class="syntax-string">"Green"</span>, <span class="syntax-string">"Blue"</span>)

    <span class="syntax-keyword">for</span> color <span class="syntax-keyword">in</span> colors:
        <span class="syntax-function">print</span>(color)</code></pre>

            <h3>Tuple Methods</h3>

            <p>Tuples have only two built-in methods.</p>

            <pre><code class="language-python">numbers = (<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">2</span>, <span class="syntax-number">4</span>, <span class="syntax-number">2</span>)

    <span class="syntax-function">print</span>(numbers.<span class="syntax-function">count</span>(<span class="syntax-number">2</span>))   <span class="syntax-comment"># 3</span>
    <span class="syntax-function">print</span>(numbers.<span class="syntax-function">index</span>(<span class="syntax-number">4</span>))   <span class="syntax-comment"># 4</span></code></pre>

            <h3>Why Tuples are Immutable</h3>

            <pre><code class="language-python">fruits = (<span class="syntax-string">"Apple"</span>, <span class="syntax-string">"Banana"</span>, <span class="syntax-string">"Orange"</span>)

    <span class="syntax-comment"># This will raise an error</span>
    fruits[<span class="syntax-number">1</span>] = <span class="syntax-string">"Mango"</span></code></pre>

            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Common Mistake</div>
                <p>You cannot modify, append, remove, or sort a tuple. If you need to change the data, convert it to a list or use a list from the beginning.</p>
            </div>

            <h3>Converting Between Lists and Tuples</h3>

            <pre><code class="language-python">numbers = (<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>)

    <span class="syntax-comment"># Tuple to List</span>
    number_list = <span class="syntax-function">list</span>(numbers)
    number_list.<span class="syntax-function">append</span>(<span class="syntax-number">4</span>)

    <span class="syntax-comment"># List back to Tuple</span>
    numbers = <span class="syntax-function">tuple</span>(number_list)

    <span class="syntax-function">print</span>(numbers)</code></pre>

            <h3>List vs Tuple</h3>

            <table>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Tuple</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mutable</td>
                        <td>Immutable</td>
                    </tr>
                    <tr>
                        <td>Uses square brackets []</td>
                        <td>Uses parentheses ()</td>
                    </tr>
                    <tr>
                        <td>Can add or remove elements</td>
                        <td>Cannot change elements</td>
                    </tr>
                    <tr>
                        <td>More flexible</td>
                        <td>More memory efficient</td>
                    </tr>
                </tbody>
            </table>

            <div class="callout callout-success">
                <div class="callout-title">✅ Best Practice</div>
                <p>Use tuples for data that should never change, such as coordinates, RGB colors, dates, or configuration values. Use lists when your collection needs to be modified.</p>
            </div>
        `
    },


{
    id: 'sets',
    title: 'Sets',
    duration: '15 min',
    content: `
        <h2>Sets in Python</h2>
        <p>A set is an unordered collection of unique items. Sets are useful when you need to store multiple values but do not want duplicate elements.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Feature</div>
            <p>Sets automatically remove duplicate values and do not maintain a specific order.</p>
        </div>

        <h3>Creating Sets</h3>

        <pre><code class="language-python"><span class="syntax-comment"># Creating an empty set</span>
empty_set = <span class="syntax-function">set</span>()

<span class="syntax-comment"># Creating a set with values</span>
fruits = {<span class="syntax-string">"Apple"</span>, <span class="syntax-string">"Banana"</span>, <span class="syntax-string">"Orange"</span>}

<span class="syntax-function">print</span>(fruits)</code></pre>

        <h3>Sets Remove Duplicates</h3>

        <pre><code class="language-python">numbers = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>}

<span class="syntax-function">print</span>(numbers)

<span class="syntax-comment"># Output: {1, 2, 3, 4}</span></code></pre>

        <h3>Adding Elements</h3>

        <pre><code class="language-python">colors = {<span class="syntax-string">"Red"</span>, <span class="syntax-string">"Blue"</span>}

colors.<span class="syntax-function">add</span>(<span class="syntax-string">"Green"</span>)

<span class="syntax-function">print</span>(colors)</code></pre>

        <h3>Adding Multiple Elements</h3>

        <pre><code class="language-python">numbers = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>}

numbers.<span class="syntax-function">update</span>([<span class="syntax-number">4</span>, <span class="syntax-number">5</span>, <span class="syntax-number">6</span>])

<span class="syntax-function">print</span>(numbers)</code></pre>

        <h3>Removing Elements</h3>

        <pre><code class="language-python">fruits = {<span class="syntax-string">"Apple"</span>, <span class="syntax-string">"Banana"</span>, <span class="syntax-string">"Orange"</span>}

<span class="syntax-comment"># Remove item</span>
fruits.<span class="syntax-function">remove</span>(<span class="syntax-string">"Banana"</span>)

<span class="syntax-function">print</span>(fruits)</code></pre>

        <h3>discard() vs remove()</h3>

        <pre><code class="language-python">numbers = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>}

<span class="syntax-comment"># remove gives an error if item does not exist</span>
numbers.<span class="syntax-function">remove</span>(<span class="syntax-number">5</span>)

<span class="syntax-comment"># discard does not give an error</span>
numbers.<span class="syntax-function">discard</span>(<span class="syntax-number">5</span>)</code></pre>

        <h3>Checking If an Object Exists in a Set</h3>

        <pre><code class="language-python">languages = {<span class="syntax-string">"Python"</span>, <span class="syntax-string">"Java"</span>, <span class="syntax-string">"C++"</span>}

<span class="syntax-keyword">if</span> <span class="syntax-string">"Python"</span> <span class="syntax-keyword">in</span> languages:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Python exists"</span>)</code></pre>

        <h3>Looping Through Sets</h3>

        <pre><code class="language-python">colors = {<span class="syntax-string">"Red"</span>, <span class="syntax-string">"Green"</span>, <span class="syntax-string">"Blue"</span>}

<span class="syntax-keyword">for</span> color <span class="syntax-keyword">in</span> colors:
    <span class="syntax-function">print</span>(color)</code></pre>

        <h3>Set Operations</h3>

        <p>Sets support mathematical operations like union, intersection, and difference.</p>

        <h3>Union</h3>

        <pre><code class="language-python">a = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>}
b = {<span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>}

result = a | b

<span class="syntax-function">print</span>(result)

<span class="syntax-comment"># {1, 2, 3, 4, 5}</span></code></pre>

        <h3>Intersection</h3>

        <pre><code class="language-python">a = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>}
b = {<span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>}

result = a & b

<span class="syntax-function">print</span>(result)

<span class="syntax-comment"># {3}</span></code></pre>

        <h3>Difference</h3>

        <pre><code class="language-python">a = {<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>}
b = {<span class="syntax-number">3</span>, <span class="syntax-number">4</span>, <span class="syntax-number">5</span>}

result = a - b

<span class="syntax-function">print</span>(result)

<span class="syntax-comment"># {1, 2}</span></code></pre>

        <h3>Frozen Sets</h3>

        <p>A frozenset is an immutable version of a set. It cannot be changed after creation.</p>

        <pre><code class="language-python">numbers = <span class="syntax-function">frozenset</span>([<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>])

<span class="syntax-function">print</span>(numbers)</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Sets do not support indexing because they are unordered. You cannot use set[0] like a list or tuple.</p>
        </div>

        <h3>List vs Tuple vs Set</h3>

        <table>
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>List</th>
                    <th>Tuple</th>
                    <th>Set</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ordered</td>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>Mutable</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>Duplicates</td>
                    <td>Allowed</td>
                    <td>Allowed</td>
                    <td>Not allowed</td>
                </tr>
            </tbody>
        </table>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use sets when you need unique values, fast membership checking, or mathematical operations between collections.</p>
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
    id: 'list-comprehensions',
    title: 'List Comprehensions',
    duration: '20 min',
    content: `
        <h2>List Comprehensions in Python</h2>
        <p>List comprehensions provide a shorter and cleaner way to create lists from existing sequences.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>List comprehension creates a new list by applying an expression to every item in an iterable.</p>
        </div>


        <h3>Creating Lists Using a Loop</h3>

        <pre><code class="language-python">numbers = []

<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> range(<span class="syntax-number">5</span>):
    numbers.append(i)

<span class="syntax-function">print</span>(numbers)</code></pre>


        <h3>Creating Lists Using Comprehension</h3>

        <pre><code class="language-python">numbers = [i <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> range(<span class="syntax-number">5</span>)]
<span class="syntax-function">print</span>(numbers)</code></pre>


        <h3>List Comprehension Syntax</h3>

        <pre><code class="language-python">[expression <span class="syntax-keyword">for</span> item <span class="syntax-keyword">in</span> iterable]</code></pre>


        <h3>Creating Squares</h3>

        <pre><code class="language-python">squares = [x * x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> range(<span class="syntax-number">1</span>, <span class="syntax-number">6</span>)]

<span class="syntax-function">print</span>(squares)</code></pre>


        <h3>Using Conditions</h3>

        <pre><code class="language-python">even_numbers = [x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> range(<span class="syntax-number">10</span>) <span class="syntax-keyword">if</span> x % <span class="syntax-number">2</span> == <span class="syntax-number">0</span>]

<span class="syntax-function">print</span>(even_numbers)</code></pre>


        <h3>If Else Condition</h3>

        <pre><code class="language-python">result = [<span class="syntax-string">"Even"</span> <span class="syntax-keyword">if</span> x % <span class="syntax-number">2</span> == <span class="syntax-number">0</span> <span class="syntax-keyword">else</span> <span class="syntax-string">"Odd"</span> <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> range(<span class="syntax-number">5</span>)]

<span class="syntax-function">print</span>(result)</code></pre>


        <h3>Working With Strings</h3>

        <pre><code class="language-python">names = [<span class="syntax-string">"alice"</span>, <span class="syntax-string">"bob"</span>, <span class="syntax-string">"john"</span>]

upper_names = [name.upper() <span class="syntax-keyword">for</span> name <span class="syntax-keyword">in</span> names]

<span class="syntax-function">print</span>(upper_names)</code></pre>


        <h3>Nested List Comprehension</h3>

        <pre><code class="language-python">matrix = [[j <span class="syntax-keyword">for</span> j <span class="syntax-keyword">in</span> range(<span class="syntax-number">3</span>)] <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> range(<span class="syntax-number">3</span>)]

<span class="syntax-function">print</span>(matrix)</code></pre>


        <h3>Dictionary Comprehension</h3>

        <pre><code class="language-python">numbers = {
    x: x * x
    <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> range(<span class="syntax-number">5</span>)
}

<span class="syntax-function">print</span>(numbers)</code></pre>


        <h3>Filtering Data</h3>

        <pre><code class="language-python">ages = [<span class="syntax-number">12</span>, <span class="syntax-number">18</span>, <span class="syntax-number">25</span>]

adults = [ age <span class="syntax-keyword">for</span> age <span class="syntax-keyword">in</span> ages <span class="syntax-keyword">if</span> age >= <span class="syntax-number">18</span>]

<span class="syntax-function">print</span>(adults)</code></pre>


        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Avoid very complex list comprehensions because they can make code harder to read.</p>
        </div>


        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use list comprehensions for simple filtering and transformation tasks.</p>
        </div>
    `
},

    {
    id: 'exception-handling',
    title: 'Exception Handling',
    duration: '20 min',
    content: `
        <h2>Exception Handling in Python</h2>
        <p>Exception handling allows you to handle errors gracefully and prevent your program from crashing.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>Python uses <code>try</code>, <code>except</code>, <code>else</code>, and <code>finally</code> blocks to handle errors.</p>
        </div>

        <h3>What is an Exception?</h3>

        <p>An exception is an error that happens while a program is running.</p>

        <pre><code class="language-python"><span class="syntax-number">10</span> / <span class="syntax-number">0</span>

<span class="syntax-comment"># ZeroDivisionError</span></code></pre>

        <h3>Basic try and except</h3>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    number = <span class="syntax-function">int</span>(
        <span class="syntax-function">input</span>(<span class="syntax-string">"Enter number: "</span>)
    )

    <span class="syntax-function">print</span>(number)

<span class="syntax-keyword">except</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid input"</span>)</code></pre>

        <h3>Handling Specific Errors</h3>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    result = <span class="syntax-number">10</span> / <span class="syntax-number">0</span>

<span class="syntax-keyword">except</span> <span class="syntax-class">ZeroDivisionError</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Cannot divide by zero"</span>)</code></pre>

        <h3>Multiple Except Blocks</h3>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    number = <span class="syntax-function">int</span>(
        <span class="syntax-function">input</span>(<span class="syntax-string">"Number: "</span>)
    )

    result = <span class="syntax-number">100</span> / number

<span class="syntax-keyword">except</span> <span class="syntax-class">ValueError</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Enter a valid number"</span>)

<span class="syntax-keyword">except</span> <span class="syntax-class">ZeroDivisionError</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Number cannot be zero"</span>)</code></pre>

        <h3>Using else</h3>

        <p>The else block runs only when no exception occurs.</p>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    x = <span class="syntax-number">10</span> / <span class="syntax-number">2</span>

<span class="syntax-keyword">except</span> <span class="syntax-class">ZeroDivisionError</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Error"</span>)

<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Success"</span>)</code></pre>

        <h3>Using finally</h3>

        <p>The finally block always executes whether an error occurs or not.</p>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    file = <span class="syntax-function">open</span>(<span class="syntax-string">"data.txt"</span>)

<span class="syntax-keyword">except</span> <span class="syntax-class">FileNotFoundError</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"File not found"</span>)

<span class="syntax-keyword">finally</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Program finished"</span>)</code></pre>

        <h3>Raising Exceptions</h3>

        <p>You can create your own exceptions using <code>raise</code>.</p>

        <pre><code class="language-python">age = <span class="syntax-number">15</span>

<span class="syntax-keyword">if</span> age &lt; <span class="syntax-number">18</span>:
    <span class="syntax-keyword">raise</span> <span class="syntax-class">Exception</span>(
        <span class="syntax-string">"Age must be 18 or above"</span>
    )</code></pre>

        <h3>Custom Exceptions</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">AgeError</span>(<span class="syntax-class">Exception</span>):
    <span class="syntax-keyword">pass</span>


age = <span class="syntax-number">12</span>

<span class="syntax-keyword">if</span> age &lt; <span class="syntax-number">18</span>:
    <span class="syntax-keyword">raise</span> <span class="syntax-class">AgeError</span>(
        <span class="syntax-string">"Not allowed"</span>
    )</code></pre>

        <h3>Practical Example</h3>

        <pre><code class="language-python"><span class="syntax-keyword">while</span> <span class="syntax-keyword">True</span>:

    <span class="syntax-keyword">try</span>:
        number = <span class="syntax-function">int</span>(
            <span class="syntax-function">input</span>(<span class="syntax-string">"Enter positive number: "</span>)
        )

        <span class="syntax-keyword">if</span> number &lt; <span class="syntax-number">0</span>:
            <span class="syntax-keyword">raise</span> <span class="syntax-class">ValueError</span>

        <span class="syntax-keyword">break</span>

    <span class="syntax-keyword">except</span> <span class="syntax-class">ValueError</span>:
        <span class="syntax-function">print</span>(
            <span class="syntax-string">"Try again"</span>
        )

<span class="syntax-function">print</span>(number)</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Avoid using empty except blocks because they hide programming errors.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Catch specific exceptions and provide helpful error messages to users.</p>
        </div>
    `
},

{
    id: 'file-handling',
    title: 'File Handling',
    duration: '20 min',
    content: `
        <h2>File Handling in Python</h2>
        <p>File handling allows Python programs to create, read, update, and delete files stored on your computer.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>Python uses the <code>open()</code> function to work with files.</p>
        </div>

        <h3>Opening a File</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"example.txt"</span>,
    <span class="syntax-string">"r"</span>
)

<span class="syntax-function">print</span>(file)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>File Modes</h3>

        <table>
            <thead>
                <tr>
                    <th>Mode</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>r</td>
                    <td>Read file</td>
                </tr>
                <tr>
                    <td>w</td>
                    <td>Write and overwrite file</td>
                </tr>
                <tr>
                    <td>a</td>
                    <td>Add content to file</td>
                </tr>
                <tr>
                    <td>x</td>
                    <td>Create new file</td>
                </tr>
                <tr>
                    <td>b</td>
                    <td>Binary mode</td>
                </tr>
            </tbody>
        </table>

        <h3>Reading File Content</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"message.txt"</span>,
    <span class="syntax-string">"r"</span>
)

content = file.<span class="syntax-function">read</span>()

<span class="syntax-function">print</span>(content)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>Reading Line by Line</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"data.txt"</span>,
    <span class="syntax-string">"r"</span>
)

<span class="syntax-keyword">for</span> line <span class="syntax-keyword">in</span> file:
    <span class="syntax-function">print</span>(line)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>readline()</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"data.txt"</span>,
    <span class="syntax-string">"r"</span>
)

line = file.<span class="syntax-function">readline</span>()

<span class="syntax-function">print</span>(line)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>Writing to Files</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"notes.txt"</span>,
    <span class="syntax-string">"w"</span>
)

file.<span class="syntax-function">write</span>(
    <span class="syntax-string">"Learning Python"</span>
)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>Appending Data</h3>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(
    <span class="syntax-string">"notes.txt"</span>,
    <span class="syntax-string">"a"</span>
)

file.<span class="syntax-function">write</span>(
    <span class="syntax-string">"\\nNew Lesson Added"</span>
)

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>Using with Statement</h3>

        <p>The <code>with</code> statement automatically closes files.</p>

        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(
    <span class="syntax-string">"data.txt"</span>,
    <span class="syntax-string">"r"</span>
) <span class="syntax-keyword">as</span> file:

    content = file.<span class="syntax-function">read</span>()

    <span class="syntax-function">print</span>(content)</code></pre>

        <h3>Writing Multiple Lines</h3>

        <pre><code class="language-python">lines = [
    <span class="syntax-string">"Python\\n"</span>,
    <span class="syntax-string">"Java\\n"</span>,
    <span class="syntax-string">"C++\\n"</span>
]

<span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(
    <span class="syntax-string">"languages.txt"</span>,
    <span class="syntax-string">"w"</span>
) <span class="syntax-keyword">as</span> file:

    file.<span class="syntax-function">writelines</span>(lines)</code></pre>

        <h3>Checking File Exists</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> os

<span class="syntax-keyword">if</span> os.path.<span class="syntax-function">exists</span>(
    <span class="syntax-string">"data.txt"</span>
):
    <span class="syntax-function">print</span>(
        <span class="syntax-string">"File exists"</span>
    )</code></pre>

        <h3>Deleting Files</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> os

os.<span class="syntax-function">remove</span>(
    <span class="syntax-string">"old.txt"</span>
)</code></pre>

        <h3>Working with JSON Files</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

data = {
    <span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>,
    <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>
}

<span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(
    <span class="syntax-string">"user.json"</span>,
    <span class="syntax-string">"w"</span>
) <span class="syntax-keyword">as</span> file:

    json.<span class="syntax-function">dump</span>(
        data,
        file
    )</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Always close files or use the <code>with</code> statement to avoid resource problems.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use <code>with open()</code> whenever possible because Python automatically manages the file connection.</p>
        </div>
    `
},

{
    id: 'modules-and-packages',
    title: 'Modules and Packages',
    duration: '20 min',
    content: `
        <h2>Modules and Packages in Python</h2>
        <p>Modules allow you to organize Python code into reusable files. Packages are collections of modules that help build larger applications.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>A module is a Python file containing functions, variables, and classes that can be imported and reused.</p>
        </div>

        <h3>Creating a Module</h3>

        <p>Create a file named <code>calculator.py</code>:</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">add</span>(a, b):
    <span class="syntax-keyword">return</span> a + b

<span class="syntax-keyword">def</span> <span class="syntax-function">subtract</span>(a, b):
    <span class="syntax-keyword">return</span> a - b</code></pre>

        <h3>Importing a Module</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> calculator

result = calculator.<span class="syntax-function">add</span>(<span class="syntax-number">10</span>, <span class="syntax-number">5</span>)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Import Specific Functions</h3>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> calculator <span class="syntax-keyword">import</span> add

result = <span class="syntax-function">add</span>( <span class="syntax-number">20</span>, <span class="syntax-number">10</span>)
<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Import With Alias</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> calculator <span class="syntax-keyword">as</span> calc

answer = calc.<span class="syntax-function">add</span>(<span class="syntax-number">5</span>, <span class="syntax-number">7</span>)
<span class="syntax-function">print</span>(answer)</code></pre>

        <h3>Built-in Modules</h3>

        <p>Python provides many ready-to-use modules.</p>

        <h3>Math Module</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> math

number = <span class="syntax-number">25</span>
result = math.<span class="syntax-function">sqrt</span>(number)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Random Module</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> random

number = random.<span class="syntax-function">randint</span>(<span class="syntax-number">1</span>, <span class="syntax-number">10</span>)
<span class="syntax-function">print</span>(number)</code></pre>

        <h3>Date and Time Module</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> datetime
today = datetime.datetime.<span class="syntax-function">now</span>()
<span class="syntax-function">print</span>(today)</code></pre>

        <h3>Exploring Module Functions</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> math

<span class="syntax-function">print</span>(<span class="syntax-function">dir</span>(math))</code></pre>

        <h3>Using __name__</h3>

        <p>The <code>__name__</code> variable checks whether a file is running directly or imported.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">hello</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello Python"</span>)

<span class="syntax-keyword">if</span> __name__ == <span class="syntax-string">"__main__"</span>:
    <span class="syntax-function">hello</span>()</code></pre>

        <h3>Creating a Package</h3>

        <p>A package is a folder containing multiple Python modules.</p>

        <pre><code class="language-python">my_package/

    __init__.py

    math_tools.py

    string_tools.py</code></pre>

        <h3>Importing From Package</h3>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> my_package.math_tools <span class="syntax-keyword">import</span> add

result = <span class="syntax-function">add</span>(<span class="syntax-number">4</span>, <span class="syntax-number">6</span>)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Installing External Packages</h3>

        <p>Python packages can be installed using pip.</p>

        <pre><code class="language-python">pip install requests</code></pre>

        <h3>Using External Package</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://example.com"</span>)

<span class="syntax-function">print</span>(response.status_code)</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Avoid naming your files the same as built-in modules like <code>random.py</code> or <code>math.py</code>.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Keep related code together in modules and reuse functions instead of copying code.</p>
        </div>
    `
},

{
    id: 'lambda-and-functional-programming',
    title: 'Lambda and Functional Programming',
    duration: '20 min',
    content: `
        <h2>Lambda and Functional Programming in Python</h2>
        <p>Functional programming focuses on using functions as reusable building blocks. Python supports this style using lambda functions, map, filter, and reduce.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>A lambda function is a small anonymous function written in a single line.</p>
        </div>

        <h3>Creating Lambda Functions</h3>

        <pre><code class="language-python"><span class="syntax-comment"># Normal function</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">square</span>(x):
    <span class="syntax-keyword">return</span> x * x

<span class="syntax-comment"># Lambda function</span>
square = <span class="syntax-keyword">lambda</span> x: x * x
<span class="syntax-function">print</span>(square(<span class="syntax-number">5</span>))</code></pre>

        <h3>Lambda with Multiple Arguments</h3>

        <pre><code class="language-python">add = <span class="syntax-keyword">lambda</span> a, b: a + b
result = add(<span class="syntax-number">10</span>, <span class="syntax-number">20</span>)
<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Using Lambda with sorted()</h3>

        <pre><code class="language-python">students = [{<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">22</span>}, {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Bob"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">20</span>}]
students.<span class="syntax-function">sort</span>(key=<span class="syntax-keyword">lambda</span> x: x[<span class="syntax-string">"age"</span>])
<span class="syntax-function">print</span>(students)</code></pre>

        <h3>map() Function</h3>

        <p>The map function applies a function to every item in an iterable.</p>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>]
squared = <span class="syntax-function">map</span>(<span class="syntax-keyword">lambda</span> x: x * x, numbers)
<span class="syntax-function">print</span>(<span class="syntax-function">list</span>(squared))</code></pre>

        <h3>map() with Strings</h3>

        <pre><code class="language-python">names = [<span class="syntax-string">"alice"</span>, <span class="syntax-string">"bob"</span>, <span class="syntax-string">"john"</span>]
capitalized = <span class="syntax-function">map</span>(<span class="syntax-function">str.upper</span>, names)
<span class="syntax-function">print</span>(<span class="syntax-function">list</span>(capitalized))</code></pre>

        <h3>filter() Function</h3>

        <p>The filter function selects items that match a condition.</p>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>,  <span class="syntax-number">4</span>, <span class="syntax-number">5</span>]
even = <span class="syntax-function">filter</span>(<span class="syntax-keyword">lambda</span> x: x % <span class="syntax-number">2</span> == <span class="syntax-number">0</span>, numbers)
<span class="syntax-function">print</span>(<span class="syntax-function">list</span>(even))</code></pre>

        <h3>filter() with Conditions</h3>

        <pre><code class="language-python">ages = [<span class="syntax-number">12</span>, <span class="syntax-number">18</span>, <span class="syntax-number">25</span>, <span class="syntax-number">30</span>]
adults = <span class="syntax-function">filter</span>(<span class="syntax-keyword">lambda</span> age: age >= <span class="syntax-number">18</span>, ages)
<span class="syntax-function">print</span>(<span class="syntax-function">list</span>(adults))</code></pre>

        <h3>reduce() Function</h3>

        <p>The reduce function combines all values into a single result.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> functools <span class="syntax-keyword">import</span> reduce
numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>]
total = reduce(<span class="syntax-keyword">lambda</span> a, b: a + b,numbers)
<span class="syntax-function">print</span>(total)</code></pre>

        <h3>List Comprehension</h3>

        <p>A shorter way to create lists using expressions.</p>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>]
squares = [x * x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> numbers]
<span class="syntax-function">print</span>(squares)</code></pre>

        <h3>List Comprehension with Condition</h3>

        <pre><code class="language-python">even_numbers = [x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> range(<span class="syntax-number">10</span>) <span class="syntax-keyword">if</span> x % <span class="syntax-number">2</span> == <span class="syntax-number">0</span>]
<span class="syntax-function">print</span>(even_numbers)</code></pre>

        <h3>Dictionary Comprehension</h3>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>]
squares = {x: x*x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> numbers}
<span class="syntax-function">print</span>(squares)</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Common Mistake</div>
            <p>Do not use lambda for large logic. Use normal functions when code becomes complex.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use lambda, map, and filter for simple transformations and keep your code readable.</p>
        </div>
    `
},

{
    id: 'json-data-handling',
    title: 'JSON Data Handling',
    duration: '20 min',
    content: `
        <h2>JSON Data Handling</h2>
        <p>JSON (JavaScript Object Notation) is a popular format for storing and exchanging data. Python can easily read, create, and modify JSON data using the built-in json module.</p>


        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>JSON data looks similar to Python dictionaries because both use key-value pairs.</p>
        </div>


        <h3>Importing JSON Module</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json</code></pre>


        <h3>Python Dictionary to JSON</h3>

        <p>The dumps() function converts Python data into a JSON string.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

person = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>, <span class="syntax-string">"city"</span>: <span class="syntax-string">"London"</span>}

data = json.<span class="syntax-function">dumps</span>(person)

<span class="syntax-function">print</span>(data)</code></pre>


        <h3>Formatting JSON Output</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

student = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"John"</span>, <span class="syntax-string">"marks"</span>: <span class="syntax-number">90</span>}

<span class="syntax-function">print</span>(json.<span class="syntax-function">dumps</span>(student, indent=<span class="syntax-number">4</span>))</code></pre>


        <h3>JSON String to Python Object</h3>

        <p>The loads() function converts JSON text into a Python object.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

text = <span class="syntax-string">'{"name": "Alice", "age": 25}'</span>

person = json.<span class="syntax-function">loads</span>(text)

<span class="syntax-function">print</span>(person[<span class="syntax-string">"name"</span>])</code></pre>


        <h3>Accessing JSON Data</h3>

        <pre><code class="language-python">user = {<span class="syntax-string">"username"</span>: <span class="syntax-string">"alex"</span>, <span class="syntax-string">"active"</span>: <span class="syntax-keyword">True</span>}

<span class="syntax-function">print</span>(user[<span class="syntax-string">"username"</span>])
<span class="syntax-function">print</span>(user[<span class="syntax-string">"active"</span>])</code></pre>


        <h3>Updating JSON Data</h3>

        <pre><code class="language-python">profile = {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Sam"</span>, <span class="syntax-string">"age"</span>: <span class="syntax-number">20</span>}

profile[<span class="syntax-string">"age"</span>] = <span class="syntax-number">21</span>
profile[<span class="syntax-string">"country"</span>] = <span class="syntax-string">"USA"</span>

<span class="syntax-function">print</span>(profile)</code></pre>


        <h3>Writing JSON to a File</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

data = {<span class="syntax-string">"product"</span>: <span class="syntax-string">"Laptop"</span>, <span class="syntax-string">"price"</span>: <span class="syntax-number">1000</span>}

<span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(<span class="syntax-string">"data.json"</span>, <span class="syntax-string">"w"</span>) <span class="syntax-keyword">as</span> file:

    json.<span class="syntax-function">dump</span>(data, file)</code></pre>


        <h3>Reading JSON from a File</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

<span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(<span class="syntax-string">"data.json"</span>, <span class="syntax-string">"r"</span>) <span class="syntax-keyword">as</span> file:

    data = json.<span class="syntax-function">load</span>(file)

<span class="syntax-function">print</span>(data)</code></pre>


        <h3>Working with JSON Lists</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

users = [
    {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>},
    {<span class="syntax-string">"name"</span>: <span class="syntax-string">"Bob"</span>}
]

json_data = json.<span class="syntax-function">dumps</span>(users)

<span class="syntax-function">print</span>(json_data)</code></pre>


        <h3>Handling Invalid JSON</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> json

text = <span class="syntax-string">"invalid json"</span>

<span class="syntax-keyword">try</span>:

    data = json.<span class="syntax-function">loads</span>(text)

<span class="syntax-keyword">except</span> json.JSONDecodeError:

    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid JSON format"</span>)</code></pre>


        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use JSON when working with APIs, configuration files, and saving structured data.</p>
        </div>
    `
},

{
    id: 'debugging-clean-code',
    title: 'Debugging and Clean Code',
    duration: '20 min',
    content: `
        <h2>Debugging and Clean Code</h2>
        <p>Debugging is the process of finding and fixing errors in your program. Clean code makes programs easier to read, maintain, and improve.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>Good programmers do not avoid bugs. They learn how to find and fix them efficiently.</p>
        </div>

        <h3>Types of Errors</h3>
        <ul>
            <li><b>Syntax Errors</b> - Mistakes in writing code</li>
            <li><b>Runtime Errors</b> - Problems while the program executes</li>
            <li><b>Logic Errors</b> - Program runs but produces wrong results</li>
        </ul>

        <h3>Syntax Error Example</h3>

        <pre><code class="language-python"><span class="syntax-keyword">if</span> age > <span class="syntax-number">18</span> <span class="syntax-comment"># Missing colon</span>
    <span class="syntax-function">print</span>(<span class="syntax-string">"Adult"</span>)</code></pre>


        <h3>Runtime Error Example</h3>

        <pre><code class="language-python">number = <span class="syntax-number">10</span>
result = number / <span class="syntax-number">0</span>
<span class="syntax-function">print</span>(result)</code></pre>


        <h3>Using Print for Debugging</h3>

        <p>Printing values helps understand what happens inside the program.</p>

        <pre><code class="language-python">price = <span class="syntax-number">100</span>
quantity = <span class="syntax-number">3</span>
<span class="syntax-function">print</span>(price)
<span class="syntax-function">print</span>(quantity)
total = price * quantity
<span class="syntax-function">print</span>(total)</code></pre>


        <h3>Handling Errors with Try Except</h3>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    number = <span class="syntax-function">int</span>(<span class="syntax-string">"hello"</span>)
<span class="syntax-keyword">except</span> ValueError:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid number"</span>)</code></pre>


        <h3>Using Finally</h3>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    file = <span class="syntax-function">open</span>(<span class="syntax-string">"data.txt"</span>)
<span class="syntax-keyword">except</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"File error"</span>)
<span class="syntax-keyword">finally</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Finished"</span>)</code></pre>


        <h3>Use Meaningful Variable Names</h3>

        <pre><code class="language-python"><span class="syntax-comment"># Bad</span>
x = <span class="syntax-number">500</span>

<span class="syntax-comment"># Good</span>
user_balance = <span class="syntax-number">500</span>

<span class="syntax-function">print</span>(user_balance)</code></pre>


        <h3>Write Small Functions</h3>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">calculate_total</span>(price, quantity):
    <span class="syntax-keyword">return</span> price * quantity

total = <span class="syntax-function">calculate_total</span>(<span class="syntax-number">20</span>, <span class="syntax-number">5</span>)

<span class="syntax-function">print</span>(total)</code></pre>


        <h3>Avoid Duplicate Code</h3>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>(name):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Hello {name}"</span>)

<span class="syntax-function">greet</span>(<span class="syntax-string">"Alice"</span>)
<span class="syntax-function">greet</span>(<span class="syntax-string">"Bob"</span>)</code></pre>


        <h3>Writing Useful Comments</h3>

        <pre><code class="language-python"><span class="syntax-comment"># Calculate final price after discount</span>
price = <span class="syntax-number">100</span>
discount = <span class="syntax-number">20</span>
final_price = price - discount
<span class="syntax-function">print</span>(final_price)</code></pre>


        <h3>Python Debugger</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> pdb
number = <span class="syntax-number">10</span>
pdb.<span class="syntax-function">set_trace</span>()
result = number * <span class="syntax-number">2</span>
<span class="syntax-function">print</span>(result)</code></pre>


        <h3>Clean Code Rules</h3>

        <ul>
            <li>Use clear names</li>
            <li>Keep functions short</li>
            <li>Remove repeated code</li>
            <li>Handle errors properly</li>
            <li>Write readable logic</li>
        </ul>


        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Clean code reduces bugs and makes future changes easier.</p>
        </div>
    `
}

];
