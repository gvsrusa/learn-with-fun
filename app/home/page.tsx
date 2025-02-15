import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Welcome to The Learning Link
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to The Learning Link – your go-to platform for high-quality,
        engaging, and effective educational and speech-language therapy resources.
        Our carefully designed worksheets and activities support teachers,
        therapists, and parents in helping children grow academically and
        communicatively.
      </p>
      <p className="text-lg text-gray-800 mb-2 font-semibold">
        Explore Our Resources:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
        <li>✔️ Engaging speech therapy worksheets</li>
        <li>✔️ Language-building activities</li>
        <li>✔️ Academic support materials</li>
        <li>✔️ Fun and interactive learning games</li>
      </ul>
      <p className="text-lg text-gray-700">
        {`Let's make learning exciting and accessible for every child!`}
      </p>
      <div className="mt-4">
        <Link 
          href="/" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>
    </div>
  );
} 