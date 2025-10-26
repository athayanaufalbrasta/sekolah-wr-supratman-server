import nodemailer from "nodemailer";
import { Response } from "express";

const sendEmailVerification = async (userEmail: string, token: string) => {
	const confirmationURL = `http://localhost:5173/auth/verifyingtoken?token=${token}&email=${userEmail}`;

	let transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_USER,
		to: userEmail,
		subject: "Verifikasi Email Akun Anda",
		html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            
            <div style="font-size: 48px; line-height: 1; margin-bottom: 20px;">
                <span style="display: inline-block; background-color: #212121; color: #ffffff; width: 60px; height: 60px; border-radius: 10px; font-size: 40px;">&#9786;</span>
            </div>

            <h2 style="font-size: 24px; color: #212121; margin-bottom: 5px;">
                Please verify your email <span style="font-size: 20px;">&#128522;</span>
            </h2>
            <p style="font-size: 14px; color: #757575; margin-bottom: 30px;">
                Untuk menggunakan layanan kami, klik tombol verifikasi. Ini membantu menjaga akun Anda aman.
            </p>

            <a href="${confirmationURL}" style="display: inline-block; background-color: #1976D2; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px; min-width: 200px;">
                Verify my account
            </a>

            <div style="border-top: 1px solid #f0f0f0; margin-top: 40px; padding-top: 20px;">
                <p style="font-size: 13px; color: #757575; line-height: 1.5;">
                    Anda menerima email ini karena Anda memiliki akun di **Wr Supratman**. Jika Anda tidak yakin mengapa menerima ini, silakan hubungi kami dengan membalas email ini.
                </p>
            </div>
            
            <div style="background-color: #f5f5ff; padding: 15px; border-radius: 6px; margin-top: 20px; color: #888; font-size: 12px; text-align: center;">
                Email ini didesain otomatis untuk kenyamanan Anda.
            </div>

        </div>
        `,
	};

	await transporter.sendMail(mailOptions);
	return {
		message: "Verifikasi dikirim, cek email Anda.",
	};
};

const sendResetEmail = async (userEmail: string, token: string, res: Response) => {
	const resetUrl = `http://localhost:5173/auth/reset-password?token=${token}`;

	let transporter = nodemailer.createTransport({
		service: "Gmail",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.SMTP_USER,
		to: userEmail,
		subject: "Permintaan Reset Password Anda",
		html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            
            <div style="font-size: 48px; line-height: 1; margin-bottom: 20px;">
                <span style="display: inline-block; background-color: #212121; color: #ffffff; width: 60px; height: 60px; border-radius: 10px; font-size: 40px;">&#9786;</span>
            </div>

            <h2 style="font-size: 24px; color: #212121; margin-bottom: 5px;">
                Permintaan Reset Password <span style="font-size: 20px;">&#128522;</span>
            </h2>
            <p style="font-size: 14px; color: #757575; margin-bottom: 30px;">
                Kami menerima permintaan reset password untuk akun Anda. Klik tombol di bawah untuk mengatur ulang.
            </p>

            <a href="${resetUrl}" style="display: inline-block; background-color: #1976D2; color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 16px; min-width: 200px;">
                Reset Password Saya
            </a>

            <div style="border-top: 1px solid #f0f0f0; margin-top: 40px; padding-top: 20px;">
                <p style="font-size: 13px; color: #757575; line-height: 1.5;">
                    Link ini akan kedaluwarsa dalam 10 menit. Jika Anda tidak meminta reset password ini, silakan abaikan email ini.
                </p>
            </div>
            
            <div style="background-color: #f5f5ff; padding: 15px; border-radius: 6px; margin-top: 20px; color: #888; font-size: 12px; text-align: center;">
                Email ini adalah layanan keamanan otomatis. Jangan bagikan link ini kepada siapapun.
            </div>

        </div>
        `,
	};

	await transporter.sendMail(mailOptions);
	return {
		message: "Link reset password dikirim, cek email Anda.",
	};
};

export { sendEmailVerification, sendResetEmail };
