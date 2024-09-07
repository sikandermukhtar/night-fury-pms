import axios from 'axios';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendRejectionEmail = async (to: string, doctorName: string, reason: string) => {
    const plainTextContent = generatePlainTextContent(doctorName, reason);

    try {
        const response = await axios.post('https://api.resend.com/v1/emails', {
            from: 'onboarding@resend.dev',
            to:"moiz20920@gmail.com",
            subject: 'Registration Rejected',
            text: plainTextContent
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, // Ensure you use the correct environment variable
                'Content-Type': 'application/json',
            },
        });

        console.log('Email sent successfully:', response.data);
    } catch (error: any) {
        console.error('Error sending email:', error.response?.data || error.message);
    }
};

export const generatePlainTextContent = (doctorName: string, reason: string) => {
    return `
Hello Dr. ${doctorName},

We regret to inform you that your registration with our system has been rejected.

Reason for rejection: ${reason}

If you have any questions or believe this decision was made in error, please contact our support team at support@example.com.

Thank you for your understanding.
    `;
};
