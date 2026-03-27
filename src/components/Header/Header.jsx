import { Bell } from 'lucide-react';

const SearchIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </svg>
);

const ChevronDown = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const WorcescapeLogo = () => (
  <svg width={28} height={28} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={16} cy={16} r={15} fill="#E8465A" opacity={0.92} />
    <path
      d="M10 21C12 14.5 15 12 17.5 12.5C19.5 13 20.5 15.5 20 17.5C19.5 19.5 20.5 20.5 22 19C23 18 23.5 15.5 22.5 13"
      stroke="white" strokeWidth={2.5} strokeLinecap="round" fill="none"
    />
  </svg>
);

const Header = () => {
  return (
    <header style={{
      height: 52,
      background: '#1E1B4B',
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      flexShrink: 0,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 190 }}>
        <WorcescapeLogo />
        <span style={{ color: 'white', fontWeight: 600, fontSize: 15 }}>Worcespace</span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: '#15803d', borderRadius: 20,
          padding: '2px 10px', marginLeft: 4, cursor: 'pointer',
        }}>
          <span style={{ color: 'white', fontSize: 11, fontWeight: 500, whiteSpace: 'nowrap' }}>Worcespace 1</span>
          <ChevronDown />
        </div>
      </div>

      {/* Search */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '0 32px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 400 }}>
          <div style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)' }}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 8,
              color: '#c7d2fe',
              padding: '6px 42px 6px 34px',
              fontSize: 13,
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          <kbd style={{
            position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
            fontSize: 10, color: '#818cf8', background: 'rgba(255,255,255,0.08)',
            padding: '4px 4px', borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.12)', fontFamily: 'inherit',
          }}>⌘ K</kbd>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#a5b4fc', display: 'flex', alignItems: 'center', padding: 6, borderRadius: 6 }}>
          <Bell size={20} />
        </button>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', background: '#4F46E5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: 11, fontWeight: 600, cursor: 'pointer',
        }}>GK</div>
      </div>
    </header>
  );
};

export default Header;