
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link href="/" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
