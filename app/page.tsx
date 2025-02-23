import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          THE LEARNING LINK
        </h1>
        <p className="text-lg text-gray-700 mb-8">
        <strong><em>{`"Versatile. Interactive. Academic!"`}</em></strong>,
        </p>
        <div className="space-y-4">
          <Link
            href="/home"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            About
          </Link>
          <Link
            href="/speech-resources"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Speech Resources
          </Link>
          <Link
            href="/language-resources"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Language Resources
          </Link>
          <Link
            href="/academic-resources"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Academic Resources
          </Link>
          <Link
            href="/fun-activities"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md"
          >
            Fun Activities
          </Link>
        </div>
      </div>
    </div>
  );
}
