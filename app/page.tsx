import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <header className="py-10 text-center">
        <h1 className="text-4xl font-bold font-[cursive] text-blue-800">
          THE LEARNING LINK
        </h1>
        <p className="mt-4 text-lg text-blue-600">
          Empowering Educators, Parents &amp; Kids with Smart Resources!
        </p>
      </header>

      <nav className="bg-blue-100 p-4">
        <ul className="flex justify-center gap-4">
          <li>
            <Link href="/home" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                About
            </Link>
          </li>
          <li>
            <Link href="/speech-resources" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                Speech Resources
            </Link>
          </li>
          <li>
            <Link href="/language-resources" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                Language Resources
            </Link>
          </li>
          <li>
            <Link href="/academic-resources" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                Academic Resources
            </Link>
          </li>
          <li>
            <Link href="/fun-activities" className="px-4 py-2 border border-blue-200 rounded hover:bg-blue-200 text-blue-800">
                Fun Activities
            </Link>
          </li>
        </ul>
      </nav>

      <main className="flex-grow p-8">
        <p className="text-center">
          Welcome to The Learning Link. Please select a tab to explore our resources.
        </p>
      </main>

      <footer className="py-4 text-center text-sm text-blue-600">
        © {new Date().getFullYear()} The Learning Link. All rights reserved.
      </footer>
    </div>
  );
}
