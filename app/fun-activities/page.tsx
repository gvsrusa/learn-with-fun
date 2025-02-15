import Link from 'next/link';

export default function FunActivitiesPage() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-4">
        Fun Activities
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Learning should be fun! Explore hands-on activities, puzzles, and creative games that reinforce 
        learning in an engaging way.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700">
        <li>Word Searches</li>
        <li>Crossword Puzzles</li>
        <li>Storytelling Prompts</li>
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