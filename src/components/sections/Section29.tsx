import React, { useState } from 'react';

export default function Section29() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          🛣️ React Router - Client-Side Routing
        </h1>
        <p className="text-lg text-gray-300">
          React Router enables client-side routing for Single Page Applications without full page reloads.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg border border-slate-700 col-span-1 lg:col-span-3">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">Router Navigation</h2>
          <div className="flex gap-2 mb-6 flex-wrap">
            {['home', 'about', 'products', 'contact'].map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded transition font-semibold ${
                  currentPage === page 
                    ? 'bg-cyan-600 text-white' 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          {currentPage === 'home' && (
            <div className="bg-blue-900/30 p-6 rounded border border-blue-600">
              <h3 className="text-xl font-bold text-blue-400 mb-2">🏠 Home Page</h3>
              <p className="text-gray-300">Welcome to our website!</p>
            </div>
          )}
          {currentPage === 'about' && (
            <div className="bg-green-900/30 p-6 rounded border border-green-600">
              <h3 className="text-xl font-bold text-green-400 mb-2">ℹ️ About Us</h3>
              <p className="text-gray-300">Learn more about our company and mission.</p>
            </div>
          )}
          {currentPage === 'products' && (
            <div className="bg-purple-900/30 p-6 rounded border border-purple-600">
              <h3 className="text-xl font-bold text-purple-400 mb-2">🛍️ Products</h3>
              <p className="text-gray-300">Browse our amazing product catalog.</p>
            </div>
          )}
          {currentPage === 'contact' && (
            <div className="bg-pink-900/30 p-6 rounded border border-pink-600">
              <h3 className="text-xl font-bold text-pink-400 mb-2">📞 Contact</h3>
              <p className="text-gray-300">Get in touch with our support team.</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-blue-400 mb-2">BrowserRouter</h3>
          <p className="text-sm text-gray-300">Wrapper for app routing</p>
        </div>
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-green-400 mb-2">Routes</h3>
          <p className="text-sm text-gray-300">Container for Route components</p>
        </div>
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-purple-400 mb-2">Route</h3>
          <p className="text-sm text-gray-300">Map path to component</p>
        </div>
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-pink-400 mb-2">Link</h3>
          <p className="text-sm text-gray-300">Navigate without reload</p>
        </div>
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-cyan-400 mb-2">useParams</h3>
          <p className="text-sm text-gray-300">Access URL parameters</p>
        </div>
        <div className="bg-slate-800 p-4 rounded border border-slate-700">
          <h3 className="font-bold text-yellow-400 mb-2">useNavigate</h3>
          <p className="text-sm text-gray-300">Programmatic navigation</p>
        </div>
      </div>

      <button
        onClick={() => setShowCode(!showCode)}
        className="mb-4 px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>

      {showCode && (
        <div className="bg-slate-900 p-6 rounded-lg border border-slate-700 font-mono text-sm overflow-x-auto mb-8">
          <pre className="text-gray-300">
{`import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products/:id">Products</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Product {id}</h1>
      <button onClick={() => navigate('/')}>
        Back Home
      </button>
    </div>
  );
}`}
          </pre>
        </div>
      )}

      <div className="bg-blue-900/20 border border-blue-700 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-blue-400 mb-3">✅ Installation</h3>
        <code className="block bg-slate-900 p-4 rounded text-cyan-300 text-sm overflow-auto">
          npm install react-router-dom
        </code>
      </div>
    </div>
  );
}
