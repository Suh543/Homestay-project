export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 text-center">
      <div className="flex justify-between">
      <h1 className="text-2xl font-bold">Stayora</h1>
        <p>© 2026 Stayora</p>

        <div className="flex gap-4">
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>GitHub</span>
        </div>
      </div>
    </footer>
  );
}