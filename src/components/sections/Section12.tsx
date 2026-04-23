import { useState } from 'react';

export default function Section12() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<'guest' | 'user' | 'admin'>('guest');
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-8 border border-blue-700">
        <h2 className="text-3xl font-bold text-blue-300 mb-4">Conditional Rendering</h2>
        <p className="text-gray-200 text-lg">
          Show or hide content based on conditions. Control what appears on the screen dynamically.
        </p>
      </div>

      {/* Conditional Methods */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-emerald-400">🎯 Methods</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">if/else Statement</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function Greeting({ age }) {
  if (age >= 18) {
    return <p>Welcome, Adult!</p>;
  } else {
    return <p>Welcome, Young one!</p>;
  }
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-2">✓ Simple logic</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Ternary Operator</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function Greeting({ age }) {
  return (
    <p>
      {age >= 18
        ? 'Welcome, Adult!'
        : 'Welcome, Young one!'}
    </p>
  );
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-2">✓ Inline rendering</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Logical AND (&& )</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function Dashboard({ user }) {
  return (
    <div>
      {user && <Welcome name={user.name} />}
    </div>
  );
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-2">✓ Show if true</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Switch Statement</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function Render({ status }) {
  switch(status) {
    case 'loading':
      return <Spinner />;
    case 'error':
      return <Error />;
    default:
      return <Content />;
  }
}`}
              </code>
            </div>
            <p className="text-gray-400 text-sm mt-2">✓ Multiple conditions</p>
          </div>
        </div>
      </div>

      {/* Live Example 1: Login */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">Example 1: Login/Logout</h3>
        
        <div className="bg-gray-900 rounded p-6 border border-gray-700 mb-4">
          {isLoggedIn ? (
            <div className="animate-slideInRight">
              <p className="text-emerald-400 text-lg font-bold mb-4">✅ You are logged in!</p>
              <div className="space-y-2 mb-4">
                <p className="text-gray-300">User Dashboard</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-blue-900 rounded p-3 text-center">
                    <p className="text-blue-300 font-bold text-lg">12</p>
                    <p className="text-gray-400 text-xs">Messages</p>
                  </div>
                  <div className="bg-purple-900 rounded p-3 text-center">
                    <p className="text-purple-300 font-bold text-lg">5</p>
                    <p className="text-gray-400 text-xs">Tasks</p>
                  </div>
                  <div className="bg-pink-900 rounded p-3 text-center">
                    <p className="text-pink-300 font-bold text-lg">8</p>
                    <p className="text-gray-400 text-xs">Friends</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="animate-slideInLeft">
              <p className="text-red-400 text-lg font-bold mb-4">❌ You are logged out</p>
              <p className="text-gray-300 mb-4">Please login to access your dashboard.</p>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors"
              >
                Login
              </button>
            </div>
          )}
        </div>

        <div className="bg-gray-900 rounded p-4 code-block">
          <code className="text-blue-300 text-sm">
{`{isLoggedIn ? (
  <Dashboard />
) : (
  <LoginForm />
)}`}
          </code>
        </div>
      </div>

      {/* Live Example 2: User Type */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-purple-400 mb-4">Example 2: Based on User Type</h3>
        
        <div className="mb-4 flex gap-2">
          {(['guest', 'user', 'admin'] as const).map(type => (
            <button
              key={type}
              onClick={() => setUserType(type)}
              className={`px-4 py-2 rounded font-bold transition-all ${
                userType === type
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div className="bg-gray-900 rounded p-6 border border-gray-700 animate-fadeIn">
          {userType === 'guest' && (
            <div className="text-center">
              <p className="text-yellow-400 font-bold text-lg mb-2">👤 Guest User</p>
              <p className="text-gray-300">Limited access. Please create an account.</p>
            </div>
          )}

          {userType === 'user' && (
            <div className="text-center">
              <p className="text-blue-400 font-bold text-lg mb-2">👨‍💻 Regular User</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ View content</li>
                <li>✓ Create posts</li>
                <li>✓ Comment & like</li>
              </ul>
            </div>
          )}

          {userType === 'admin' && (
            <div className="text-center">
              <p className="text-emerald-400 font-bold text-lg mb-2">👑 Administrator</p>
              <ul className="text-gray-300 text-sm space-y-1">
                <li>✓ All user features</li>
                <li>✓ Manage users</li>
                <li>✓ Delete content</li>
                <li>✓ System settings</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Live Example 3: Show/Hide Details */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">Example 3: Show/Hide Content</h3>
        
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mb-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {showDetails ? '👇 Hide Details' : '👆 Show Details'}
        </button>

        {showDetails && (
          <div className="bg-gray-900 rounded p-4 border border-emerald-600 animate-slideInLeft">
            <h4 className="text-emerald-300 font-bold mb-2">Additional Information:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📅 Created: January 2024</li>
              <li>👥 Members: 2,450</li>
              <li>📊 Activity: Very Active</li>
              <li>⭐ Rating: 4.8/5</li>
            </ul>
          </div>
        )}
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-6 border border-yellow-700">
        <h3 className="text-lg font-bold text-yellow-300 mb-4">⚡ Best Practices</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✓ Keep conditions simple and readable</li>
          <li>✓ Use && for single condition rendering</li>
          <li>✓ Use ternary for if/else</li>
          <li>✓ Use switch for multiple conditions</li>
          <li>✓ Extract complex logic to separate functions</li>
          <li>✓ Always provide a default case</li>
        </ul>
      </div>
    </div>
  );
}
