const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv");
const {Resend}=require("resend");

dotenv.config();
const app=express();
const resend=new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) =>{
    try{
        const {name, email, whatsapp, phone, subject, message} = req.body;
        if(!name || !email || !whatsapp || !phone || !message){
            return res.status(400).json({
                success: false,
                message: "Required fields are missing..."
            });
        }

        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: process.env.CONTACT_EMAIL,
            subject: `New Contact form filled from portfolio by ${name}`,
            html:`
                <h2>New Form Submission</h2>
                <p><strong>Name : </strong>${name}</p>
                <p><strong>Email : </strong>${email}</p>
                <p><strong>WhatsApp : </strong>${whatsapp}</p>
                <p><strong>Contact : </strong>${phone}</p>
                <p><strong>Subject : </strong>${subject}</p>    
                <p><strong>Message : </strong>${message}</p>
            `
        });

        await resend.emails.send({
            from: process.env.FROM_EMAIL,
            to: email,
            subject: `We recived your message`,
            html: `
                <h2> Hi ${name}, </h2>

                <p>Thank you for reaching out through portfolio.</p>
                
                <p>I've recived your message and will get to you back soom as soon as possible</p>

                <p>
                    Best regards, <br>
                    Kishore Kumar
                </p>
            `
        });

        res.json({
            success: true,
            message: "Message sent successfully..."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
});

const PORT=process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running in the port ${PORT}`);
});