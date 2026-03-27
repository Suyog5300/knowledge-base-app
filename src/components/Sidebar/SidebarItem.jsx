/* File: src/components/Sidebar/SidebarItem.jsx */

const SidebarItem = ({ icon: Icon, label, active = false }) => {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150
        ${
          active
            ? 'bg-sidebar-active text-white'
            : 'text-indigo-200 hover:bg-sidebar-hover hover:text-white'
        }`}
    >
      <Icon size={18} strokeWidth={1.8} />
      <span>{label}</span>
    </button>
  );
};

export default SidebarItem;