import React, { useState, useEffect } from 'react';

export default function Section18() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
  const [mounted, setMounted] = useState(false);
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log('Component mounted');
    
    return () => {
      console.log('Component will unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData('Data loaded from server!');
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          ⚙️ useEffect Hook - Side Effects
        </h1>
        <p className="text-lg text-gray-300">
          useEffect lets you perform side effects in functional components. It handles everything you'd do in componentDidMount, componentDidUpdate, and componentWillUnmount combined.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-900/30 p-6 rounded-lg border border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Component Status</h2>
          <div className="space-y-3">
            <p className={`px-4 py-2 rounded ${mounted ? 'bg-green-600/50 text-green-300' : 'bg-gray-700/50 text-gray-400'}`}>
              {mounted ? '✅ Component Mounted' : '⏳ Mounting...'}
            </p>
            <p className="text-lg">Count: <span className="font-bold text-emerald-400">{count}</span></p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded hover:opacity-90 transition font-semibold"
            >
              Increment (+1)
            </button>
          </div>
        </div>

        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Async Data Loading</h2>
          <div className="space-y-3">
            <p className="text-gray-300">Simulating API call with 2 second delay:</p>
            <div className={`px-4 py-3 rounded ${data ? 'bg-blue-600/50 text-blue-200' : 'bg-gray-700/50 text-gray-400'}`}>
              {data || '⏳ Loading data...'}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">useEffect Dependency Arrays</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-blue-400 mb-2">No Dependencies</h3>
            <p className="text-sm text-gray-300 mb-3">Runs after EVERY render</p>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{'useEffect(() => {})'}</code>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-green-400 mb-2">Empty Array []</h3>
            <p className="text-sm text-gray-300 mb-3">Runs ONCE on mount</p>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{'useEffect(() => {}, [])'}</code>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-purple-400 mb-2">With Dependencies</h3>
            <p className="text-sm text-gray-300 mb-3">Runs when deps change</p>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{'useEffect(() => {}, [dep])'}</code>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code Example' : 'Show Code Example'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Runs once on mount (like componentDidMount)
  useEffect(() => {
    // Fetch data
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []); // Empty dependency array

  // Cleanup function (like componentWillUnmount)
  useEffect(() => {
    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
}`}
          </pre>
        </div>
      )}

      <div className="bg-amber-900/30 border border-amber-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-amber-400 mb-3">⚠️ Common Side Effects</h3>
        <ul className="space-y-2 text-gray-200">
          <li>✅ Fetching data from API</li>
          <li>✅ Setting up event listeners</li>
          <li>✅ Timers and intervals</li>
          <li>✅ Updating document title</li>
          <li>✅ Managing subscriptions</li>
          <li>✅ Manual DOM manipulation</li>
        </ul>
      </div>
    </div>
  );
}
