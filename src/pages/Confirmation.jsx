import { Link } from 'react-router-dom';

export default function Confirmation() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">Payment Initiated!</h2>
      <p className="mb-4">Please check your UPI app for confirmation.</p>
      <Link to="/" className="text-blue-600 underline">Go back to Home</Link>
    </div>
  );
}
