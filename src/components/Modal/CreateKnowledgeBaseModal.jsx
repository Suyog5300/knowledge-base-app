/* File: src/components/Modal/CreateKnowledgeBaseModal.jsx */

import { useState } from 'react';
import { X } from 'lucide-react';

const CreateKnowledgeBaseModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    vectorStore: 'Qdrant',
    embeddingModel: 'text-embedding-ada-002',
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCreate = () => {
    console.log('Creating knowledge base:', formData);
    setFormData({ name: '', description: '', vectorStore: 'Qdrant', embeddingModel: 'text-embedding-ada-002' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end" style={{ zIndex:1000}}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      {/* Modal Panel - slides in from right */}
      <div className="relative bg-white w-full max-w-md h-full shadow-2xl flex flex-col animate-slideIn">
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-2">
          <div>
            <h2 className="text-lg font-semibold text-text-primary">Create New Knowledge Base</h2>
            <p className="text-sm text-text-muted mt-0.5">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 -mt-1"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Name (Cannot be edited later)<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full border border-card-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">Description</label>
            <textarea
              placeholder="Description"
              rows={3}
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              className="w-full border border-card-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.vectorStore}
              onChange={(e) => handleChange('vectorStore', e.target.value)}
              className="w-full border border-card-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]"
            >
              <option value="Qdrant">Qdrant</option>
              <option value="Pinecone">Pinecone</option>
              <option value="Weaviate">Weaviate</option>
            </select>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <select
              value={formData.embeddingModel}
              onChange={(e) => handleChange('embeddingModel', e.target.value)}
              className="w-full border border-card-border rounded-lg px-3.5 py-2.5 text-sm text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%236B7280%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22M6%209l6%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center]"
            >
              <option value="text-embedding-ada-002">text-embedding-ada-002</option>
              <option value="text-embedding-3-small">text-embedding-3-small</option>
              <option value="text-embedding-3-large">text-embedding-3-large</option>
            </select>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-100">
          <button
            onClick={handleCreate}
            className="w-auto float-right bg-primary hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-colors duration-150"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateKnowledgeBaseModal;