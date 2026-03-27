import { Bell } from 'lucide-react';
import logo from '../../assets/logo.png';

const SearchIcon = () => (
  <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx={11} cy={11} r={8} />
    <line x1={21} y1={21} x2={16.65} y2={16.65} />
  </svg>
);

const ChevronDown = () => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Header = () => {
  return (
    <header style={{
      height: 56,
      minHeight: 56,
      background: '#1E1B4B',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      flexShrink: 0,
      width: '100%',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxSizing: 'border-box',
      borderRadius: 8,
    }}>
      {/* Logo + badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 200 }}>
        {/* <WorcescapeLogo /> */}
        <img src={logo} alt="Logo" style={{ width: 30, height: 30 }} />
        <span style={{ color: 'white', fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>Worcspace</span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 4,
          background: '#312e81',
          borderRadius: 20,
          padding: '3px 10px',
          cursor: 'pointer',
          border: '1px solid rgba(255,255,255,0.12)',
        }}>
          <span style={{ color: 'white', fontSize: 12, fontWeight: 500, whiteSpace: 'nowrap' }}>Worcspace 1</span>
          <ChevronDown />
        </div>
      </div>

      {/* Search - centered */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: '0 40px' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: 420 }}>
          <div style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)' }}>
            <SearchIcon />
          </div>
          <input
            type="text"
            placeholder="Search..."
            style={{
              width: '100%',
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 8,
              color: '#c7d2fe',
              padding: '7px 44px 7px 34px',
              fontSize: 13,
              outline: 'none',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
            }}
          />
          <kbd style={{
            position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)',
            fontSize: 10, color: '#818cf8', background: 'rgba(255,255,255,0.07)',
            padding: '2px 6px', borderRadius: 4,
            border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'inherit',
          }}>⌘K</kbd>
        </div>
      </div>

      {/* Right actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button style={{
          background: 'transparent', border: 'none', cursor: 'pointer',
          color: '#a5b4fc', display: 'flex', alignItems: 'center',
          padding: '6px', borderRadius: 6,
        }}>
          <Bell size={19} />
        </button>
        <div style={{
          width: 34, height: 34, borderRadius: '50%', background: '#4F46E5',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: 12, fontWeight: 600, cursor: 'pointer',
          border: '2px solid rgba(255,255,255,0.15)',
        }}>GK</div>
      </div>
    </header>
  );
};

export default Header;