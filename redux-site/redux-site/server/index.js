const express = require('express')
const app = express();
const cors = require('cors')
const stripe = require("stripe")('sk_test_51OqT6aSJuCh9MehJRX13jvk979avHLNhTqhAXxX9SUsGSt1o5ZUBw7Rmzp3KRLLZrAlpyJHDA6fdKFhJgEgRZiJX003z9JKawC')

app.use(express.json())
app.use(cors())

app.post("/api/create-checkout-session", async (req, res) => {
    const { products } = req.body

    const lineItems = products.map((product) => ({
        price_data: {
            currency: "inr",
            product_data: {
                name: product.title,
                images: [product.image]
            },
            unit_amount: product.price * 100,
        },
        quantity: product.qty
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/sucess",
        cancel_url: "http://localhost:3000/cancel",
    });
    res.json({ id: session.id })
})

app.listen(7000, () => {
    console.log("server start");
})