/* File: src/components/KnowledgeBase/KnowledgeBaseCard.jsx */

import { MoreVertical } from 'lucide-react';

const KnowledgeBaseCard = ({ name, description, createdOn }) => {
  return (
    <div className="bg-white border border-card-border rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      {/* Top section */}
      <div>
        {/* Title row */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-base font-semibold text-text-primary">{name}</h3>
          <button className="text-text-muted hover:text-text-primary transition-colors p-0.5 -mr-1 -mt-0.5">
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Description */}
        <p className="text-sm text-text-muted leading-relaxed line-clamp-3">{description}</p>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100">
        <p className="text-xs text-text-muted">
          Created On: <span className="text-text-primary font-medium">{createdOn}</span>
        </p>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;