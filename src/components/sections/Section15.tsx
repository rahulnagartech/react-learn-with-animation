import { useState } from 'react';

export default function Section15() {
  const [activeTab, setActiveTab] = useState<'inline' | 'tailwind' | 'css'>('inline');

  // Inline CSS styles
  const boxStyle = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#1e40af',
    color: 'white',
    border: '2px solid #60a5fa',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const [isHovered, setIsHovered] = useState(false);
  const hoverStyle = isHovered ? {
    ...boxStyle,
    backgroundColor: '#1e3a8a',
    boxShadow: '0 0 20px rgba(96, 165, 250, 0.5)'
  } : boxStyle;

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-orange-900 to-pink-900 rounded-lg p-8 border border-orange-700">
        <h2 className="text-3xl font-bold text-orange-300 mb-4">Styling in React</h2>
        <p className="text-gray-200 text-lg">
          Multiple ways to style React components: inline CSS, Tailwind CSS, and CSS Modules.
        </p>
      </div>

      {/* Styling Methods */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-blue-400">🎨 Styling Methods</h3>

        <div className="flex gap-2 mb-6">
          {(['inline', 'tailwind', 'css'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded font-bold transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tab === 'inline' ? 'Inline CSS' : tab === 'tailwind' ? 'Tailwind' : 'CSS Modules'}
            </button>
          ))}
        </div>

        {/* Inline CSS */}
        {activeTab === 'inline' && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInLeft">
            <h4 className="text-xl font-bold text-blue-400 mb-4">Inline CSS</h4>
            <p className="text-gray-300 mb-4">Pass a JavaScript object to the style prop:</p>

            <div className="bg-gray-900 rounded p-4 code-block mb-4">
              <code className="text-blue-300 text-sm">
{`const buttonStyle = {
  backgroundColor: '#3b82f6',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

<button style={buttonStyle}>
  Click me
</button>`}
              </code>
            </div>

            <div className="bg-gray-900 rounded p-6 border border-gray-700">
              <p className="text-gray-400 text-sm mb-4">Live Example:</p>
              <div
                style={hoverStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-center font-bold"
              >
                {isHovered ? '✨ Hovered!' : 'Hover over me'}
              </div>
            </div>

            <div className="mt-4 bg-yellow-900 rounded p-3 border border-yellow-700">
              <p className="text-yellow-300 text-sm">
                ⚠️ <strong>Properties:</strong> Use camelCase for CSS properties (backgroundColor not background-color). Values are JavaScript expressions.
              </p>
            </div>
          </div>
        )}

        {/* Tailwind CSS */}
        {activeTab === 'tailwind' && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInLeft">
            <h4 className="text-xl font-bold text-purple-400 mb-4">Tailwind CSS</h4>
            <p className="text-gray-300 mb-4">Use utility classes directly in className:</p>

            <div className="bg-gray-900 rounded p-4 code-block mb-4">
              <code className="text-blue-300 text-sm">
{`<button className={
  \`px-4 py-2 bg-blue-500 text-white \$
  rounded hover:bg-blue-600 transition-all\`
}>
  Click me
</button>

<div className="grid grid-cols-3 gap-4">
  <Card />
  <Card />
  <Card />
</div>`}
              </code>
            </div>

            <div className="space-y-3">
              <p className="text-gray-400 text-sm">Live Example:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['bg-blue-600', 'bg-purple-600', 'bg-pink-600'].map((color, i) => (
                  <div
                    key={i}
                    className={`${color} hover:shadow-lg hover:shadow-blue-500/50 text-white font-bold py-6 rounded-lg transition-all transform hover:scale-105 cursor-pointer text-center`}
                  >
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-green-900 rounded p-3 border border-green-700">
              <p className="text-green-300 text-sm">
                ✓ <strong>Benefits:</strong> Utility-first, no naming, responsive design with sm:, md:, lg:, and dark mode support.
              </p>
            </div>
          </div>
        )}

        {/* CSS Modules */}
        {activeTab === 'css' && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 animate-slideInLeft">
            <h4 className="text-xl font-bold text-emerald-400 mb-4">CSS Modules</h4>
            <p className="text-gray-300 mb-4">Write CSS in separate files with automatic scoping:</p>

            <div className="space-y-4">
              <div className="bg-gray-900 rounded p-4 code-block">
                <p className="text-gray-400 text-sm mb-2">Button.module.css</p>
                <code className="text-blue-300 text-sm">
{`.button {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
}

.button:hover {
  background: #2563eb;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}`}
                </code>
              </div>

              <div className="bg-gray-900 rounded p-4 code-block">
                <p className="text-gray-400 text-sm mb-2">Button.tsx</p>
                <code className="text-blue-300 text-sm">
{`import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.button}>
      Click me
    </button>
  );
}`}
                </code>
              </div>
            </div>

            <div className="mt-4 bg-blue-900 rounded p-3 border border-blue-700">
              <p className="text-blue-300 text-sm">
                ✓ <strong>Benefits:</strong> Scoped styling, no naming conflicts, can co-locate styles with components.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Comparison */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">📊 Comparison</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-600">
                <th className="text-left py-2 px-3 text-gray-300">Method</th>
                <th className="text-left py-2 px-3 text-gray-300">Pros</th>
                <th className="text-left py-2 px-3 text-gray-300">Cons</th>
              </tr>
            </thead>
            <tbody className="text-gray-400 text-xs">
              <tr className="border-b border-gray-700">
                <td className="py-2 px-3 text-blue-300 font-bold">Inline</td>
                <td className="py-2 px-3">Dynamic styles, simple</td>
                <td className="py-2 px-3">No media queries, verbose</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="py-2 px-3 text-purple-300 font-bold">Tailwind</td>
                <td className="py-2 px-3">Fast, responsive, consistent</td>
                <td className="py-2 px-3">HTML bloat, learning curve</td>
              </tr>
              <tr>
                <td className="py-2 px-3 text-emerald-300 font-bold">CSS Modules</td>
                <td className="py-2 px-3">Scoped, reusable, organized</td>
                <td className="py-2 px-3">Extra files, setup needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Styling Patterns */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-pink-400">🎨 Common Patterns</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Conditional Classes</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const getButtonClass = (active) => (
  \`px-4 py-2 rounded \${
    active 
      ? 'bg-blue-600' 
      : 'bg-gray-600'
  }\`
);`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Dynamic Inline Styles</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const boxStyle = {
  backgroundColor: isActive 
    ? '#3b82f6' 
    : '#6b7280'
};

<div style={boxStyle}>
  Dynamic
</div>`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">CSS Variables</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const style = {
  '--primary-color': '#3b82f6'
};

<div style={style} 
     className="bg-[var(--primary-color)]">
  Uses CSS variable
</div>`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">className Libraries</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`import clsx from 'clsx';

const classes = clsx(
  'px-4 py-2',
  isActive && 'bg-blue-600',
  size === 'lg' && 'text-lg'
);

<button className={classes} />`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 rounded-lg p-6 border border-green-700">
        <h3 className="text-lg font-bold text-green-300 mb-4">⚡ Best Practices</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✓ Use Tailwind CSS for most projects (fastest)</li>
          <li>✓ Use CSS Modules for large, organized projects</li>
          <li>✓ Use inline styles sparingly (dynamic only)</li>
          <li>✓ Keep styles organized and maintainable</li>
          <li>✓ Use consistent naming conventions</li>
          <li>✓ Consider accessibility and responsive design</li>
          <li>✓ Avoid inline styles for performance</li>
        </ul>
      </div>

      <div className="bg-blue-900 rounded-lg p-6 border border-blue-700">
        <h3 className="text-lg font-bold text-blue-300 mb-2">💡 This Project Uses</h3>
        <p className="text-gray-300">
          This entire learning platform is styled with <strong>Tailwind CSS</strong> and custom animations using CSS-in-JS. This demonstrates how powerful and flexible Tailwind is for building modern, responsive UIs!
        </p>
      </div>
    </div>
  );
}
