import { useState } from 'react';

export default function Section6() {
  const [showClass, setShowClass] = useState(false);
  const [renderCount, setRenderCount] = useState(0);

  // Simple Functional Component Example
  function Greeting({ name }: { name: string }) {
    return (
      <div className="text-center p-4 bg-blue-900 rounded border border-blue-700">
        <p className="text-blue-300 font-semibold">Hello, {name}! 👋</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-lg p-8 border border-orange-700">
        <h2 className="text-3xl font-bold text-orange-300 mb-4">Components</h2>
        <p className="text-gray-200 text-lg">
          Components are the building blocks of React. They're reusable pieces of UI that manage their own logic and rendering.
        </p>
      </div>

      {/* Functional Components */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-400">✅ Functional Components (Preferred)</h3>
        
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-blue-300 mb-3">Code</h4>
          <div className="bg-gray-900 rounded p-4 code-block mb-4">
            <code className="text-blue-300">
{`function Greeting({ name }) {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
}

export default Greeting;`}
            </code>
          </div>
          
          <h4 className="text-lg font-bold text-emerald-300 mb-3">✨ Benefits</h4>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Simpler syntax</li>
            <li>✓ Easier to test</li>
            <li>✓ Can use Hooks (useState, useEffect)</li>
            <li>✓ Better performance</li>
            <li>✓ Recommended for new projects</li>
          </ul>
        </div>

        <h4 className="text-lg font-bold text-amber-400 mt-6 mb-3">Live Example</h4>
        <Greeting name="React Learner" />
      </div>

      {/* Class Components */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-purple-400">⏳ Class Components (Legacy)</h3>
          <button
            onClick={() => setShowClass(!showClass)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
          >
            {showClass ? 'Hide' : 'Show'} Class Example
          </button>
        </div>

        {showClass && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInLeft">
            <h4 className="text-lg font-bold text-purple-300 mb-3">Code (Using Class Syntax)</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300">
{`class Greeting extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}

export default Greeting;`}
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              ⚠️ Class components are still supported but functional components with hooks are preferred for new projects.
            </p>
          </div>
        )}
      </div>

      {/* Component Rendering */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">🔄 Component Rendering</h3>
        <p className="text-gray-300 mb-4">
          When a component renders, React calls the function and displays the returned JSX. Click the button to see it re-render:
        </p>
        
        <div className="bg-gray-900 rounded p-6 border border-gray-700 mb-4">
          <p className="text-gray-300 mb-3">Render Count: <span className="text-yellow-400 font-bold text-lg">{renderCount}</span></p>
          <button
            onClick={() => setRenderCount(renderCount + 1)}
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded transition-colors"
          >
            Trigger Re-render
          </button>
          <p className="text-gray-400 text-sm mt-4">
            Every time you click, the component function runs again, creating a new render cycle.
          </p>
        </div>

        <div className="bg-blue-900 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm">
            <strong>Key Concept:</strong> React components are just functions that return JSX. They can be called multiple times as state or props change.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg p-4 border border-blue-700">
          <p className="text-blue-300 font-bold mb-2">🧩 Composition</p>
          <p className="text-gray-300 text-sm">Build complex UIs by combining simple components together.</p>
        </div>
        <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-4 border border-purple-700">
          <p className="text-purple-300 font-bold mb-2">🔀 Reusability</p>
          <p className="text-gray-300 text-sm">Write once, use many times. Components reduce code duplication.</p>
        </div>
      </div>
    </div>
  );
}
