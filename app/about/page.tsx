import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        About The Learning Link
      </h1>
      <p className="text-lg text-gray-700">
        {`At The Learning Link, we believe that every child deserves the right tools to thrive.
        Our mission is to bridge the gap between education and speech therapy by providing
        ready-to-use, evidence-based resources. Whether you're an educator, speech therapist,
        or parent, you'll find valuable materials to support learning and communication.`}
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