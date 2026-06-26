const NumpyPandasLessons = [
    {
        id: 'numpy-intro',
        title: 'NumPy Introduction',
        duration: '20 min',
        content: `
            <h2>Introduction to NumPy</h2>
            <p>NumPy (Numerical Python) is the fundamental package for scientific computing in Python.</p>
            
            <h3>What is NumPy?</h3>
            <ul>
                <li>Powerful N-dimensional array object</li>
                <li>Sophisticated broadcasting functions</li>
                <li>Tools for integrating C/C++ and Fortran code</li>
                <li>Useful linear algebra, Fourier transform, and random number capabilities</li>
            </ul>
            
            <h3>Installing NumPy</h3>
            <pre><code class="bash">pip install numpy</code></pre>
            
            <h3>Creating Arrays</h3>
            <pre><code class="python">import numpy as np

# From Python list
arr = np.array([1, 2, 3, 4, 5])

# Create arrays with specific values
zeros = np.zeros(5)        # [0, 0, 0, 0, 0]
ones = np.ones(3)          # [1, 1, 1]
empty = np.empty(4)        # Uninitialized array

# Create arrays with ranges
arange = np.arange(0, 10, 2)  # [0, 2, 4, 6, 8]
linspace = np.linspace(0, 1, 5)  # [0, 0.25, 0.5, 0.75, 1]</code></pre>
        `
    },
    {
        id: 'numpy-operations',
        title: 'NumPy Array Operations',
        duration: '25 min',
        content: `
            <h2>NumPy Array Operations</h2>
            <p>NumPy provides efficient operations for working with arrays.</p>
            
            <h3>Basic Operations</h3>
            <pre><code class="python">import numpy as np

a = np.array([1, 2, 3, 4])
b = np.array([5, 6, 7, 8])

# Arithmetic operations
print(a + b)  # [6, 8, 10, 12]
print(a * b)  # [5, 12, 21, 32]
print(a ** 2) # [1, 4, 9, 16]

# Statistical operations
print(np.mean(a))    # 2.5
print(np.std(a))     # 1.118...
print(np.sum(a))     # 10
print(np.max(a))     # 4</code></pre>
            
            <h3>Array Indexing and Slicing</h3>
            <pre><code class="python">arr = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

# Indexing
print(arr[0])    # 0
print(arr[-1])   # 9

# Slicing
print(arr[2:5])  # [2, 3, 4]
print(arr[::2])  # [0, 2, 4, 6, 8]
print(arr[::-1]) # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]</code></pre>
            
            <h3>Boolean Indexing</h3>
            <pre><code class="python">arr = np.array([1, 5, 3, 7, 2, 9])

# Boolean mask
mask = arr > 4
print(mask)           # [False, True, False, True, False, True]
print(arr[mask])      # [5, 7, 9]

# Conditional selection
print(arr[arr > 4])   # [5, 7, 9]</code></pre>
        `
    },
    {
        id: 'numpy-shapes',
        title: 'NumPy Array Shapes and Reshaping',
        duration: '20 min',
        content: `
            <h2>Array Shapes and Reshaping</h2>
            <p>Understanding array shapes is crucial for working with multi-dimensional data.</p>
            
            <h3>Array Attributes</h3>
            <pre><code class="python">import numpy as np

# 1D array
arr1d = np.array([1, 2, 3, 4])
print(arr1d.shape)    # (4,)
print(arr1d.ndim)     # 1
print(arr1d.size)     # 4

# 2D array
arr2d = np.array([[1, 2, 3], [4, 5, 6]])
print(arr2d.shape)    # (2, 3)
print(arr2d.ndim)     # 2
print(arr2d.size)     # 6</code></pre>
            
            <h3>Reshaping Arrays</h3>
            <pre><code class="python">arr = np.arange(12)

# Reshape to different dimensions
reshaped = arr.reshape(3, 4)
print(reshaped)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Reshape to 3D
reshaped_3d = arr.reshape(2, 3, 2)
print(reshaped_3d.shape)  # (2, 3, 2)</code></pre>
            
            <h3>Transposing Arrays</h3>
            <pre><code class="python">arr = np.array([[1, 2, 3], [4, 5, 6]])
print(arr.T)  # Transpose
# [[1 4]
#  [2 5]
#  [3 6]]</code></pre>
        `
    },
    {
        id: 'pandas-intro',
        title: 'Pandas Introduction',
        duration: '25 min',
        content: `
            <h2>Introduction to Pandas</h2>
            <p>Pandas is a powerful data manipulation and analysis library for Python.</p>
            
            <h3>What is Pandas?</h3>
            <ul>
                <li>Fast and efficient DataFrame object</li>
                <li>Tools for reading and writing data</li>
                <li>Data alignment and integrated handling of missing data</li>
                <li>Reshaping and pivoting of data sets</li>
            </ul>
            
            <h3>Installing Pandas</h3>
            <pre><code class="bash">pip install pandas</code></pre>
            
            <h3>Creating DataFrames</h3>
            <pre><code class="python">import pandas as pd

# From dictionary
data = {
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Age': [25, 30, 35],
    'City': ['NYC', 'LA', 'Chicago']
}
df = pd.DataFrame(data)

# From list of dictionaries
data_list = [
    {'Name': 'Alice', 'Age': 25},
    {'Name': 'Bob', 'Age': 30}
]
df2 = pd.DataFrame(data_list)

print(df)</code></pre>
            
            <h3>Reading Data</h3>
            <pre><code class="python"># Read CSV file
df = pd.read_csv('data.csv')

# Read Excel file
df = pd.read_excel('data.xlsx')

# Read JSON
df = pd.read_json('data.json')</code></pre>
        `
    },
    {
        id: 'pandas-operations',
        title: 'Pandas Data Operations',
        duration: '30 min',
        content: `
            <h2>Pandas Data Operations</h2>
            <p>Learn how to manipulate and analyze data with Pandas.</p>
            
            <h3>Viewing Data</h3>
            <pre><code class="python">import pandas as pd

# Sample DataFrame
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie', 'David'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 70000, 55000]
})

# View data
print(df.head(2))        # First 2 rows
print(df.tail(2))        # Last 2 rows
print(df.info())         # DataFrame info
print(df.describe())     # Statistical summary</code></pre>
            
            <h3>Selecting Data</h3>
            <pre><code class="python"># Select columns
print(df['Name'])        # Single column
print(df[['Name', 'Age']])  # Multiple columns

# Select rows
print(df.iloc[0])        # First row by position
print(df.loc[0])         # First row by label

# Conditional selection
print(df[df['Age'] > 30])  # Rows where Age > 30</code></pre>
            
            <h3>Data Manipulation</h3>
            <pre><code class="python"># Add new column
df['Experience'] = [2, 5, 10, 3]

# Update values
df.loc[df['Age'] > 30, 'Salary'] *= 1.1

# Drop columns
df = df.drop('Experience', axis=1)

# Sort data
df_sorted = df.sort_values('Salary', ascending=False)</code></pre>
            
            <h3>GroupBy Operations</h3>
            <pre><code class="python"># Group by category
grouped = df.groupby('Age')
print(grouped.mean())

# Multiple aggregations
result = df.groupby('Age').agg({
    'Salary': ['mean', 'max'],
    'Name': 'count'
})</code></pre>
        `
    }
];
