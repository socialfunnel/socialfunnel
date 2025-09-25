import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import Menu from "./Menu";

const Nav = ({ singleMenu }) => {
  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header py-10">
          <div className="mobile-logo">
            <Link legacyBehavior href="/">
              <a>
                <img
                  src="assets/images/logos/logo.png"
                  alt="Social Funnel Logo"
                  title="Social Funnel"
                  style={{ maxHeight: "40px", width: "auto" }}
                />
              </a>
            </Link>
          </div>

          {/* Toggle Button -> Now use Accordion.Button */}
          <Accordion.Item eventKey="navbar-collapse">
            <Accordion.Header className="navbar-toggle">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </Accordion.Header>

            {/* Collapsible content */}
            <Accordion.Body className="navbar-collapse clearfix">
              <Menu singleMenu={singleMenu} />
            </Accordion.Body>
          </Accordion.Item>
        </div>
      </Accordion>
    </nav>
  );
};

export default Nav;
