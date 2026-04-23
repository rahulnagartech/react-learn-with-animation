import React, { useState } from 'react';

export default function Section16() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🎣 Hooks Introduction
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Hooks are special React functions that let you "hook into" React features in functional components. They provide a way to use state and other React features without writing class components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 rounded-lg border border-blue-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">What are Hooks?</h2>
          <ul className="space-y-3 text-gray-200">
            <li>✅ Functions that let you use state in functional components</li>
            <li>✅ Enable you to reuse stateful logic</li>
            <li>✅ Help organize code by feature, not type</li>
            <li>✅ Make complex components simpler</li>
            <li>✅ Work with existing code (no breaking changes)</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 rounded-lg border border-purple-600">
          <h2 className="text-2xl font-bold mb-4 text-purple-300">Hook Rules</h2>
          <ul className="space-y-3 text-gray-200">
            <li>🚫 Only call hooks at the top level</li>
            <li>🚫 Don't call hooks inside loops/conditions</li>
            <li>🚫 Only call hooks from React functions</li>
            <li>✅ Can create custom hooks</li>
            <li>✅ Can combine multiple hooks</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Common Hooks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-blue-400 mb-2">useState</h3>
            <p className="text-sm text-gray-300">Manage component state</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-green-400 mb-2">useEffect</h3>
            <p className="text-sm text-gray-300">Handle side effects</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-amber-400 mb-2">useContext</h3>
            <p className="text-sm text-gray-300">Access global state</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-pink-400 mb-2">useRef</h3>
            <p className="text-sm text-gray-300">Access DOM directly</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-cyan-400 mb-2">useMemo</h3>
            <p className="text-sm text-gray-300">Optimize performance</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-indigo-400 mb-2">useCallback</h3>
            <p className="text-sm text-gray-300">Memoize functions</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Example' : 'Show Example'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// Basic Hook Example - useState

import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

// Hooks at top level ✅
function MyComponent() {
  const [count, setCount] = useState(0); // ✅ Top level
  
  if (count > 0) {
    // ❌ WRONG - Don't call hooks here
    // const [data, setData] = useState(null);
  }
  
  return <div>{count}</div>;
}`}
          </pre>
        </div>
      )}

      <div className="bg-amber-900/30 border border-amber-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-amber-400 mb-3">💡 Key Takeaways</h3>
        <ul className="space-y-2 text-gray-200">
          <li>• Hooks are functions that use React features in functional components</li>
          <li>• Always call hooks at the top level of components</li>
          <li>• Each hook has specific purpose (state, effects, context, refs, etc.)</li>
          <li>• Custom hooks can be created to share logic between components</li>
          <li>• Hooks replaced class components for most use cases</li>
        </ul>
      </div>
    </div>
  );
}
