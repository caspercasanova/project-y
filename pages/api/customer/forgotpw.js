export default async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Please Provide a Proper Email' });
    return;
  }

  res.status(200).json({ success: true });
};
