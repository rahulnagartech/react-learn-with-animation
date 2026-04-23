import { useState } from 'react';

export default function Section3() {
  const [showReactWay, setShowReactWay] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-900 to-cyan-900 rounded-lg p-8 border border-blue-700">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">React vs Vanilla JavaScript</h2>
        <p className="text-gray-200 text-lg">
          Compare traditional DOM manipulation with React's declarative approach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vanilla JavaScript Way */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-amber-400 mb-4">❌ Vanilla JavaScript</h3>
          <div className="bg-gray-900 rounded p-4 mb-4 code-block">
            <code className="text-sm text-blue-300">
{`// Direct DOM manipulation
const button = document.getElementById('btn');
const counter = document.getElementById('count');

let count = 0;
button.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});`}
            </code>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✓ Direct and full control</li>
            <li>✗ Hard to manage state</li>
            <li>✗ Repetitive DOM queries</li>
            <li>✗ Error-prone updates</li>
            <li>✗ Difficult to scale</li>
          </ul>
        </div>

        {/* React Way */}
        <div className={`bg-gray-800 rounded-lg p-6 border transition-all duration-500 ${showReactWay ? 'border-emerald-600 shadow-lg shadow-emerald-500/50' : 'border-gray-700'}`}>
          <h3 className="text-xl font-bold text-emerald-400 mb-4">✅ React Way</h3>
          <div className="bg-gray-900 rounded p-4 mb-4 code-block">
            <code className="text-sm text-blue-300">
{`// Declarative UI
function Counter() {
  const [count, setCount] = 
    useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => 
        setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
            </code>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>✓ Automatic state management</li>
            <li>✓ No manual DOM updates</li>
            <li>✓ Reusable components</li>
            <li>✓ Easy to understand</li>
            <li>✓ Scales beautifully</li>
          </ul>
        </div>
      </div>

      <button
        onClick={() => setShowReactWay(!showReactWay)}
        className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {showReactWay ? '👈 Show Vanilla' : 'Show React Advantage →'}
      </button>

      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 border border-blue-700">
        <h3 className="text-lg font-bold text-blue-300 mb-3">Key Difference</h3>
        <div className="space-y-3 text-gray-300">
          <p>
            <strong>Vanilla JS:</strong> You tell the browser <em>"how"</em> to update the DOM step by step (imperative)
          </p>
          <p>
            <strong>React:</strong> You describe <em>"what"</em> the UI should look like (declarative), and React handles the updates
          </p>
          <p className="text-center text-amber-300 font-semibold mt-4">
            → React makes complex UIs much easier to manage! ←
          </p>
        </div>
      </div>
    </div>
  );
}
