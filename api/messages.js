const { PrismaClient } = require("@prisma/client");
const { PrismaNeon } = require("@prisma/adapter-neon");

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

module.exports = async function handler(req, res) {
  if (req.method === "POST") {
    const text = req.body.text;

    const message = await prisma.message.create({
      data: { text: text },
    });

    return res.status(200).json(message);
  }

  res.status(405).json({ error: "Method not allowed" });
};
