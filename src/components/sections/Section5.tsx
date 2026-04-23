import { useState } from 'react';

export default function Section5() {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    src: true,
    components: true,
    public: false,
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const FolderItem = ({ 
    name, 
    isFolder = false, 
    expanded = false, 
    onToggle = () => {},
    description = ''
  }: any) => (
    <div className="my-1">
      <div
        className={`flex items-center gap-2 py-2 px-3 rounded hover:bg-gray-700 cursor-pointer transition-colors ${
          isFolder ? 'font-semibold' : ''
        }`}
        onClick={isFolder ? onToggle : undefined}
      >
        {isFolder && (
          <span className={`transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`}>
            ▶️
          </span>
        )}
        {!isFolder && <span>📄</span>}
        {isFolder && !expanded && <span>📁</span>}
        {isFolder && expanded && <span>📂</span>}
        <span className="text-blue-300">{name}</span>
        {description && <span className="text-gray-500 text-sm ml-2">{description}</span>}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-gradient-to-r from-pink-900 to-rose-900 rounded-lg p-8 border border-pink-700">
        <h2 className="text-3xl font-bold text-pink-300 mb-4">Folder Structure</h2>
        <p className="text-gray-200 text-lg">
          Understanding the project structure helps you organize code effectively. Click folders to expand/collapse.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Standard Structure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-amber-400 mb-4">📦 Project Root</h3>
          <div className="font-mono text-sm text-gray-300 bg-gray-900 rounded p-4 border border-gray-600 overflow-x-auto">
            <div>my-app/</div>
            
            <div className="ml-4">
              <FolderItem 
                name="src" 
                isFolder 
                icon="📂"
                expanded={expandedFolders.src}
                onToggle={() => toggleFolder('src')}
                description="Main source code"
              />
              {expandedFolders.src && (
                <div className="ml-6">
                  <FolderItem 
                    name="components" 
                    isFolder 
                    expanded={expandedFolders.components}
                    onToggle={() => toggleFolder('components')}
                    description="React components"
                  />
                  {expandedFolders.components && (
                    <div className="ml-6 text-gray-400">
                      <FolderItem name="Button.tsx" description="Reusable button" />
                      <FolderItem name="Header.tsx" description="Header component" />
                      <FolderItem name="Card.tsx" description="Card component" />
                    </div>
                  )}
                  <FolderItem name="App.tsx" description="Root component" />
                  <FolderItem name="main.tsx" description="Entry point" />
                  <FolderItem name="index.css" description="Global styles" />
                </div>
              )}
            </div>

            <div className="ml-4">
              <FolderItem 
                name="public" 
                isFolder
                expanded={expandedFolders.public}
                onToggle={() => toggleFolder('public')}
                description="Static assets"
              />
              {expandedFolders.public && (
                <div className="ml-6 text-gray-400">
                  <FolderItem name="favicon.svg" />
                </div>
              )}
            </div>

            <div className="ml-4 text-gray-400">
              <FolderItem name="node_modules" description="Dependencies" />
            </div>

            <div className="ml-4 text-gray-400">
              <FolderItem name="package.json" description="Project metadata" />
              <FolderItem name="vite.config.ts" description="Vite configuration" />
              <FolderItem name="tsconfig.json" description="TypeScript config" />
              <FolderItem name="index.html" description="Entry HTML" />
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-emerald-400 mb-4">✨ Best Practices</h3>
          <div className="space-y-4">
            <div className="bg-gray-900 rounded p-4 border border-emerald-700">
              <p className="text-emerald-300 font-bold mb-2">📁 Organize by Feature</p>
              <p className="text-gray-400 text-sm">Group related components, styles, and logic together by feature.</p>
            </div>

            <div className="bg-gray-900 rounded p-4 border border-blue-700">
              <p className="text-blue-300 font-bold mb-2">📝 Naming Convention</p>
              <p className="text-gray-400 text-sm">
                Components: PascalCase (Button.tsx)<br/>
                Utilities: camelCase (utils.ts)<br/>
                Folders: lowercase (components/)
              </p>
            </div>

            <div className="bg-gray-900 rounded p-4 border border-purple-700">
              <p className="text-purple-300 font-bold mb-2">🎯 Keep Components Small</p>
              <p className="text-gray-400 text-sm">One responsibility per component. Easier to test and maintain.</p>
            </div>

            <div className="bg-gray-900 rounded p-4 border border-pink-700">
              <p className="text-pink-300 font-bold mb-2">📚 Create a Utils Folder</p>
              <p className="text-gray-400 text-sm">Store helper functions, constants, and shared utilities separately.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-lg p-6 border border-indigo-700">
        <h3 className="text-lg font-bold text-indigo-300 mb-3">💡 Pro Tip</h3>
        <p className="text-gray-300">
          As your app grows, consider organizing by feature: <code className="bg-gray-900 px-2 py-1 rounded text-blue-300">src/features/auth/components/</code>, <code className="bg-gray-900 px-2 py-1 rounded text-blue-300">src/features/auth/hooks/</code>, etc.
        </p>
      </div>
    </div>
  );
}
