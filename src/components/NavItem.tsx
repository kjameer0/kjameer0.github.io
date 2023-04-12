import { baseUrl } from 'main';
import { NavLink } from 'react-router-dom';
export default function NavItem({ name, url }: { name: string; url: string }) {
  return (
    <li>
      <NavLink to={baseUrl + url}>{name}</NavLink>
    </li>
  );
}
