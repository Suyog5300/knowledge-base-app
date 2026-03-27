/* File: src/components/Sidebar/Sidebar.jsx */

import {
  Bot,
  Cpu,
  BookOpen,
  Globe,
  Server,
  ListOrdered,
  Zap,
  Briefcase,
  Play,
  Lock,
  Database,
  Key,
  Users,
  Plug,
} from 'lucide-react';
import SidebarItem from './SidebarItem';
import SidebarSection from './SidebarSection';

const Sidebar = () => {
  const myProjects = [
    { icon: Bot, label: 'Agents' },
    { icon: Cpu, label: 'AI Models' },
    { icon: BookOpen, label: 'Library' },
  ];

  const orchestrator = [
    { icon: Globe, label: 'Published' },
    { icon: Server, label: 'Machines' },
    { icon: ListOrdered, label: 'Queues' },
    { icon: Zap, label: 'Triggers' },
    { icon: Briefcase, label: 'Jobs' },
    { icon: Play, label: 'Executions' },
    { icon: Lock, label: 'Vault' },
    { icon: Database, label: 'Knowledge Base', active: true },
    { icon: Key, label: 'Key Store' },
  ];

  const admin = [
    { icon: Users, label: 'Tenant' },
    { icon: Plug, label: 'Integrations' },
  ];

  return (
    <aside className="w-[200px] min-w-[200px] bg-sidebar-bg h-screen flex flex-col overflow-y-auto">
      {/* Logo */}
      <div className="px-4 py-4 flex items-center gap-2">
        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">W</span>
        </div>
        <span className="text-white font-semibold text-base">Worcespace</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-xs text-indigo-300 bg-indigo-900/50 px-2 py-0.5 rounded-md">
            Worcespace 1
          </span>
          <svg className="w-3 h-3 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 pb-4 space-y-5 mt-2">
        <SidebarSection title="MY PROJECTS">
          {myProjects.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
          ))}
        </SidebarSection>

        <SidebarSection title="ORCHESTRATOR">
          {orchestrator.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
          ))}
        </SidebarSection>

        <SidebarSection title="ADMIN">
          {admin.map((item) => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.active} />
          ))}
        </SidebarSection>
      </nav>
    </aside>
  );
};

export default Sidebar;