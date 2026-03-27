const PRIMARY = '#4F46E5';

const SidebarSection = ({ title, children }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <p style={{
        color: PRIMARY,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '0 10px 4px',
        margin: 0,
      }}>
        {title}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {children}
      </div>
    </div>
  );
};

export default SidebarSection;