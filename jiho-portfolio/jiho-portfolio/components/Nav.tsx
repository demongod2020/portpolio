import Link from "next/link";

export default function Nav() {
  return (
    <header className="nav-shell">
      <Link className="brand" href="/">JH<span>.</span></Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/#about">About</Link>
        <Link href="/works">Works</Link>
        <Link href="/#skills">Skills</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  );
}
