import React, { useState, Suspense, lazy } from 'react';

// Simulate lazy loading components
const HeavyComponent = lazy(() => 
  new Promise(resolve => 
    setTimeout(() => resolve({ default: () => (
      <div className="bg-blue-900/30 p-6 rounded border border-blue-600">
        <h3 className="text-xl font-bold text-blue-400 mb-2">Heavy Component Loaded!</h3>
        <p className="text-gray-300">This component was lazy loaded only when needed.</p>
      </div>
    )}), 2000)
  )
);

export default function Section30() {
  const [showHeavy, setShowHeavy] = useState(false);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ⚡ Lazy Loading & Code Splitting
        </h1>
        <p className="text-lg text-gray-300">
          Load components only when they're needed to improve initial load time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Benefits</h2>
          <ul className="space-y-3 text-gray-200">
            <li className="flex gap-3">
              <span>⚡</span>
              <span>Faster initial load</span>
            </li>
            <li className="flex gap-3">
              <span>📦</span>
              <span>Smaller bundle size</span>
            </li>
            <li className="flex gap-3">
              <span>🚀</span>
              <span>Better performance</span>
            </li>
            <li className="flex gap-3">
              <span>💾</span>
              <span>Reduced memory usage</span>
            </li>
            <li className="flex gap-3">
              <span>📱</span>
              <span>Better on slow networks</span>
            </li>
          </ul>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Demo</h2>
          <button
            onClick={() => setShowHeavy(!showHeavy)}
            className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded hover:opacity-90 transition font-semibold mb-4"
          >
            {showHeavy ? 'Unload Component' : 'Load Heavy Component'}
          </button>
          {showHeavy && (
            <Suspense fallback={<div className="text-gray-400 text-center py-8">⏳ Loading...</div>}>
              <HeavyComponent />
            </Suspense>
          )}
        </div>
      </div>

      <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-600 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">How It Works</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="bg-purple-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-purple-400">1</span>
            <div>
              <h3 className="font-bold text-white">Code Split</h3>
              <p className="text-gray-300 text-sm">Bundle divided into chunks</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="bg-purple-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-purple-400">2</span>
            <div>
              <h3 className="font-bold text-white">Load Only When Needed</h3>
              <p className="text-gray-300 text-sm">Download chunk on demand</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="bg-purple-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-purple-400">3</span>
            <div>
              <h3 className="font-bold text-white">Suspense Fallback</h3>
              <p className="text-gray-300 text-sm">Show loading state while downloading</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { lazy, Suspense } from 'react';

// Lazy load component
const HeavyComponent = lazy(() => 
  import('./HeavyComponent')
);

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Load Component
      </button>

      {show && (
        <Suspense fallback={<p>Loading...</p>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}

// Routes with lazy loading
<Routes>
  <Route 
    path="/dashboard" 
    element={<Suspense fallback={<p>...</p>}>
      <Dashboard />
    </Suspense>}
  />
</Routes>`}
          </pre>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-3">✅ Common Use Cases</h3>
        <ul className="space-y-2 text-gray-200">
          <li>• Route-based code splitting</li>
          <li>• Modal/Dialog components</li>
          <li>• Heavy data visualization</li>
          <li>• Third-party library integration</li>
        </ul>
      </div>
    </div>
  );
}
