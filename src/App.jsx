import { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ContentHeader from './components/KnowledgeBase/ContentHeader';
import KnowledgeBaseGrid from './components/KnowledgeBase/KnowledgeBaseGrid';
import Pagination from './components/KnowledgeBase/Pagination';
import knowledgeBases from './data/knowledgeBases';
import CreateKnowledgeBaseModal from './components/Modal/CreateKnowledgeBaseModal';
import EmptyContainer from './components/EmptyContainer/EmptyContainer';

function App() {
  const [activeItem, setActiveItem] = useState('Knowledge Base');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = knowledgeBases.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIdx = (currentPage - 1) * rowsPerPage;
  const paginatedItems = filteredItems.slice(startIdx, startIdx + rowsPerPage);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#f9fafb",
      }}
    >
      {/* Header sticks at top, full width */}
      <div
        style={{
          marginTop: 6,
          width: "99%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1px solid #e5e7eb",
        }}
      >
        <Header />
      </div>

      {/* Below header: sidebar + main scroll together */}
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
          minHeight: 0,
        }}
      >
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        <main className="flex-1 overflow-y-auto p-6 flex flex-col">
          {activeItem === 'Knowledge Base' ? (
            <>
              <ContentHeader
                searchQuery={searchQuery}
                onSearchChange={(val) => {
                  setSearchQuery(val);
                  setCurrentPage(1);
                }}
                onCreateNew={() => setIsModalOpen(true)}
              />
              <div className="flex-1">
                <KnowledgeBaseGrid items={paginatedItems} />
              </div>
              <Pagination
                totalRows={filteredItems.length}
                rowsPerPage={rowsPerPage}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                onRowsPerPageChange={(rows) => {
                  setRowsPerPage(rows);
                  setCurrentPage(1);
                }}
              />
            </>
          ) : (
            <EmptyContainer label={activeItem} />
          )}
        </main>
      </div>
          {/* Create New Modal */}
      <CreateKnowledgeBaseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default App;
