import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const { name, email, subject, msg } = req.body;

  const mailFormatted = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: subject,
    html: `
        <h3>message from: ${name}</h3>
        <h3>email: ${email}</h3>
        <p>${msg}</p>
        `,
  };

  try {
    const verification = await transporter.verify();

    if (!verification) {
      throw new Error("verification failed");
    }

    const response = await transporter.sendMail(mailFormatted);

    console.log(response);
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
}
