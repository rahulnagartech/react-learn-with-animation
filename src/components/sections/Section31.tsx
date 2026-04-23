import React, { useState } from 'react';

export default function Section31() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          📦 Code Splitting - Optimize Bundle
        </h1>
        <p className="text-lg text-gray-300">
          Split your bundle into smaller chunks to improve load performance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-900/30 p-6 rounded-lg border border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-400">❌ Without Code Splitting</h2>
          <div className="space-y-3">
            <div className="bg-slate-900 p-3 rounded text-sm">
              <p className="text-gray-400 text-xs mb-2">Bundle:</p>
              <p className="text-yellow-300 font-bold">main.js (500KB)</p>
            </div>
            <p className="text-gray-300 text-sm">Issues:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Large initial bundle</li>
              <li>• Slow first load</li>
              <li>• All code downloaded upfront</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-900/30 p-6 rounded-lg border border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-400">✅ With Code Splitting</h2>
          <div className="space-y-3">
            <div className="bg-slate-900 p-3 rounded text-sm">
              <p className="text-gray-400 text-xs mb-2">Bundles:</p>
              <p className="text-green-300 font-bold">main.js (100KB)</p>
              <p className="text-blue-300 font-bold">chunk1.js (150KB)</p>
              <p className="text-purple-300 font-bold">chunk2.js (250KB)</p>
            </div>
            <p className="text-gray-300 text-sm">Benefits:</p>
            <ul className="text-gray-400 text-sm space-y-1 ml-4">
              <li>• Smaller initial load</li>
              <li>• Faster first paint</li>
              <li>• Load on demand</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Code Splitting Methods</h2>
        <div className="space-y-4">
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-blue-400 mb-2">Route-Based Splitting</h3>
            <p className="text-sm text-gray-300">Split by route - most common approach</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-purple-400 mb-2">Component-Based Splitting</h3>
            <p className="text-sm text-gray-300">Split heavy components with React.lazy()</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-pink-400 mb-2">Vendor Splitting</h3>
            <p className="text-sm text-gray-300">Separate node_modules from app code</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-cyan-400 mb-2">Dynamic Imports</h3>
            <p className="text-sm text-gray-300">Use import() for dynamic loading</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// Route-based splitting with React Router
import { Routes, Route, Suspense, lazy } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
}

// Dynamic imports
async function loadComponent() {
  const module = await import('./HeavyComponent');
  return module.default;
}

// Webpack config for vendor splitting
// webpack.config.js
optimization: {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\\\/]node_modules[\\\\/]/,
        name: 'vendors',
        priority: 10,
      },
    },
  },
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">📊 Impact</h3>
          <p className="text-sm text-gray-200 mb-2">Initial load: 500KB → 100KB (80% reduction)</p>
          <p className="text-sm text-gray-200">Load time: 3s → 0.6s (5x faster)</p>
        </div>

        <div className="bg-green-900/20 border border-green-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-400 mb-3">🛠️ Tools</h3>
          <p className="text-sm text-gray-200">Webpack, Vite, Parcel, and bundlers handle this automatically</p>
        </div>
      </div>
    </div>
  );
}
