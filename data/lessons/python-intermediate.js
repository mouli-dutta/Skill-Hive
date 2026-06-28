const PythonIntermediateLessons = [
   {
    id: 'oop-basics',
    title: 'Object-Oriented Programming',
    duration: '20 min',
    content: `
        <h2>Object-Oriented Programming (OOP)</h2>
        <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code into reusable objects. Objects combine data (attributes) and behavior (methods) into a single unit.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>A class is a blueprint, while an object is an instance created from that blueprint.</p>
        </div>

        <h3>Creating Your First Class</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Car</span>:
    <span class="syntax-keyword">pass</span>

car1 = <span class="syntax-class">Car</span>()

<span class="syntax-function">print</span>(car1)</code></pre>

        <h3>The __init__ Method</h3>

        <p>The <code>__init__()</code> method is called automatically when an object is created.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Car</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, brand, model):
        self.brand = brand
        self.model = model

car = <span class="syntax-class">Car</span>(<span class="syntax-string">"Toyota"</span>, <span class="syntax-string">"Corolla"</span>)

<span class="syntax-function">print</span>(car.brand)
<span class="syntax-function">print</span>(car.model)</code></pre>

        <h3>Instance Attributes</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Student</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name, age):
        self.name = name
        self.age = age

student = <span class="syntax-class">Student</span>(<span class="syntax-string">"Alice"</span>, <span class="syntax-number">20</span>)

<span class="syntax-function">print</span>(student.name)
<span class="syntax-function">print</span>(student.age)</code></pre>

        <h3>Adding Methods</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Dog</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name):
        self.name = name

    <span class="syntax-keyword">def</span> <span class="syntax-function">bark</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">f"{self.name} says Woof!"</span>)

dog = <span class="syntax-class">Dog</span>(<span class="syntax-string">"Buddy"</span>)

dog.<span class="syntax-function">bark</span>()</code></pre>

        <h3>Creating Multiple Objects</h3>

        <pre><code class="language-python">car1 = <span class="syntax-class">Car</span>(<span class="syntax-string">"Toyota"</span>, <span class="syntax-string">"Corolla"</span>)
car2 = <span class="syntax-class">Car</span>(<span class="syntax-string">"Honda"</span>, <span class="syntax-string">"Civic"</span>)

<span class="syntax-function">print</span>(car1.brand)
<span class="syntax-function">print</span>(car2.brand)</code></pre>

        <h3>Modifying Object Attributes</h3>

        <pre><code class="language-python">student = <span class="syntax-class">Student</span>(<span class="syntax-string">"Bob"</span>, <span class="syntax-number">18</span>)

student.age = <span class="syntax-number">19</span>

<span class="syntax-function">print</span>(student.age)</code></pre>

        <h3>Class Attributes</h3>

        <p>Class attributes are shared by all objects of a class.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Employee</span>:
    company = <span class="syntax-string">"Tech Corp"</span>

employee1 = <span class="syntax-class">Employee</span>()
employee2 = <span class="syntax-class">Employee</span>()

<span class="syntax-function">print</span>(employee1.company)
<span class="syntax-function">print</span>(employee2.company)</code></pre>

        <h3>The self Keyword</h3>

        <p><code>self</code> refers to the current object and is used to access its attributes and methods.</p>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Book</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, title):
        self.title = title

    <span class="syntax-keyword">def</span> <span class="syntax-function">display</span>(self):
        <span class="syntax-function">print</span>(self.title)

book = <span class="syntax-class">Book</span>(<span class="syntax-string">"Python Basics"</span>)

book.<span class="syntax-function">display</span>()</code></pre>

        <h3>Real-World Example</h3>

        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">BankAccount</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, owner, balance):
        self.owner = owner
        self.balance = balance

    <span class="syntax-keyword">def</span> <span class="syntax-function">deposit</span>(self, amount):
        self.balance += amount

account = <span class="syntax-class">BankAccount</span>(<span class="syntax-string">"Alice"</span>, <span class="syntax-number">1000</span>)

account.<span class="syntax-function">deposit</span>(<span class="syntax-number">500</span>)

<span class="syntax-function">print</span>(account.balance)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Create classes to represent real-world objects. Keep related data and functions together inside the same class.</p>
        </div>
    `
},

{
    id: 'magic-methods',
    title: 'Magic Methods',
    duration: '20 min',
    content: `
        <h2>Magic Methods in Python</h2>
        <p>Magic methods (also called dunder methods) are special methods whose names begin and end with double underscores. They allow your objects to work naturally with Python's built-in operators and functions.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 What are Dunder Methods?</div>
            <p>Methods like <code>__init__</code>, <code>__str__</code>, and <code>__len__</code> are automatically called by Python in specific situations.</p>
        </div>

        <h3>The __init__ Method</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Book</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, title):
        self.title = title

book = <span class="syntax-class">Book</span>(<span class="syntax-string">"Python Basics"</span>)

<span class="syntax-function">print</span>(book.title)</code></pre>

        <h3>The __str__ Method</h3>
        <p>Defines how an object is displayed when printed.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Book</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, title):
        self.title = title

    <span class="syntax-keyword">def</span> <span class="syntax-function">__str__</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-string">f"Book: {self.title}"</span>

book = <span class="syntax-class">Book</span>(<span class="syntax-string">"Python Basics"</span>)

<span class="syntax-function">print</span>(book)</code></pre>

        <h3>The __repr__ Method</h3>
        <p>Returns a detailed representation of an object, mainly used for debugging.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Book</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__repr__</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-string">"Book('Python Basics')"</span>

book = <span class="syntax-class">Book</span>()

<span class="syntax-function">print</span>(book)</code></pre>

        <h3>The __len__ Method</h3>
        <p>Allows an object to work with the <code>len()</code> function.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Playlist</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self):
        self.songs = [<span class="syntax-string">"Song A"</span>, <span class="syntax-string">"Song B"</span>, <span class="syntax-string">"Song C"</span>]

    <span class="syntax-keyword">def</span> <span class="syntax-function">__len__</span>(self):
        <span class="syntax-keyword">return</span> <span class="syntax-function">len</span>(self.songs)

playlist = <span class="syntax-class">Playlist</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">len</span>(playlist))</code></pre>

        <h3>Operator Overloading</h3>
        <p>Magic methods let you define how operators work with your objects.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Point</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, x):
        self.x = x

    <span class="syntax-keyword">def</span> <span class="syntax-function">__add__</span>(self, other):
        <span class="syntax-keyword">return</span> self.x + other.x

p1 = <span class="syntax-class">Point</span>(<span class="syntax-number">5</span>)
p2 = <span class="syntax-class">Point</span>(<span class="syntax-number">10</span>)

<span class="syntax-function">print</span>(p1 + p2)</code></pre>

        <h3>The __eq__ Method</h3>
        <p>Defines how two objects are compared using <code>==</code>.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">User</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name):
        self.name = name

    <span class="syntax-keyword">def</span> <span class="syntax-function">__eq__</span>(self, other):
        <span class="syntax-keyword">return</span> self.name == other.name

user1 = <span class="syntax-class">User</span>(<span class="syntax-string">"Alice"</span>)
user2 = <span class="syntax-class">User</span>(<span class="syntax-string">"Alice"</span>)

<span class="syntax-function">print</span>(user1 == user2)</code></pre>

        <h3>The __call__ Method</h3>
        <p>Makes an object behave like a function.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Greeter</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__call__</span>(self, name):
        <span class="syntax-function">print</span>(<span class="syntax-string">f"Hello, {name}"</span>)

greet = <span class="syntax-class">Greeter</span>()

greet(<span class="syntax-string">"Alice"</span>)</code></pre>

        <h3>Common Magic Methods</h3>
        <table>
            <tr><th>Method</th><th>Purpose</th></tr>
            <tr><td>__init__</td><td>Initialize an object</td></tr>
            <tr><td>__str__</td><td>Readable string representation</td></tr>
            <tr><td>__repr__</td><td>Developer representation</td></tr>
            <tr><td>__len__</td><td>Support len()</td></tr>
            <tr><td>__add__</td><td>Support + operator</td></tr>
            <tr><td>__eq__</td><td>Support == comparison</td></tr>
            <tr><td>__call__</td><td>Make object callable</td></tr>
        </table>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Only implement magic methods when they make your objects behave naturally. Overusing them can make code confusing.</p>
        </div>
    `
},

{
    id: 'inheritance-polymorphism',
    title: 'Inheritance and Polymorphism',
    duration: '20 min',
    content: `
        <h2>Inheritance and Polymorphism</h2>
        <p>Inheritance allows one class to reuse the properties and methods of another class. Polymorphism lets different objects respond to the same method call in their own way.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Key Concept</div>
            <p>Inheritance promotes code reuse, while polymorphism makes your code flexible and easier to extend.</p>
        </div>

        <h3>Creating a Parent Class</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Animal</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">speak</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Animal makes a sound"</span>)</code></pre>

        <h3>Creating a Child Class</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Dog</span>(<span class="syntax-class">Animal</span>):
    <span class="syntax-keyword">pass</span>

dog = <span class="syntax-class">Dog</span>()

dog.<span class="syntax-function">speak</span>()</code></pre>

        <h3>Overriding Methods</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Dog</span>(<span class="syntax-class">Animal</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">speak</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Woof!"</span>)

dog = <span class="syntax-class">Dog</span>()

dog.<span class="syntax-function">speak</span>()</code></pre>

        <h3>Using super()</h3>
        <p>The <code>super()</code> function calls methods from the parent class.</p>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Animal</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name):
        self.name = name

<span class="syntax-keyword">class</span> <span class="syntax-class">Dog</span>(<span class="syntax-class">Animal</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name):
        <span class="syntax-function">super</span>().<span class="syntax-function">__init__</span>(name)

dog = <span class="syntax-class">Dog</span>(<span class="syntax-string">"Buddy"</span>)

<span class="syntax-function">print</span>(dog.name)</code></pre>

        <h3>Multiple Child Classes</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Cat</span>(<span class="syntax-class">Animal</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">speak</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Meow"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Cow</span>(<span class="syntax-class">Animal</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">speak</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Moo"</span>)</code></pre>

        <h3>Polymorphism</h3>
        <p>Different objects can use the same method name but produce different results.</p>
        <pre><code class="language-python">animals = [<span class="syntax-class">Dog</span>(), <span class="syntax-class">Cat</span>(), <span class="syntax-class">Cow</span>()]

<span class="syntax-keyword">for</span> animal <span class="syntax-keyword">in</span> animals:
    animal.<span class="syntax-function">speak</span>()</code></pre>

        <h3>Checking Inheritance</h3>
        <pre><code class="language-python">dog = <span class="syntax-class">Dog</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">isinstance</span>(dog, <span class="syntax-class">Dog</span>))
<span class="syntax-function">print</span>(<span class="syntax-function">isinstance</span>(dog, <span class="syntax-class">Animal</span>))</code></pre>

        <h3>Method Resolution Order (MRO)</h3>
        <p>Python uses the Method Resolution Order (MRO) to determine which method to call when inheritance becomes more complex.</p>
        <pre><code class="language-python"><span class="syntax-function">print</span>(<span class="syntax-class">Dog</span>.__mro__)</code></pre>

        <h3>Real-World Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Employee</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">work</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Employee is working"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Developer</span>(<span class="syntax-class">Employee</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">work</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Writing code"</span>)

<span class="syntax-keyword">class</span> <span class="syntax-class">Designer</span>(<span class="syntax-class">Employee</span>):
    <span class="syntax-keyword">def</span> <span class="syntax-function">work</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Creating designs"</span>)

employees = [<span class="syntax-class">Developer</span>(), <span class="syntax-class">Designer</span>()]

<span class="syntax-keyword">for</span> employee <span class="syntax-keyword">in</span> employees:
    employee.<span class="syntax-function">work</span>()</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use inheritance only when there is a true "is-a" relationship between classes. Override methods thoughtfully and use <code>super()</code> to reuse parent class functionality when appropriate.</p>
        </div>
    `
},

{
    id: 'decorators',
    title: 'Decorators',
    duration: '20 min',
    content: `
        <h2>Decorators in Python</h2>
        <p>Decorators are functions that modify or extend the behavior of other functions without changing their original code. They are commonly used for logging, authentication, timing, validation, and caching.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 What is a Decorator?</div>
            <p>A decorator takes a function as input, adds extra functionality, and returns a new function.</p>
        </div>

        <h3>Functions are Objects</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello!"</span>)

message = greet

message()</code></pre>

        <h3>Creating a Simple Decorator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">decorator</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">"Before function"</span>)
        func()
        <span class="syntax-function">print</span>(<span class="syntax-string">"After function"</span>)
    <span class="syntax-keyword">return</span> wrapper</code></pre>

        <h3>Applying the Decorator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">say_hello</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello World"</span>)

say_hello = decorator(say_hello)

say_hello()</code></pre>

        <h3>Using the @ Syntax</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">decorator</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">"Running..."</span>)
        func()
    <span class="syntax-keyword">return</span> wrapper

@decorator
<span class="syntax-keyword">def</span> <span class="syntax-function">welcome</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Welcome!"</span>)

welcome()</code></pre>

        <h3>Decorators with Arguments</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">decorator</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>(*args, **kwargs):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Function called"</span>)
        <span class="syntax-keyword">return</span> func(*args, **kwargs)
    <span class="syntax-keyword">return</span> wrapper

@decorator
<span class="syntax-keyword">def</span> <span class="syntax-function">add</span>(a, b):
    <span class="syntax-keyword">return</span> a + b

<span class="syntax-function">print</span>(add(<span class="syntax-number">5</span>, <span class="syntax-number">3</span>))</code></pre>

        <h3>Timing a Function</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> time

<span class="syntax-keyword">def</span> <span class="syntax-function">timer</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>(*args, **kwargs):
        start = time.<span class="syntax-function">time</span>()
        result = func(*args, **kwargs)
        <span class="syntax-function">print</span>(time.<span class="syntax-function">time</span>() - start)
        <span class="syntax-keyword">return</span> result
    <span class="syntax-keyword">return</span> wrapper</code></pre>

        <h3>Preserving Function Metadata</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> functools <span class="syntax-keyword">import</span> wraps

<span class="syntax-keyword">def</span> <span class="syntax-function">decorator</span>(func):
    @wraps(func)
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>(*args, **kwargs):
        <span class="syntax-keyword">return</span> func(*args, **kwargs)
    <span class="syntax-keyword">return</span> wrapper</code></pre>

        <h3>Real-World Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">login_required</span>(func):
    <span class="syntax-keyword">def</span> <span class="syntax-function">wrapper</span>():
        <span class="syntax-function">print</span>(<span class="syntax-string">"Checking user..."</span>)
        func()
    <span class="syntax-keyword">return</span> wrapper

@login_required
<span class="syntax-keyword">def</span> <span class="syntax-function">dashboard</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Dashboard opened"</span>)

dashboard()</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Decorators are ideal for adding reusable functionality such as logging, authentication, caching, or validation. Always use <code>functools.wraps</code> when writing custom decorators to preserve the original function's metadata.</p>
        </div>
    `
},

{
    id: 'iterators',
    title: 'Iterators',
    duration: '20 min',
    content: `
        <h2>Iterators in Python</h2>
        <p>An iterator is an object that allows you to traverse through a collection one element at a time. Lists, tuples, strings, dictionaries, and many other objects in Python are iterable.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Iterator vs Iterable</div>
            <p>An <strong>iterable</strong> is any object you can loop over, while an <strong>iterator</strong> keeps track of the current position and returns one item at a time.</p>
        </div>

        <h3>Creating an Iterator</h3>
        <pre><code class="language-python">numbers = [<span class="syntax-number">10</span>, <span class="syntax-number">20</span>, <span class="syntax-number">30</span>]

iterator = <span class="syntax-function">iter</span>(numbers)

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(iterator))</code></pre>

        <h3>Using next()</h3>
        <pre><code class="language-python">text = <span class="syntax-string">"Python"</span>

it = <span class="syntax-function">iter</span>(text)

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(it))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(it))</code></pre>

        <h3>StopIteration Exception</h3>
        <pre><code class="language-python">numbers = [<span class="syntax-number">1</span>]

it = <span class="syntax-function">iter</span>(numbers)

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(it))

<span class="syntax-keyword">try</span>:
    <span class="syntax-function">print</span>(<span class="syntax-function">next</span>(it))
<span class="syntax-keyword">except</span> <span class="syntax-class">StopIteration</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"No more items"</span>)</code></pre>

        <h3>Iterating with a for Loop</h3>
        <pre><code class="language-python">colors = [<span class="syntax-string">"Red"</span>, <span class="syntax-string">"Green"</span>, <span class="syntax-string">"Blue"</span>]

<span class="syntax-keyword">for</span> color <span class="syntax-keyword">in</span> colors:
    <span class="syntax-function">print</span>(color)</code></pre>

        <h3>Creating a Custom Iterator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Counter</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, limit):
        self.current = <span class="syntax-number">1</span>
        self.limit = limit
    <span class="syntax-keyword">def</span> <span class="syntax-function">__iter__</span>(self):
        <span class="syntax-keyword">return</span> self
    <span class="syntax-keyword">def</span> <span class="syntax-function">__next__</span>(self):
        <span class="syntax-keyword">if</span> self.current > self.limit:
            <span class="syntax-keyword">raise</span> <span class="syntax-class">StopIteration</span>
        value = self.current
        self.current += <span class="syntax-number">1</span>
        <span class="syntax-keyword">return</span> value</code></pre>

        <h3>Using the Custom Iterator</h3>
        <pre><code class="language-python">counter = <span class="syntax-class">Counter</span>(<span class="syntax-number">5</span>)

<span class="syntax-keyword">for</span> number <span class="syntax-keyword">in</span> counter:
    <span class="syntax-function">print</span>(number)</code></pre>

        <h3>Checking if an Object is Iterable</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> collections.abc <span class="syntax-keyword">import</span> Iterable

numbers = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>]

<span class="syntax-function">print</span>(<span class="syntax-function">isinstance</span>(numbers, Iterable))</code></pre>

        <h3>Real-World Example</h3>
        <pre><code class="language-python">files = [<span class="syntax-string">"report.pdf"</span>, <span class="syntax-string">"notes.txt"</span>, <span class="syntax-string">"image.png"</span>]

file_iterator = <span class="syntax-function">iter</span>(files)

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(file_iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(file_iterator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(file_iterator))</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use <code>for</code> loops whenever possible, since they automatically handle iterators and the <code>StopIteration</code> exception. Create custom iterators only when you need fine-grained control over iteration.</p>
        </div>
    `
},

{
    id: 'generators',
    title: 'Generators',
    duration: '20 min',
    content: `
        <h2>Generators in Python</h2>
        <p>Generators are a special type of iterator that produce values one at a time instead of storing them all in memory. They are useful when working with large datasets or infinite sequences.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Why Use Generators?</div>
            <p>Generators are memory-efficient because they generate values only when needed using the <code>yield</code> keyword.</p>
        </div>

        <h3>Creating a Generator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">count</span>():
    <span class="syntax-keyword">yield</span> <span class="syntax-number">1</span>
    <span class="syntax-keyword">yield</span> <span class="syntax-number">2</span>
    <span class="syntax-keyword">yield</span> <span class="syntax-number">3</span>

generator = <span class="syntax-function">count</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(generator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(generator))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(generator))</code></pre>

        <h3>Using a Generator with a Loop</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">numbers</span>():
    <span class="syntax-keyword">for</span> i <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>):
        <span class="syntax-keyword">yield</span> i

<span class="syntax-keyword">for</span> number <span class="syntax-keyword">in</span> <span class="syntax-function">numbers</span>():
    <span class="syntax-function">print</span>(number)</code></pre>

        <h3>Generator Expression</h3>
        <pre><code class="language-python">squares = (x ** <span class="syntax-number">2</span> <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>))

<span class="syntax-keyword">for</span> value <span class="syntax-keyword">in</span> squares:
    <span class="syntax-function">print</span>(value)</code></pre>

        <h3>Infinite Generator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">infinite_count</span>():
    number = <span class="syntax-number">1</span>
    <span class="syntax-keyword">while</span> <span class="syntax-keyword">True</span>:
        <span class="syntax-keyword">yield</span> number
        number += <span class="syntax-number">1</span>

counter = <span class="syntax-function">infinite_count</span>()

<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(counter))
<span class="syntax-function">print</span>(<span class="syntax-function">next</span>(counter))</code></pre>

        <h3>Comparing List vs Generator</h3>
        <pre><code class="language-python">list_data = [x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>)]

generator_data = (x <span class="syntax-keyword">for</span> x <span class="syntax-keyword">in</span> <span class="syntax-function">range</span>(<span class="syntax-number">5</span>))

<span class="syntax-function">print</span>(list_data)
<span class="syntax-function">print</span>(generator_data)</code></pre>

        <h3>Sending Values to a Generator</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">echo</span>():
    value = <span class="syntax-keyword">yield</span>
    <span class="syntax-function">print</span>(value)

g = <span class="syntax-function">echo</span>()

<span class="syntax-function">next</span>(g)

g.<span class="syntax-function">send</span>(<span class="syntax-string">"Hello"</span>)</code></pre>

        <h3>Real-World Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">read_lines</span>(filename):
    <span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(filename) <span class="syntax-keyword">as</span> file:
        <span class="syntax-keyword">for</span> line <span class="syntax-keyword">in</span> file:
            <span class="syntax-keyword">yield</span> line.<span class="syntax-function">strip</span>()</code></pre>

        <h3>Generator Benefits</h3>
        <ul>
            <li>Uses less memory than lists.</li>
            <li>Produces values lazily (only when requested).</li>
            <li>Works well with large files and data streams.</li>
            <li>Can generate infinite sequences.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use generators when processing large amounts of data or when values are needed one at a time. Use lists only when you need random access or multiple iterations over the same data.</p>
        </div>
    `
},

{
    id: 'context-managers',
    title: 'Context Managers',
    duration: '20 min',
    content: `
        <h2>Context Managers in Python</h2>
        <p>Context managers help you manage resources such as files, database connections, and network sockets. They automatically perform setup and cleanup operations, making your code safer and cleaner.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 What is a Context Manager?</div>
            <p>A context manager is an object that defines what happens when entering and exiting a <code>with</code> block.</p>
        </div>

        <h3>Using the with Statement</h3>
        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(<span class="syntax-string">"notes.txt"</span>, <span class="syntax-string">"r"</span>) <span class="syntax-keyword">as</span> file:
    content = file.<span class="syntax-function">read</span>()

<span class="syntax-function">print</span>(content)</code></pre>

        <h3>Without a Context Manager</h3>
        <pre><code class="language-python">file = <span class="syntax-function">open</span>(<span class="syntax-string">"notes.txt"</span>, <span class="syntax-string">"r"</span>)

content = file.<span class="syntax-function">read</span>()

file.<span class="syntax-function">close</span>()</code></pre>

        <h3>Creating a Custom Context Manager</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Database</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Connected"</span>)
        <span class="syntax-keyword">return</span> self
    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, exc_type, exc_value, traceback):
        <span class="syntax-function">print</span>(<span class="syntax-string">"Disconnected"</span>)</code></pre>

        <h3>Using a Custom Context Manager</h3>
        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-class">Database</span>() <span class="syntax-keyword">as</span> db:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Working with database"</span>)</code></pre>

        <h3>Handling Exceptions</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Example</span>:
    <span class="syntax-keyword">def</span> <span class="syntax-function">__enter__</span>(self):
        <span class="syntax-keyword">return</span> self
    <span class="syntax-keyword">def</span> <span class="syntax-function">__exit__</span>(self, exc_type, exc_value, traceback):
        <span class="syntax-function">print</span>(exc_type)</code></pre>

        <h3>Using contextlib</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> contextlib <span class="syntax-keyword">import</span> contextmanager

@contextmanager
<span class="syntax-keyword">def</span> <span class="syntax-function">timer</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Start"</span>)
    <span class="syntax-keyword">yield</span>
    <span class="syntax-function">print</span>(<span class="syntax-string">"End"</span>)</code></pre>

        <h3>Using the Decorated Context Manager</h3>
        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-function">timer</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Executing code..."</span>)</code></pre>

        <h3>Common Use Cases</h3>
        <ul>
            <li>Opening and closing files.</li>
            <li>Managing database connections.</li>
            <li>Acquiring and releasing locks.</li>
            <li>Managing network connections.</li>
            <li>Temporary configuration changes.</li>
        </ul>

        <h3>Real-World Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">with</span> <span class="syntax-function">open</span>(<span class="syntax-string">"log.txt"</span>, <span class="syntax-string">"a"</span>) <span class="syntax-keyword">as</span> file:
    file.<span class="syntax-function">write</span>(<span class="syntax-string">"Application started\\n"</span>)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Always use the <code>with</code> statement when working with files or other resources. It automatically handles cleanup, even if an exception occurs, making your code more reliable.</p>
        </div>
    `
},

{
    id: 'regular-expressions',
    title: 'Regular Expressions',
    duration: '20 min',
    content: `
        <h2>Regular Expressions (Regex)</h2>
        <p>Regular expressions (Regex) are powerful patterns used to search, validate, extract, and replace text. Python provides the built-in <code>re</code> module for working with regular expressions.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 What Can Regex Do?</div>
            <p>Regex can validate email addresses, find phone numbers, extract data from text, replace words, and split strings based on patterns.</p>
        </div>

        <h3>Importing the re Module</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"Python is awesome"</span>

match = re.<span class="syntax-function">search</span>(<span class="syntax-string">"Python"</span>, text)

<span class="syntax-function">print</span>(match)</code></pre>

        <h3>Finding All Matches</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"cat bat rat"</span>

words = re.<span class="syntax-function">findall</span>(<span class="syntax-string">".at"</span>, text)

<span class="syntax-function">print</span>(words)</code></pre>

        <h3>Matching Digits</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"Order 12345"</span>

number = re.<span class="syntax-function">search</span>(<span class="syntax-string">"\\d+"</span>, text)

<span class="syntax-function">print</span>(number.<span class="syntax-function">group</span>())</code></pre>

        <h3>Validating an Email</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

email = <span class="syntax-string">"user@example.com"</span>

pattern = <span class="syntax-string">"^[\\w.-]+@[\\w.-]+\\.\\w+$"</span>

<span class="syntax-function">print</span>(re.<span class="syntax-function">match</span>(pattern, email) <span class="syntax-keyword">is not</span> <span class="syntax-keyword">None</span>)</code></pre>

        <h3>Replacing Text</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"I like Java"</span>

new_text = re.<span class="syntax-function">sub</span>(<span class="syntax-string">"Java"</span>, <span class="syntax-string">"Python"</span>, text)

<span class="syntax-function">print</span>(new_text)</code></pre>

        <h3>Splitting a String</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"apple,banana;orange grape"</span>

items = re.<span class="syntax-function">split</span>(<span class="syntax-string">"[,; ]+"</span>, text)

<span class="syntax-function">print</span>(items)</code></pre>

        <h3>Useful Regex Patterns</h3>
        <ul>
            <li><code>.</code> - Any character except newline</li>
            <li><code>\\d</code> - Any digit (0-9)</li>
            <li><code>\\w</code> - Letter, digit, or underscore</li>
            <li><code>\\s</code> - Whitespace character</li>
            <li><code>+</code> - One or more occurrences</li>
            <li><code>*</code> - Zero or more occurrences</li>
            <li><code>^</code> - Start of string</li>
            <li><code>$</code> - End of string</li>
        </ul>

        <h3>Extracting Phone Numbers</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

text = <span class="syntax-string">"Call me at 9876543210."</span>

phone = re.<span class="syntax-function">findall</span>(<span class="syntax-string">"\\d{10}"</span>, text)

<span class="syntax-function">print</span>(phone)</code></pre>

        <h3>Compiling a Pattern</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> re

pattern = re.<span class="syntax-function">compile</span>(<span class="syntax-string">"Python"</span>)

<span class="syntax-function">print</span>(pattern.<span class="syntax-function">search</span>(<span class="syntax-string">"Learning Python"</span>))</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Keep regular expressions simple and readable. For complex patterns, use <code>re.compile()</code> and test them carefully to avoid unexpected matches.</p>
        </div>
    `
},

{
    id: 'date-time',
    title: 'Date and Time',
    duration: '20 min',
    content: `
        <h2>Date and Time in Python</h2>
        <p>Python provides the built-in <code>datetime</code> module to work with dates, times, and time intervals. It is useful for scheduling, timestamps, age calculations, and handling time-based data.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 datetime Module</div>
            <p>The <code>datetime</code> module provides classes for working with dates and times.</p>
        </div>

        <h3>Getting Current Date and Time</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

now = datetime.<span class="syntax-function">now</span>()

<span class="syntax-function">print</span>(now)</code></pre>

        <h3>Getting Current Date</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> date

today = date.<span class="syntax-function">today</span>()

<span class="syntax-function">print</span>(today)</code></pre>

        <h3>Creating Custom Dates</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

birthday = datetime(<span class="syntax-number">2000</span>, <span class="syntax-number">5</span>, <span class="syntax-number">20</span>)

<span class="syntax-function">print</span>(birthday)</code></pre>

        <h3>Accessing Date Components</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

now = datetime.<span class="syntax-function">now</span>()

<span class="syntax-function">print</span>(now.year)
<span class="syntax-function">print</span>(now.month)
<span class="syntax-function">print</span>(now.day)
<span class="syntax-function">print</span>(now.hour)</code></pre>

        <h3>Formatting Dates</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

now = datetime.<span class="syntax-function">now</span>()

formatted = now.<span class="syntax-function">strftime</span>(<span class="syntax-string">"%d-%m-%Y"</span>)

<span class="syntax-function">print</span>(formatted)</code></pre>

        <h3>Common Date Formats</h3>
        <ul>
            <li><code>%d</code> - Day of month</li>
            <li><code>%m</code> - Month</li>
            <li><code>%Y</code> - Full year</li>
            <li><code>%H</code> - Hour (24 hour)</li>
            <li><code>%M</code> - Minutes</li>
            <li><code>%S</code> - Seconds</li>
        </ul>

        <h3>Converting String to Date</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

date_string = <span class="syntax-string">"2025-01-15"</span>

converted = datetime.<span class="syntax-function">strptime</span>(date_string, <span class="syntax-string">"%Y-%m-%d"</span>)

<span class="syntax-function">print</span>(converted)</code></pre>

        <h3>Date Difference</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> date

start = date(<span class="syntax-number">2025</span>, <span class="syntax-number">1</span>, <span class="syntax-number">1</span>)
end = date(<span class="syntax-number">2025</span>, <span class="syntax-number">1</span>, <span class="syntax-number">20</span>)

difference = end - start

<span class="syntax-function">print</span>(difference.days)</code></pre>

        <h3>Using timedelta</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime, timedelta

today = datetime.<span class="syntax-function">now</span>()

future = today + timedelta(days=<span class="syntax-number">7</span>)

<span class="syntax-function">print</span>(future)</code></pre>

        <h3>Comparing Dates</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> date

date1 = date(<span class="syntax-number">2025</span>, <span class="syntax-number">1</span>, <span class="syntax-number">1</span>)
date2 = date(<span class="syntax-number">2025</span>, <span class="syntax-number">2</span>, <span class="syntax-number">1</span>)

<span class="syntax-keyword">if</span> date1 < date2:
    <span class="syntax-function">print</span>(<span class="syntax-string">"date2 is later"</span>)</code></pre>

        <h3>Real-World Example</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> datetime <span class="syntax-keyword">import</span> datetime

expiry = datetime(<span class="syntax-number">2025</span>, <span class="syntax-number">12</span>, <span class="syntax-number">31</span>)
today = datetime.<span class="syntax-function">now</span>()

<span class="syntax-keyword">if</span> today > expiry:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Expired"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Still valid"</span>)</code></pre>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use the <code>datetime</code> module instead of manually handling dates as strings. It prevents calculation errors and makes your code easier to maintain.</p>
        </div>
    `
},

{
    id: 'virtual-environments',
    title: 'Virtual Environments and Pip',
    duration: '20 min',
    content: `
        <h2>Virtual Environments and Pip</h2>
        <p>As projects grow, you'll install many third-party libraries. Virtual environments keep each project's dependencies isolated, while <code>pip</code> is Python's package manager used to install and manage packages.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Why Use Virtual Environments?</div>
            <p>Different projects may require different versions of the same package. Virtual environments prevent version conflicts.</p>
        </div>

        <h3>Check Python Version</h3>
        <pre><code class="language-python">$ python --version</code></pre>

        <h3>Check Pip Version</h3>
        <pre><code class="language-python">$ pip --version</code></pre>

        <h3>Create a Virtual Environment</h3>
        <pre><code class="language-python">$ python -m venv myenv</code></pre>

        <h3>Activate the Environment</h3>
        <pre><code class="language-python"><span class="syntax-comment"># Windows</span>
$ myenv\\Scripts\\activate

<span class="syntax-comment"># macOS / Linux</span>
$ source myenv/bin/activate</code></pre>

        <h3>Install a Package</h3>
        <pre><code class="language-python">$ pip install requests</code></pre>

        <h3>Use an Installed Package</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://example.com"</span>)

<span class="syntax-function">print</span>(response.status_code)</code></pre>

        <h3>View Installed Packages</h3>
        <pre><code class="language-python">$ pip list</code></pre>

        <h3>Save Project Dependencies</h3>
        <pre><code class="language-python">$ pip freeze > requirements.txt</code></pre>

        <h3>Install from requirements.txt</h3>
        <pre><code class="language-python">$ pip install -r requirements.txt</code></pre>

        <h3>Deactivate the Environment</h3>
        <pre><code class="language-python">$ deactivate</code></pre>

        <h3>Project Structure</h3>
        <pre><code class="language-python">my_project/
├── myenv/
├── app.py
├── requirements.txt
└── README.md</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Don't Upload Virtual Environments</div>
            <p>Never commit your <code>venv</code> or <code>myenv</code> folder to Git. Instead, include the <code>requirements.txt</code> file so others can install the same dependencies.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Create a new virtual environment for every Python project and keep your dependencies listed in <code>requirements.txt</code>.</p>
        </div>
    `
},

{
    id: 'type-hints',
    title: 'Type Hints',
    duration: '20 min',
    content: `
        <h2>Type Hints in Python</h2>
        <p>Type hints allow developers to specify the expected data types of variables, function parameters, and return values. They make code easier to understand and help tools detect potential errors.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Important</div>
            <p>Python is dynamically typed, meaning type hints do not enforce types at runtime. They are mainly used for readability, documentation, and static analysis.</p>
        </div>

        <h3>Basic Type Hints</h3>
        <pre><code class="language-python">name: <span class="syntax-keyword">str</span> = <span class="syntax-string">"Alice"</span>
age: <span class="syntax-keyword">int</span> = <span class="syntax-number">25</span>
height: <span class="syntax-keyword">float</span> = <span class="syntax-number">5.8</span>
active: <span class="syntax-keyword">bool</span> = <span class="syntax-keyword">True</span></code></pre>

        <h3>Function Type Hints</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">add</span>(a: <span class="syntax-keyword">int</span>, b: <span class="syntax-keyword">int</span>) -> <span class="syntax-keyword">int</span>:
    <span class="syntax-keyword">return</span> a + b

result = <span class="syntax-function">add</span>(<span class="syntax-number">5</span>, <span class="syntax-number">3</span>)

<span class="syntax-function">print</span>(result)</code></pre>

        <h3>String Type Hints</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>(name: <span class="syntax-keyword">str</span>) -> <span class="syntax-keyword">str</span>:
    <span class="syntax-keyword">return</span> <span class="syntax-string">f"Hello {name}"</span>

message = <span class="syntax-function">greet</span>(<span class="syntax-string">"John"</span>)

<span class="syntax-function">print</span>(message)</code></pre>

        <h3>Type Hints with Lists</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> typing <span class="syntax-keyword">import</span> List

numbers: List[<span class="syntax-keyword">int</span>] = [<span class="syntax-number">1</span>, <span class="syntax-number">2</span>, <span class="syntax-number">3</span>]

<span class="syntax-function">print</span>(numbers)</code></pre>

        <h3>Type Hints with Dictionaries</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> typing <span class="syntax-keyword">import</span> Dict

users: Dict[<span class="syntax-keyword">str</span>, <span class="syntax-keyword">int</span>] = {
    <span class="syntax-string">"Alice"</span>: <span class="syntax-number">25</span>,
    <span class="syntax-string">"Bob"</span>: <span class="syntax-number">30</span>
}</code></pre>

        <h3>Optional Values</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> typing <span class="syntax-keyword">import</span> Optional

<span class="syntax-keyword">def</span> <span class="syntax-function">find_user</span>(name: <span class="syntax-keyword">str</span>) -> Optional[<span class="syntax-keyword">str</span>]:
    <span class="syntax-keyword">if</span> name == <span class="syntax-string">"Alice"</span>:
        <span class="syntax-keyword">return</span> <span class="syntax-string">"Found"</span>
    <span class="syntax-keyword">return</span> <span class="syntax-keyword">None</span></code></pre>

        <h3>Multiple Possible Types</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> typing <span class="syntax-keyword">import</span> Union

value: Union[<span class="syntax-keyword">int</span>, <span class="syntax-keyword">str</span>] = <span class="syntax-string">"Hello"</span>

<span class="syntax-function">print</span>(value)</code></pre>

        <h3>Type Aliases</h3>
        <pre><code class="language-python">UserID = <span class="syntax-keyword">int</span>

user_id: UserID = <span class="syntax-number">1001</span>

<span class="syntax-function">print</span>(user_id)</code></pre>

        <h3>Using Any Type</h3>
        <pre><code class="language-python"><span class="syntax-keyword">from</span> typing <span class="syntax-keyword">import</span> Any

data: Any = <span class="syntax-number">10</span>

data = <span class="syntax-string">"Python"</span>

<span class="syntax-function">print</span>(data)</code></pre>

        <h3>Type Hints in Classes</h3>
        <pre><code class="language-python"><span class="syntax-keyword">class</span> <span class="syntax-class">Person</span>:
    name: <span class="syntax-keyword">str</span>
    age: <span class="syntax-keyword">int</span>

    <span class="syntax-keyword">def</span> <span class="syntax-function">__init__</span>(self, name: <span class="syntax-keyword">str</span>, age: <span class="syntax-keyword">int</span>):
        self.name = name
        self.age = age</code></pre>

        <h3>Benefits of Type Hints</h3>
        <ul>
            <li>Makes code easier to read.</li>
            <li>Improves editor autocomplete.</li>
            <li>Helps find bugs before running code.</li>
            <li>Acts as documentation for functions.</li>
            <li>Makes large projects easier to maintain.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use type hints in new Python projects, especially for functions and classes. They improve readability without changing how Python executes your code.</p>
        </div>
    `
},

{
    id: 'testing',
    title: 'Testing',
    duration: '20 min',
    content: `
        <h2>Testing in Python</h2>
        <p>Testing is the process of checking whether your code works correctly. Python provides tools like <code>unittest</code> and <code>pytest</code> to create automated tests and catch errors early.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Why Test Code?</div>
            <p>Tests help prevent bugs, make code changes safer, and ensure your programs behave as expected.</p>
        </div>

        <h3>Simple Assertion</h3>
        <pre><code class="language-python">number = <span class="syntax-number">10</span>

<span class="syntax-keyword">assert</span> number == <span class="syntax-number">10</span>

<span class="syntax-function">print</span>(<span class="syntax-string">"Test passed"</span>)</code></pre>

        <h3>Testing a Function</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">add</span>(a, b):
    <span class="syntax-keyword">return</span> a + b

<span class="syntax-keyword">assert</span> <span class="syntax-function">add</span>(<span class="syntax-number">2</span>, <span class="syntax-number">3</span>) == <span class="syntax-number">5</span>

<span class="syntax-function">print</span>(<span class="syntax-string">"Add function works"</span>)</code></pre>

        <h3>Using unittest</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> unittest

<span class="syntax-keyword">def</span> <span class="syntax-function">multiply</span>(a, b):
    <span class="syntax-keyword">return</span> a * b

<span class="syntax-keyword">class</span> <span class="syntax-class">TestMath</span>(unittest.TestCase):
    <span class="syntax-keyword">def</span> <span class="syntax-function">test_multiply</span>(self):
        self.<span class="syntax-function">assertEqual</span>(<span class="syntax-function">multiply</span>(<span class="syntax-number">3</span>, <span class="syntax-number">4</span>), <span class="syntax-number">12</span>)</code></pre>

        <h3>Running Tests</h3>
        <pre><code class="language-python"><span class="syntax-keyword">if</span> __name__ == <span class="syntax-string">"__main__"</span>:
    unittest.<span class="syntax-function">main</span>()</code></pre>

        <h3>Common unittest Assertions</h3>
        <pre><code class="language-python">self.<span class="syntax-function">assertEqual</span>(<span class="syntax-number">5</span>, <span class="syntax-number">5</span>)
self.<span class="syntax-function">assertNotEqual</span>(<span class="syntax-number">5</span>, <span class="syntax-number">10</span>)
self.<span class="syntax-function">assertTrue</span>(<span class="syntax-keyword">True</span>)
self.<span class="syntax-function">assertFalse</span>(<span class="syntax-keyword">False</span>)</code></pre>

        <h3>Testing Exceptions</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">divide</span>(a, b):
    <span class="syntax-keyword">return</span> a / b

<span class="syntax-keyword">try</span>:
    <span class="syntax-function">divide</span>(<span class="syntax-number">5</span>, <span class="syntax-number">0</span>)
<span class="syntax-keyword">except</span> ZeroDivisionError:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Error caught"</span>)</code></pre>

        <h3>Testing with pytest</h3>
        <pre><code class="language-python"><span class="syntax-keyword">def</span> <span class="syntax-function">test_add</span>():
    <span class="syntax-keyword">assert</span> <span class="syntax-function">add</span>(<span class="syntax-number">2</span>, <span class="syntax-number">3</span>) == <span class="syntax-number">5</span>

<span class="syntax-function">test_add</span>()</code></pre>

        <h3>Test-Driven Development (TDD)</h3>
        <p>Test-driven development is a practice where you write tests before writing the actual code.</p>

        <pre><code class="language-python"><span class="syntax-comment"># Write test first</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">test_square</span>():
    <span class="syntax-keyword">assert</span> <span class="syntax-function">square</span>(<span class="syntax-number">4</span>) == <span class="syntax-number">16</span>

<span class="syntax-comment"># Then create the function</span>
<span class="syntax-keyword">def</span> <span class="syntax-function">square</span>(number):
    <span class="syntax-keyword">return</span> number * number</code></pre>

        <h3>Types of Testing</h3>
        <ul>
            <li><strong>Unit Testing:</strong> Tests small parts of code like functions.</li>
            <li><strong>Integration Testing:</strong> Tests multiple components working together.</li>
            <li><strong>Regression Testing:</strong> Ensures old features still work after changes.</li>
            <li><strong>Performance Testing:</strong> Checks speed and resource usage.</li>
        </ul>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Write tests for important functions, keep tests simple, and run them regularly while developing your application.</p>
        </div>
    `
},

{
    id: 'apis',
    title: 'APIs',
    duration: '20 min',
    content: `
        <h2>Working with APIs in Python</h2>
        <p>APIs (Application Programming Interfaces) allow programs to communicate with each other. Python can use APIs to access data and services from external applications.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 What is an API?</div>
            <p>An API provides a set of rules that allows one application to request and receive information from another application.</p>
        </div>

        <h3>Making HTTP Requests</h3>
        <p>The <code>requests</code> library is commonly used to communicate with web APIs.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/data"</span>)

<span class="syntax-function">print</span>(response.status_code)</code></pre>

        <h3>Reading API Responses</h3>
        <p>Most APIs return data in JSON format, which Python can easily convert into dictionaries.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/users"</span>)

data = response.<span class="syntax-function">json</span>()

<span class="syntax-function">print</span>(data)</code></pre>

        <h3>Working with JSON Data</h3>
        <pre><code class="language-python">user = {
    <span class="syntax-string">"name"</span>: <span class="syntax-string">"Alice"</span>,
    <span class="syntax-string">"age"</span>: <span class="syntax-number">25</span>
}

<span class="syntax-function">print</span>(user[<span class="syntax-string">"name"</span>])</code></pre>

        <h3>API Parameters</h3>
        <p>Parameters allow you to send additional information with your request.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

params = {
    <span class="syntax-string">"city"</span>: <span class="syntax-string">"London"</span>
}

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/weather"</span>, params=params)

<span class="syntax-function">print</span>(response.<span class="syntax-function">json</span>())</code></pre>

        <h3>Sending Data with POST</h3>
        <p>POST requests are used to send information to an API.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

data = {
    <span class="syntax-string">"username"</span>: <span class="syntax-string">"john"</span>,
    <span class="syntax-string">"password"</span>: <span class="syntax-string">"12345"</span>
}

response = requests.<span class="syntax-function">post</span>(<span class="syntax-string">"https://api.example.com/login"</span>, json=data)

<span class="syntax-function">print</span>(response.<span class="syntax-function">json</span>())</code></pre>

        <h3>Handling API Errors</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/data"</span>)

<span class="syntax-keyword">if</span> response.status_code == <span class="syntax-number">200</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Success"</span>)
<span class="syntax-keyword">else</span>:
    <span class="syntax-function">print</span>(<span class="syntax-string">"Request failed"</span>)</code></pre>

        <h3>Common HTTP Status Codes</h3>
        <ul>
            <li><strong>200:</strong> Request successful.</li>
            <li><strong>201:</strong> Data created successfully.</li>
            <li><strong>400:</strong> Bad request.</li>
            <li><strong>401:</strong> Unauthorized access.</li>
            <li><strong>404:</strong> Resource not found.</li>
            <li><strong>500:</strong> Server error.</li>
        </ul>

        <h3>API Authentication</h3>
        <p>Many APIs require keys or tokens to verify users.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> requests

headers = {
    <span class="syntax-string">"Authorization"</span>: <span class="syntax-string">"Bearer API_TOKEN"</span>
}

response = requests.<span class="syntax-function">get</span>(<span class="syntax-string">"https://api.example.com/profile"</span>, headers=headers)

<span class="syntax-function">print</span>(response.<span class="syntax-function">json</span>())</code></pre>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Security Tip</div>
            <p>Never store API keys directly in your code. Use environment variables or secure configuration files.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Always check responses, handle errors, and validate API data before using it in your application.</p>
        </div>
    `
},

{
    id: 'databases',
    title: 'Databases',
    duration: '20 min',
    content: `
        <h2>Working with Databases in Python</h2>
        <p>Databases are used to store, organize, and retrieve data. Python can connect to databases and perform operations like creating, reading, updating, and deleting data.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Database Basics</div>
            <p>A database stores information in a structured way so applications can access it efficiently.</p>
        </div>

        <h3>Using SQLite Database</h3>
        <p>Python includes the built-in <code>sqlite3</code> module for working with SQLite databases.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)

<span class="syntax-function">print</span>(<span class="syntax-string">"Database connected"</span>)</code></pre>

        <h3>Creating a Table</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"CREATE TABLE users (id INTEGER, name TEXT)"</span>)

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Inserting Data</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"INSERT INTO users VALUES (?, ?)"</span>, (<span class="syntax-number">1</span>, <span class="syntax-string">"Alice"</span>))

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Reading Data</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"SELECT * FROM users"</span>)

rows = cursor.<span class="syntax-function">fetchall</span>()

<span class="syntax-keyword">for</span> row <span class="syntax-keyword">in</span> rows:
    <span class="syntax-function">print</span>(row)</code></pre>

        <h3>Updating Data</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"UPDATE users SET name=? WHERE id=?"</span>, (<span class="syntax-string">"Bob"</span>, <span class="syntax-number">1</span>))

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Deleting Data</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> sqlite3

connection = sqlite3.<span class="syntax-function">connect</span>(<span class="syntax-string">"users.db"</span>)
cursor = connection.<span class="syntax-function">cursor</span>()

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"DELETE FROM users WHERE id=?"</span>, (<span class="syntax-number">1</span>,))

connection.<span class="syntax-function">commit</span>()</code></pre>

        <h3>Using Parameters Safely</h3>
        <p>Always use placeholders instead of inserting values directly into SQL queries.</p>

        <pre><code class="language-python">name = <span class="syntax-string">"Alice"</span>

cursor.<span class="syntax-function">execute</span>(<span class="syntax-string">"SELECT * FROM users WHERE name=?"</span>, (name,))</code></pre>

        <h3>Closing Database Connection</h3>
        <pre><code class="language-python">connection.<span class="syntax-function">close</span>()</code></pre>

        <h3>Common Database Operations</h3>
        <ul>
            <li><strong>CREATE:</strong> Create tables and databases.</li>
            <li><strong>INSERT:</strong> Add new records.</li>
            <li><strong>SELECT:</strong> Retrieve information.</li>
            <li><strong>UPDATE:</strong> Modify existing data.</li>
            <li><strong>DELETE:</strong> Remove records.</li>
        </ul>

        <h3>Database Libraries</h3>
        <ul>
            <li><strong>sqlite3:</strong> Built-in SQLite support.</li>
            <li><strong>SQLAlchemy:</strong> Advanced database toolkit.</li>
            <li><strong>PyMongo:</strong> MongoDB database access.</li>
            <li><strong>psycopg:</strong> PostgreSQL connection.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Security Tip</div>
            <p>Avoid building SQL queries using string formatting because it can cause SQL injection vulnerabilities.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use parameterized queries, close connections, and design your database structure carefully.</p>
        </div>
    `
},

{
    id: 'async-programming',
    title: 'Async Programming',
    duration: '20 min',
    content: `
        <h2>Async Programming in Python</h2>
        <p>Asynchronous programming allows a program to perform multiple tasks without waiting for each task to finish. It is useful for operations like API requests, file operations, and network communication.</p>

        <div class="callout callout-info">
            <div class="callout-title">💡 Concept</div>
            <p>Async code lets Python switch between tasks while waiting, improving performance for I/O operations.</p>
        </div>

        <h3>Synchronous vs Asynchronous Code</h3>
        <p>Normal code runs one instruction at a time. Async code can pause a task and continue another task.</p>

        <pre><code class="language-python"><span class="syntax-comment"># Synchronous example</span>
<span class="syntax-function">print</span>(<span class="syntax-string">"Task 1"</span>)
<span class="syntax-function">print</span>(<span class="syntax-string">"Task 2"</span>)
<span class="syntax-function">print</span>(<span class="syntax-string">"Task 3"</span>)</code></pre>

        <h3>Creating Async Functions</h3>
        <p>Async functions are created using the <code>async def</code> keyword.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> asyncio

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">greet</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Hello"</span>)

asyncio.<span class="syntax-function">run</span>(<span class="syntax-function">greet</span>())</code></pre>

        <h3>Using await</h3>
        <p>The <code>await</code> keyword pauses an async function until the awaited task completes.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> asyncio

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">task</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Starting"</span>)
    <span class="syntax-keyword">await</span> asyncio.<span class="syntax-function">sleep</span>(<span class="syntax-number">2</span>)
    <span class="syntax-function">print</span>(<span class="syntax-string">"Finished"</span>)

asyncio.<span class="syntax-function">run</span>(<span class="syntax-function">task</span>())</code></pre>

        <h3>Running Multiple Tasks</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> asyncio

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">worker</span>(name):
    <span class="syntax-keyword">await</span> asyncio.<span class="syntax-function">sleep</span>(<span class="syntax-number">1</span>)
    <span class="syntax-function">print</span>(name)

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">main</span>():
    <span class="syntax-keyword">await</span> asyncio.<span class="syntax-function">gather</span>(
        <span class="syntax-function">worker</span>(<span class="syntax-string">"Task 1"</span>),
        <span class="syntax-function">worker</span>(<span class="syntax-string">"Task 2"</span>)
    )

asyncio.<span class="syntax-function">run</span>(<span class="syntax-function">main</span>())</code></pre>

        <h3>Async API Requests</h3>
        <p>Async programming is useful when making many network requests.</p>

        <pre><code class="language-python"><span class="syntax-keyword">import</span> asyncio

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">fetch_data</span>():
    <span class="syntax-keyword">await</span> asyncio.<span class="syntax-function">sleep</span>(<span class="syntax-number">1</span>)
    <span class="syntax-keyword">return</span> <span class="syntax-string">"Data received"</span>

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">main</span>():
    result = <span class="syntax-keyword">await</span> <span class="syntax-function">fetch_data</span>()
    <span class="syntax-function">print</span>(result)

asyncio.<span class="syntax-function">run</span>(<span class="syntax-function">main</span>())</code></pre>

        <h3>Creating Tasks</h3>
        <pre><code class="language-python"><span class="syntax-keyword">import</span> asyncio

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">job</span>():
    <span class="syntax-function">print</span>(<span class="syntax-string">"Running job"</span>)

<span class="syntax-keyword">async</span> <span class="syntax-keyword">def</span> <span class="syntax-function">main</span>():
    task = asyncio.<span class="syntax-function">create_task</span>(<span class="syntax-function">job</span>())
    <span class="syntax-keyword">await</span> task

asyncio.<span class="syntax-function">run</span>(<span class="syntax-function">main</span>())</code></pre>

        <h3>When to Use Async</h3>
        <ul>
            <li>Making API calls.</li>
            <li>Handling many users in web applications.</li>
            <li>Working with network connections.</li>
            <li>Processing multiple waiting operations.</li>
        </ul>

        <h3>When Not to Use Async</h3>
        <ul>
            <li>CPU-heavy calculations.</li>
            <li>Simple sequential programs.</li>
            <li>Tasks that do not involve waiting.</li>
        </ul>

        <div class="callout callout-warning">
            <div class="callout-title">⚠️ Remember</div>
            <p>Async programming improves waiting time performance, but it does not make CPU operations faster.</p>
        </div>

        <div class="callout callout-success">
            <div class="callout-title">✅ Best Practice</div>
            <p>Use async programming for I/O tasks where your program spends time waiting for external operations.</p>
        </div>
    `
}

];
