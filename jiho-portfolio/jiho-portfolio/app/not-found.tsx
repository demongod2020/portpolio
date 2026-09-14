import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Project not found.</h1>
      <Link className="button primary" href="/works">BACK TO WORKS</Link>
    </main>
  );
}
