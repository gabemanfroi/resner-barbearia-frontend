import { Link } from 'react-router-dom';

interface HeaderNavItemInterface {
  href: string;
  title: string;
}

const HeaderNavItem = ({ href, title }: HeaderNavItemInterface) => {
  return (
    <li>
      <Link to={`/${href}`}>{title}</Link>
    </li>
  );
};

export default HeaderNavItem;
