import Link from 'next/link';

export default function SpeechResourcesPage() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Speech Resources
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        A collection of worksheets and exercises designed to improve articulation, fluency, 
        and communication skills. Perfect for speech therapists and parents working with children 
        on speech development.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Articulation Practice</li>
        <li>Fluency Strategies</li>
        <li>Sound Awareness Activities</li>
      </ul>
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