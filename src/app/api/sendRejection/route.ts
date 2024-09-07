import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { doctorName, reason } = await request.json();
        const plainTextContent = generatePlainTextContent(doctorName, reason);
        
        const resend = new Resend(process.env.RESEND_API_KEY);

        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'moiz20920@gmail.com',
            subject: 'Hello world',
            text: plainTextContent
        });

        if (error) {
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json(data);

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export const generatePlainTextContent = (doctorName: string, reason: string) => {
    return `
Hello Dr. ${doctorName},

We regret to inform you that your registration with our system has been rejected.

Reason for rejection: ${reason}

If you have any questions or believe this decision was made in error, please contact our support team at support@example.com.

Thank you for your understanding.
    `;
};
