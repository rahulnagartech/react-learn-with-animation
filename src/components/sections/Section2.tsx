import { useState } from 'react';

export default function Section2() {
  const [showVirtualDOM, setShowVirtualDOM] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-lg p-8 border border-purple-700">
        <h2 className="text-3xl font-bold text-purple-300 mb-4">Why Use React?</h2>
        <p className="text-gray-200 text-lg">
          React solves real problems in modern web development with performance, maintainability, and developer experience.
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-blue-400 mb-3">🚀 Performance</h3>
          <p className="text-gray-300 mb-4">
            React's Virtual DOM ensures efficient updates. Instead of updating the entire DOM, React calculates the minimum changes needed.
          </p>
          <button
            onClick={() => setShowVirtualDOM(!showVirtualDOM)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            {showVirtualDOM ? 'Hide' : 'Show'} Virtual DOM Explanation
          </button>
          {showVirtualDOM && (
            <div className="mt-4 p-4 bg-gray-900 rounded border border-blue-500 animate-slideInLeft">
              <p className="text-gray-300 text-sm mb-2">
                <strong>DOM Update Process:</strong>
              </p>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>1. User interaction occurs</p>
                <p>2. State changes in React component</p>
                <p>3. React creates new Virtual DOM</p>
                <p>4. React compares (diffs) old and new Virtual DOM</p>
                <p>5. Only changed elements update in real DOM</p>
                <p>6. Browser re-renders only affected parts ✓</p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">🎯 Maintainability</h3>
          <p className="text-gray-300">
            Components are reusable, self-contained units with clear purposes. This makes code easier to understand, test, and maintain as projects grow.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-amber-400 mb-3">😊 Developer Experience</h3>
          <p className="text-gray-300">
            JSX, React DevTools, Hot Module Replacement (HMR), and a large ecosystem make development faster and more enjoyable.
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-pink-400 mb-3">🌍 Wide Adoption</h3>
          <p className="text-gray-300">
            Used by major companies like Facebook, Netflix, Airbnb, Uber, and thousands of startups. Huge ecosystem and community support.
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-lg p-6 border border-purple-700">
        <h3 className="text-lg font-bold text-purple-300 mb-2">✨ One-way Data Flow</h3>
        <p className="text-gray-300 text-sm">
          React follows a unidirectional data flow (parent to child through props), making debugging easier and applications more predictable.
        </p>
      </div>
    </div>
  );
}
