import React, { useState } from 'react';

class ErrorBoundary extends React.Component<any, { hasError: boolean; error: null | Error }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.log('Error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-900/30 p-6 rounded border border-red-600">
          <h2 className="text-2xl font-bold text-red-400 mb-3">❌ Something went wrong!</h2>
          <details className="text-gray-300 text-sm">
            <summary>Error details</summary>
            <pre className="mt-2 bg-slate-900 p-3 rounded overflow-auto text-red-300">
              {this.state.error?.toString()}
            </pre>
          </details>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function ProblematicComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('This is a controlled error thrown by the component!');
  }

  return (
    <div className="bg-blue-900/30 p-6 rounded border border-blue-600">
      <h3 className="text-xl font-bold text-blue-400 mb-3">Normal Component</h3>
      <p className="text-gray-300 mb-4">This component works fine until you click the button below.</p>
      <button
        onClick={() => setThrowError(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Throw Error
      </button>
    </div>
  );
}

export default function Section32() {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
          🛡️ Error Boundaries - Catch Runtime Errors
        </h1>
        <p className="text-lg text-gray-300">
          Error Boundaries catch JavaScript errors in component tree, preventing entire app crash.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Protected Component</h2>
          <ErrorBoundary>
            <ProblematicComponent />
          </ErrorBoundary>
          <p className="text-sm text-gray-400 mt-4">Click button to throw error - it's caught!</p>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">What They Catch</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex gap-2">
              <span>✅</span>
              <span>Rendering errors</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span>Lifecycle method errors</span>
            </li>
            <li className="flex gap-2">
              <span>✅</span>
              <span>Constructor errors</span>
            </li>
            <li className="flex gap-2">
              <span>❌</span>
              <span>Event handlers (use try/catch)</span>
            </li>
            <li className="flex gap-2">
              <span>❌</span>
              <span>Async code (use try/catch)</span>
            </li>
            <li className="flex gap-2">
              <span>❌</span>
              <span>Server-side rendering</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-red-900/30 p-6 rounded-lg border border-red-600 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-red-400">Why Error Boundaries Matter</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-2xl">🚫</span>
            <div>
              <p className="text-white font-bold">Without Error Boundary</p>
              <p className="text-gray-300 text-sm">One component error → entire app crashes</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-white font-bold">With Error Boundary</p>
              <p className="text-gray-300 text-sm">Error contained → other features still work</p>
            </div>
          </div>
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
{`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  // Update state so next render shows fallback UI
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  // Log error details
  componentDidCatch(error, errorInfo) {
    console.error('Error caught:', error, errorInfo);
    // Can also log to service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

// Usage
function App() {
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">📍 Placement Strategy</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>✓ Top level (entire app)</li>
            <li>✓ Route level (per page)</li>
            <li>✓ Component level (risky features)</li>
            <li>✓ Feature level (specific areas)</li>
          </ul>
        </div>

        <div className="bg-purple-900/20 border border-purple-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-purple-400 mb-3">🔄 Recovery Options</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>✓ Show error message</li>
            <li>✓ Display fallback UI</li>
            <li>✓ Reload application</li>
            <li>✓ Log to monitoring service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
