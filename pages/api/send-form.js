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
    subject: "new message",
    html: `
        <h3>message from: ${name}</h3>
        <h3>email: ${email}</h3>
        <h3>subjest: ${subject}</h3>
        <p>${msg}</p>
        `,
  };

  const mailToClient = {
    from: process.env.EMAIL,
    to: email,
    subject: "Thanks for getting in touch",
    html: `
    <h2>Thanks for your message, ${name}!</h2>
    <h4>I will reply as soon as I can.</h4>
    <p>If you did not write me a message, then someone used your email in my contact form at:</p>
    <a href:"https://christian-grothe.krischomat.de">christian-grothe.krischomat.de</a>
    <p>This is an auto generated email</p>
    `,
  };

  try {
    const verification = await transporter.verify();

    if (!verification) {
      throw new Error("verification failed");
    }

    await transporter.sendMail(mailFormatted);
    await transporter.sendMail(mailToClient);

    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
}
