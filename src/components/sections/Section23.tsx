import React, { useState } from 'react';

// Custom Hook - useFetch
function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        setTimeout(() => {
          setData({ id: 1, name: 'Sample Data' });
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Custom Hook - useLocalStorage
function useLocalStorage(key: string, initialValue: any) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue] as const;
}

export default function Section23() {
  const { data, loading } = useFetch('/api/data');
  const [savedText, setSavedText] = useLocalStorage('myText', 'Hello');
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
          🎣 Custom Hooks - Reuse Logic
        </h1>
        <p className="text-lg text-gray-300">
          Custom hooks are JavaScript functions that use React hooks to extract component logic into reusable functions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-orange-900/30 p-6 rounded-lg border border-orange-600">
          <h2 className="text-2xl font-bold mb-4 text-orange-400">useFetch Hook</h2>
          <div className="space-y-3">
            {loading ? (
              <p className="text-gray-400">⏳ Loading data...</p>
            ) : (
              <>
                <p className="text-gray-300">✅ Data fetched:</p>
                <div className="bg-slate-700 p-3 rounded text-cyan-300 text-sm overflow-auto">
                  {JSON.stringify(data, null, 2)}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-pink-900/30 p-6 rounded-lg border border-pink-600">
          <h2 className="text-2xl font-bold mb-4 text-pink-400">useLocalStorage Hook</h2>
          <div className="space-y-3">
            <input
              type="text"
              value={savedText}
              onChange={(e) => setSavedText(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white"
            />
            <p className="text-sm text-gray-400">Saved in localStorage: {savedText}</p>
            <p className="text-xs text-gray-500">Try refreshing the page - value persists!</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Creating Custom Hooks</h2>
        <div className="space-y-4">
          <div className="flex gap-3">
            <span className="bg-emerald-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">1</span>
            <div>
              <h3 className="font-bold text-white">Name starts with "use"</h3>
              <p className="text-gray-400 text-sm">useFetch, useLocalStorage, useAuth, etc.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-emerald-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">2</span>
            <div>
              <h3 className="font-bold text-white">Use React hooks inside</h3>
              <p className="text-gray-400 text-sm">useState, useEffect, useContext, etc.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-emerald-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">3</span>
            <div>
              <h3 className="font-bold text-white">Return values/functions</h3>
              <p className="text-gray-400 text-sm">Return state, functions, or objects</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-emerald-600/30 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-emerald-400">4</span>
            <div>
              <h3 className="font-bold text-white">Reuse anywhere</h3>
              <p className="text-gray-400 text-sm">Use in multiple components</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`// Custom Hook - useFetch
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Using custom hook
function MyComponent() {
  const { data, loading, error } = useFetch('/api/users');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  
  return <div>{data.name}</div>;
}`}
          </pre>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-3">✅ Common Custom Hooks</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-200 text-sm">
          <li>• useLocalStorage - Persist state</li>
          <li>• useFetch - Data fetching</li>
          <li>• useAuth - Authentication</li>
          <li>• useForm - Form handling</li>
          <li>• usePrevious - Track previous value</li>
          <li>• useDebounce - Debounce values</li>
        </ul>
      </div>
    </div>
  );
}
