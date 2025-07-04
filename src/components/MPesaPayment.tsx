import React, { useState } from 'react';
import { Smartphone, Loader2, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
import { mpesaService, STKPushRequest } from '../services/mpesa';

interface MPesaPaymentProps {
  amount: number;
  planName: string;
  onSuccess: (transactionId: string) => void;
  onCancel: () => void;
}

const MPesaPayment: React.FC<MPesaPaymentProps> = ({ amount, planName, onSuccess, onCancel }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'pending' | 'success' | 'failed'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [checkoutRequestId, setCheckoutRequestId] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    
    // Format as Kenyan phone number
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
    if (digits.length <= 9) return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 9)}`;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };

  const initiatePayment = async () => {
    if (!phoneNumber.trim()) {
      setErrorMessage('Please enter your phone number');
      return;
    }

    setIsProcessing(true);
    setPaymentStatus('pending');
    setErrorMessage('');

    try {
      const request: STKPushRequest = {
        phoneNumber: phoneNumber.replace(/\s/g, ''),
        amount: amount,
        accountReference: `LEARNBOT_${planName.toUpperCase()}`,
        transactionDesc: `LearnBot ${planName} Subscription`,
        callbackUrl: `${window.location.origin}/api/mpesa/callback`
      };

      const response = await mpesaService.initiateSTKPush(request);
      
      if (response.ResponseCode === '0') {
        setCheckoutRequestId(response.CheckoutRequestID);
        // Start polling for payment status
        pollPaymentStatus(response.CheckoutRequestID);
      } else {
        throw new Error(response.ResponseDescription || 'Payment initiation failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('failed');
      setErrorMessage(error instanceof Error ? error.message : 'Payment failed. Please try again.');
      setIsProcessing(false);
    }
  };

  const pollPaymentStatus = async (checkoutRequestId: string) => {
    let attempts = 0;
    const maxAttempts = 30; // Poll for 5 minutes (10 seconds * 30)

    const poll = async () => {
      try {
        const status = await mpesaService.querySTKPushStatus(checkoutRequestId);
        
        if (status.ResultCode === '0') {
          // Payment successful
          setPaymentStatus('success');
          setIsProcessing(false);
          onSuccess(status.MpesaReceiptNumber || checkoutRequestId);
        } else if (status.ResultCode === '1032') {
          // User cancelled
          setPaymentStatus('failed');
          setErrorMessage('Payment was cancelled');
          setIsProcessing(false);
        } else if (status.ResultCode && status.ResultCode !== '1037') {
          // Other error (1037 means still processing)
          setPaymentStatus('failed');
          setErrorMessage(status.ResultDesc || 'Payment failed');
          setIsProcessing(false);
        } else {
          // Still processing, continue polling
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(poll, 10000); // Poll every 10 seconds
          } else {
            setPaymentStatus('failed');
            setErrorMessage('Payment timeout. Please try again.');
            setIsProcessing(false);
          }
        }
      } catch (error) {
        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 10000);
        } else {
          setPaymentStatus('failed');
          setErrorMessage('Unable to verify payment status');
          setIsProcessing(false);
        }
      }
    };

    // Start polling after 5 seconds
    setTimeout(poll, 5000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Smartphone className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pay with M-PESA</h2>
          <p className="text-gray-600">
            Subscribe to <span className="font-semibold">{planName}</span> plan
          </p>
          <p className="text-3xl font-bold text-green-600 mt-2">
            KSh {amount.toLocaleString()}
          </p>
        </div>

        {paymentStatus === 'idle' && (
          <div className="space-y-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                M-PESA Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="0712 345 678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                maxLength={13}
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter your Safaricom number to receive the payment prompt
              </p>
            </div>

            {errorMessage && (
              <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{errorMessage}</span>
              </div>
            )}

            <div className="flex space-x-3">
              <button
                onClick={onCancel}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={initiatePayment}
                disabled={!phoneNumber.trim()}
                className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Pay Now
              </button>
            </div>
          </div>
        )}

        {paymentStatus === 'pending' && (
          <div className="text-center space-y-4">
            <Loader2 className="h-12 w-12 text-green-600 animate-spin mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Payment Request Sent
              </h3>
              <p className="text-gray-600 mb-4">
                Check your phone for the M-PESA payment prompt and enter your PIN to complete the transaction.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Next steps:</strong>
                  <br />
                  1. Check your phone for M-PESA notification
                  <br />
                  2. Enter your M-PESA PIN
                  <br />
                  3. Wait for confirmation
                </p>
              </div>
            </div>
          </div>
        )}

        {paymentStatus === 'success' && (
          <div className="text-center space-y-4">
            <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Payment Successful!
              </h3>
              <p className="text-gray-600">
                Your subscription has been activated. You'll receive a confirmation message on WhatsApp shortly.
              </p>
            </div>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="text-center space-y-4">
            <XCircle className="h-12 w-12 text-red-600 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Payment Failed
              </h3>
              <p className="text-gray-600 mb-4">{errorMessage}</p>
              <div className="flex space-x-3">
                <button
                  onClick={onCancel}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setPaymentStatus('idle');
                    setErrorMessage('');
                  }}
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MPesaPayment;