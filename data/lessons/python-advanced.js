const PythonAdvancedLessons = [
    {
    id: 'advanced-functions-closures',
    title: 'Advanced Functions and Closures',
    duration: '25 min',
    content: `
        <h2>Advanced Functions and Closures</h2>
        <p>Python functions are powerful objects that can be stored, passed, and returned. Advanced function concepts like scope rules, closures, and higher-order functions help write flexible and reusable code.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>In Python, functions are first-class objects, meaning they can be treated like any other value.</p>
        </div>

        <h3>Scope Rules (LEGB)</h3>
        <p>Python searches for variables using the LEGB rule:</p>
        <ul>
            <li><strong>L - Local:</strong> Variables inside the current function.</li>
            <li><strong>E - Enclosing:</strong> Variables from outer functions.</li>
            <li><strong>G - Global:</strong> Variables defined at the top level.</li>
            <li><strong>B - Built-in:</strong> Python's built-in names.</li>
        </ul>

        <pre><code class="language-python">x = <span class="syntax-string">"global"</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">outer</span>():
    x = <span class="syntax-string">"enclosing"</span>
    <span class="syntax-keyword">def</span> <span class="syntax-function">inner</span>():
        x = <span class="syntax-string">"local"</span>
        <span class="syntax-function">print</span>(x)
    <span class="syntax-function">inner</span>()

<span class="syntax-function">outer</span>()
<span class="syntax-function">print</span>(x)</code></pre>

        <h3>Global Keyword</h3>
        <p>The <code>global</code> keyword allows modifying a global variable inside a function.</p>

        <pre><code class="language-python">count = <span class="syntax-number">0</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">increase</span>():
    <span class="syntax-keyword">global</span> count
    count += <span class="syntax-number">1</span>

<span class="syntax-function">increase</span>()
<span class="syntax-function">print</span>(count)</code></pre>

        <h3>Nonlocal Keyword</h3>
        <p>The <code>nonlocal</code> keyword modifies variables from an enclosing function.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">counter</span>():
    value = <span class="syntax-number">0</span>
    <span class="syntax-keyword">def</span> <span class="syntax-function">increment</span>():
        <span class="syntax-keyword">nonlocal</span> value
        value += <span class="syntax-number">1</span>
        <span class="syntax-keyword">return</span> value
    <span class="syntax-keyword">return</span> increment

counter_fn = <span class="syntax-function">counter</span>()
<span class="syntax-function">print</span>(<span class="syntax-function">counter_fn</span>())</code></pre>

        <h3>First-Class Functions</h3>
        <p>Functions can be assigned to variables, stored in collections, and passed as arguments.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Hello"</span>

message = greet

<span class="syntax-function">print</span>(<span class="syntax-function">message</span>())</code></pre>

        <h3>Passing Functions as Arguments</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">execute</span>(func):
    <span class="syntax-keyword">return</span> <span class="syntax-function">func</span>()

<span class="syntax-keyword">def</span> <span class="syntax-function">hello</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Welcome"</span>

result = <span class="syntax-function">execute</span>(hello)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Returning Functions</h3>
        <p>A function can return another function as a result.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">create_message</span>():
    <span class="syntax-keyword">def</span> <span class="syntax-function">message</span>():
        <span class="syntax-keyword">return</span> <span class="syntax-string">"Python is powerful"</span>
    <span class="syntax-keyword">return</span> message

result = <span class="syntax-function">create_message</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">result</span>())</code></pre>

        <h3>Closures</h3>
        <p>A closure is a function that remembers values from its enclosing scope even after the outer function finishes.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">multiplier</span>(number):
    <span class="syntax-keyword">def</span> <span class="syntax-function">multiply</span>(value):
        <span class="syntax-keyword">return</span> value * number
    <span class="syntax-keyword">return</span> multiply

double = <span class="syntax-function">multiplier</span>(<span class="syntax-number">2</span>)

<span class="syntax-function">print</span>(<span class="syntax-function">double</span>(<span class="syntax-number">5</span>))</code></pre>

        <h3>Higher-Order Functions</h3>
        <p>Higher-order functions accept functions as arguments or return functions.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">apply_operation</span>(operation, value):
    <span class="syntax-keyword">return</span> <span class="syntax-function">operation</span>(value)

<span class="syntax-keyword">def</span> <span class="syntax-function">square</span>(number):
    <span class="syntax-keyword">return</span> number * number

result = <span class="syntax-function">apply_operation</span>(square, <span class="syntax-number">5</span>)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Using Built-in Higher-Order Functions</h3>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>]

squared = <span class="syntax-function">list</span>(<span class="syntax-function">map</span>(<span class="syntax-keyword">lambda</span> x: x * x, numbers))

<span class="syntax-function">print</span>(squared)</code></pre>

        <h3>Practical Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">logger</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">"Running function"</span>)
        <span class="syntax-keyword">return</span> <span class="syntax-function">func</span>()
    <span class="syntax-keyword">return</span> wrapper

<span class="syntax-keyword">@</span>logger
<span class="syntax-keyword">def</span> <span class="syntax-function">hello</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Hello Python"</span></code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use advanced function features to create reusable, modular code. Avoid overly complex nested functions when a simpler solution works.</p>
        </div>
    `
},

{
    id: 'advanced-decorators-generators-iterators',
    title: 'Advanced Decorators, Generators and Iterators',
    duration: '35 min',
    content: `
        <h2>Advanced Decorators, Generators and Iterators</h2>
        <p>This lesson covers advanced Python techniques used in real-world applications including decorators, generators, iterators, and lazy evaluation.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>These features help write cleaner, reusable, and memory-efficient Python programs.</p>
        </div>

        <h3>Function Decorators</h3>
        <p>Decorators modify or extend the behavior of functions without changing the original function.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">logger</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">"Function started"</span>)
        result = <span class="syntax-function">func</span>()
        <span class="syntax-function">print</span>(<span class="syntax-string">"Function finished"</span>)
        <span class="syntax-keyword">return</span> result
    <span class="syntax-keyword">return</span> wrapper

<span class="syntax-keyword">@</span>logger
<span class="syntax-keyword">def</span> <span class="syntax-function">hello</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Hello Python"</span>

<span class="syntax-function">print</span>(<span class="syntax-function">hello</span>())</code></pre>

        <h3>Decorators with Arguments</h3>
        <p>A decorator can accept arguments by adding another wrapper layer.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">repeat</span>(times):
    <span class="syntax-keyword">def</span> <span class="syntax-function">decorator</span>(func):
        <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
            <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(times):
                <span class="syntax-function">func</span>()
        <span class="syntax-keyword">return</span> wrapper
    <span class="syntax-keyword">return</span> decorator

<span class="syntax-keyword">@</span>repeat(<span class="syntax-number">3</span>)
<span class="syntax-keyword">def</span> <span class="syntax-function">message</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello"</span>)</code></pre>

        <h3>Class Decorators</h3>
        <p>Classes can also be used as decorators by implementing the <code>__call__</code> method.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Logger</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, func):
        self.func = func

    <span class="syntax-keyword">def</span> <span class="syntax-function">__call__</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Running"</span>)
        <span class="syntax-keyword">return</span> self.func()

<span class="syntax-keyword">@</span>Logger
<span class="syntax-keyword">def</span> <span class="syntax-function">start</span>():
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Done"</span></code></pre>

        <h3>Introduction to Iterators</h3>
        <p>An iterator is an object that produces values one at a time using <code>__iter__()</code> and <code>__next__()</code>.</p>

        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>]
iterator = <span class="syntax-function">iter</span>(numbers)

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))</code></pre>

        <h3>Custom Iterators</h3>
        <p>You can create your own iterator classes.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Counter</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, limit):
        self.current = <span class="syntax-number">0</span>
        self.limit = limit

    <span class="syntax-keyword">def</span> <span class="syntax-function">__iter__</span>(self):
        <span class="syntax-keyword">return</span> self

    <span class="syntax-keyword">def</span> <span class="syntax-function">__next__</span>(self):
        <span class="syntax-keyword">if</span> self.current &gt;= self.limit:
            <span class="syntax-keyword">raise</span> <span class="syntax-class">StopIteration</span>
        value = self.current
        self.current += <span class="syntax-number">1</span>
        <span class="syntax-keyword">return</span> value

<span class="syntax-keyword">for</span> number <span class="syntax-keyword">in</span> <span class="syntax-class">Counter</span>(<span class="syntax-number">5</span>):
    <span class="syntax-function">print</span>(number)</code></pre>

        <h3>Generators</h3>
        <p>Generators create iterators using the <code>yield</code> keyword. They produce values only when needed.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">numbers</span>():
    <span class="syntax-keyword">yield</span> <span class="syntax-number">1</span>
    <span class="syntax-keyword">yield</span> <span class="syntax-number">2</span>
    <span class="syntax-keyword">yield</span> <span class="syntax-number">3</span>

<span class="syntax-keyword">for</span> number <span class="syntax-keyword">in</span> <span class="syntax-function">numbers</span>():
    <span class="syntax-function">print</span>(number)</code></pre>

        <h3>Generator Expressions</h3>
        <p>Generator expressions create generators using compact syntax.</p>

        <pre><code class="language-python">squares = (x * x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>))

<span class="syntax-keyword">for</span> value <span class="syntax-keyword">in</span> squares:
    <span class="syntax-function">print</span>(value)</code></pre>

        <h3>Lazy Evaluation</h3>
        <p>Lazy evaluation delays computation until the value is actually required.</p>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">large_numbers</span>():
    <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">1000000</span>):
        <span class="syntax-keyword">yield</span> i

data = <span class="syntax-function">large_numbers</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(data))</code></pre>

        <h3>Real World Use Cases</h3>

        <ul>
            <li>Logging systems using decorators</li>
            <li>Authentication and permission checks</li>
            <li>Reading large files with generators</li>
            <li>Processing streams of data</li>
            <li>Building memory-efficient applications</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">read_file</span>(filename):
    <span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(filename) <span class="syntax-keyword">as</span> file:
        <span class="syntax-keyword">for</span> line <span class="syntax-keyword">in</span> file:
            <span class="syntax-keyword">yield</span> line

<span class="syntax-keyword">for</span> line <span class="syntax-keyword">in</span> <span class="syntax-function">read_file</span>(<span class="syntax-string">"data.txt"</span>):
    <span class="syntax-function">print</span>(line)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use decorators for reusable behavior and generators when working with large data collections to improve performance.</p>
        </div>
    `
},

{
    id: 'context-managers',
    title: 'Context Managers',
    duration: '25 min',
    content: `
        <h2>Context Managers</h2>
        <p>Context managers in Python provide a clean way to manage resources like files, database connections, and network connections. They automatically handle setup and cleanup operations.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>The <code>with</code> statement automatically calls setup code before execution and cleanup code after execution.</p>
        </div>

        <h3>The with Statement</h3>
        <p>The <code>with</code> statement is commonly used for working with files because it automatically closes the file.</p>

        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(<span class="syntax-string">"example.txt"</span>, <span class="syntax-string">"w"</span>) <span class="syntax-keyword">as</span> file:
    file.<span class="syntax-function">write</span>(<span class="syntax-string">"Hello Python"</span>)

<span class="syntax-comment"># File is automatically closed here</span></code></pre>

        <h3>Why Use Context Managers?</h3>
        <p>Without a context manager, resources must be manually released.</p>

        <pre><code class="language-python">file = <span class="syntax-function">open</span>(<span class="syntax-string">"data.txt"</span>, <span class="syntax-string">"r"</span>)

data = file.<span class="syntax-function">read</span>()

file.<span class="syntax-function">close</span>()

<span class="syntax-function">print</span>(data)</code></pre>

        <p>Using <code>with</code> makes the code safer because cleanup happens automatically even when errors occur.</p>

        <h3>__enter__ and __exit__ Methods</h3>
        <p>Context managers work using two special methods:</p>

        <ul>
            <li><strong>__enter__()</strong> runs when entering the with block.</li>
            <li><strong>__exit__()</strong> runs when leaving the with block.</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Example</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Starting"</span>)
        <span class="syntax-keyword">return</span> self

    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, exc_type, exc_value, traceback):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Finished"</span>)

<span class="syntax-keyword">with</span> <span class="syntax-class">Example</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Inside block"</span>)</code></pre>

        <h3>Returning Values from __enter__</h3>
        <p>The value returned by <code>__enter__</code> becomes the variable after <code>as</code>.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Message</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-string">"Hello"</span>

    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, *args):
        <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">with</span> <span class="syntax-class">Message</span>() <span class="syntax-keyword">as</span> text:
    <span class="syntax-function">print</span>(text)</code></pre>

        <h3>Handling Exceptions</h3>
        <p>The <code>__exit__</code> method receives exception information when an error occurs.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">SafeOperation</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Opening"</span>)

    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, exc_type, exc_value, traceback):
        <span class="syntax-keyword">if</span> exc_type:
            <span class="syntax-function">print</span>(<span class="syntax-string">"Error handled"</span>)
        <span class="syntax-function">print</span>(<span class="syntax-string">"Closing"</span>)

<span class="syntax-keyword">with</span> <span class="syntax-class">SafeOperation</span>():
    <span class="syntax-keyword">raise</span> <span class="syntax-class">ValueError</span>(<span class="syntax-string">"Something went wrong"</span>)</code></pre>

        <h3>Creating Custom Context Managers</h3>
        <p>You can create reusable context managers for your own resources.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Timer</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Timer started"</span>)

    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, *args):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Timer stopped"</span>)

<span class="syntax-keyword">with</span> <span class="syntax-class">Timer</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Running task"</span>)</code></pre>

        <h3>Using contextlib</h3>
        <p>Python provides the <code>contextlib</code> module to create simple context managers.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> contextlib <span class="syntax-keyword">import</span> contextmanager

<span class="syntax-keyword">@</span>contextmanager
<span class="syntax-keyword">def</span> <span class="syntax-function">demo</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Start"</span>)
    <span class="syntax-keyword">yield</span>
    <span class="syntax-function">print</span>(<span class="syntax-string">"End"</span>)

<span class="syntax-keyword">with</span> <span class="syntax-function">demo</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Working"</span>)</code></pre>

        <h3>Real World Uses</h3>
        <ul>
            <li>Opening and closing files</li>
            <li>Managing database connections</li>
            <li>Locking and unlocking threads</li>
            <li>Handling network resources</li>
            <li>Temporary changes and cleanup tasks</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use context managers whenever an object needs setup and cleanup. They make code safer and easier to maintain.</p>
        </div>
    `
},

{
    id: 'advanced-oop',
    title: 'Advanced Object-Oriented Programming',
    duration: '35 min',
    content: `
        <h2>Advanced Object-Oriented Programming</h2>
        <p>Advanced Object-Oriented Programming focuses on designing flexible and reusable software using inheritance, abstraction, and composition.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Advanced OOP techniques help organize large applications by creating clear relationships between objects.</p>
        </div>

        <h3>Multiple Inheritance</h3>
        <p>Multiple inheritance allows a class to inherit from more than one parent class.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Animal</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">eat</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Eating"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Flyable</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">fly</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Flying"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Bird</span>(<span class="syntax-class">Animal</span>, <span class="syntax-class">Flyable</span>):
    <span class="syntax-keyword">pass</span>

bird = <span class="syntax-class">Bird</span>()
bird.<span class="syntax-function">eat</span>()
bird.<span class="syntax-function">fly</span>()</code></pre>

        <h3>Method Resolution Order (MRO)</h3>
        <p>MRO defines the order Python follows when searching for methods in inheritance chains.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">A</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">show</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"A"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">B</span>(<span class="syntax-class">A</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">show</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"B"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">C</span>(<span class="syntax-class">B</span>):
    <span class="syntax-keyword">pass</span>

obj = <span class="syntax-class">C</span>()
obj.<span class="syntax-function">show</span>()

<span class="syntax-function">print</span>(C.mro())</code></pre>

        <h3>Understanding MRO with super()</h3>
        <p>The <code>super()</code> function follows the MRO chain to call parent methods.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Parent</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">message</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Parent"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Child</span>(<span class="syntax-class">Parent</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">message</span>(self):
        <span class="syntax-keyword">super</span>().<span class="syntax-function">message</span>()
        <span class="syntax-function">print</span>(<span class="syntax-string">"Child"</span>)

obj = <span class="syntax-class">Child</span>()
obj.<span class="syntax-function">message</span>()</code></pre>

        <h3>Abstract Classes</h3>
        <p>Abstract classes define a blueprint that other classes must follow. They cannot be instantiated directly.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> abc <span class="syntax-keyword">import</span> ABC, abstractmethod

<span class="syntax-keyword">class</span> <span class="syntax-class">Shape</span>(ABC):

    <span class="syntax-keyword">@</span>abstractmethod
    <span class="syntax-keyword">def</span> <span class="syntax-function">area</span>(self):
        <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">class</span> <span class="syntax-class">Circle</span>(<span class="syntax-class">Shape</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">area</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-number">3.14</span> * <span class="syntax-number">5</span> * <span class="syntax-number">5</span>

circle = <span class="syntax-class">Circle</span>()</code></pre>

        <h3>Interfaces in Python</h3>
        <p>Python does not have traditional interfaces like some languages, but abstract classes can be used to create interface-like behavior.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> abc <span class="syntax-keyword">import</span> ABC, abstractmethod

<span class="syntax-keyword">class</span> <span class="syntax-class">Payment</span>(ABC):

    <span class="syntax-keyword">@</span>abstractmethod
    <span class="syntax-keyword">def</span> <span class="syntax-function">pay</span>(self):
        <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">class</span> <span class="syntax-class">CardPayment</span>(<span class="syntax-class">Payment</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">pay</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Paid by card"</span>)</code></pre>

        <h3>Composition vs Inheritance</h3>
        <p>Inheritance represents an "is-a" relationship. Composition represents a "has-a" relationship.</p>

        <h3>Inheritance Example</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Engine</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">start</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Engine started"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Car</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self):
        self.engine = <span class="syntax-class">Engine</span>()

    <span class="syntax-keyword">def</span> <span class="syntax-function">drive</span>(self):
        self.engine.<span class="syntax-function">start</span>()

car = <span class="syntax-class">Car</span>()
car.<span class="syntax-function">drive</span>()</code></pre>

        <h3>When to Use Each</h3>

        <ul>
            <li><strong>Inheritance:</strong> When classes share a common type.</li>
            <li><strong>Composition:</strong> When objects need reusable functionality.</li>
            <li><strong>Abstract Classes:</strong> When enforcing a design contract.</li>
            <li><strong>Interfaces:</strong> When multiple classes must follow the same behavior.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Prefer composition over deep inheritance trees. Keep classes small, focused, and easy to replace.</p>
        </div>
    `
},

{
    id: 'advanced-error-handling',
    title: 'Advanced Error Handling',
    duration: '30 min',
    content: `
        <h2>Advanced Error Handling</h2>
        <p>Advanced error handling helps you create reliable Python applications by controlling failures, creating meaningful errors, and designing better debugging systems.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Good error handling does not just prevent crashes. It helps users and developers understand what went wrong.</p>
        </div>

        <h3>Custom Exceptions</h3>
        <p>Custom exceptions allow you to create your own error types for specific situations.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">AgeError</span>(Exception):
    <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">check_age</span>(age):
    <span class="syntax-keyword">if</span> age &lt; <span class="syntax-number">18</span>:
        <span class="syntax-keyword">raise</span> <span class="syntax-class">AgeError</span>(<span class="syntax-string">"Age must be 18 or older"</span>)
    <span class="syntax-function">print</span>(<span class="syntax-string">"Access granted"</span>)

<span class="syntax-keyword">try</span>:
    <span class="syntax-function">check_age</span>(<span class="syntax-number">15</span>)
<span class="syntax-keyword">except</span> <span class="syntax-class">AgeError</span> <span class="syntax-keyword">as</span> error:
    <span class="syntax-function">print</span>(error)</code></pre>

        <h3>Adding Custom Exception Details</h3>
        <p>Custom exceptions can store additional information to make errors more useful.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">PaymentError</span>(Exception):
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, message, code):
        self.code = code
        <span class="syntax-keyword">super</span>().<span class="syntax-function">__init__</span>(message)

<span class="syntax-keyword">try</span>:
    <span class="syntax-keyword">raise</span> <span class="syntax-class">PaymentError</span>(<span class="syntax-string">"Payment failed"</span>, <span class="syntax-number">500</span>)
<span class="syntax-keyword">except</span> <span class="syntax-class">PaymentError</span> <span class="syntax-keyword">as</span> error:
    <span class="syntax-function">print</span>(error)
    <span class="syntax-function">print</span>(error.code)</code></pre>

        <h3>Exception Chaining</h3>
        <p>Exception chaining allows you to show the original error while raising a more meaningful error.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">DatabaseError</span>(Exception):
    <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">load_user</span>():
    <span class="syntax-keyword">try</span>:
        data = <span class="syntax-function">open</span>(<span class="syntax-string">"users.txt"</span>)
    <span class="syntax-keyword">except</span> FileNotFoundError <span class="syntax-keyword">as</span> error:
        <span class="syntax-keyword">raise</span> <span class="syntax-class">DatabaseError</span>(<span class="syntax-string">"Unable to load user data"</span>) <span class="syntax-keyword">from</span> error

<span class="syntax-keyword">try</span>:
    <span class="syntax-function">load_user</span>()
<span class="syntax-keyword">except</span> <span class="syntax-class">DatabaseError</span> <span class="syntax-keyword">as</span> error:
    <span class="syntax-function">print</span>(error)</code></pre>

        <h3>Using finally for Cleanup</h3>
        <p>The finally block always runs whether an error happens or not.</p>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    file = <span class="syntax-function">open</span>(<span class="syntax-string">"data.txt"</span>)
    content = file.<span class="syntax-function">read</span>()
<span class="syntax-keyword">except</span> Exception <span class="syntax-keyword">as</span> error:
    <span class="syntax-function">print</span>(error)
<span class="syntax-keyword">finally</span>:
    file.<span class="syntax-function">close</span>()
    <span class="syntax-function">print</span>(<span class="syntax-string">"Cleanup completed"</span>)</code></pre>

        <h3>Designing Error Systems</h3>
        <p>Large applications benefit from organized error handling systems.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">AppError</span>(Exception):
    <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">class</span> <span class="syntax-class">ValidationError</span>(<span class="syntax-class">AppError</span>):
    <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">class</span> <span class="syntax-class">AuthenticationError</span>(<span class="syntax-class">AppError</span>):
    <span class="syntax-keyword">pass</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">login</span>(username):
    <span class="syntax-keyword">if</span> username == <span class="syntax-string">""</span>:
        <span class="syntax-keyword">raise</span> <span class="syntax-class">ValidationError</span>(<span class="syntax-string">"Username required"</span>)</code></pre>

        <h3>Error Handling Best Practices</h3>

        <ul>
            <li>Use specific exceptions instead of catching everything.</li>
            <li>Create custom exceptions for business logic errors.</li>
            <li>Keep error messages clear and meaningful.</li>
            <li>Do not hide errors silently.</li>
            <li>Log errors for debugging in production.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Design errors as part of your application structure. A good error system makes applications easier to maintain.</p>
        </div>
    `
},

{
    id: 'concurrency-python',
    title: 'Concurrency in Python',
    duration: '35 min',
    content: `
        <h2>Concurrency in Python</h2>
        <p>Concurrency allows Python programs to handle multiple tasks at the same time, improving performance and responsiveness.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Concurrency is useful when programs need to perform multiple operations such as downloading files, processing data, or handling requests.</p>
        </div>

        <h3>Threading</h3>
        <p>Threading allows multiple threads to run inside the same process. It is commonly used for I/O-bound tasks.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> threading
<span class="syntax-keyword">import</span> time

<span class="syntax-keyword">def</span> <span class="syntax-function">task</span>(name):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Starting {name}"</span>)
    time.<span class="syntax-function">sleep</span>(<span class="syntax-number">2</span>)
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Finished {name}"</span>)

thread1 = threading.<span class="syntax-class">Thread</span>(target=task, args=(<span class="syntax-string">"Task 1"</span>,))
thread2 = threading.<span class="syntax-class">Thread</span>(target=task, args=(<span class="syntax-string">"Task 2"</span>,))

thread1.<span class="syntax-function">start</span>()
thread2.<span class="syntax-function">start</span>()

thread1.<span class="syntax-function">join</span>()
thread2.<span class="syntax-function">join</span>()</code></pre>

        <h3>Thread Pools</h3>
        <p>Thread pools manage multiple worker threads efficiently.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> concurrent.futures <span class="syntax-keyword">import</span> ThreadPoolExecutor

<span class="syntax-keyword">def</span> <span class="syntax-function">download</span>(file):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Downloading {file}"</span>)
    <span class="syntax-keyword">return</span> file

<span class="syntax-keyword">with</span> ThreadPoolExecutor(max_workers=<span class="syntax-number">3</span>) <span class="syntax-keyword">as</span> executor:
    results = executor.<span class="syntax-function">map</span>(download, [<span class="syntax-string">"a.txt"</span>, <span class="syntax-string">"b.txt"</span>, <span class="syntax-string">"c.txt"</span>])

<span class="syntax-keyword">for</span> result <span class="syntax-keyword">in</span> results:
    <span class="syntax-function">print</span>(result)</code></pre>

        <h3>Multiprocessing</h3>
        <p>Multiprocessing creates separate processes that can run on different CPU cores.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> multiprocessing <span class="syntax-keyword">import</span> Process

<span class="syntax-keyword">def</span> <span class="syntax-function">worker</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Process running"</span>)

process = <span class="syntax-class">Process</span>(target=worker)

process.<span class="syntax-function">start</span>()
process.<span class="syntax-function">join</span>()

<span class="syntax-function">print</span>(<span class="syntax-string">"Completed"</span>)</code></pre>

        <h3>Parallel Execution</h3>
        <p>Parallel execution runs multiple tasks simultaneously to reduce execution time.</p>

        <pre><code class="language-python"><span class="syntax-keyword">from</span> concurrent.futures <span class="syntax-keyword">import</span> ProcessPoolExecutor

<span class="syntax-keyword">def</span> <span class="syntax-function">square</span>(number):
    <span class="syntax-keyword">return</span> number * number

<span class="syntax-keyword">with</span> ProcessPoolExecutor() <span class="syntax-keyword">as</span> executor:
    results = executor.<span class="syntax-function">map</span>(square, [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>, <span class="syntax-number">4</span>])

<span class="syntax-function">print</span>(<span class="syntax-function">list</span>(results))</code></pre>

        <h3>Race Conditions</h3>
        <p>A race condition happens when multiple threads access shared data at the same time and produce unexpected results.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> threading

counter = <span class="syntax-number">0</span>

<span class="syntax-keyword">def</span> <span class="syntax-function">increase</span>():
    <span class="syntax-keyword">global</span> counter
    <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">100000</span>):
        counter += <span class="syntax-number">1</span>

thread1 = threading.<span class="syntax-class">Thread</span>(target=increase)
thread2 = threading.<span class="syntax-class">Thread</span>(target=increase)

thread1.<span class="syntax-function">start</span>()
thread2.<span class="syntax-function">start</span>()

thread1.<span class="syntax-function">join</span>()
thread2.<span class="syntax-function">join</span>()

<span class="syntax-function">print</span>(counter)</code></pre>

        <h3>Using Locks</h3>
        <p>Locks prevent multiple threads from modifying shared data at the same time.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> threading

counter = <span class="syntax-number">0</span>
lock = threading.<span class="syntax-class">Lock</span>()

<span class="syntax-keyword">def</span> <span class="syntax-function">increase</span>():
    <span class="syntax-keyword">global</span> counter
    <span class="syntax-keyword">with</span> lock:
        counter += <span class="syntax-number">1</span>

threads = []

<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">10</span>):
    thread = threading.<span class="syntax-class">Thread</span>(target=increase)
    threads.<span class="syntax-function">append</span>(thread)
    thread.<span class="syntax-function">start</span>()

<span class="syntax-keyword">for</span> thread <span class="syntax-keyword">in</span> threads:
    thread.<span class="syntax-function">join</span>()</code></pre>

        <h3>Threading vs Multiprocessing</h3>

        <ul>
            <li><strong>Threading:</strong> Best for I/O operations like files, APIs, and network tasks.</li>
            <li><strong>Multiprocessing:</strong> Best for CPU-heavy calculations.</li>
            <li><strong>Parallel execution:</strong> Runs independent tasks simultaneously.</li>
            <li><strong>Locks:</strong> Protect shared resources from race conditions.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use concurrency carefully. Shared data should be protected and tasks should be designed to run independently.</p>
        </div>
    `
},

{
    id: 'memory-performance-optimization',
    title: 'Memory Management and Performance Optimization',
    duration: '40 min',
    content: `
        <h2>Memory Management and Performance Optimization</h2>
        <p>Python manages memory automatically, but understanding how memory works helps you write faster and more efficient programs.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Performance optimization means improving speed and reducing memory usage without changing program behavior.</p>
        </div>

        <h3>Python Memory Model</h3>
        <p>Python stores objects in memory and variables hold references to those objects.</p>

        <pre><code class="language-python">name = <span class="syntax-string">"Python"</span>
number = <span class="syntax-number">100</span>

<span class="syntax-function">print</span>(<span class="syntax-function">id</span>(name))
<span class="syntax-function">print</span>(<span class="syntax-function">id</span>(number))</code></pre>

        <p>Every object in Python has:</p>
        <ul>
            <li>Identity - unique memory location</li>
            <li>Type - object type</li>
            <li>Value - stored data</li>
        </ul>

        <h3>Reference Counting</h3>
        <p>Python tracks how many references point to an object. When the count reaches zero, memory can be released.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sys

value = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>]

<span class="syntax-function">print</span>(sys.<span class="syntax-function">getrefcount</span>(value))

copy = value

<span class="syntax-function">print</span>(sys.<span class="syntax-function">getrefcount</span>(value))</code></pre>

        <h3>Garbage Collection</h3>
        <p>Python has a garbage collector that removes objects that are no longer needed, especially objects with circular references.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> gc

<span class="syntax-function">print</span>(gc.<span class="syntax-function">get_count</span>())

gc.<span class="syntax-function">collect</span>()

<span class="syntax-function">print</span>(<span class="syntax-string">"Garbage collected"</span>)</code></pre>

        <h3>Circular References</h3>
        <p>Circular references happen when objects reference each other and cannot be removed by simple reference counting.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Node</span>:
    <span class="syntax-keyword">pass</span>

a = <span class="syntax-class">Node</span>()
b = <span class="syntax-class">Node</span>()

a.child = b
b.parent = a</code></pre>

        <h3>Weak References</h3>
        <p>Weak references allow access to an object without increasing its reference count.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> weakref

<span class="syntax-keyword">class</span> <span class="syntax-class">User</span>:
    <span class="syntax-keyword">pass</span>

user = <span class="syntax-class">User</span>()

reference = weakref.<span class="syntax-function">ref</span>(user)

<span class="syntax-function">print</span>(reference())</code></pre>

        <h3>Profiling Code</h3>
        <p>Profiling helps identify slow parts of your program.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> cProfile

<span class="syntax-keyword">def</span> <span class="syntax-function">process</span>():
    total = <span class="syntax-number">0</span>
    <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">100000</span>):
        total += i
    <span class="syntax-keyword">return</span> total

cProfile.<span class="syntax-function">run</span>(<span class="syntax-string">"process()"</span>)</code></pre>

        <h3>Using timeit</h3>
        <p>The timeit module measures execution time for small code snippets.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> timeit

result = timeit.<span class="syntax-function">timeit</span>(<span class="syntax-string">"sum(range(1000))"</span>, number=<span class="syntax-number">1000</span>)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>Optimization Techniques</h3>
        <p>Common ways to improve Python performance:</p>

        <ul>
            <li>Use built-in functions instead of manual loops</li>
            <li>Avoid unnecessary object creation</li>
            <li>Use generators for large data</li>
            <li>Choose the correct data structure</li>
            <li>Cache repeated calculations</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-comment"># Less efficient</span>
numbers = []

<span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">1000</span>):
    numbers.<span class="syntax-function">append</span>(i * <span class="syntax-number">2</span>)

<span class="syntax-comment"># More efficient</span>
numbers = [i * <span class="syntax-number">2</span> <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">1000</span>)]</code></pre>

        <h3>Writing Efficient Code</h3>

        <pre><code class="language-python"><span class="syntax-comment"># Use set for fast lookup</span>
allowed = {<span class="syntax-string">"admin"</span>, <span class="syntax-string">"user"</span>, <span class="syntax-string">"guest"</span>}

role = <span class="syntax-string">"admin"</span>

<span class="syntax-keyword">if</span> role <span class="syntax-keyword">in</span> allowed:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Access granted"</span>)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Measure performance before optimizing. Use profiling tools to find real bottlenecks instead of guessing.</p>
        </div>
    `
},

{
    id: 'working-with-databases',
    title: 'Working With Databases',
    duration: '40 min',
    content: `
        <h2>Working With Databases</h2>
        <p>Databases allow programs to store, retrieve, and manage data permanently. Python can connect with databases using SQL queries, database libraries, and ORM frameworks.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>A database stores information in a structured way so applications can efficiently access and update data.</p>
        </div>

        <h3>SQL Basics</h3>
        <p>SQL (Structured Query Language) is used to communicate with relational databases.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"CREATE TABLE users (id INTEGER, name TEXT)"</span>)

connection.<span class="syntax-function">commit</span>()
connection.<span class="syntax-function">close</span>()</code></pre>

        <h3>Creating Records</h3>
        <p>INSERT statements add new data into database tables.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"INSERT INTO users VALUES (?, ?)"</span>, (<span class="syntax-number">1</span>, <span class="syntax-string">"Alice"</span>))

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Reading Data</h3>
        <p>SELECT queries retrieve information from tables.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"SELECT * FROM users"</span>)

users = cursor.<span class="syntax-function">fetchall</span>()

<span class="syntax-keyword">for</span> user <span class="syntax-keyword">in</span> users:
    <span class="syntax-function">print</span>(user)</code></pre>

        <h3>Updating and Deleting Data</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"UPDATE users SET name=? WHERE id=?"</span>, (<span class="syntax-string">"Bob"</span>, <span class="syntax-number">1</span>))

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"DELETE FROM users WHERE id=?"</span>, (<span class="syntax-number">1</span>,))

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Database Connections</h3>
        <p>A connection object allows Python to communicate with a database.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

<span class="syntax-keyword">try</span>:
    connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"app.db"</span>)
    <span class="syntax-function">print</span>(<span class="syntax-string">"Connected"</span>)
<span class="syntax-keyword">finally</span>:
    connection.<span class="syntax-function">close</span>()</code></pre>

        <h3>Using Parameterized Queries</h3>
        <p>Parameterized queries prevent SQL injection attacks.</p>

        <pre><code class="language-python"><span class="syntax-keyword">query</span> = <span class="syntax-string">"SELECT * FROM users WHERE name=?"</span>

cursor.<span class="syntax-function">execute</span>(query, (<span class="syntax-string">"Alice"</span>,))</code></pre>

        <h3>ORM Concepts</h3>
        <p>ORM (Object Relational Mapping) allows developers to work with databases using Python objects instead of writing SQL directly.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">User</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name):
        self.name = name

user = <span class="syntax-class">User</span>(<span class="syntax-string">"Alice"</span>)

<span class="syntax-function">print</span>(user.name)</code></pre>

        <h3>ORM Example</h3>
        <p>Popular Python ORM tools include frameworks that map classes to database tables.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Student</span>(Model):
    name = StringField()
    age = IntegerField()

student = <span class="syntax-class">Student</span>(name=<span class="syntax-string">"John"</span>, age=<span class="syntax-number">20</span>)
student.<span class="syntax-function">save</span>()</code></pre>

        <h3>Transactions</h3>
        <p>Transactions group multiple database operations into a single unit. Either all operations succeed or none are applied.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"bank.db"</span>)

<span class="syntax-keyword">try</span>:
    connection.<span class="syntax-function">execute</span>(<span class="syntax-string">"UPDATE accounts SET balance=balance-100"</span>)
    connection.<span class="syntax-function">execute</span>(<span class="syntax-string">"UPDATE accounts SET balance=balance+100"</span>)
    connection.<span class="syntax-function">commit</span>()
<span class="syntax-keyword">except</span>:
    connection.<span class="syntax-function">rollback</span>()</code></pre>

        <h3>Database Best Practices</h3>

        <ul>
            <li>Always close database connections</li>
            <li>Use parameterized queries</li>
            <li>Handle errors properly</li>
            <li>Use transactions for important operations</li>
            <li>Choose ORM when projects become complex</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Keep database logic separate from application logic to make your code easier to maintain.</p>
        </div>
    `
},

{
    id: 'security-logging-monitoring',
    title: 'Security Logging and Monitoring',
    duration: '40 min',
    content: `
        <h2>Security Logging and Monitoring</h2>
        <p>Secure coding practices help prevent vulnerabilities, while logging and monitoring help detect problems and understand application behavior.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Security is not only about preventing attacks. It also includes detecting, recording, and responding to issues.</p>
        </div>

        <h3>Secure Coding</h3>
        <p>Secure coding means writing software that protects data and prevents common security problems.</p>

        <ul>
            <li>Validate user input</li>
            <li>Protect sensitive information</li>
            <li>Avoid unsafe operations</li>
            <li>Handle errors safely</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">divide</span>(a, b):
    <span class="syntax-keyword">if</span> b == <span class="syntax-number">0</span>:
        <span class="syntax-keyword">raise</span> ValueError(<span class="syntax-string">"Invalid division"</span>)
    <span class="syntax-keyword">return</span> a / b</code></pre>

        <h3>Input Sanitization</h3>
        <p>User input should always be checked before processing.</p>

        <pre><code class="language-python">username = <span class="syntax-function">input</span>(<span class="syntax-string">"Username: "</span>)

username = username.<span class="syntax-function">strip</span>()

<span class="syntax-keyword">if</span> username.<span class="syntax-function">isalnum</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Valid username"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Invalid input"</span>)</code></pre>

        <h3>Preventing Unsafe Input</h3>
        <p>Never directly execute user-provided code or trust external data.</p>

        <pre><code class="language-python"><span class="syntax-comment"># Unsafe</span>
<span class="syntax-keyword">import</span> os

command = <span class="syntax-function">input</span>(<span class="syntax-string">"Command: "</span>)

<span class="syntax-comment"># Avoid executing unknown commands</span>
<span class="syntax-function">print</span>(command)</code></pre>

        <h3>Secrets Management</h3>
        <p>Passwords, API keys, and tokens should never be stored directly in source code.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> os

database_password = os.<span class="syntax-function">getenv</span>(<span class="syntax-string">"DB_PASSWORD"</span>)

<span class="syntax-function">print</span>(database_password)</code></pre>

        <h3>Environment Variables</h3>
        <p>Environment variables keep sensitive configuration outside application code.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> os

api_key = os.<span class="syntax-function">environ</span>.<span class="syntax-function">get</span>(<span class="syntax-string">"API_KEY"</span>)

<span class="syntax-keyword">if</span> api_key:
    <span class="syntax-function">print</span>(<span class="syntax-string">"API configured"</span>)</code></pre>

        <h3>Python Logging Module</h3>
        <p>The logging module records application events and helps debug issues.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> logging

logging.<span class="syntax-function">basicConfig</span>(level=logging.INFO)

logging.<span class="syntax-function">info</span>(<span class="syntax-string">"Application started"</span>)
logging.<span class="syntax-function">warning</span>(<span class="syntax-string">"Low memory"</span>)
logging.<span class="syntax-function">error</span>(<span class="syntax-string">"Something failed"</span>)</code></pre>

        <h3>Log Levels</h3>
        <p>Log levels describe the importance of messages.</p>

        <ul>
            <li>DEBUG - Detailed debugging information</li>
            <li>INFO - Normal application events</li>
            <li>WARNING - Potential problems</li>
            <li>ERROR - Failed operations</li>
            <li>CRITICAL - Serious failures</li>
        </ul>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> logging

logger = logging.<span class="syntax-function">getLogger</span>()

logger.<span class="syntax-function">debug</span>(<span class="syntax-string">"Debug message"</span>)
logger.<span class="syntax-function">info</span>(<span class="syntax-string">"User logged in"</span>)
logger.<span class="syntax-function">warning</span>(<span class="syntax-string">"Slow response"</span>)
logger.<span class="syntax-function">error</span>(<span class="syntax-string">"Database error"</span>)</code></pre>

        <h3>Logging to a File</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> logging

logging.<span class="syntax-function">basicConfig</span>(filename=<span class="syntax-string">"app.log"</span>, level=logging.INFO)

logging.<span class="syntax-function">info</span>(<span class="syntax-string">"Server started"</span>)</code></pre>

        <h3>Production Debugging</h3>
        <p>Production debugging focuses on finding issues without exposing sensitive information.</p>

        <pre><code class="language-python"><span class="syntax-keyword">try</span>:
    result = <span class="syntax-number">10</span> / <span class="syntax-number">0</span>
<span class="syntax-keyword">except</span> Exception <span class="syntax-keyword">as</span> error:
    logging.<span class="syntax-function">error</span>(<span class="syntax-string">"Operation failed"</span>, exc_info=<span class="syntax-keyword">True</span>)</code></pre>

        <h3>Monitoring Best Practices</h3>

        <ul>
            <li>Monitor application errors</li>
            <li>Track unusual activity</li>
            <li>Protect log files</li>
            <li>Remove sensitive data from logs</li>
            <li>Review logs regularly</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Good security combines prevention, monitoring, and fast response when problems occur.</p>
        </div>
    `
},

{
    id: 'advanced-python-projects',
    title: 'Advanced Python Projects',
    duration: '45 min',
    content: `
        <h2>Advanced Python Projects</h2>
        <p>Building real-world projects helps combine Python concepts into practical applications. This lesson covers designing CLI tools, API clients, automation scripts, and production-ready applications.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Advanced projects focus on writing reusable, maintainable, and reliable software instead of just solving small problems.</p>
        </div>

        <h3>Building CLI Tools</h3>
        <p>Command Line Interface tools allow users to interact with programs through the terminal.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> argparse

parser = argparse.<span class="syntax-function">ArgumentParser</span>(description=<span class="syntax-string">"Simple CLI Tool"</span>)

parser.<span class="syntax-function">add_argument</span>(<span class="syntax-string">"--name"</span>)

args = parser.<span class="syntax-function">parse_args</span>()

<span class="syntax-function">print</span>(<span class="syntax-string">f"Hello {args.name}"</span>)</code></pre>

        <h3>CLI Arguments</h3>
        <p>Arguments allow users to customize program behavior.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> argparse

parser = argparse.<span class="syntax-function">ArgumentParser</span>()

parser.<span class="syntax-function">add_argument</span>(<span class="syntax-string">"--file"</span>, required=<span class="syntax-keyword">True</span>)
parser.<span class="syntax-function">add_argument</span>(<span class="syntax-string">"--count"</span>, type=<span class="syntax-function">int</span>)

options = parser.<span class="syntax-function">parse_args</span>()

<span class="syntax-function">print</span>(options.file)</code></pre>

        <h3>Building API Clients</h3>
        <p>API clients allow Python applications to communicate with external services.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/users"</span>)

data = response.<span class="syntax-function">json</span>()

<span class="syntax-function">print</span>(data)</code></pre>

        <h3>Handling API Responses</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/data"</span>)

<span class="syntax-keyword">if</span> response.status_code == <span class="syntax-number">200</span>:
    result = response.<span class="syntax-function">json</span>()
    <span class="syntax-function">print</span>(result)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Request failed"</span>)</code></pre>

        <h3>Creating Reusable API Classes</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

<span class="syntax-keyword">class</span> <span class="syntax-class">APIClient</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">get</span>(self, url):
        response = requests.<span class="syntax-function">get</span>(url)
        <span class="syntax-keyword">return</span> response.<span class="syntax-function">json</span>()

client = <span class="syntax-class">APIClient</span>()

data = client.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com"</span>)</code></pre>

        <h3>Automation Scripts</h3>
        <p>Automation scripts reduce repetitive tasks by allowing Python to perform operations automatically.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> os

folder = <span class="syntax-string">"files"</span>

<span class="syntax-keyword">for</span> file <span class="syntax-keyword">in</span> os.<span class="syntax-function">listdir</span>(folder):
    <span class="syntax-function">print</span>(<span class="syntax-string">f"Found: {file}"</span>)</code></pre>

        <h3>File Automation</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> shutil

source = <span class="syntax-string">"report.txt"</span>
destination = <span class="syntax-string">"backup/report.txt"</span>

shutil.<span class="syntax-function">copy</span>(source, destination)

<span class="syntax-function">print</span>(<span class="syntax-string">"Backup completed"</span>)</code></pre>

        <h3>Scheduling Tasks</h3>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> time

<span class="syntax-keyword">while</span> <span class="syntax-keyword">True</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Running task"</span>)
    time.<span class="syntax-function">sleep</span>(<span class="syntax-number">60</span>)</code></pre>

        <h3>Production-Ready Applications</h3>
        <p>Production applications require structure, testing, configuration, and error handling.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> logging

logging.<span class="syntax-function">basicConfig</span>(level=logging.INFO)

<span class="syntax-keyword">def</span> <span class="syntax-function">start_app</span>():
    logging.<span class="syntax-function">info</span>(<span class="syntax-string">"Application started"</span>)

start_app()</code></pre>

        <h3>Project Structure</h3>

        <pre><code class="language-python">project/
    app/
        main.py
        config.py
        services.py
    tests/
    requirements.txt</code></pre>

        <h3>Important Production Practices</h3>

        <ul>
            <li>Use version control</li>
            <li>Write tests</li>
            <li>Handle errors properly</li>
            <li>Store secrets safely</li>
            <li>Use logging and monitoring</li>
            <li>Keep code modular</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>A strong Python developer builds projects that are reliable, readable, secure, and easy to maintain.</p>
        </div>
    `
}

];
