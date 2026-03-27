/* File: src/components/KnowledgeBase/Pagination.jsx */

import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

const Pagination = ({ totalRows, rowsPerPage, currentPage, onPageChange, onRowsPerPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(totalRows / rowsPerPage));

  return (
    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 text-sm text-text-muted">
      {/* Left - row count */}
      <div>
        <span>{totalRows} rows</span>
      </div>

      {/* Center - rows per page */}
      <div className="flex items-center gap-2">
        <span>Rows per page</span>
        <select
          value={rowsPerPage}
          onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          className="bg-white border border-card-border rounded-md px-2 py-1 text-sm focus:outline-none focus:border-primary"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>

      {/* Right - page navigation */}
      <div className="flex items-center gap-1">
        <span className="mr-2">
          page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronRight size={16} />
        </button>
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-md hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronsRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;