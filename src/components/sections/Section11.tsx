import { useState } from 'react';

export default function Section11() {
  const [clicked, setClicked] = useState(false);
  const [clicks, setClicks] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
    setClicks(clicks + 1);
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-yellow-900 to-amber-900 rounded-lg p-8 border border-yellow-700">
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Events</h2>
        <p className="text-gray-200 text-lg">
          Events allow you to respond to user interactions like clicks, input changes, hovering, and more.
        </p>
      </div>

      {/* Event Basics */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Common Events</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onClick</p>
            <p className="text-gray-300 text-sm mb-3">Triggered when element is clicked</p>
            <code className="text-blue-300 text-sm">&lt;button onClick={'{handler}'}&gt;</code>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onChange</p>
            <p className="text-gray-300 text-sm mb-3">Triggered when input value changes</p>
            <code className="text-blue-300 text-sm">&lt;input onChange={'{handler}'}&gt;</code>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onMouseEnter / onMouseLeave</p>
            <p className="text-gray-300 text-sm mb-3">Triggered on mouse hover</p>
            <code className="text-blue-300 text-sm">&lt;div onMouseEnter={'{handler}'}&gt;</code>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onSubmit</p>
            <p className="text-gray-300 text-sm mb-3">Triggered on form submission</p>
            <code className="text-blue-300 text-sm">&lt;form onSubmit={'{handler}'}&gt;</code>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onFocus / onBlur</p>
            <p className="text-gray-300 text-sm mb-3">Triggered on input focus/blur</p>
            <code className="text-blue-300 text-sm">&lt;input onFocus={'{handler}'}&gt;</code>
          </div>

          <div className="bg-gray-900 rounded p-4 border border-gray-700">
            <p className="text-emerald-400 font-bold mb-2">onKeyDown / onKeyUp</p>
            <p className="text-gray-300 text-sm mb-3">Triggered on keyboard events</p>
            <code className="text-blue-300 text-sm">&lt;input onKeyDown={'{handler}'}&gt;</code>
          </div>
        </div>
      </div>

      {/* Live Examples */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-400">🎯 Live Examples</h3>

        {/* Click Event */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-blue-400 mb-4">Click Event Example</h4>
          
          <div className="bg-gray-900 rounded p-6 border border-gray-700 mb-4">
            <p className="text-gray-400 mb-3">Total Clicks: <span className="text-yellow-400 font-bold text-xl">{clicks}</span></p>
            <button
              onClick={handleClick}
              className={`px-6 py-3 rounded font-bold text-white transition-all transform hover:scale-110 ${
                clicked
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {clicked ? '✓ Clicked!' : 'Click Me'}
            </button>
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300 text-sm">
{`const [clicks, setClicks] = useState(0);

function handleClick() {
  setClicks(clicks + 1);
}

<button onClick={handleClick}>
  Total clicks: {clicks}
</button>`}
            </code>
          </div>
        </div>

        {/* Hover Event */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-purple-400 mb-4">Hover Event Example</h4>
          
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`rounded-lg p-8 text-center transition-all duration-300 ${
              hovered
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-105 shadow-lg shadow-purple-500/50'
                : 'bg-gray-700'
            }`}
          >
            <p className="text-white font-bold">
              {hovered ? '👋 You\'re hovering!' : '🎯 Hover over me'}
            </p>
          </div>
        </div>

        {/* Input Event */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h4 className="text-lg font-bold text-emerald-400 mb-4">Input Change Event</h4>
          
          <div className="bg-gray-900 rounded p-4 border border-gray-700 mb-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 mb-3"
              placeholder="Type something..."
            />
            {inputValue && (
              <p className="text-blue-400 animate-slideInLeft">
                You typed: <strong>{inputValue}</strong>
              </p>
            )}
          </div>

          <div className="bg-gray-900 rounded p-4 code-block">
            <code className="text-blue-300 text-sm">
{`const [text, setText] = useState('');

<input
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`}
            </code>
          </div>
        </div>
      </div>

      {/* Event Object */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-cyan-400 mb-4">📦 Event Object</h3>
        <p className="text-gray-300 mb-4">Event handlers automatically receive an event object with useful information:</p>
        
        <div className="bg-gray-900 rounded p-4 code-block">
          <code className="text-blue-300 text-sm">
{`function handleChange(event) {
  // event.target is the input element
  console.log(event.target.value);
  
  // event.preventDefault() stops default behavior
  // event.stopPropagation() stops event bubbling
}

<input onChange={handleChange} />`}
          </code>
        </div>
      </div>

      {/* Best Practices */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-900 rounded-lg p-6 border border-green-700">
          <h4 className="text-lg font-bold text-green-300 mb-3">✅ Best Practices</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✓ Use camelCase for event names</li>
            <li>✓ Pass functions, don't call them</li>
            <li>✓ Use arrow functions for context</li>
            <li>✓ Debounce expensive handlers</li>
          </ul>
        </div>

        <div className="bg-red-900 rounded-lg p-6 border border-red-700">
          <h4 className="text-lg font-bold text-red-300 mb-3">❌ Common Mistakes</h4>
          <div className="bg-gray-900 rounded p-3 code-block text-sm">
            <code className="text-red-400">
{`// WRONG - calls function immediately
<button onClick={handleClick()}>

// RIGHT - passes function
<button onClick={handleClick}>

// RIGHT - with parameters
<button onClick={() => handleClick(id)}>
`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
