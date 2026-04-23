import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function NestedComponent() {
  const theme = useContext(ThemeContext);
  return (
    <div className={`p-4 rounded border-2 ${theme === 'dark' ? 'bg-slate-800 border-slate-600 text-white' : 'bg-amber-100 border-amber-400 text-black'}`}>
      <p>Current Theme: <strong>{theme}</strong></p>
      <p>This value came from context without prop drilling!</p>
    </div>
  );
}

function ChildComponent() {
  return <NestedComponent />;
}

export default function Section20() {
  const [theme, setTheme] = useState('dark');
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          🌍 useContext Hook - Global State
        </h1>
        <p className="text-lg text-gray-300">
          useContext lets you subscribe to React context without introducing nesting hell (prop drilling).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-600">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Theme Context Demo</h2>
          <div className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setTheme('dark')}
                className={`flex-1 px-4 py-2 rounded font-semibold transition ${theme === 'dark' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-gray-300'}`}
              >
                Dark
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`flex-1 px-4 py-2 rounded font-semibold transition ${theme === 'light' ? 'bg-amber-500 text-white' : 'bg-slate-700 text-gray-300'}`}
              >
                Light
              </button>
            </div>
            <ThemeContext.Provider value={theme}>
              <ChildComponent />
            </ThemeContext.Provider>
          </div>
        </div>

        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Without Context (Prop Drilling)</h2>
          <p className="text-gray-300 mb-4">❌ Passing props through every level:</p>
          <code className="block bg-slate-900 p-3 rounded text-sm text-yellow-300 mb-4 overflow-x-auto">
            {`<Parent theme={theme}>\n  <Child theme={theme}>\n    <Nested theme={theme} />\n  </Child>\n</Parent>`}
          </code>
          <p className="text-gray-300">Tedious and hard to maintain!</p>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Context API Steps</h2>
        <div className="space-y-3">
          <div className="flex gap-4">
            <div className="bg-emerald-600/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">1</div>
            <div>
              <h3 className="font-bold text-white mb-1">Create Context</h3>
              <code className="text-cyan-300 text-sm bg-slate-900 p-2 rounded">const MyContext = createContext();</code>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-emerald-600/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">2</div>
            <div>
              <h3 className="font-bold text-white mb-1">Provide Value</h3>
              <code className="text-cyan-300 text-sm bg-slate-900 p-2 rounded">{`<MyContext.Provider value={data}>`}</code>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-emerald-600/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">3</div>
            <div>
              <h3 className="font-bold text-white mb-1">Consume Value</h3>
              <code className="text-cyan-300 text-sm bg-slate-900 p-2 rounded">const value = useContext(MyContext);</code>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { createContext, useContext } from 'react';

// Step 1: Create Context
const UserContext = createContext();

// Step 2: Create Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

// Step 3: Use Context in Component
function UserProfile() {
  const { user, setUser } = useContext(UserContext);
  
  return (
    <div>
      {user ? <p>Hello, {user.name}</p> : <p>Not logged in</p>}
    </div>
  );
}

// Step 4: Wrap App with Provider
function App() {
  return (
    <UserProvider>
      <UserProfile />
    </UserProvider>
  );
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">✅ Use Cases</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>✓ Theme switching (dark/light)</li>
            <li>✓ User authentication</li>
            <li>✓ Language/Locale settings</li>
            <li>✓ App-wide notifications</li>
            <li>✓ Global UI state</li>
          </ul>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ When Not to Use</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Complex state logic → Use Redux</li>
            <li>• Frequently changing values → Performance issues</li>
            <li>• Many consuming components → Consider splitting context</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
