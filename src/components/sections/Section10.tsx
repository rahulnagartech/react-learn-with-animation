import { useState } from 'react';

export default function Section10() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [color, setColor] = useState('blue');
  const [showComparison, setShowComparison] = useState(false);

  const colors = ['blue', 'red', 'green', 'purple', 'pink'];

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-red-900 to-pink-900 rounded-lg p-8 border border-red-700">
        <h2 className="text-3xl font-bold text-red-300 mb-4">State</h2>
        <p className="text-gray-200 text-lg">
          State allows React components to manage and update their own data. When state changes, React re-renders the component.
        </p>
      </div>

      {/* State Basics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🔄 What is State?</h3>
        <p className="text-gray-300 mb-4">
          State is data that a component manages internally. It's mutable (can change) and when it changes, React automatically re-renders the component.
        </p>

        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg p-4 border border-blue-700">
          <p className="text-blue-300 font-bold mb-2">State vs Props:</p>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><strong>State:</strong> Data managed by the component itself, can change over time</li>
            <li><strong>Props:</strong> Data passed from parent, read-only, cannot change</li>
          </ul>
        </div>
      </div>

      {/* useState Hook */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">🎣 useState Hook</h3>
        
        <div className="mb-4">
          <h4 className="text-lg font-bold text-blue-300 mb-3">Syntax</h4>
          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300">
{`const [state, setState] = useState(initialValue);

// Example:
const [count, setCount] = useState(0);
const [name, setName] = useState('');`}
            </code>
          </div>
        </div>

        <div className="bg-yellow-900 rounded-lg p-4 border border-yellow-700">
          <p className="text-yellow-300 text-sm mb-2">📝 How it works:</p>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><strong>state</strong> - Current value of the state</li>
            <li><strong>setState</strong> - Function to update the state</li>
            <li><strong>initialValue</strong> - Starting value (can be any type)</li>
          </ul>
        </div>
      </div>

      {/* Live Examples */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-400">🎯 Live Examples</h3>

        {/* Example 1: Counter */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-blue-400 mb-4">Example 1: Counter</h4>
          <p className="text-gray-300 mb-4">Each click updates the state:</p>
          
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-600 text-center mb-4">
            <p className="text-gray-400 text-sm mb-2">Count Value:</p>
            <p className="text-5xl font-bold text-blue-300 mb-4 animate-bounce-subtle">{count}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setCount(count + 1)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-all transform hover:scale-110"
              >
                ➕ Increment
              </button>
              <button
                onClick={() => setCount(count - 1)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-all transform hover:scale-110"
              >
                ➖ Decrement
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded transition-all transform hover:scale-110"
              >
                🔄 Reset
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300">
{`const [count, setCount] = useState(0);

return (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
);`}
            </code>
          </div>
        </div>

        {/* Example 2: Form Input */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-emerald-400 mb-4">Example 2: Form Input</h4>
          <p className="text-gray-300 mb-4">State updates as you type:</p>
          
          <div className="bg-gray-900 rounded p-6 border border-gray-700 mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 mb-4"
              placeholder="Type your name..."
            />
            {name && (
              <p className="text-emerald-400 text-lg animate-slideInRight">
                👋 Hello, <strong>{name}</strong>!
              </p>
            )}
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300">
{`const [name, setName] = useState('');

return (
  <input
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
);`}
            </code>
          </div>
        </div>

        {/* Example 3: Color Picker */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-pink-400 mb-4">Example 3: Dynamic Styling</h4>
          <p className="text-gray-300 mb-4">State changes component appearance:</p>
          
          <div className={`rounded-lg p-8 text-center mb-4 border-2 transition-all duration-300 bg-${color}-900 border-${color}-600`}>
            <p className={`text-3xl font-bold text-${color}-300`}>Color: {color.toUpperCase()}</p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {colors.map(c => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`px-4 py-2 rounded font-bold transition-all transform ${
                  color === c
                    ? `bg-${c}-600 text-white scale-110 shadow-lg`
                    : `bg-gray-700 text-gray-300 hover:bg-gray-600`
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300">
{`const [color, setColor] = useState('blue');

return (
  <div style={{
    backgroundColor: color
  }}>
    Color Box
  </div>
);`}
            </code>
          </div>
        </div>
      </div>

      {/* State Updates */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">📊 How State Updates Work</h3>
        
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="w-full mb-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {showComparison ? '👈 Hide' : 'Show →'} State Update Process
        </button>

        {showComparison && (
          <div className="space-y-3 animate-slideInLeft">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-blue-400">1</span>
              <div className="bg-gray-700 rounded p-3 flex-1">
                <p className="text-gray-300 text-sm">User clicks button or input changes</p>
              </div>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-purple-400">2</span>
              <div className="bg-gray-700 rounded p-3 flex-1">
                <p className="text-gray-300 text-sm">Event handler calls setState</p>
              </div>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-emerald-400">3</span>
              <div className="bg-gray-700 rounded p-3 flex-1">
                <p className="text-gray-300 text-sm">React updates the state value</p>
              </div>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-pink-400">4</span>
              <div className="bg-gray-700 rounded p-3 flex-1">
                <p className="text-gray-300 text-sm">Component re-renders with new state</p>
              </div>
            </div>
            <div className="text-center text-gray-500">↓</div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-yellow-400">5</span>
              <div className="bg-gray-700 rounded p-3 flex-1">
                <p className="text-gray-300 text-sm">UI updates to reflect new state ✨</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Important Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-900 rounded-lg p-6 border border-green-700">
          <h4 className="text-lg font-bold text-green-300 mb-3">✅ State Rules</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✓ Always use setState to update</li>
            <li>✓ Never modify state directly</li>
            <li>✓ State updates are asynchronous</li>
            <li>✓ setState triggers re-render</li>
          </ul>
        </div>

        <div className="bg-red-900 rounded-lg p-6 border border-red-700">
          <h4 className="text-lg font-bold text-red-300 mb-3">❌ Avoid</h4>
          <div className="bg-gray-900 rounded p-3 code-block text-sm">
            <code className="text-red-400">
{`// WRONG:
state.count = 5;

// WRONG:
const [count] = useState(0);

// RIGHT:
setCount(5);`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
