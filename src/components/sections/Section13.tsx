import { useState } from 'react';

interface Item {
  id: number;
  text: string;
  completed: boolean;
}

export default function Section13() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, text: 'Learn React Basics', completed: true },
    { id: 2, text: 'Build Components', completed: true },
    { id: 3, text: 'Master Hooks', completed: false },
    { id: 4, text: 'Create Project', completed: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, {
        id: Math.max(...items.map(i => i.id), 0) + 1,
        text: newItem,
        completed: false
      }]);
      setNewItem('');
    }
  };

  const toggleItem = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const deleteItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-green-900 to-teal-900 rounded-lg p-8 border border-green-700">
        <h2 className="text-3xl font-bold text-green-300 mb-4">Lists & Keys</h2>
        <p className="text-gray-200 text-lg">
          Rendering lists efficiently in React using keys for proper DOM management and updates.
        </p>
      </div>

      {/* Rendering Lists */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">📝 Rendering Lists</h3>
        <p className="text-gray-300 mb-4">Use .map() to transform an array into JSX elements:</p>

        <div className="bg-gray-900 rounded p-4 code-block mb-4">
          <code className="text-blue-300 text-sm">
{`const items = ['Apple', 'Banana', 'Orange'];

function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`}
          </code>
        </div>

        <div className="bg-yellow-900 rounded p-4 border border-yellow-700">
          <p className="text-yellow-300 text-sm">
            ⚠️ <strong>Avoid using index as key</strong> if list can be reordered, filtered, or items can be added/removed. Use unique identifiers instead.
          </p>
        </div>
      </div>

      {/* Why Keys Matter */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-purple-400 mb-4">🔑 Why Keys Matter</h3>
        
        <div className="space-y-4">
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-purple-300 font-bold mb-2">Without Keys (Problem):</p>
            <p className="text-gray-300 text-sm">
              React uses element position to identify which item changed. If you delete item 1, item 2 takes its place, causing state bugs.
            </p>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-emerald-600">
            <p className="text-emerald-300 font-bold mb-2">With Keys (Solution):</p>
            <p className="text-gray-300 text-sm">
              React uses the key to track which item is which. Deleting item 1 properly removes it, and item 2 stays as item 2.
            </p>
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300 text-sm">
{`// ✓ GOOD: Unique ID
{items.map(item => (
  <Item key={item.id} item={item} />
))}

// ✗ BAD: Array index
{items.map((item, index) => (
  <Item key={index} item={item} />
))}`}
            </code>
          </div>
        </div>
      </div>

      {/* Live Example */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">📋 Live Example: Todo List</h3>
        
        <div className="bg-gray-900 rounded p-4 border border-gray-700 mb-4">
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addItem()}
              className="bg-gray-700 text-white px-3 py-2 rounded flex-1"
              placeholder="Add a new item..."
            />
            <button
              onClick={addItem}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded font-bold transition-colors"
            >
              Add
            </button>
          </div>

          <div className="space-y-2">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-gray-800 rounded border border-gray-700 hover:border-emerald-600 transition-all group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleItem(item.id)}
                  className="w-5 h-5 cursor-pointer"
                />
                <span
                  className={`flex-1 transition-all ${
                    item.completed
                      ? 'line-through text-gray-500'
                      : 'text-gray-300'
                  }`}
                >
                  {item.text}
                </span>
                <span className="text-gray-500 text-sm">ID: {item.id}</span>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="opacity-0 group-hover:opacity-100 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-all"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {items.length === 0 && (
            <p className="text-gray-500 text-center py-8">No items yet. Add one to get started!</p>
          )}
        </div>

        <div className="bg-blue-900 rounded p-4 border border-blue-700">
          <p className="text-blue-300 text-sm mb-2">
            <strong>Try it:</strong> Add items, check them off, and delete them. Notice how each item keeps its state properly because we use <code className="bg-gray-900 px-2 rounded">key={'{item.id}'}</code>
          </p>
        </div>
      </div>

      {/* Advanced Patterns */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-pink-400">🎨 Advanced Patterns</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Filtering Lists</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const completed = items.filter(
  item => item.completed
);

{completed.map(item => (
  <Item key={item.id} item={item} />
))}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Sorting Lists</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const sorted = [...items].sort(
  (a, b) => a.name.localeCompare(b.name)
);

{sorted.map(item => (
  <Item key={item.id} item={item} />
))}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Nested Lists</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`{groups.map(group => (
  <div key={group.id}>
    {group.items.map(item => (
      <Item 
        key={item.id} 
        item={item} 
      />
    ))}
  </div>
))}`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Conditional Rendering</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`{items.length > 0 && (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item}</li>
    ))}
  </ul>
)}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="bg-gradient-to-r from-red-900 to-pink-900 rounded-lg p-6 border border-red-700">
        <h3 className="text-lg font-bold text-red-300 mb-4">⚡ Key Rules</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✓ Always add keys to list elements</li>
          <li>✓ Use unique, stable identifiers</li>
          <li>✓ Never use random keys</li>
          <li>✓ Never use array index as key (unless static)</li>
          <li>✓ Keep keys consistent across re-renders</li>
          <li>✓ Keys don't need to be globally unique, just within the list</li>
        </ul>
      </div>
    </div>
  );
}
