/* File: src/App.jsx */

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Top Header - full width */}
      <Header />

      {/* Body - sidebar + main content */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-2xl font-semibold text-text-primary">Knowledge Base</h1>
        </main>
      </div>
    </div>
  );
}

export default App;