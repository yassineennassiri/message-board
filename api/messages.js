// line 2 and 3 here are the imports for the Prisma client and the Prisma Neon adapter, which are used to connect to the database and perform CRUD operations on the messages.
const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");

// Here we create a new instance of the Prisma client with the Prisma Neon adapter, which allows us to connect to the database using the connection string specified in the environment variable DATABASE_URL.
const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

// This is the main handler function for the API route. It checks the HTTP method of the request and performs the appropriate action (GET or POST) on the messages in the database.
module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    return res.status(200).json(messages);
  }

  if (req.method === "POST") {
    const text = req.body.text;
    const message = await prisma.message.create({
      data: { text: text },
    });
    return res.status(200).json(message);
  }

  res.status(405).json({ error: "Method not allowed" });
};
