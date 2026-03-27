/* File: src/components/KnowledgeBase/KnowledgeBaseGrid.jsx */

import KnowledgeBaseCard from './KnowledgeBaseCard';

const KnowledgeBaseGrid = ({ items }) => {
  if (!items || items.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-20">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <p className="text-text-muted text-base">No Knowledge Bases Found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 border border-card-border rounded-xl p-5 bg-white">
      {items.map((item) => (
        <KnowledgeBaseCard
          key={item.id}
          name={item.name}
          description={item.description}
          createdOn={item.createdOn}
        />
      ))}
    </div>
  );
};

export default KnowledgeBaseGrid;