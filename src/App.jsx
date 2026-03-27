/* File: src/App.jsx */

import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <p className="text-text-muted text-lg">Main content area</p>
      </main>
    </div>
  );
}

export default App;