const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const router = require('./routes/authRoutes');
const cartrouter = require('./routes/cartRoutes');
const app = express();

const allowedOrigins = ["ecom-fronted-taupe.vercel.app",
    "ecom-fronted-git-main-suhanas-projects-3ffb18f1.vercel.app",
    "ecom-fronted-g5m8a03sf-suhanas-projects-3ffb18f1.vercel.app",
    "ecom-fronted-suhanas-projects-3ffb18f1.vercel.app"
]
app.use(cors({
    origin: function(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true, // Allows cookies and authentication headers if needed
}))
app.use(express.json())

connectDB()

app.use("/auth", router)
app.use("/cart", cartrouter)

app.get('/', (req, res) => {
    res.send('Hello,World')
})
const port = 5000
app.listen(port, () => {
    console.log(`Server is running on port${port}`)
})