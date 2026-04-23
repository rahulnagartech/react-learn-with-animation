import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import Section4 from './components/sections/Section4';
import Section5 from './components/sections/Section5';
import Section6 from './components/sections/Section6';
import Section7 from './components/sections/Section7';
import Section8 from './components/sections/Section8';
import Section9 from './components/sections/Section9';
import Section10 from './components/sections/Section10';
import Section11 from './components/sections/Section11';
import Section12 from './components/sections/Section12';
import Section13 from './components/sections/Section13';
import Section14 from './components/sections/Section14';
import Section15 from './components/sections/Section15';
import Section16 from './components/sections/Section16';
import Section17 from './components/sections/Section17';
import Section18 from './components/sections/Section18';
import Section19 from './components/sections/Section19';
import Section20 from './components/sections/Section20';
import Section21 from './components/sections/Section21';
import Section22 from './components/sections/Section22';
import Section23 from './components/sections/Section23';
import Section24 from './components/sections/Section24';
import Section25 from './components/sections/Section25';
import Section26 from './components/sections/Section26';
import Section27 from './components/sections/Section27';
import Section28 from './components/sections/Section28';
import Section29 from './components/sections/Section29';
import Section30 from './components/sections/Section30';
import Section31 from './components/sections/Section31';
import Section32 from './components/sections/Section32';
import Section33 from './components/sections/Section33';

function App() {
  const [activeSection, setActiveSection] = useState(1);

  const sections = [
    { id: 1, title: 'What is React', component: Section1 },
    { id: 2, title: 'Why Use React', component: Section2 },
    { id: 3, title: 'React vs JavaScript', component: Section3 },
    { id: 4, title: 'Setup (Vite)', component: Section4 },
    { id: 5, title: 'Folder Structure', component: Section5 },
    { id: 6, title: 'Components', component: Section6 },
    { id: 7, title: 'JSX', component: Section7 },
    { id: 8, title: 'Expressions in JSX', component: Section8 },
    { id: 9, title: 'Props', component: Section9 },
    { id: 10, title: 'State', component: Section10 },
    { id: 11, title: 'Events', component: Section11 },
    { id: 12, title: 'Conditional Rendering', component: Section12 },
    { id: 13, title: 'Lists & Keys', component: Section13 },
    { id: 14, title: 'Forms', component: Section14 },
    { id: 15, title: 'Styling', component: Section15 },
    { id: 16, title: 'Hooks Introduction', component: Section16 },
    { id: 17, title: 'useState Hook', component: Section17 },
    { id: 18, title: 'useEffect Hook', component: Section18 },
    { id: 19, title: 'useRef Hook', component: Section19 },
    { id: 20, title: 'useContext Hook', component: Section20 },
    { id: 21, title: 'useMemo Hook', component: Section21 },
    { id: 22, title: 'useCallback Hook', component: Section22 },
    { id: 23, title: 'Custom Hooks', component: Section23 },
    { id: 24, title: 'React Fragment', component: Section24 },
    { id: 25, title: 'Lifting State Up', component: Section25 },
    { id: 26, title: 'Controlled Components', component: Section26 },
    { id: 27, title: 'Prop Drilling', component: Section27 },
    { id: 28, title: 'Context API', component: Section28 },
    { id: 29, title: 'React Router', component: Section29 },
    { id: 30, title: 'Lazy Loading', component: Section30 },
    { id: 31, title: 'Code Splitting', component: Section31 },
    { id: 32, title: 'Error Boundaries', component: Section32 },
    { id: 33, title: 'Advanced Topics (33-60)', component: Section33 },
  ];

  const activeComponent = sections.find(s => s.id === activeSection)?.component;
  const ActiveComponent = activeComponent || Section1;

  return (
    <div className="flex h-screen bg-gray-950">
      <Sidebar 
        sections={sections} 
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto">
          <div className="p-8">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
