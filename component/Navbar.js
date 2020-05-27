import Link from "next/link";

const Navbar = () => (
  <div className="container mt-4 mb-4 text-center">
    <Link href="/">
      <a className="nav-link">
        <img src="/images/sw_logo.png" className="logo" />
      </a>
    </Link>
    <style jsx>{`
      .logo {
        height: 75px;
      }
    `}</style>
  </div>
);

export default Navbar;
