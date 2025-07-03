import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Digsoft Pay</h1>
      <p className="mb-4">Fast and secure UPI & online payment gateway</p>
      <Link to="/pay" className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700">
        Make a Payment
      </Link>
    </div>
  );
}
