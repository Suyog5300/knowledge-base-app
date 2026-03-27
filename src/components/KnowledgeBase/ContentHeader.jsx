/* File: src/components/KnowledgeBase/ContentHeader.jsx */

import { Search, Plus } from 'lucide-react';
import { useEffect, useRef } from 'react';

const ContentHeader = ({ searchQuery, onSearchChange, onCreateNew }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-semibold text-text-primary">Knowledge Base</h1>

      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-56 bg-white border border-card-border text-sm rounded-lg pl-9 pr-16 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors text-text-primary placeholder-gray-400"
          />
          <kbd
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              background: '#f3f4f6',
              border: '1px solid #e5e7eb',
              borderRadius: 4,
              padding: '1px 5px',
              fontSize: 11,
              color: '#9ca3af',
              fontFamily: 'inherit',
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            ⌘K
          </kbd>
        </div>

        {/* Create New Button */}
        <button
          onClick={onCreateNew}
          className="flex items-center gap-2 bg-primary hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors duration-150"
        >
          <Plus size={16} />
          <span>Create New</span>
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
