import { baseUrl } from 'main';
import NavItem from './NavItem';
const links = [
  ['Home', ''],
  ['About', 'about'],
];

export default function NavBar() {
  return (
    <nav>
      <ul id="nav-bar-ul">
        {links.map((component, idx) => {
          return <NavItem key={idx} name={component[0]} url={component[1]} />;
        })}
      </ul>
    </nav>
  );
}
