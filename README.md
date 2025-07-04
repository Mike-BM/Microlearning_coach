# LearnBot - Microlearning via WhatsApp with M-PESA

A comprehensive microlearning platform that delivers 5-minute daily lessons through WhatsApp, with seamless M-PESA payment integration for the African market.

## Features

### Core Learning Platform
- 📱 WhatsApp-based lesson delivery
- ⏱️ 5-minute daily microlearning sessions
- 🎓 Vocational, English, and digital skills courses
- 🏆 Certificates and skill badges
- 📊 Progress tracking and analytics
- 🤖 AI-powered personalized learning paths

### M-PESA Integration
- 💳 Secure Daraja API integration
- 📱 STK Push for seamless payments
- 🔄 Real-time payment status tracking
- 💰 Kenyan Shilling pricing (KSh)
- ✅ Instant subscription activation

### Subscription Plans
- **Basic**: KSh 500/month - 1 learning path
- **Premium**: KSh 1,200/month - 3 learning paths + certificates
- **Pro**: KSh 2,500/month - Unlimited paths + mentorship

## Setup Instructions

### 1. Environment Configuration

Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

### 2. M-PESA Daraja API Setup

1. **Register for Daraja API**:
   - Visit [Safaricom Daraja Portal](https://developer.safaricom.co.ke/)
   - Create an account and register your application
   - Get your Consumer Key and Consumer Secret

2. **Configure Business Short Code**:
   - For sandbox: Use test short code (e.g., 174379)
   - For production: Use your actual business short code

3. **Get Passkey**:
   - Sandbox passkey is provided in Daraja documentation
   - Production passkey is provided when you go live

4. **Update Environment Variables**:
   ```env
   VITE_MPESA_CONSUMER_KEY=your_consumer_key
   VITE_MPESA_CONSUMER_SECRET=your_consumer_secret
   VITE_MPESA_BUSINESS_SHORT_CODE=174379
   VITE_MPESA_PASSKEY=your_passkey
   VITE_MPESA_ENVIRONMENT=sandbox
   ```

### 3. Installation

```bash
npm install
npm run dev
```

## M-PESA Integration Details

### STK Push Flow
1. User selects subscription plan
2. Enters M-PESA phone number
3. System initiates STK Push request
4. User receives payment prompt on phone
5. User enters M-PESA PIN
6. System polls for payment confirmation
7. Subscription activated upon successful payment

### Security Features
- Encrypted API communications
- Secure timestamp-based authentication
- Payment status verification
- Error handling and retry mechanisms

### Supported Payment Methods
- M-PESA (Primary)
- Safaricom network integration
- Real-time payment notifications

## API Endpoints

### M-PESA Integration
- `POST /mpesa/stkpush` - Initiate payment
- `POST /mpesa/callback` - Payment callback
- `POST /mpesa/query` - Check payment status

### Learning Platform
- `GET /courses` - Available courses
- `POST /subscribe` - Create subscription
- `GET /lessons` - Daily lessons
- `POST /progress` - Update progress

## Deployment

### Production Checklist
1. Switch M-PESA environment to production
2. Update business short code to live credentials
3. Configure production callback URLs
4. Set up SSL certificates
5. Configure domain whitelist in Daraja portal

### Environment Variables for Production
```env
VITE_MPESA_ENVIRONMENT=production
VITE_MPESA_BUSINESS_SHORT_CODE=your_live_shortcode
VITE_APP_URL=https://yourdomain.com
```

## Business Model

### Revenue Streams
1. **Subscription Revenue**: Monthly recurring payments
2. **Corporate Training**: Bulk subscriptions for organizations
3. **Certification Fees**: Premium certificates and badges
4. **Partnership Revenue**: Training institute collaborations

### Target Market
- Kenyan professionals and students
- Small business owners
- Job seekers and career changers
- Corporate training departments

## Technical Stack

- **Frontend**: React + TypeScript + Tailwind CSS
- **Payment**: M-PESA Daraja API
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify/Vercel ready

## Support

For M-PESA integration support:
- [Daraja API Documentation](https://developer.safaricom.co.ke/docs)
- [M-PESA Developer Portal](https://developer.safaricom.co.ke/)

For platform support:
- Email: support@learnbot.co.ke
- WhatsApp: +254 700 000 000