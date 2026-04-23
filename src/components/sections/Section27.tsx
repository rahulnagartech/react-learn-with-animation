import React, { useState } from 'react';

function Level3({ theme }: { theme: string }) {
  return (
    <div className={`p-4 rounded border-2 ${theme === 'dark' ? 'bg-slate-700 border-slate-600' : 'bg-yellow-100 border-yellow-400'}`}>
      <p className="text-sm">Level 3 - Finally got the prop!</p>
      <p className="font-bold">{theme}</p>
    </div>
  );
}

function Level2({ theme }: { theme: string }) {
  return (
    <div className="p-4 rounded border border-blue-600 mb-4">
      <p className="text-sm text-gray-300">Level 2 - Passing prop down...</p>
      <Level3 theme={theme} />
    </div>
  );
}

function Level1({ theme }: { theme: string }) {
  return (
    <div className="p-4 rounded border border-green-600 mb-4">
      <p className="text-sm text-gray-300">Level 1 - Received prop...</p>
      <Level2 theme={theme} />
    </div>
  );
}

export default function Section27() {
  const [theme, setTheme] = useState('dark');
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          ⛓️ Prop Drilling - The Problem
        </h1>
        <p className="text-lg text-gray-300">
          Prop drilling is passing data through many intermediate components. It becomes tedious and hard to maintain.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-900/30 p-6 rounded-lg border border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-400">❌ Prop Drilling Problem</h2>
          <p className="text-gray-300 mb-4">Passing `theme` through 3 levels:</p>
          <Level1 theme={theme} />
          <p className="text-sm text-gray-400 mt-4">Notice how Level 2 doesn't even use the prop, just passes it down.</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Solutions</h2>
          <div className="space-y-3">
            <div className="p-3 bg-slate-700/50 rounded border border-slate-600">
              <h3 className="font-bold text-blue-400 mb-1">1. Context API</h3>
              <p className="text-sm text-gray-300">Skip intermediate components</p>
            </div>
            <div className="p-3 bg-slate-700/50 rounded border border-slate-600">
              <h3 className="font-bold text-green-400 mb-1">2. Redux/State Management</h3>
              <p className="text-sm text-gray-300">Global state access</p>
            </div>
            <div className="p-3 bg-slate-700/50 rounded border border-slate-600">
              <h3 className="font-bold text-purple-400 mb-1">3. Component Composition</h3>
              <p className="text-sm text-gray-300">Restructure components</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Change Theme</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setTheme('dark')}
            className={`flex-1 px-4 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-slate-600 text-white' : 'bg-slate-700 text-gray-300'}`}
          >
            Dark
          </button>
          <button
            onClick={() => setTheme('light')}
            className={`flex-1 px-4 py-2 rounded font-semibold transition ${theme === 'light' ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-gray-300'}`}
          >
            Light
          </button>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// ❌ PROP DRILLING - Hard to maintain
function Parent() {
  const [theme] = useState('dark');
  return <Level1 theme={theme} />;
}

function Level1({ theme }) {
  return <Level2 theme={theme} />;
}

function Level2({ theme }) {
  return <Level3 theme={theme} />;
}

// Level3 finally uses it!
function Level3({ theme }) {
  return <p>{theme}</p>;
}

// ✅ SOLUTION - Use Context
const ThemeContext = createContext();

function Parent() {
  const [theme] = useState('dark');
  return (
    <ThemeContext.Provider value={theme}>
      <Level1 />
    </ThemeContext.Provider>
  );
}

function Level1() {
  return <Level2 />;
}

function Level2() {
  return <Level3 />;
}

function Level3() {
  const theme = useContext(ThemeContext);
  return <p>{theme}</p>;
}`}
          </pre>
        </div>
      )}

      <div className="bg-amber-900/20 border border-amber-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-amber-400 mb-3">⚠️ When It's a Problem</h3>
        <ul className="space-y-2 text-gray-200">
          <li>✓ More than 2-3 levels deep</li>
          <li>✓ Intermediate components don't need the data</li>
          <li>✓ Global state (theme, user, language)</li>
          <li>✓ Hard to refactor later</li>
        </ul>
      </div>
    </div>
  );
}
