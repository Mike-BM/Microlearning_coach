import axios from 'axios';
import { Buffer } from 'buffer';

interface MPesaConfig {
  consumerKey: string;
  consumerSecret: string;
  businessShortCode: string;
  passkey: string;
  environment: 'sandbox' | 'production';
}

interface STKPushRequest {
  phoneNumber: string;
  amount: number;
  accountReference: string;
  transactionDesc: string;
  callbackUrl: string;
}

interface STKPushResponse {
  MerchantRequestID: string;
  CheckoutRequestID: string;
  ResponseCode: string;
  ResponseDescription: string;
  CustomerMessage: string;
}

class MPesaService {
  private config: MPesaConfig;
  private baseUrl: string;

  constructor(config: MPesaConfig) {
    this.config = config;
    this.baseUrl = config.environment === 'production' 
      ? 'https://api.safaricom.co.ke' 
      : 'https://sandbox.safaricom.co.ke';
  }

  private async getAccessToken(): Promise<string> {
    const auth = Buffer.from(`${this.config.consumerKey}:${this.config.consumerSecret}`).toString('base64');
    
    try {
      const response = await axios.get(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        }
      });
      
      return response.data.access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw new Error('Failed to get M-PESA access token');
    }
  }

  private generateTimestamp(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    
    return `${year}${month}${day}${hour}${minute}${second}`;
  }

  private generatePassword(timestamp: string): string {
    const data = `${this.config.businessShortCode}${this.config.passkey}${timestamp}`;
    return Buffer.from(data).toString('base64');
  }

  async initiateSTKPush(request: STKPushRequest): Promise<STKPushResponse> {
    const accessToken = await this.getAccessToken();
    const timestamp = this.generateTimestamp();
    const password = this.generatePassword(timestamp);

    // Format phone number to international format
    let phoneNumber = request.phoneNumber.replace(/\D/g, '');
    if (phoneNumber.startsWith('0')) {
      phoneNumber = '254' + phoneNumber.substring(1);
    } else if (!phoneNumber.startsWith('254')) {
      phoneNumber = '254' + phoneNumber;
    }

    const payload = {
      BusinessShortCode: this.config.businessShortCode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: 'CustomerPayBillOnline',
      Amount: request.amount,
      PartyA: phoneNumber,
      PartyB: this.config.businessShortCode,
      PhoneNumber: phoneNumber,
      CallBackURL: request.callbackUrl,
      AccountReference: request.accountReference,
      TransactionDesc: request.transactionDesc
    };

    try {
      const response = await axios.post(
        `${this.baseUrl}/mpesa/stkpush/v1/processrequest`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error('STK Push error:', error);
      throw new Error('Failed to initiate M-PESA payment');
    }
  }

  async querySTKPushStatus(checkoutRequestId: string): Promise<any> {
    const accessToken = await this.getAccessToken();
    const timestamp = this.generateTimestamp();
    const password = this.generatePassword(timestamp);

    const payload = {
      BusinessShortCode: this.config.businessShortCode,
      Password: password,
      Timestamp: timestamp,
      CheckoutRequestID: checkoutRequestId
    };

    try {
      const response = await axios.post(
        `${this.baseUrl}/mpesa/stkpushquery/v1/query`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error('STK Push query error:', error);
      throw new Error('Failed to query M-PESA payment status');
    }
  }
}

// Initialize M-PESA service with environment variables
const mpesaConfig: MPesaConfig = {
  consumerKey: import.meta.env.VITE_MPESA_CONSUMER_KEY || '',
  consumerSecret: import.meta.env.VITE_MPESA_CONSUMER_SECRET || '',
  businessShortCode: import.meta.env.VITE_MPESA_BUSINESS_SHORT_CODE || '',
  passkey: import.meta.env.VITE_MPESA_PASSKEY || '',
  environment: (import.meta.env.VITE_MPESA_ENVIRONMENT as 'sandbox' | 'production') || 'sandbox'
};

export const mpesaService = new MPesaService(mpesaConfig);
export type { STKPushRequest, STKPushResponse };