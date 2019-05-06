import Link from 'next/link';
import { withRouter } from 'next/router';

import Avatar from './Avatar';

function CustomLink({ href, title, children, isActive = false, style = {} }) {
  const defaultStyles = {
    marginRight: '15px',
    textDecorationLine: 'none',
    borderBottom: `1px solid ${isActive ? '#000' : 'transparent'}`,
    fontSize: '18px',
    ...style
  };

  return (
    <Link href={href}>
      <a style={defaultStyles} title={title}>
        {children}
      </a>
    </Link>
  );
}

function Header({ router }) {
  const activeRoute = router.pathname;

  return (
    <header>
      <div>
        <CustomLink
          href="/"
          title="Home"
          style={{ margin: 0, display: 'flex', alignItems: 'center' }}
        >
          <Avatar style={{ marginRight: '10px' }} />
          Jorge Calle
        </CustomLink>
      </div>
      <div>
        <CustomLink
          isActive={activeRoute === '/about'}
          href="/about"
          title="About"
          children="About"
        />
        <CustomLink
          isActive={activeRoute === '/contact'}
          href="/contact"
          title="Contact"
          children="Contact"
        />
      </div>
      <style>
        {`
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
          }

          a:hover {
            opacity: 0.8;
          }

          a:visited {
            color: #000;
          }
       `}
      </style>
    </header>
  );
}

export default withRouter(Header);
