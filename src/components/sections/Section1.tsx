import { useState, useEffect } from 'react';

export default function Section1() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-8 border border-blue-700">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">What is React?</h2>
        <p className="text-gray-200 text-lg mb-6">
          React is a <span className="text-blue-400 font-semibold">JavaScript library</span> for building user interfaces with interactive components.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-500 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-3xl mb-3">⚛️</div>
          <h3 className="text-blue-300 font-bold mb-2">Component-Based</h3>
          <p className="text-gray-400 text-sm">
            Build encapsulated components that manage their own state, then compose them to make complex UIs.
          </p>
        </div>

        <div className={`bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-500 delay-100 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-3xl mb-3">🔄</div>
          <h3 className="text-purple-300 font-bold mb-2">Declarative</h3>
          <p className="text-gray-400 text-sm">
            Design simple views for each state in your application, and React efficiently updates and renders components.
          </p>
        </div>

        <div className={`bg-gray-800 rounded-lg p-6 border border-gray-700 transition-all duration-500 delay-200 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="text-3xl mb-3">💨</div>
          <h3 className="text-emerald-300 font-bold mb-2">Learn Once, Write Anywhere</h3>
          <p className="text-gray-400 text-sm">
            Develop new features without rewriting existing code. React can also render on the server.
          </p>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-amber-300 mb-4">💡 Key Concept</h3>
        <div className="space-y-3">
          <p className="text-gray-300">React uses a <span className="text-emerald-400 font-semibold">Virtual DOM</span> that improves application performance by minimizing direct manipulation of the DOM.</p>
          <p className="text-gray-300">When state changes, React updates the Virtual DOM, compares it with the previous version, and efficiently updates only the changed parts of the real DOM.</p>
        </div>
      </div>
    </div>
  );
}
