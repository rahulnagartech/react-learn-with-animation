import { useState, useEffect } from 'react';

export default function Section4() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: 'Create Vite Project',
      command: 'npm create vite@latest my-app -- --template react-ts',
      description: 'Create a new Vite React project with TypeScript'
    },
    {
      num: 2,
      title: 'Navigate to Project',
      command: 'cd my-app',
      description: 'Move into the project directory'
    },
    {
      num: 3,
      title: 'Install Dependencies',
      command: 'npm install',
      description: 'Install all required npm packages'
    },
    {
      num: 4,
      title: 'Start Dev Server',
      command: 'npm run dev',
      description: 'Run the development server with HMR'
    },
    {
      num: 5,
      title: 'Open in Browser',
      command: 'http://localhost:5173',
      description: 'View your React app in the browser'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-lg p-8 border border-emerald-700">
        <h2 className="text-3xl font-bold text-emerald-300 mb-4">Setup with Vite</h2>
        <p className="text-gray-200 text-lg">
          Vite is a modern, blazing fast build tool and development server. Follow these steps to get started.
        </p>
      </div>

      {/* Animated Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={step.num}
            onClick={() => setCurrentStep(index)}
            className={`rounded-lg p-6 border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
              index === currentStep
                ? 'bg-gradient-to-r from-emerald-800 to-teal-800 border-emerald-500 shadow-lg shadow-emerald-500/50'
                : 'bg-gray-800 border-gray-700 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-emerald-600 text-white animate-bounce-subtle'
                    : 'bg-gray-700 text-gray-400'
                }`}
              >
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className={`font-bold text-lg mb-2 ${index === currentStep ? 'text-emerald-300' : 'text-gray-300'}`}>
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{step.description}</p>
                <div className="bg-gray-900 rounded p-3 font-mono text-sm text-blue-300 border border-gray-700">
                  $ {step.command}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-amber-300 mb-3">⚡ Why Vite?</h3>
        <ul className="space-y-2 text-gray-300">
          <li>✓ <strong>Instant Server Start:</strong> Vite uses native ES modules for instant server startup</li>
          <li>✓ <strong>Lightning Fast HMR:</strong> Hot Module Replacement is blazing fast regardless of app size</li>
          <li>✓ <strong>Rich Features:</strong> Supports TypeScript, JSX, CSS, and more out of the box</li>
          <li>✓ <strong>Optimized Build:</strong> Pre-configured Rollup build is production-ready</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-900 rounded-lg p-4 border border-blue-700">
          <p className="text-blue-300 font-bold mb-1">Node Version</p>
          <p className="text-gray-300 text-sm">&gt;= 14.0.0 required</p>
        </div>
        <div className="bg-purple-900 rounded-lg p-4 border border-purple-700">
          <p className="text-purple-300 font-bold mb-1">Package Manager</p>
          <p className="text-gray-300 text-sm">npm, pnpm, or yarn</p>
        </div>
        <div className="bg-pink-900 rounded-lg p-4 border border-pink-700">
          <p className="text-pink-300 font-bold mb-1">Development Speed</p>
          <p className="text-gray-300 text-sm">Instant updates with HMR</p>
        </div>
      </div>
    </div>
  );
}
