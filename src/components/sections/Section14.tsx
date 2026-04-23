import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
  subscribe: boolean;
  country: string;
}

export default function Section14() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subscribe: false,
    country: 'usa'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-cyan-900 to-blue-900 rounded-lg p-8 border border-cyan-700">
        <h2 className="text-3xl font-bold text-cyan-300 mb-4">Forms</h2>
        <p className="text-gray-200 text-lg">
          Handle form inputs and create controlled components that React manages.
        </p>
      </div>

      {/* Form Concepts */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-blue-400 mb-4">🎯 Controlled Components</h3>
        <p className="text-gray-300 mb-4">
          In React, form inputs are "controlled" when their value comes from state and updates are handled by onChange handlers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-bold text-red-400 mb-3">❌ Uncontrolled</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`<input type="text" />
// React doesn't manage this
// Getting value requires ref`}
              </code>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-emerald-400 mb-3">✅ Controlled</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`<input
  value={name}
  onChange={e => setName(e.target.value)}
/>
// React fully manages this`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Live Form Example */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-xl font-bold text-emerald-400 mb-4">📝 Live Form Example</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-2">Country</label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors"
                >
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="australia">Australia</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded border border-gray-600 focus:border-blue-400 focus:outline-none transition-colors h-24 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={formData.subscribe}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <span className="text-gray-300">Subscribe to newsletter</span>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Submit Form
              </button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-emerald-900 rounded border border-emerald-600 text-emerald-300 animate-slideInLeft">
                ✅ Form submitted successfully!
              </div>
            )}
          </div>

          {/* Form Data Display */}
          <div className="bg-gray-900 rounded p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-4">📊 Current Form Data</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-gray-800 rounded p-3">
                <p className="text-gray-400">Name:</p>
                <p className="text-blue-300 font-mono">{formData.name || '(empty)'}</p>
              </div>
              <div className="bg-gray-800 rounded p-3">
                <p className="text-gray-400">Email:</p>
                <p className="text-blue-300 font-mono">{formData.email || '(empty)'}</p>
              </div>
              <div className="bg-gray-800 rounded p-3">
                <p className="text-gray-400">Country:</p>
                <p className="text-blue-300 font-mono">{formData.country}</p>
              </div>
              <div className="bg-gray-800 rounded p-3">
                <p className="text-gray-400">Message:</p>
                <p className="text-blue-300 font-mono">{formData.message || '(empty)'}</p>
              </div>
              <div className="bg-gray-800 rounded p-3">
                <p className="text-gray-400">Subscribe:</p>
                <p className="text-blue-300 font-mono">{formData.subscribe ? '✓ Yes' : '✗ No'}</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-900 rounded border border-blue-700">
              <p className="text-blue-300 text-xs">💡 As you type in the form, the data updates in real-time!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Input Types */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-pink-400">🎨 Input Types</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-blue-400 mb-3">Text Inputs</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`<input
  type="text"
  value={text}
  onChange={e => setText(e.target.value)}
/>

<input type="email" />
<input type="password" />
<input type="number" />`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-purple-400 mb-3">Select & Textarea</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`<select
  value={selected}
  onChange={e => setSelected(e.target.value)}
>
  <option value="1">Option 1</option>
</select>

<textarea
  value={text}
  onChange={e => setText(e.target.value)}
/>`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-emerald-400 mb-3">Checkboxes & Radio</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`<input
  type="checkbox"
  checked={isChecked}
  onChange={e => setIsChecked(e.target.checked)}
/>

<input type="radio" name="group" />`}
              </code>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h4 className="text-lg font-bold text-pink-400 mb-3">Multiple Inputs</h4>
            <div className="bg-gray-900 rounded p-4 code-block">
              <code className="text-blue-300 text-sm">
{`const [form, setForm] = useState({
  name: '', email: ''
});

<input
  name="name"
  value={form.name}
  onChange={handleChange}
/>`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div className="bg-gradient-to-r from-yellow-900 to-orange-900 rounded-lg p-6 border border-yellow-700">
        <h3 className="text-lg font-bold text-yellow-300 mb-4">⚡ Form Best Practices</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>✓ Use controlled components (value + onChange)</li>
          <li>✓ Prevent default form submission with e.preventDefault()</li>
          <li>✓ Validate input before submission</li>
          <li>✓ Show validation errors to users</li>
          <li>✓ Use proper input types (email, number, etc.)</li>
          <li>✓ Group related fields together</li>
          <li>✓ Provide clear labels for accessibility</li>
        </ul>
      </div>
    </div>
  );
}
