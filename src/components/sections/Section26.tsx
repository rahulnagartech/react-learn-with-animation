import React, { useState } from 'react';

interface LoginFormProps {
  onSubmit: (data: { username: string; password: string }) => void;
}

function ControlledForm({ onSubmit }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded hover:opacity-90 transition font-semibold"
      >
        Login (Controlled)
      </button>
    </form>
  );
}

function UncontrolledForm() {
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Username: ${usernameRef.current?.value}, Password: ${passwordRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        ref={usernameRef}
        placeholder="Username"
        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white"
      />
      <input
        type="password"
        ref={passwordRef}
        placeholder="Password"
        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded text-white"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded hover:opacity-90 transition font-semibold"
      >
        Login (Uncontrolled)
      </button>
    </form>
  );
}

export default function Section26() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          🎮 Controlled vs Uncontrolled Components
        </h1>
        <p className="text-lg text-gray-300">
          Controlled components have React control their form data. Uncontrolled components let the DOM handle it.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-green-900/30 p-6 rounded-lg border border-green-600">
          <h2 className="text-2xl font-bold mb-4 text-green-400">Controlled Component</h2>
          <ControlledForm onSubmit={(data) => setFormData(data)} />
          <div className="mt-4 bg-slate-700/50 p-3 rounded text-sm">
            <p className="text-gray-400">Form Data:</p>
            <p className="text-green-300">{JSON.stringify(formData)}</p>
          </div>
        </div>

        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-600">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Uncontrolled Component</h2>
          <UncontrolledForm />
          <div className="mt-4 bg-slate-700/50 p-3 rounded text-sm">
            <p className="text-gray-400">Access form via useRef</p>
            <p className="text-blue-300">getValue from input.current.value</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-gray-200">
            <thead className="border-b border-slate-600">
              <tr>
                <th className="text-left py-2 px-3">Feature</th>
                <th className="text-left py-2 px-3">Controlled</th>
                <th className="text-left py-2 px-3">Uncontrolled</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-3">State management</td>
                <td className="text-green-400">React state</td>
                <td className="text-blue-400">DOM</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-3">Input validation</td>
                <td className="text-green-400">Easy</td>
                <td className="text-blue-400">Harder</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-2 px-3">Dynamic inputs</td>
                <td className="text-green-400">Simple</td>
                <td className="text-blue-400">Complex</td>
              </tr>
              <tr>
                <td className="py-2 px-3">Performance</td>
                <td className="text-green-400">More renders</td>
                <td className="text-blue-400">Fewer renders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// Controlled Component
function ControlledInput() {
  const [value, setValue] = useState('');
  
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Type here..."
    />
  );
}

// Uncontrolled Component
function UncontrolledInput() {
  const inputRef = useRef(null);
  
  const handleSubmit = () => {
    alert(inputRef.current.value);
  };
  
  return (
    <div>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}`}
          </pre>
        </div>
      )}

      <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-green-400 mb-3">✅ Best Practice</h3>
        <p className="text-gray-200 mb-2">Use <span className="font-bold text-green-300">Controlled Components</span> by default:</p>
        <ul className="space-y-1 text-gray-200 text-sm ml-4">
          <li>✓ Easier validation</li>
          <li>✓ Real-time feedback</li>
          <li>✓ Disable conditions based on data</li>
          <li>✓ Better React integration</li>
        </ul>
      </div>
    </div>
  );
}
