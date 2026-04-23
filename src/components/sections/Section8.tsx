import { useState } from 'react';

export default function Section8() {
  const [num1, setNum1] = useState(5);
  const [num2, setNum2] = useState(3);
  const [name, setName] = useState('React');
  const [showCode, setShowCode] = useState(false);

  const items = ['Learn', 'Build', 'Deploy', 'Scale'];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-8 border border-cyan-700">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Expressions in JSX</h2>
        <p className="text-gray-200 text-lg">
          You can embed any JavaScript expression inside JSX using curly braces <code className="bg-gray-800 px-3 py-1 rounded text-blue-300">{'{}'}</code>
        </p>
      </div>

      {/* Basic Expressions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Basic Expressions</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">Simple Math Calculation:</p>
            <div className="flex items-center gap-4 mb-4">
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
                className="bg-gray-700 text-white px-3 py-2 rounded w-20"
              />
              <span className="text-gray-300">+</span>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
                className="bg-gray-700 text-white px-3 py-2 rounded w-20"
              />
              <span className="text-gray-300">=</span>
              <span className="text-yellow-400 font-bold text-lg">{num1 + num2}</span>
            </div>
            <p className="text-gray-400 text-sm">Code: <code className="bg-gray-800 px-2 rounded text-blue-300">{'{num1} + {num2} = {num1 + num2}'}</code></p>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-gray-400 text-sm mb-2">String Interpolation:</p>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-gray-700 text-white px-3 py-2 rounded w-full mb-3"
              placeholder="Enter your name"
            />
            <p className="text-emerald-300 text-lg">✨ Welcome, <strong>{name}</strong>! 👋</p>
            <p className="text-gray-400 text-sm mt-2">Code: <code className="bg-gray-800 px-2 rounded text-blue-300">{`Welcome, {name}!`}</code></p>
          </div>
        </div>
      </div>

      {/* Array Methods */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">📚 Working with Arrays</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-gray-400 text-sm mb-3">Using .map() to render lists:</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {items.map((item, index) => (
                <span
                  key={index}
                  className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm animate-slideInLeft"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm">Code: <code className="bg-gray-800 px-2 rounded text-blue-300">{`{items.map(item => <span>{item}</span>)}`}</code></p>
          </div>
        </div>
      </div>

      {/* Complex Expressions */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-400">🔧 Complex Expressions</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Ternary Operator</h4>
            <div className="bg-gray-900 rounded p-4 code-block mb-3">
              <code className="text-blue-300 text-sm">
{`{age >= 18
  ? <p>Adult</p>
  : <p>Minor</p>
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm">Conditional rendering with ternary operators</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Logical AND (&& )</h4>
            <div className="bg-gray-900 rounded p-4 code-block mb-3">
              <code className="text-blue-300 text-sm">
{`{isLoggedIn && 
  <p>Welcome back!</p>
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm">Render only if condition is true</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Function Calls</h4>
            <div className="bg-gray-900 rounded p-4 code-block mb-3">
              <code className="text-blue-300 text-sm">
{`{getGreeting(userName)}

{formatDate(new Date())}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm">Call functions and use their return values</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Object Methods</h4>
            <div className="bg-gray-900 rounded p-4 code-block mb-3">
              <code className="text-blue-300 text-sm">
{`{user.name}
{items.length}
{data.map(item => ...)}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm">Access object properties and methods</p>
          </div>
        </div>
      </div>

      {/* Things You CANNOT Do */}
      <div className="bg-red-900 rounded-lg p-6 border border-red-700">
        <h3 className="text-lg font-bold text-red-300 mb-4">❌ What You CANNOT Do in JSX</h3>
        <div className="space-y-3">
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <p className="text-red-400 text-sm"><strong>❌ Use statements:</strong> <code className="bg-gray-800 px-2 rounded">if, for, while</code></p>
            <p className="text-gray-400 text-sm">✓ Use ternary or &&  instead</p>
          </div>
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <p className="text-red-400 text-sm"><strong>❌ Use objects directly:</strong> <code className="bg-gray-800 px-2 rounded">{`{user}`}</code></p>
            <p className="text-gray-400 text-sm">✓ Access properties: <code className="bg-gray-800 px-2 rounded">{`{user.name}`}</code></p>
          </div>
          <div className="bg-gray-900 rounded p-3 border border-gray-700">
            <p className="text-red-400 text-sm"><strong>❌ Use functions without calling:</strong> <code className="bg-gray-800 px-2 rounded">{`{myFunction}`}</code></p>
            <p className="text-gray-400 text-sm">✓ Call them: <code className="bg-gray-800 px-2 rounded">{`{myFunction()}`}</code></p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all transform hover:scale-105"
      >
        {showCode ? '👈 Hide' : 'Show →'} Code Examples
      </button>

      {showCode && (
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInLeft">
          <h3 className="text-lg font-bold text-amber-400 mb-4">Complete Example</h3>
          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300 text-sm">
{`function Dashboard({ user, posts }) {
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      <p>You have {posts.length} posts</p>
      
      {posts.length > 0 && (
        <div>
          {posts.map(post => (
            <article key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}`}
            </code>
          </div>
        </div>
      )}
    </div>
  );
}
