const PRIMARY = '#4F46E5';
const ACTIVE_BG = '#edecfa';

const SidebarItem = ({ icon: Icon, label, active = false }) => {
  return (
    <button
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '7px 12px 7px 10px',
        borderRadius: 7,
        border: 'none',
        borderLeft: active ? `3px solid ${PRIMARY}` : '3px solid transparent',
        cursor: 'pointer',
        background: active ? ACTIVE_BG : 'transparent',
        color: active ? PRIMARY : '#374151',
        fontSize: 13,
        fontWeight: active ? 600 : 400,
        textAlign: 'left',
        transition: 'background 0.15s',
        fontFamily: 'inherit',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.background = '#f5f5fe'; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
    >
      <Icon size={17} strokeWidth={1.8} color={active ? PRIMARY : '#6b7280'} />
      <span>{label}</span>
    </button>
  );
};

export default SidebarItem;