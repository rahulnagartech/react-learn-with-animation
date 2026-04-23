import React, { useRef, useState } from 'react';

export default function Section19() {
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const [renders, setRenders] = useState(0);
  const [showCode, setShowCode] = useState(false);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const incrementCount = () => {
    countRef.current += 1;
    alert(`Ref count (won't cause re-render): ${countRef.current}`);
  };

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
          🔗 useRef Hook - Access DOM Directly
        </h1>
        <p className="text-lg text-gray-300">
          useRef lets you directly access DOM nodes and persist values without causing re-renders.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-600">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">Focus Input Example</h2>
          <div className="space-y-4">
            <input
              ref={inputRef}
              type="text"
              placeholder="Click button to focus me..."
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-400"
            />
            <button
              onClick={focusInput}
              className="w-full px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded hover:opacity-90 transition font-semibold"
            >
              Focus Input
            </button>
          </div>
        </div>

        <div className="bg-red-900/30 p-6 rounded-lg border border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Persistent Value (No Re-render)</h2>
          <div className="space-y-4">
            <p className="text-gray-300">Ref count: <span className="font-bold text-red-300">{countRef.current}</span></p>
            <p className="text-gray-400 text-sm">(Notice: it increases but doesn't trigger re-render)</p>
            <p className="text-gray-300">Component renders: <span className="font-bold text-emerald-300">{renders}</span></p>
            <button
              onClick={() => {
                incrementCount();
                setRenders(renders + 1);
              }}
              className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded hover:opacity-90 transition font-semibold"
            >
              Increment Ref Count
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">useRef vs useState</h2>
          <table className="w-full text-sm text-gray-200">
            <thead>
              <tr className="border-b border-slate-600">
                <th className="text-left py-2 px-2">Feature</th>
                <th className="text-left py-2 px-2">useRef</th>
                <th className="text-left py-2 px-2">useState</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-2">Triggers re-render</td>
                <td className="text-red-400">❌ No</td>
                <td className="text-green-400">✅ Yes</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-2">Mutable</td>
                <td className="text-green-400">✅ Yes</td>
                <td className="text-red-400">❌ No</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-2">Returns same object</td>
                <td className="text-green-400">✅ Yes</td>
                <td className="text-red-400">❌ No</td>
              </tr>
              <tr>
                <td className="py-2 px-2">DOM access</td>
                <td className="text-green-400">✅ Yes</td>
                <td className="text-red-400">❌ No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">useRef Use Cases</h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex gap-2">
              <span>📝</span>
              <span>Managing focus, text selection, media playback</span>
            </li>
            <li className="flex gap-2">
              <span>⏱️</span>
              <span>Triggering imperative animations</span>
            </li>
            <li className="flex gap-2">
              <span>🎬</span>
              <span>Integrating third-party DOM libraries</span>
            </li>
            <li className="flex gap-2">
              <span>💾</span>
              <span>Storing mutable values that don't affect render</span>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);
  const prevValueRef = useRef('');

  const focusInput = () => {
    // Access DOM directly
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    // Store previous value
    prevValueRef.current = e.target.value;
  };

  return (
    <>
      <input 
        ref={inputRef}
        onChange={handleChange}
        type="text"
      />
      <button onClick={focusInput}>
        Focus Input
      </button>
      <p>Previous: {prevValueRef.current}</p>
    </>
  );
}`}
          </pre>
        </div>
      )}

      <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-400 mb-3">✅ When to Use useRef</h3>
        <p className="text-gray-200">Use useRef when you need to store a value that:</p>
        <ul className="mt-3 space-y-1 text-gray-300 text-sm ml-4">
          <li>• Doesn't need to trigger re-renders</li>
          <li>• Needs to be updated frequently</li>
          <li>• Requires direct DOM access</li>
          <li>• Must persist across re-renders</li>
        </ul>
      </div>
    </div>
  );
}
