import nodemailer from 'nodemailer';

import { sampleEmail } from '../emails/sampleEmail';

const isDev = import.meta.env.VITE_DEPLOY_ENV === 'dev';
const isBeta = import.meta.env.VITE_DEPLOY_ENV === 'beta';

let transporter: nodemailer.Transporter | null = null;

export function getEmailSender() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: 'smtp.fastmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'support@globedraft.com',
        pass: 'r3vtksbwpgpc5945',
      },
    });
  }

  return transporter;
}

export async function sendSampleEmail({ email }: { email: string }) {
  const htmlEmail = sampleEmail({
    email,
  });

  const message = {
    from: 'mail@johnheher.com',
    to: isDev || isBeta ? 'johnheher@gmail.com' : email,
    subject: 'Your sample email from John Heher',
    text: `Your sample email from John Heher`,
    html: htmlEmail,
  };

  const transporter = getEmailSender();

  const emailResponse = await transporter.sendMail(message);

  if (emailResponse.rejected.length) {
    throw new Error('Email could not be sent.');
  }

  return { ok: true };
}
