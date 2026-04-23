import React, { useState } from 'react';

export default function Section17() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🎯 useState Hook Deep Dive
        </h1>
        <p className="text-lg text-gray-300">
          useState is the most commonly used hook. It lets you add state to functional components.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-600 mb-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Counter Example</h2>
            <div className="space-y-4">
              <p className="text-3xl font-bold text-white">{count}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  +1
                </button>
                <button
                  onClick={() => setCount(count - 1)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  -1
                </button>
                <button
                  onClick={() => setCount(0)}
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>

          <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-600">
            <h2 className="text-2xl font-bold mb-4 text-purple-400">Multiple States</h2>
            <div className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
              />
              <p className="text-lg">Hello, {name || 'Guest'}! 👋</p>
              
              <select
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
              >
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
              </select>
              <p style={{ color }} className="text-xl font-bold">This text is {color}</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">How useState Works</h2>
          <ol className="space-y-4 text-gray-200">
            <li className="flex gap-3">
              <span className="font-bold text-emerald-400 min-w-8">1.</span>
              <span><strong>Declaration:</strong> Create state variable</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-400 min-w-8">2.</span>
              <span><strong>Update:</strong> Call setter function</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-400 min-w-8">3.</span>
              <span><strong>Re-render:</strong> Component updates</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-emerald-400 min-w-8">4.</span>
              <span><strong>Display:</strong> New value shown</span>
            </li>
          </ol>

          <button
            onClick={() => setShowCode(!showCode)}
            className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>
      </div>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { useState } from 'react';

function MyComponent() {
  // Syntax: const [value, setValue] = useState(initialValue)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');
  
  // Update state
  const handleIncrement = () => {
    setCount(count + 1);
  };
  
  // Function form (when new value depends on old value)
  const handleDouble = () => {
    setCount(prevCount => prevCount * 2);
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDouble}>Double</button>
    </div>
  );
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">✅ Best Practices</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Use function form when new state depends on old</li>
            <li>• Keep state as simple as needed</li>
            <li>• Don't mutate state directly</li>
            <li>• State updates are batched</li>
          </ul>
        </div>

        <div className="bg-red-900/20 border border-red-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-red-400 mb-3">❌ Common Mistakes</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Mutating state: state.name = 'John' (WRONG)</li>
            <li>• Using state outside render</li>
            <li>• Calling hooks conditionally</li>
            <li>• Not using function form for dependent updates</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
