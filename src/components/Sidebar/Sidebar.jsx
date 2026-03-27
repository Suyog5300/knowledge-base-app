import {
  Bot, Cpu, BookOpen, Globe, Server, ListOrdered,
  Zap, Briefcase, Play, Lock, Database, Key, Users, Plug,
} from 'lucide-react';
import SidebarItem from './SidebarItem';
import SidebarSection from './SidebarSection';

const Sidebar = ({ activeItem = 'Knowledge Base', onItemClick }) => {
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
    { icon: Database, label: 'Knowledge Base' },
    { icon: Key, label: 'Key Store' },
  ];

  const admin = [
    { icon: Users, label: 'Tenant' },
    { icon: Plug, label: 'Integrations' },
  ];

  return (
    <aside style={{
      width: 200,
      minWidth: 200,
      background: 'white',
      borderRight: '1px solid #e5e7eb',
      overflowY: 'auto',
      padding: '12px 8px',
      zIndex: 1,
    }}>
      <nav>
        <SidebarSection title="MY PROJECTS">
          {myProjects.map(item => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.label === activeItem} onClick={() => onItemClick?.(item.label)} />
          ))}
        </SidebarSection>

        <SidebarSection title="ORCHESTRATOR">
          {orchestrator.map(item => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.label === activeItem} onClick={() => onItemClick?.(item.label)} />
          ))}
        </SidebarSection>

        <SidebarSection title="ADMIN">
          {admin.map(item => (
            <SidebarItem key={item.label} icon={item.icon} label={item.label} active={item.label === activeItem} onClick={() => onItemClick?.(item.label)} />
          ))}
        </SidebarSection>
      </nav>
    </aside>
  );
};

export default Sidebar;