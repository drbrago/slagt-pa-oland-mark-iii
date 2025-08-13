import Link from 'next/link';
import { NavItem } from '@/lib/nav';

interface Props {
  item: NavItem;
  isActive: boolean;
}

export default function NavLink({ item, isActive }: Props) {
  const className = `flex items-center px-4 py-2 hover:bg-blood/20 focus:bg-blood/20 rounded ml-4 ${
    isActive ? 'font-bold border-l-4 border-blood -ml-px' : ''
  }`;

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.title}
      </a>
    );
  }

  return (
    <Link href={item.href!} className={className} aria-current={isActive ? 'page' : undefined}>
      {item.icon && <span className="mr-2">{item.icon}</span>}
      {item.title}
    </Link>
  );
}
