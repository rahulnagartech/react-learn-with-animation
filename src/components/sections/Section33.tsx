import React, { useState } from 'react';

export default function Section33() {
  const [activeTab, setActiveTab] = useState('performance');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);

  const advancedTopics = {
    performance: {
      title: '⚡ Performance Optimization (Sections 33-35)',
      icon: '🚀',
      color: 'from-orange-400 to-red-400',
      topics: [
        {
          id: '33',
          name: 'React.memo - Prevent Unnecessary Re-renders',
          description: 'Wrap components to skip re-rendering if props haven\'t changed',
          points: [
            '✓ Compares old and new props automatically',
            '✓ Only re-renders if props actually change',
            '✓ Perfect for expensive child components',
            '✓ Use with useCallback for function props'
          ],
          example: 'const MemoChild = React.memo(({ count }) => <div>{count}</div>);',
          bestFor: 'List items, card components, heavy calculations'
        },
        {
          id: '34',
          name: 'useMemo - Cache Expensive Calculations',
          description: 'Remember calculation results between renders',
          points: [
            '✓ Stores result only recomputes on dependency change',
            '✓ Prevents expensive operations on every render',
            '✓ Good for filtering/sorting large lists',
            '✓ Cache objects/arrays to prevent child re-renders'
          ],
          example: 'const filtered = useMemo(() => items.filter(...), [items]);',
          bestFor: 'Complex sorting, filtering, transformations'
        },
        {
          id: '35',
          name: 'useCallback - Memoize Functions',
          description: 'Keep function reference stable between renders',
          points: [
            '✓ Function reference stays same if dependencies unchanged',
            '✓ Prevents child re-renders when passed as prop',
            '✓ Combine with React.memo for maximum benefit',
            '✓ Dependencies work like useEffect'
          ],
          example: 'const handleClick = useCallback(() => {...}, [dep]);',
          bestFor: 'Event handlers, functions passed to memo components'
        }
      ]
    },
    patterns: {
      title: '🎨 Advanced Component Patterns (Sections 36-38)',
      icon: '🎯',
      color: 'from-purple-400 to-pink-400',
      topics: [
        {
          id: '36',
          name: 'Higher Order Components (HOC)',
          description: 'Wrap component to add features or modify behavior',
          points: [
            '✓ Function that takes component, returns enhanced version',
            '✓ Reuse logic across multiple components',
            '✓ Common pattern before hooks existed',
            '✓ Can wrap multiple HOCs (composition)'
          ],
          example: 'const Enhanced = withTheme(MyComponent);',
          bestFor: 'Authentication, theme providers, data fetching logic'
        },
        {
          id: '37',
          name: 'Render Props Pattern',
          description: 'Pass function as prop that returns JSX',
          points: [
            '✓ Child receives function from parent',
            '✓ Function returns what to render',
            '✓ Component controls what data to pass',
            '✓ Good alternative to HOC'
          ],
          example: '<Component render={(data) => <div>{data}</div>} />',
          bestFor: 'Logic sharing, flexible component composition'
        },
        {
          id: '38',
          name: 'Portals - Render Outside DOM',
          description: 'Render component in different DOM node',
          points: [
            '✓ Render modals, tooltips outside parent div',
            '✓ Escape CSS overflow/z-index issues',
            '✓ Keep logical hierarchy separate from DOM',
            '✓ Use ReactDOM.createPortal()'
          ],
          example: 'ReactDOM.createPortal(<Modal />, document.body);',
          bestFor: 'Modals, dropdowns, tooltips, overlays'
        }
      ]
    },
    internals: {
      title: '🔍 React Internals Deep Dive (Sections 39-40)',
      icon: '⚙️',
      color: 'from-blue-400 to-cyan-400',
      topics: [
        {
          id: '39',
          name: 'Reconciliation - How React Updates DOM',
          description: 'React\'s algorithm for figuring out what changed',
          points: [
            '✓ Compares old and new Virtual DOM (diffing)',
            '✓ Only updates actual DOM that changed',
            '✓ Uses Keys to identify elements in lists',
            '✓ Much faster than updating entire DOM'
          ],
          example: 'React compares <div key="1"/> with new <div key="1"/>',
          bestFor: 'Understanding performance, debugging renders'
        },
        {
          id: '40',
          name: 'Virtual DOM - In-Memory Representation',
          description: 'JavaScript representation of real DOM',
          points: [
            '✓ Lightweight copy of actual DOM tree',
            '✓ React updates this first, then batches real DOM changes',
            '✓ Faster to manipulate than real DOM',
            '✓ Browser repaints/reflows are minimized'
          ],
          example: 'Virtual DOM: {type: "div", props: {children: [...]}}',
          bestFor: 'Performance optimization understanding'
        }
      ]
    },
    rendering: {
      title: '📱 Rendering Strategies (Sections 41-43)',
      icon: '🌐',
      color: 'from-green-400 to-emerald-400',
      topics: [
        {
          id: '41',
          name: 'Lifecycle Methods - Class Component Hooks',
          description: 'Methods called at different component stages',
          points: [
            '✓ Mounting - componentDidMount (page load)',
            '✓ Updating - componentDidUpdate (state/props changed)',
            '✓ Unmounting - componentWillUnmount (cleanup)',
            '✓ Modern alternative: useEffect hooks'
          ],
          example: 'componentDidMount() { // Run once on load }',
          bestFor: 'Class components (old style)'
        },
        {
          id: '42',
          name: 'Server-Side Rendering (SSR)',
          description: 'Render React on server, send HTML to client',
          points: [
            '✓ Better SEO - search engines see full HTML',
            '✓ Faster first page load - no blank screen',
            '✓ Better for social media sharing',
            '✓ Requires Node.js server'
          ],
          example: 'renderToString(<App />) - run on server',
          bestFor: 'Public blogs, SEO-critical sites'
        },
        {
          id: '43',
          name: 'Static Site Generation (SSG)',
          description: 'Pre-build HTML pages at build time',
          points: [
            '✓ Generate static HTML files during build',
            '✓ Fastest possible load time (no server needed)',
            '✓ Revalidate periodically for fresh content',
            '✓ Perfect for blogs, documentation, landing pages'
          ],
          example: 'export async function getStaticProps() { ... }',
          bestFor: 'Content websites, blogs, documentation'
        }
      ]
    },
    stateManagement: {
      title: '🗂️ State Management Solutions (Sections 44-45)',
      icon: '📦',
      color: 'from-indigo-400 to-violet-400',
      topics: [
        {
          id: '44',
          name: 'Redux - Predictable State Container',
          description: 'Centralized state management with actions and reducers',
          points: [
            '✓ Single source of truth - all state in one place',
            '✓ Actions - describe what happened',
            '✓ Reducers - update state based on actions',
            '✓ Redux Toolkit - modern simplified version'
          ],
          example: 'store.dispatch(incrementCounter()); // Action',
          bestFor: 'Large complex apps with many state changes'
        },
        {
          id: '45',
          name: 'Alternative State Managers - Zustand, Recoil',
          description: 'Lighter alternatives to Redux',
          points: [
            '✓ Zustand - minimal setup, hook-based',
            '✓ Recoil - atomic state management',
            '✓ MobX - reactive programming approach',
            '✓ Simpler than Redux for small/medium apps'
          ],
          example: 'const count = useStore(state => state.count);',
          bestFor: 'Medium projects, when Redux feels too heavy'
        }
      ]
    },
    backend: {
      title: '🔗 Backend Integration (Sections 46-49)',
      icon: '🌍',
      color: 'from-red-400 to-pink-400',
      topics: [
        {
          id: '46',
          name: 'API Integration - Fetch & Axios',
          description: 'Connect React frontend to backend APIs',
          points: [
            '✓ Fetch API - built-in, no dependencies',
            '✓ Axios - cleaner syntax, interceptors',
            '✓ Handle loading, error, success states',
            '✓ Use useEffect to fetch on mount'
          ],
          example: 'fetch("/api/data").then(res => res.json());',
          bestFor: 'All apps needing server communication'
        },
        {
          id: '47',
          name: 'Authentication - Login & Tokens',
          description: 'Verify user identity and maintain sessions',
          points: [
            '✓ JWT tokens - stateless authentication',
            '✓ Store token in localStorage/cookies',
            '✓ Send token with every API request',
            '✓ Handle token expiration and refresh'
          ],
          example: 'headers: { Authorization: "Bearer " + token }',
          bestFor: 'Apps with user accounts'
        },
        {
          id: '48',
          name: 'Protected Routes - Require Login',
          description: 'Block access to pages without authentication',
          points: [
            '✓ Check if user is logged in before rendering page',
            '✓ Redirect to login if not authenticated',
            '✓ Route guards with middleware',
            '✓ Client-side protection (server also needed)'
          ],
          example: 'isAuth ? <Dashboard /> : <Redirect to="/login" />',
          bestFor: 'Private pages, user accounts'
        },
        {
          id: '49',
          name: 'Authorization - Role-Based Access',
          description: 'Different permissions for different user roles',
          points: [
            '✓ Admin, user, guest roles with different access',
            '✓ Check user role before rendering features',
            '✓ Show/hide UI based on permissions',
            '✓ Server should also validate'
          ],
          example: 'user.role === "admin" ? <DeleteButton /> : null',
          bestFor: 'Apps with different user types'
        }
      ]
    },
    advanced: {
      title: '🏗️ Advanced Development (Sections 50-55)',
      icon: '🎓',
      color: 'from-yellow-400 to-orange-400',
      topics: [
        {
          id: '50',
          name: 'TypeScript with React - Type Safety',
          description: 'Add static typing to catch bugs early',
          points: [
            '✓ Define prop types with interfaces',
            '✓ Catch type errors before runtime',
            '✓ Better IDE autocomplete and support',
            '✓ Makes code more maintainable'
          ],
          example: 'interface Props { count: number; }',
          bestFor: 'Large projects, team development'
        },
        {
          id: '51',
          name: 'Testing - Jest & React Testing Library',
          description: 'Write tests to ensure components work correctly',
          points: [
            '✓ Unit tests - test individual functions',
            '✓ Component tests - test component behavior',
            '✓ Integration tests - test multiple components',
            '✓ Catch bugs before users do'
          ],
          example: 'expect(button).toBeInTheDocument();',
          bestFor: 'All professional projects'
        },
        {
          id: '52',
          name: 'Folder Architecture - Organize Large Apps',
          description: 'Structure code for scalability and maintenance',
          points: [
            '✓ Feature-based: /features/auth, /features/products',
            '✓ Layer-based: /components, /hooks, /services',
            '✓ Modular design prevents spaghetti code',
            '✓ Easy to find and maintain code'
          ],
          example: '/src/features/products/components/ProductCard.tsx',
          bestFor: 'Large production applications'
        },
        {
          id: '53',
          name: 'Micro Frontends - Independent Apps',
          description: 'Break large frontend into smaller deployable apps',
          points: [
            '✓ Module Federation - load apps dynamically',
            '✓ Each team owns their micro frontend',
            '✓ Deploy independently without affecting others',
            '✓ Scale teams and development'
          ],
          example: 'Shared: React, Separate: routing, state',
          bestFor: 'Very large enterprise applications'
        },
        {
          id: '54',
          name: 'Progressive Web Apps (PWA)',
          description: 'Web app that works offline like native app',
          points: [
            '✓ Service workers - cache for offline',
            '✓ Installable on home screen',
            '✓ Push notifications',
            '✓ Works without internet connection'
          ],
          example: 'navigator.serviceWorker.register("sw.js")',
          bestFor: 'Apps needing offline support'
        },
        {
          id: '55',
          name: 'Accessibility (a11y) - Inclusive Design',
          description: 'Make app usable for everyone including disabled users',
          points: [
            '✓ Keyboard navigation - use Tab key',
            '✓ Screen readers - ARIA labels',
            '✓ Color contrast - readable text',
            '✓ Semantic HTML - <button> not <div>'
          ],
          example: '<button aria-label="Close menu">X</button>',
          bestFor: 'All public-facing apps'
        }
      ]
    },
    expert: {
      title: '🌟 Expert Mastery Topics (Sections 56-60)',
      icon: '👑',
      color: 'from-pink-400 to-rose-400',
      topics: [
        {
          id: '56',
          name: 'Internationalization (i18n) - Multi-Language',
          description: 'Support multiple languages in your app',
          points: [
            '✓ Translation strings - store in JSON files',
            '✓ Language switcher - change language on demand',
            '✓ Libraries: i18next, react-intl',
            '✓ Localize dates, numbers, currency'
          ],
          example: 't("welcome") // Returns translated string',
          bestFor: 'Apps for global audience'
        },
        {
          id: '57',
          name: 'Advanced Animations - Framer Motion',
          description: 'Create smooth, complex animations easily',
          points: [
            '✓ Declarative animation syntax',
            '✓ Gesture detection - drag, hover, tap',
            '✓ Variants - reusable animation sets',
            '✓ Spring physics - natural movement'
          ],
          example: '<motion.div animate={{x: 100}} />',
          bestFor: 'Modern polished UIs'
        },
        {
          id: '58',
          name: 'Design Systems - Component Libraries',
          description: 'Create reusable component library for consistency',
          points: [
            '✓ Document component API and usage',
            '✓ Storybook - visual documentation',
            '✓ Share components across projects',
            '✓ Consistent branding and UX'
          ],
          example: '<Button variant="primary">Click me</Button>',
          bestFor: 'Large organizations, multiple apps'
        },
        {
          id: '59',
          name: 'Security Best Practices',
          description: 'Protect app and user data from attacks',
          points: [
            '✓ XSS prevention - sanitize user input',
            '✓ CSRF tokens - prevent unauthorized actions',
            '✓ Secure headers - HTTP security',
            '✓ Secrets management - hide API keys'
          ],
          example: 'DOMPurify.sanitize(userInput) // Safe HTML',
          bestFor: 'All production apps'
        },
        {
          id: '60',
          name: 'CI/CD & Deployment - Automate Release',
          description: 'Automatically test and deploy code changes',
          points: [
            '✓ GitHub Actions - run tests on push',
            '✓ Vercel, Netlify - auto-deploy on git push',
            '✓ Automated testing - catch bugs early',
            '✓ Continuous deployment - ship fast safely'
          ],
          example: 'Push to main → Tests → Deploy automatically',
          bestFor: 'Professional development'
        }
      ]
    }
  };

  const tabs = Object.keys(advancedTopics) as Array<keyof typeof advancedTopics>;

  return (
    <div className="animate-slideInLeft">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          🎓 Advanced & Expert React Topics (Sections 33-60)
        </h1>
        <p className="text-lg text-gray-300">
          Master production-ready patterns, optimization techniques, and industry best practices.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex gap-2 flex-wrap mb-6">
          {tabs.map(tab => {
            const data = advancedTopics[tab];
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition font-semibold flex items-center gap-2 ${
                  activeTab === tab 
                    ? `bg-gradient-to-r ${data.color} text-white shadow-lg` 
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <span>{data.icon}</span>
                <span className="hidden sm:inline text-sm">{tab.toUpperCase()}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{advancedTopics[activeTab as keyof typeof advancedTopics].icon}</span>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              {advancedTopics[activeTab as keyof typeof advancedTopics].title}
            </h2>
          </div>

          <div className="space-y-4">
            {advancedTopics[activeTab as keyof typeof advancedTopics].topics.map((topic) => (
              <div
                key={topic.id}
                onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 hover:border-indigo-500 cursor-pointer transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-indigo-400 bg-indigo-900/30 px-2 py-1 rounded">
                        Section {topic.id}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-blue-300 mb-1">{topic.name}</h3>
                    <p className="text-gray-400 text-sm">{topic.description}</p>
                  </div>
                  <div className="text-2xl">
                    {expandedTopic === topic.id ? '▼' : '▶'}
                  </div>
                </div>

                {expandedTopic === topic.id && (
                  <div className="mt-4 pt-4 border-t border-slate-600 space-y-3 animate-slideInLeft">
                    <div>
                      <h4 className="text-sm font-bold text-green-400 mb-2">Key Points:</h4>
                      <ul className="space-y-1">
                        {topic.points.map((point, i) => (
                          <li key={i} className="text-sm text-gray-300">{point}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-slate-900 p-3 rounded border border-slate-600">
                      <p className="text-xs text-gray-400 mb-1">Example:</p>
                      <code className="text-cyan-300 text-sm font-mono">{topic.example}</code>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 mb-1">Best for:</p>
                      <p className="text-sm text-purple-300">{topic.bestFor}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">📚 Complete Learning Path</h3>
          <ol className="space-y-2 text-gray-300 text-sm">
            <li>1️⃣ <strong>Basics</strong> (1-15): Fundamentals</li>
            <li>2️⃣ <strong>Intermediate</strong> (16-32): Hooks & Patterns</li>
            <li>3️⃣ <strong>Advanced</strong> (33-49): Performance & Integration</li>
            <li>4️⃣ <strong>Expert</strong> (50-60): Mastery & Production</li>
          </ol>
        </div>

        <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-700 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-green-400 mb-4">✅ When You're Ready</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>✓ Build real production applications</li>
            <li>✓ Join senior React development teams</li>
            <li>✓ Architect scalable applications</li>
            <li>✓ Mentor junior developers</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
