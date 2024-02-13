// pages/api/verify-captcha.js
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { token } = req.body;

        try {
            const response = await axios.post(
                `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
            );

            if (response.data.success) {
                res.json({ success: true });
            } else {
                res.status(400).json({ success: false, error: 'Failed CAPTCHA verification' });
            }
        } catch (error) {
            console.error('Error verifying CAPTCHA:', error);
            res.status(500).json({ success: false, error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ success: false, error: 'Method not allowed' });
    }
}
