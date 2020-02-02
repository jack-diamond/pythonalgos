import Link from 'next/link'

export default function Header() {
  return (
    <div className="header">
      <div className="home-nav">
        <img className="logo" src="/py.png"/>
        <Link  href="/">
          <h1>Interviewing in Python</h1>
        </Link>
      </div>
      <div className="nav-links">
        <Link  href="/experience">
          <a>Questions</a>
        </Link>
        <Link  href="/experience">
          <a>Data Structures</a>
        </Link>
        <Link  href="/experience">
          <a>Algorithms</a>
        </Link>
        <Link  href="/experience">
          <a>Resources</a>
        </Link>
      </div>
      <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          width: 100%;
          height: 100px;
          background: #FFFFFF;
          box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        }

        .home-nav {
          padding: 9px 0;
          flex-grow: 1;
          display: flex;
        }

        .home-nav img {
          height: 40px;
          width: 40px;
          padding: 35px 10px;
        }

        .home-nav h1 {
          padding: 14px 9px;
        }

        .nav-links {
          padding: 0 27px;
        }

        .nav-links a {
          padding: 0 27px;
          text-decoration: none;
          font-size: 16px;
          color: #666;
          font-family: Sans-Serif;
        }
      `}</style>
    </div>
  )
}
