import { useState } from 'react';

// Child component that receives props
function UserCard({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-blue-600 text-center animate-slideInRight">
      <div className="text-4xl mb-2">{avatar}</div>
      <h3 className="text-lg font-bold text-blue-300">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </div>
  );
}

export default function Section9() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', role: 'Developer', avatar: '👩‍💻' },
    { id: 2, name: 'Bob', role: 'Designer', avatar: '🎨' },
    { id: 3, name: 'Charlie', role: 'Manager', avatar: '👨‍💼' },
  ]);

  const [newUser, setNewUser] = useState('');

  const addUser = () => {
    if (newUser.trim()) {
      setUsers([...users, {
        id: users.length + 1,
        name: newUser,
        role: 'Developer',
        avatar: '👤'
      }]);
      setNewUser('');
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-indigo-900 to-blue-900 rounded-lg p-8 border border-indigo-700">
        <h2 className="text-3xl font-bold text-indigo-300 mb-4">Props (Properties)</h2>
        <p className="text-gray-200 text-lg">
          Props are how you pass data from a parent component to a child component. They're read-only and flow downward.
        </p>
      </div>

      {/* Props Concept */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">📦 What are Props?</h3>
        <p className="text-gray-300 mb-4">
          Props are like function parameters. They allow you to customize how a component behaves and displays data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Parent Component</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function App() {
  return (
    <UserCard 
      name="Alice"
      role="Developer"
      avatar="👩‍💻"
    />
  );
}`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-purple-400 mb-3">Child Component</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`function UserCard(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.role}</p>
      <p>{props.avatar}</p>
    </div>
  );
}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Data Flow Visualization */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">🔄 Data Flow: Parent → Child</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="bg-blue-900 rounded-lg p-4 border border-blue-600 text-center min-w-32">
              <p className="text-blue-300 font-bold">Parent</p>
              <p className="text-gray-400 text-sm">Has Data</p>
            </div>
            <div className="text-2xl text-blue-400 animate-pulse">→</div>
            <div className="bg-purple-900 rounded-lg p-4 border border-purple-600 text-center min-w-32">
              <p className="text-purple-300 font-bold">Child</p>
              <p className="text-gray-400 text-sm">Receives Props</p>
            </div>
          </div>

          <div className="bg-blue-900 rounded-lg p-4 border border-blue-600">
            <p className="text-blue-300 text-sm mb-2">✨ Key Points:</p>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>✓ Props are read-only (immutable)</li>
              <li>✓ Data flows only downward (parent to child)</li>
              <li>✓ Children cannot modify parent's props directly</li>
              <li>✓ Use callbacks to communicate back to parent</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Live Example */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-6">🎯 Live Example: Rendering Users</h3>
        
        <div className="mb-6 space-y-3">
          <p className="text-gray-300">Add a new user (data passed via props to child components):</p>
          <div className="flex gap-2">
            <input
              type="text"
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addUser()}
              className="bg-gray-700 text-white px-3 py-2 rounded flex-1"
              placeholder="Enter user name"
            />
            <button
              onClick={addUser}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded transition-colors font-bold"
            >
              Add User
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              role={user.role}
              avatar={user.avatar}
            />
          ))}
        </div>
      </div>

      {/* Props Patterns */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-pink-400">🎨 Common Props Patterns</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Destructuring Props</h4>
            <div className="bg-gray-900 rounded p-4 code-block text-sm">
              <code className="text-blue-300">
{`// Instead of:
function Card(props) {
  return <h1>{props.title}</h1>;
}

// Use destructuring:
function Card({ title, desc }) {
  return <h1>{title}</h1>;
}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Default Props</h4>
            <div className="bg-gray-900 rounded p-4 code-block text-sm">
              <code className="text-blue-300">
{`function Button({ label = 'Click me' }) {
  return <button>{label}</button>;
}

// Or using ||
function Greeting({ name = 'Friend' }) {
  return <p>Hello, {name}!</p>;
}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Passing Functions</h4>
            <div className="bg-gray-900 rounded p-4 code-block text-sm">
              <code className="text-blue-300">
{`function Parent() {
  const handleClick = () => { /*...*/ };
  
  return (
    <Button onClick={handleClick} />
  );
}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Spreading Props</h4>
            <div className="bg-gray-900 rounded p-4 code-block text-sm">
              <code className="text-blue-300">
{`function Card(props) {
  return (
    <div {...props}>
      Content
    </div>
  );
}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-6 border border-indigo-700">
        <h3 className="text-lg font-bold text-indigo-300 mb-2">💡 Pro Tip</h3>
        <p className="text-gray-300">
          Props make components reusable. The same component can display different data by receiving different props, making your code DRY (Don't Repeat Yourself).
        </p>
      </div>
    </div>
  );
}
