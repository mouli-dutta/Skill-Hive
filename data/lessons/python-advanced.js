const PythonAdvancedLessons = [
    {
        id: 'metaclasses',
        title: 'Metaclasses',
        duration: '30 min',
        content: `
            <h2>Metaclasses in Python</h2>
            <p>Metaclasses are classes that create classes. They're the "stuff" that creates classes.</p>
            
            <h3>Understanding Metaclasses</h3>
            <p>In Python, everything is an object, including classes. Metaclasses are the classes that create these class objects.</p>
            
            <h3>Creating Metaclasses</h3>
            <pre><code class="language-python">class MyMeta(type):
    def __new__(cls, name, bases, dct):
        print(f"Creating class {name}")
        return super().__new__(cls, name, bases, dct)

class MyClass(metaclass=MyMeta):
    pass</code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Advanced Concept</div>
                <p>Metaclasses are powerful but should be used sparingly. They're often overkill for simple problems.</p>
            </div>
        `
    },
    {
        id: 'decorators-advanced',
        title: 'Advanced Decorators',
        duration: '35 min',
        content: `
            <h2>Advanced Decorators</h2>
            <p>Decorators are a powerful way to modify or enhance functions without changing their source code.</p>
            
            <h3>Class Decorators</h3>
            <pre><code class="python">def add_methods(cls):
    def new_method(self):
        return "Hello from added method!"
    cls.new_method = new_method
    return cls

@add_methods
class MyClass:
    pass</code></pre>
            
            <h3>Property Decorators</h3>
            <pre><code class="python">class Circle:
    def __init__(self, radius):
        self._radius = radius
    
    @property
    def radius(self):
        return self._radius
    
    @radius.setter
    def radius(self, value):
        if value < 0:
            raise ValueError("Radius cannot be negative")
        self._radius = value</code></pre>
        `
    },
    {
        id: 'async-programming',
        title: 'Async Programming',
        duration: '40 min',
        content: `
            <h2>Asynchronous Programming</h2>
            <p>Async programming allows you to write concurrent code that runs efficiently.</p>
            
            <h3>async and await</h3>
            <pre><code class="python">import asyncio

async def fetch_data(url):
    await asyncio.sleep(1)  # Simulate network delay
    return f"Data from {url}"

async def main():
    tasks = [
        fetch_data("https://api.example.com/1"),
        fetch_data("https://api.example.com/2")
    ]
    results = await asyncio.gather(*tasks)
    print(results)

asyncio.run(main())</code></pre>
            
            <h3>When to Use Async</h3>
            <ul>
                <li>I/O-bound operations</li>
                <li>Network requests</li>
                <li>Database operations</li>
                <li>File operations</li>
            </ul>
        `
    },
    {
        id: 'generators-iterators',
        title: 'Generators and Iterators',
        duration: '30 min',
        content: `
            <h2>Generators and Iterators</h2>
            <p>Generators are a simple way to create iterators, allowing you to generate values on the fly.</p>
            
            <h3>Generator Functions</h3>
            <pre><code class="python">def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

# Using the generator
for number in count_up_to(5):
    print(number)</code></pre>
            
            <h3>Generator Expressions</h3>
            <pre><code class="python"># List comprehension (creates full list in memory)
squares_list = [x**2 for x in range(1000000)]

# Generator expression (creates values on demand)
squares_gen = (x**2 for x in range(1000000))</code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Memory Efficiency</div>
                <p>Generators are memory-efficient for large datasets as they produce values one at a time.</p>
            </div>
        `
    },
    {
        id: 'context-managers',
        title: 'Context Managers',
        duration: '25 min',
        content: `
            <h2>Context Managers</h2>
            <p>Context managers ensure resources are properly managed using the 'with' statement.</p>
            
            <h3>Creating Context Managers</h3>
            <pre><code class="python">class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()

# Usage
with FileManager('example.txt', 'r') as f:
    content = f.read()</code></pre>
            
            <h3>Using contextlib</h3>
            <pre><code class="python">from contextlib import contextmanager

@contextmanager
def simple_context():
    print("Entering")
    yield
    print("Exiting")</code></pre>
        `
    }
];
