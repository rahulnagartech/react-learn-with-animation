import React, { useState, useMemo } from 'react';

export default function Section21() {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [showCode, setShowCode] = useState(false);

  // Without useMemo - recalculates on every render
  const expensiveCalculation = () => {
    console.log('🔴 Expensive calculation running...');
    let result = multiplier;
    for (let i = 0; i < 50000000; i++) {
      result += multiplier * 0.00000001;
    }
    return Math.floor(result);
  };

  // With useMemo - only recalculates when multiplier changes
  const memoizedResult = useMemo(() => {
    console.log('🟢 Memoized calculation running...');
    let result = multiplier;
    for (let i = 0; i < 50000000; i++) {
      result += multiplier * 0.00000001;
    }
    return Math.floor(result);
  }, [multiplier]);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          💾 useMemo Hook - Cache Calculations
        </h1>
        <p className="text-lg text-gray-300">
          useMemo memoizes expensive computations and only recalculates when dependencies change.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-900/30 p-6 rounded-lg border border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Without useMemo</h2>
          <p className="text-sm text-gray-400 mb-4">Watch console - recalculates every render!</p>
          <div className="space-y-3">
            <p className="text-gray-300">Calculation Result: <span className="font-bold text-red-300">{expensiveCalculation()}</span></p>
            <p className="text-gray-300">Count: <span className="font-bold text-red-300">{count}</span></p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold"
            >
              Increment Count (causes re-render)
            </button>
          </div>
        </div>

        <div className="bg-green-900/30 p-6 rounded-lg border border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-400">With useMemo</h2>
          <p className="text-sm text-gray-400 mb-4">Only recalculates when multiplier changes!</p>
          <div className="space-y-3">
            <p className="text-gray-300">Memoized Result: <span className="font-bold text-green-300">{memoizedResult}</span></p>
            <p className="text-gray-300">Count: <span className="font-bold text-green-300">{count}</span></p>
            <button
              onClick={() => setCount(count + 1)}
              className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
            >
              Increment Count (no recalculation!)
            </button>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Change Multiplier (Triggers Recalculation)</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <input
              type="range"
              min="1"
              max="10"
              value={multiplier}
              onChange={(e) => setMultiplier(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="flex justify-between text-xs text-gray-400">
              <span>1</span>
              <span>10</span>
            </div>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <p className="text-gray-300 text-lg">Multiplier Value: <span className="font-bold text-cyan-300 text-2xl">{multiplier}</span></p>
          </div>
          <p className="text-sm text-gray-400">👉 Drag the slider to change multiplier - watch console logs to see recalculation!</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-lg font-bold text-blue-400 mb-4">When to Use useMemo</h2>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>✓ Expensive calculations</li>
            <li>✓ Large list processing</li>
            <li>✓ Complex data transformations</li>
            <li>✓ Passing objects/arrays to memo components</li>
            <li>✗ Simple calculations (overhead &gt; benefit)</li>
          </ul>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-lg font-bold text-purple-400 mb-4">Performance Tip</h2>
          <p className="text-gray-200 text-sm mb-3">Only use useMemo when you have actual performance issues.</p>
          <p className="text-gray-400 text-sm italic">Premature optimization is the root of all evil!</p>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto">
          <pre className="text-gray-300">
{`import { useMemo } from 'react';

function DataProcessor({ items, filter }) {
  // Without useMemo - recalculates every render
  // const filtered = items.filter(item => 
  //   item.name.includes(filter)
  // );

  // With useMemo - only recalculates when items or filter changes
  const filtered = useMemo(() => {
    console.log('Processing...');
    return items.filter(item => 
      item.name.includes(filter)
    );
  }, [items, filter]);

  return (
    <div>
      {filtered.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}`}
          </pre>
        </div>
      )}
    </div>
  );
}
