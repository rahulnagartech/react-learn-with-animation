import React, { useState } from 'react';

export default function Section24() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
          🔀 React Fragment - Clean DOM
        </h1>
        <p className="text-lg text-gray-300">
          React Fragments let you group elements without adding extra nodes to the DOM.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-red-900/30 p-6 rounded-lg border border-red-600">
          <h2 className="text-2xl font-bold mb-4 text-red-400">❌ Without Fragment</h2>
          <p className="text-gray-300 mb-3">Extra div in DOM:</p>
          <div className="bg-slate-900 p-3 rounded text-sm text-red-300 overflow-auto">
            <code>{`<div>
  <h1>Title</h1>
  <p>Content</p>
</div>`}</code>
          </div>
          <p className="text-gray-400 text-sm mt-3">DOM has extra wrapper div ⬆️</p>
        </div>

        <div className="bg-green-900/30 p-6 rounded-lg border border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-400">✅ With Fragment</h2>
          <p className="text-gray-300 mb-3">Clean DOM, no wrapper:</p>
          <div className="bg-slate-900 p-3 rounded text-sm text-green-300 overflow-auto">
            <code>{`<>
  <h1>Title</h1>
  <p>Content</p>
</>`}</code>
          </div>
          <p className="text-gray-400 text-sm mt-3">No extra div in DOM ⬆️</p>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-400">Fragment Syntax</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-blue-400 mb-2">Shorthand (&lt;&gt;)</h3>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{'<>\n  ...\n</>'}</code>
            <p className="text-xs text-gray-400 mt-2">Most common</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-purple-400 mb-2">Explicit</h3>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{`<React.Fragment>\n  ...\n</React.Fragment>`}</code>
            <p className="text-xs text-gray-400 mt-2">Full form</p>
          </div>
          <div className="bg-slate-700/50 p-4 rounded border border-slate-600">
            <h3 className="font-bold text-pink-400 mb-2">With Key</h3>
            <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300">{`<Fragment key={id}>\n  ...\n</Fragment>`}</code>
            <p className="text-xs text-gray-400 mt-2">In lists (need key)</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-900/30 p-6 rounded-lg border border-emerald-600 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Fragment Example</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-300 mb-2">Renders without wrapper element:</p>
            <>
              <h3 className="text-lg font-bold text-white">Title</h3>
              <p className="text-gray-400">Content without extra div!</p>
            </>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { Fragment } from 'react';

// Method 1: Shorthand <>
function Component1() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph</p>
      <button>Click me</button>
    </>
  );
}

// Method 2: Explicit Fragment
function Component2() {
  return (
    <Fragment>
      <h1>Title</h1>
      <p>Paragraph</p>
    </Fragment>
  );
}

// Method 3: With keys (for lists)
function ListItems({ items }) {
  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </Fragment>
      ))}
    </>
  );
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">✅ Benefits</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Cleaner DOM structure</li>
            <li>• No extra wrapper divs</li>
            <li>• Easier styling</li>
            <li>• Better semantics</li>
          </ul>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-amber-400 mb-3">📌 Use Cases</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Returning multiple elements</li>
            <li>• Rendering lists with multiple elements</li>
            <li>• Avoiding extra styling issues</li>
            <li>• Semantic HTML structure</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
