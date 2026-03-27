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
    <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-xl font-semibold text-text-primary sm:text-2xl">Knowledge Base</h1>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search */}
        <div className="relative flex-1 sm:flex-none">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full sm:w-48 md:w-56 bg-white border border-card-border text-sm rounded-lg pl-9 pr-14 py-2 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors text-text-primary placeholder-gray-400"
          />
          <kbd
            style={{
              position: 'absolute',
              right: 8,
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              alignItems: 'center',
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
          className="flex items-center gap-1.5 bg-primary hover:bg-indigo-700 text-white text-sm font-medium px-3 py-2 sm:px-4 rounded-lg transition-colors duration-150 whitespace-nowrap flex-shrink-0"
        >
          <Plus size={15} />
          <span className="hidden xs:inline sm:inline">Create New</span>
          <span className="xs:hidden sm:hidden">New</span>
        </button>
      </div>
    </div>
  );
};

export default ContentHeader;
