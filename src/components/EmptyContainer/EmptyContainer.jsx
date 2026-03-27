import { Inbox } from 'lucide-react';

const EmptyContainer = ({ label = 'Item' }) => {
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        color: '#9ca3af',
        userSelect: 'none',
      }}
    >
      <Inbox size={48} strokeWidth={1.2} color="#d1d5db" />
      <p style={{ margin: 0, fontSize: 15, fontWeight: 500, color: '#6b7280' }}>
        No <span style={{ color: '#4F46E5', fontWeight: 600 }}>{label}</span> data found
      </p>
    </div>
  );
};

export default EmptyContainer;
