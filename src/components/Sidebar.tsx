interface SidebarProps {
  sections: Array<{ id: number; title: string }>;
  activeSection: number;
  onSectionChange: (id: number) => void;
}

export default function Sidebar({ sections, activeSection, onSectionChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-700 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-xl font-bold text-blue-400 mb-8">📚 Topics</h2>
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg animate-pulse-glow'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-blue-400'
              }`}
            >
              <span className="text-sm font-medium">{section.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
