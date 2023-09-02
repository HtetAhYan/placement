import getRawBody from "raw-body";
import { stripe } from "./stripeInstance";

import generate_token from "./tokenGenerator";
import { prisma } from "./prismaInstance";

export const webhooksHandler = async (req, res) => {
      function getCurrentTimestamp () {
  return Date.now()
}
    const token = generate_token();
    try {
        const rawBody = await getRawBody(req);
        const sig = req.headers["stripe-signature"];
        const event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOKS_KEY);

        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const newPayment = await prisma.paymentInfo.create({
                data: {
                    email: session?.customer_details.email,
                    status: session?.status
                    , createdAt: session?.created, amount_total: session.amount_total,
                    studentName: session?.custom_fields[0]?.text?.value,
                }
            })
          

 // Store the newStudent object
console.log(newPayment);

            res.status(200).json({ session });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "An error occurred" });
    } finally {
        prisma.$disconnect();
    }
};


