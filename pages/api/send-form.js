// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//require("dotenv").config();
//import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: "465",
    secureConnection: "true", //true or false
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  try {
    const { name, email, subject, msg } = JSON.parse(req.body);

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

    await transporter.verify((error) => {
      if (error) {
        throw new Error("could not verify");
      } else {
        console.log("ready to send");
      }
    });

    await transporter.sendMail(mailFormatted);

    res.status(200).json({ success: true, msg: "send mail" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, msg: error });
  }
}
