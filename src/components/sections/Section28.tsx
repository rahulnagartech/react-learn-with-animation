import React, { createContext, useContext, useState } from 'react';

const NotificationContext = createContext<{ message: string; type: string }>({ message: '', type: '' });

function NotificationDisplay() {
  const { message, type } = useContext(NotificationContext);
  if (!message) return null;
  
  const bgColor = type === 'success' ? 'bg-green-600' : type === 'error' ? 'bg-red-600' : 'bg-blue-600';
  return (
    <div className={`${bgColor} text-white p-4 rounded mb-4`}>
      {message}
    </div>
  );
}

export default function Section28() {
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');
  const [showCode, setShowCode] = useState(false);

  const showNotification = (msg: string, notificationType: string) => {
    setMessage(msg);
    setType(notificationType);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          🌍 Context API - Global State Management
        </h1>
        <p className="text-lg text-gray-300">
          Context API is React's built-in solution for managing global state without prop drilling.
        </p>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Notification System Demo</h2>
        <NotificationContext.Provider value={{ message, type }}>
          <NotificationDisplay />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <button
              onClick={() => showNotification('Success! Data saved.', 'success')}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-semibold"
            >
              ✅ Success
            </button>
            <button
              onClick={() => showNotification('Error! Something went wrong.', 'error')}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition font-semibold"
            >
              ❌ Error
            </button>
            <button
              onClick={() => showNotification('Loading... Please wait.', 'info')}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
            >
              ℹ️ Info
            </button>
          </div>
        </NotificationContext.Provider>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-blue-900/30 p-4 rounded border border-blue-600">
          <h3 className="font-bold text-blue-400 mb-2">1. Create Context</h3>
          <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300 overflow-auto">createContext()</code>
        </div>
        <div className="bg-purple-900/30 p-4 rounded border border-purple-600">
          <h3 className="font-bold text-purple-400 mb-2">2. Create Provider</h3>
          <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300 overflow-auto">{`<Context.Provider>`}</code>
        </div>
        <div className="bg-pink-900/30 p-4 rounded border border-pink-600">
          <h3 className="font-bold text-pink-400 mb-2">3. Use Hook</h3>
          <code className="text-xs bg-slate-900 p-2 rounded block text-cyan-300 overflow-auto">useContext()</code>
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

// 1. Create Context
const NotificationContext = createContext();

// 2. Create Provider Component
function NotificationProvider({ children }) {
  const [message, setMessage] = useState('');
  
  const notify = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };
  
  return (
    <NotificationContext.Provider value={{ message, notify }}>
      {children}
    </NotificationContext.Provider>
  );
}

// 3. Use in Components
function MyComponent() {
  const { message, notify } = useContext(NotificationContext);
  
  return (
    <div>
      {message && <p>{message}</p>}
      <button onClick={() => notify('Hello!')}>
        Show Message
      </button>
    </div>
  );
}

// 4. Wrap App
function App() {
  return (
    <NotificationProvider>
      <MyComponent />
    </NotificationProvider>
  );
}`}
          </pre>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-400 mb-3">✅ When to Use</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Theme switching</li>
            <li>• User authentication</li>
            <li>• Language settings</li>
            <li>• Notifications</li>
            <li>• Global UI state</li>
          </ul>
        </div>

        <div className="bg-amber-900/20 border border-amber-700 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-amber-400 mb-3">⚠️ Limitations</h3>
          <ul className="text-gray-200 space-y-2 text-sm">
            <li>• Performance: all consumers re-render</li>
            <li>• Complex state: use Redux instead</li>
            <li>• Frequent updates: performance issues</li>
            <li>• Not for component props</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
