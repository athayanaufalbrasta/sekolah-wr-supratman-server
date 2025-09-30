import nodemailer from "nodemailer";

const sendEmailVerification = async (userEmail, token, res) => {
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
		subject: "Email Verification",
		html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
    <div style="background: linear-gradient(90deg, #1e88e5, #42a5f5); color: #ffffff; padding: 25px 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Email Verification</h1>
        <p style="margin: 5px 0 0; font-size: 16px;">Welcome to NHKBP !</p>
    </div>
    <div style="padding: 30px 20px;">
        <p style="font-size: 16px; color: #333;">Halo,</p>
        <p style="font-size: 15px; color: #555;">Terimakasih sudah melengkapi email anda, klik link di bawah untuk melakukan verifikasi email terhadap akun anda :</p>
        <div style="text-align: center; margin: 30px 0;">
            <a href="${confirmationURL}" style="background-color: #1e88e5; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">Verifikasi Email</a>
        </div>
        <p style="font-size: 14px; color: #999;">Link yang diberikan akan hangus atau kedaluarsa dalam 10 menit, jika anda tidak meminta verifikasi alamat email anda dapat mengabaikan email ini.</p>
        <p style="margin-top: 30px; font-size: 15px; color: #444;">Cheers,<br><strong>The Mumbanglonong Team</strong></p>
    </div>
    <div style="background-color: #f9f9f9; color: #888; padding: 15px 20px; text-align: center; font-size: 13px;">
        <p>If the button doesn't work, copy and paste this URL into your browser:</p>
        <a href="${confirmationURL}" style="color: #1e88e5; word-break: break-all;">${confirmationURL}</a>
        <p style="margin-top: 15px;">&copy; 2024 Mumbanglonong. All rights reserved.</p>
    </div>
</div>
    `,
	};

	await transporter.sendMail(mailOptions);
	res.status(202).json({
		message: "verication passed, check your email for the token",
	});
};

const sendResetEmail = async (userEmail, token, res) => {
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
		subject: "Permintaan Reset Password",
		html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #4CAF50; color: #ffffff; padding: 20px; text-align: center;">
                <h1>Permintaan Reset Password</h1>
            </div>
            <div style="padding: 20px;">
                <p>Halo,</p>
                <p>Kami menerima permintaan untuk reset password dari akun anda. Klik tombol berikut untuk menuju halaman reset password :</p>
                <div style="text-align: center; margin: 20px 0;">
                    <a href="${resetUrl}" style="background-color: #4CAF50; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Reset Password</a>
                </div>
                <p style="color: #ff0000; font-weight: bold;">Perlu anda ketahui bahwa link berikut akan hangus atau kedaluarsa dalam 10 menit.</p>
                <p>Jika anda tidak melakukan permintaan reset password ini, silahkan abaikan email ini.</p>
                <p>Terimakasih,<br>The Mumbanglonong Team</p>
            </div>
            <div style="background-color: #f4f4f4; color: #888; padding: 10px; text-align: center; font-size: 12px;">
                <p>Jika tombol diatas tidak bisa, anda dapat klik link berikut atau salin dan tempel pada peramban anda :</p>
                <a href="${resetUrl}" style="color: #4CAF50;">${resetUrl}</a>
                <p>&copy; 2025 Mumbanglonong. All rights reserved.</p>
            </div>
        </div>
    `,
	};

	await transporter.sendMail(mailOptions);
	res.status(202).json({
		message: "verification passed, check your email for the token",
	});
};

export { sendEmailVerification, sendResetEmail };
