import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const navigate = useNavigate();

  const handleUPIPayment = () => {
    const upiLink = `upi://pay?pa=evibhav@okicici&pn=DigsoftPay&am=500&cu=INR&tn=DigsoftPay`;
    window.location.href = upiLink;
    setTimeout(() => navigate('/confirm'), 3000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Make a Payment</h2>
      <button
        onClick={handleUPIPayment}
        className="bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700"
      >
        Pay via UPI
      </button>
    </div>
  );
}
