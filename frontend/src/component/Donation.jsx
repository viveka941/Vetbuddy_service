import React from 'react';
import Navbar from './Navbar';

const Donation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">
              Support <span className="text-lime-500">VetBuddy</span>
            </h2>
            <p className="text-gray-600 mt-2">Your contribution helps us care for more pets in need</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Scan to Donate</h3>
              <p className="text-gray-600 mb-4">Use any UPI app to scan the QR code</p>
              
              {/* Replace with your actual QR code image */}
              <div className="bg-gray-100 p-4 rounded-xl flex justify-center">
                <img 
                  src="/images/upi-qr.png" 
                  alt="UPI QR Code" 
                  className="w-64 h-64 object-contain"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">UPI Details</h4>
                <p className="text-gray-600">UPI ID: vetbuddy@upi</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Bank Details</h4>
                <p className="text-gray-600">Account Name: VetBuddy Foundation</p>
                <p className="text-gray-600">Account Number: XXXX XXXX XXXX</p>
                <p className="text-gray-600">IFSC Code: XXXX0000000</p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                All donations are tax-deductible under section 80G of the Income Tax Act
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation; 