const DataStructuresLessons = [
    {
        id: 'arrays-lists',
        title: 'Arrays and Lists',
        duration: '20 min',
        content: `
            <h2>Arrays and Lists</h2>
            <p>Arrays and lists are fundamental data structures that store collections of elements.</p>
            
            <h3>Arrays</h3>
            <ul>
                <li><strong>Fixed size</strong>: Arrays have a predetermined size</li>
                <li><strong>Random access</strong>: O(1) time complexity for accessing elements</li>
                <li><strong>Memory efficient</strong>: Contiguous memory allocation</li>
            </ul>
            
            <h3>Lists</h3>
            <ul>
                <li><strong>Dynamic size</strong>: Can grow and shrink as needed</li>
                <li><strong>Flexible</strong>: Easy to add and remove elements</li>
                <li><strong>Memory overhead</strong>: Additional memory for pointers</li>
            </ul>
            
            <h3>Python Implementation</h3>
            <pre><code class="python"># List (dynamic array)
my_list = [1, 2, 3, 4, 5]
my_list.append(6)  # Add element
my_list.pop()      # Remove last element

# Array module (for fixed-size arrays)
import array
my_array = array.array('i', [1, 2, 3, 4, 5])</code></pre>
        `
    },
    {
        id: 'linked-lists',
        title: 'Linked Lists',
        duration: '25 min',
        content: `
            <h2>Linked Lists</h2>
            <p>Linked lists are linear data structures where elements are not stored in contiguous memory locations.</p>
            
            <h3>Types of Linked Lists</h3>
            <ul>
                <li><strong>Singly Linked List</strong>: Each node points to the next</li>
                <li><strong>Doubly Linked List</strong>: Each node points to both next and previous</li>
                <li><strong>Circular Linked List</strong>: Last node points back to first</li>
            </ul>
            
            <h3>Implementation</h3>
            <pre><code class="python">class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node</code></pre>
            
            <div class="callout callout-info">
                <div class="callout-title">💡 Performance</div>
                <p>Linked lists excel at insertions and deletions (O(1)) but have slower access times (O(n)) compared to arrays.</p>
            </div>
        `
    },
    {
        id: 'stacks-queues',
        title: 'Stacks and Queues',
        duration: '25 min',
        content: `
            <h2>Stacks and Queues</h2>
            <p>Stacks and queues are abstract data types that serve different purposes in data management.</p>
            
            <h3>Stacks (LIFO)</h3>
            <ul>
                <li><strong>Last In, First Out</strong>: Last element added is first to be removed</li>
                <li><strong>Operations</strong>: Push (add), Pop (remove), Peek (view top)</li>
                <li><strong>Applications</strong>: Function calls, undo systems, expression evaluation</li>
            </ul>
            
            <h3>Queues (FIFO)</h3>
            <ul>
                <li><strong>First In, First Out</strong>: First element added is first to be removed</li>
                <li><strong>Operations</strong>: Enqueue (add), Dequeue (remove), Front (view front)</li>
                <li><strong>Applications</strong>: Task scheduling, print queues, breadth-first search</li>
            </ul>
            
            <h3>Python Implementation</h3>
            <pre><code class="python"># Stack using list
stack = []
stack.append(1)  # Push
stack.append(2)
stack.pop()      # Pop

# Queue using collections.deque
from collections import deque
queue = deque()
queue.append(1)  # Enqueue
queue.append(2)
queue.popleft()  # Dequeue</code></pre>
        `
    },
    {
        id: 'trees',
        title: 'Trees',
        duration: '30 min',
        content: `
            <h2>Trees</h2>
            <p>Trees are hierarchical data structures with a root node and child nodes.</p>
            
            <h3>Binary Trees</h3>
            <ul>
                <li>Each node has at most two children</li>
                <li>Left child and right child</li>
                <li>Efficient for searching and sorting</li>
            </ul>
            
            <h3>Tree Traversal</h3>
            <pre><code class="python">class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

# In-order traversal
def inorder(root):
    if root:
        inorder(root.left)
        print(root.val)
        inorder(root.right)

# Pre-order traversal
def preorder(root):
    if root:
        print(root.val)
        preorder(root.left)
        preorder(root.right)</code></pre>
            
            <h3>Binary Search Trees</h3>
            <ul>
                <li>Left subtree contains values less than root</li>
                <li>Right subtree contains values greater than root</li>
                <li>Enables efficient searching (O(log n))</li>
            </ul>
        `
    },
    {
        id: 'hash-tables',
        title: 'Hash Tables',
        duration: '25 min',
        content: `
            <h2>Hash Tables</h2>
            <p>Hash tables provide fast data retrieval using key-value pairs and hash functions.</p>
            
            <h3>How Hash Tables Work</h3>
            <ul>
                <li><strong>Hash Function</strong>: Converts keys to array indices</li>
                <li><strong>Buckets</strong>: Array locations for storing data</li>
                <li><strong>Collision Handling</strong>: Managing multiple keys that hash to same index</li>
            </ul>
            
            <h3>Collision Resolution</h3>
            <ul>
                <li><strong>Chaining</strong>: Store colliding elements in linked lists</li>
                <li><strong>Open Addressing</strong>: Find next available slot</li>
                <li><strong>Double Hashing</strong>: Use second hash function</li>
            </ul>
            
            <h3>Python Dictionaries</h3>
            <pre><code class="python"># Python dictionaries are hash tables
my_dict = {'name': 'Alice', 'age': 25, 'city': 'New York'}

# Access: O(1) average case
print(my_dict['name'])

# Insert: O(1) average case
my_dict['email'] = 'alice@example.com'

# Delete: O(1) average case
del my_dict['age']</code></pre>
            
            <div class="callout callout-warning">
                <div class="callout-title">⚠️ Performance</div>
                <p>Hash tables provide O(1) average time complexity but can degrade to O(n) with many collisions.</p>
            </div>
        `
    }
];
