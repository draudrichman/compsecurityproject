import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { to, subject, text } = req.body;
    console.log(to, subject, text);
//   if (req.method === 'POST') {
//     const { to, subject, text } = req.body;
//     console.log(to, subject, text);

//     try {
//       // Create OAuth2 transporter with Gmail
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           type: 'OAuth2',
//           user: 'ahsan.hope991@gmail.com',
//           clientId: '375295130787-a4142lnkf9ck1r0cda6r7bmah4frk7m7.apps.googleusercontent.com',
//           clientSecret: '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',
//           refreshToken: '4/0AeaYSHDPtuMBLG1fvqCff5_Qx2v1-p-DOvTV9sHO0nxiv3nA8XZx_KvWhZwO7W1ATiT5Lg',
//         }
//       });

//       // Send email with defined transport object
//       await transporter.sendMail({
//         from: 'ahsan.hope991@gmail.com',
//         to,
//         subject,
//         text,
//       });

//       console.log('Email sent successfully!');
//       res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Error sending email' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
}
