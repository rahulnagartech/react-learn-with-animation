import React, { useState, useCallback } from 'react';

interface ChildProps {
  onButtonClick: () => void;
  count: number;
}

const Child = React.memo(({ onButtonClick, count }: ChildProps) => {
  console.log('Child rendered');
  return (
    <div className="bg-blue-900/30 p-4 rounded border border-blue-600 mt-4">
      <p className="text-gray-300">Child component rendered</p>
      <p className="text-gray-300">Count from parent: <span className="font-bold text-blue-300">{count}</span></p>
      <button
        onClick={onButtonClick}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Call Parent Function
      </button>
    </div>
  );
});

export default function Section22() {
  const [count, setCount] = useState(0);
  const [showCode, setShowCode] = useState(false);

  // Without useCallback - new function every render
  const handleClickWithout = () => {
    setCount(count + 1);
  };

  // With useCallback - same function instance unless deps change
  const handleClickWith = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
          🔄 useCallback Hook - Memoize Functions
        </h1>
        <p className="text-lg text-gray-300">
          useCallback memoizes a function so child components don't re-render unnecessarily.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-indigo-900/30 p-6 rounded-lg border border-indigo-600">
          <h2 className="text-2xl font-bold mb-4 text-indigo-400">Without useCallback</h2>
          <p className="text-sm text-gray-400 mb-4">New function every render → Child re-renders</p>
          <p className="text-gray-300 mb-4">Count: <span className="font-bold text-indigo-300">{count}</span></p>
          <button
            onClick={handleClickWithout}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-semibold"
          >
            Increment (Watch Console)
          </button>
          <Child onButtonClick={handleClickWithout} count={count} />
        </div>

        <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-600">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">With useCallback</h2>
          <p className="text-sm text-gray-400 mb-4">Same function → Child doesn't re-render</p>
          <p className="text-gray-300 mb-4">Count: <span className="font-bold text-cyan-300">{count}</span></p>
          <button
            onClick={handleClickWith}
            className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 transition font-semibold"
          >
            Increment (Check Console)
          </button>
          <Child onButtonClick={handleClickWith} count={count} />
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">useCallback Dependency Array</h2>
        <div className="space-y-3 text-gray-200">
          <p>useCallback creates a memoized version of the callback that only changes if dependencies change:</p>
          <code className="block bg-slate-900 p-4 rounded text-cyan-300 text-sm overflow-x-auto">
            {'const memoizedCallback = useCallback(() => { ... }, [dependency])'}
          </code>
          <p className="text-sm text-gray-400 mt-3">Dependencies work like useEffect - function recreated when they change</p>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleClick = () => {
    setCount(count + 1);
  };

  // With useCallback - function stable across renders
  const memoizedClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty deps = never recreate

  return (
    <div>
      <p>Count: {count}</p>
      {/* Pass memoized function to child */}
      <Child onClick={memoizedClick} />
    </div>
  );
}

// Child component wrapped with React.memo
const Child = React.memo(({ onClick }) => {
  console.log('Rendering child');
  return <button onClick={onClick}>Click</button>;
});`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-green-900/20 border border-green-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-400 mb-3">✅ Use With React.memo</h3>
          <p className="text-sm text-gray-200">useCallback is most useful when passed to memoized child components to prevent unnecessary re-renders.</p>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ Don't Overuse</h3>
          <p className="text-sm text-gray-200">Only use useCallback when passing to memoized components or as dependency of other hooks.</p>
        </div>
      </div>
    </div>
  );
}
