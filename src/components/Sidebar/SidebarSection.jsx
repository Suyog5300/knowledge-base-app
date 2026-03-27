/* File: src/components/Sidebar/SidebarSection.jsx */

const SidebarSection = ({ title, children }) => {
  return (
    <div>
      <p className="text-primary text-[11px] font-semibold tracking-wider uppercase px-3 mb-2">
        {title}
      </p>
      <div className="space-y-0.5">{children}</div>
    </div>
  );
};

export default SidebarSection;