import React, { useState } from 'react';

function TemperatureInput({ label, value, onChange }: { label: string; value: number; onChange: (temp: number) => void }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-300 mb-2">{label}:</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
      />
    </div>
  );
}

function BoilingInfo({ celsius }: { celsius: number }) {
  return (
    <div className={`p-4 rounded border-2 ${celsius >= 100 ? 'bg-red-900/30 border-red-600' : 'bg-blue-900/30 border-blue-600'}`}>
      <p className="text-gray-300">
        Temperature: <span className="font-bold">{celsius}°C</span>
      </p>
      <p className="text-gray-300 mt-2">
        {celsius >= 100 ? '🔥 Water is boiling!' : '❄️ Water is not boiling'}
      </p>
    </div>
  );
}

export default function Section25() {
  const [celsius, setCelsius] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          ⬆️ Lifting State Up - Sync Components
        </h1>
        <p className="text-lg text-gray-300">
          When multiple components need to share state, lift the state to their closest common parent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Temperature Converter</h2>
          <div className="space-y-4">
            <TemperatureInput 
              label="Celsius"
              value={celsius}
              onChange={setCelsius}
            />
            <TemperatureInput 
              label="Fahrenheit"
              value={fahrenheit}
              onChange={(f) => setCelsius((f - 32) * 5/9)}
            />
          </div>
        </div>

        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold mb-4 text-emerald-400">Status Display</h2>
          <BoilingInfo celsius={celsius} />
          <div className="mt-4 bg-slate-700/50 p-4 rounded">
            <p className="text-gray-300 text-sm">
              <span className="font-bold">Key Idea:</span> Parent holds state, children receive it as props
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-lg border border-yellow-600 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">When to Lift State</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-2xl">🚫</span>
            <div>
              <p className="text-white font-bold">Before: State in Both Components</p>
              <p className="text-gray-300 text-sm">Each component has separate state → out of sync</p>
            </div>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">✅</span>
            <div>
              <p className="text-white font-bold">After: State in Parent</p>
              <p className="text-gray-300 text-sm">Parent manages state, passes to children → always in sync</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// ❌ WRONG - State in both components
function CelsiusInput() {
  const [celsius, setCelsius] = useState(0);
  // They won't stay in sync
}

function FahrenheitInput() {
  const [fahrenheit, setFahrenheit] = useState(32);
  // Separate state
}

// ✅ CORRECT - Lift state to parent
function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9/5) + 32;

  return (
    <div>
      <CelsiusInput
        value={celsius}
        onChange={setCelsius}
      />
      <FahrenheitInput
        value={fahrenheit}
        onChange={(f) => setCelsius((f - 32) * 5/9)}
      />
    </div>
  );
}

function CelsiusInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
}`}
          </pre>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💡 Key Principle</h3>
        <p className="text-gray-200 mb-3">"Lifting state up is React's solution to component communication."</p>
        <ul className="space-y-2 text-gray-200 text-sm">
          <li>✓ State lives in closest common parent</li>
          <li>✓ Children communicate through parent</li>
          <li>✓ Single source of truth</li>
          <li>✓ Prevents bugs from state mismatch</li>
        </ul>
      </div>
    </div>
  );
}
