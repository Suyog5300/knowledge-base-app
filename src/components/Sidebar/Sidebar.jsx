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
    <aside className="w-[170px] min-w-[170px] bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="px-3 py-4 space-y-5">
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