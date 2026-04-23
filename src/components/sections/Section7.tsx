import { useState } from 'react';

export default function Section7() {
  const [showJSOutput, setShowJSOutput] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-lg p-8 border border-green-700">
        <h2 className="text-3xl font-bold text-green-300 mb-4">JSX</h2>
        <p className="text-gray-200 text-lg">
          JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes React code more readable and intuitive.
        </p>
      </div>

      {/* What is JSX */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">📝 What is JSX?</h3>
        <p className="text-gray-300 mb-4">
          JSX looks like HTML, but it's actually JavaScript. React transforms JSX into regular JavaScript function calls.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* JSX Syntax */}
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-3">✨ JSX Syntax</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300">
{`// JSX code
const element = (
  <div className="card">
    <h1>Hello World</h1>
    <p>Welcome to React</p>
  </div>
);`}
              </code>
            </div>
          </div>

          {/* Compiled Output */}
          <div>
            <h4 className="text-lg font-bold text-amber-400 mb-3">🔧 Compiled JavaScript</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300">
{`// Actual JavaScript
const element = React.createElement(
  'div',
  { className: 'card' },
  React.createElement(
    'h1',
    null,
    'Hello World'
  ),
  // ... more elements
);`}
              </code>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowJSOutput(!showJSOutput)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
        >
          {showJSOutput ? 'Hide' : 'Show'} Full Transformation
        </button>

        {showJSOutput && (
          <div className="mt-4 p-4 bg-gray-900 rounded border border-green-500 animate-slideInLeft">
            <p className="text-gray-300 mb-2 font-semibold">The transformation happens automatically:</p>
            <div className="bg-gray-800 rounded p-3 text-sm text-gray-300 font-mono">
              <p className="text-green-400 mb-2">JSX Code:</p>
              <p>&lt;Button onClick=&quot;handleClick&quot;&gt;Click me&lt;/Button&gt;</p>
              <p className="text-yellow-400 mt-3 mb-2">↓ (Babel transforms it to) ↓</p>
              <p className="text-blue-400">React.createElement(Button, &#123;onClick: handleClick&#125;, "Click me")</p>
            </div>
          </div>
        )}
      </div>

      {/* JSX Rules */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-400">📋 JSX Rules</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">✅ Valid JSX</h4>
            <div className="space-y-3">
              <div className="bg-gray-900 rounded p-3 code-block text-sm">
                <code className="text-green-400">
{`const item = <div>Item</div>;

const list = (
  <>
    <Item />
    <Item />
  </>
);`}
                </code>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-red-400 mb-3">❌ Invalid JSX</h4>
            <div className="space-y-3">
              <div className="bg-gray-900 rounded p-3 code-block text-sm">
                <code className="text-red-400">
{`// Multiple root elements
const items = (
  <Item />
  <Item />
);

// Missing return
function Card() {
  <div>...</div>
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Rules */}
      <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-6 border border-yellow-700">
        <h3 className="text-lg font-bold text-yellow-300 mb-4">⚡ Key JSX Rules</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex gap-3">
            <span className="text-emerald-400">1.</span>
            <span><strong>Single Root Element:</strong> Every JSX must have ONE root element (use Fragment <code className="bg-gray-800 px-2 rounded text-blue-300">&lt;&gt;&lt;/&gt;</code> if needed)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400">2.</span>
            <span><strong>Close All Tags:</strong> All elements must be properly closed (self-closing tags for empty elements)</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400">3.</span>
            <span><strong>className Not class:</strong> Use <code className="bg-gray-800 px-2 rounded text-blue-300">className</code> instead of <code className="bg-gray-800 px-2 rounded text-blue-300">class</code></span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400">4.</span>
            <span><strong>Expressions in Curly Braces:</strong> Use <code className="bg-gray-800 px-2 rounded text-blue-300">{'{variable}'}</code> to embed JavaScript</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400">5.</span>
            <span><strong>camelCase for Attributes:</strong> Use <code className="bg-gray-800 px-2 rounded text-blue-300">onClick</code>, <code className="bg-gray-800 px-2 rounded text-blue-300">onChange</code>, not <code className="bg-gray-800 px-2 rounded text-blue-300">onclick</code></span>
          </li>
        </ul>
      </div>

      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700">
        <h3 className="text-lg font-bold text-blue-300 mb-2">💡 JSX is Just Syntactic Sugar</h3>
        <p className="text-gray-300 text-sm">
          JSX makes React code look like HTML, but it compiles to JavaScript function calls. This makes code more readable and easier to understand than writing React.createElement() directly.
        </p>
      </div>
    </div>
  );
}
