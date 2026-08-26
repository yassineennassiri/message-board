module.exports = async function handler(req, res) {
    if (req.method === 'POST') {
        const text = req.body.text;
        return res.status(200).json({ received: text });
    }
    
    res.status(405).json({ error: 'Method not allowed' });
};
