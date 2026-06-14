import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center p-4 shadow-md gap-4">
      <h1 className="text-2xl font-bold">Homestay</h1>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/login">Login</Link></li>
      </ul>

      <div>👤</div>
    </nav>
  );
}