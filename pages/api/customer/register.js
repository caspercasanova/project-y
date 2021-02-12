export default async (req, res) => {
  console.log('Hey I Recieved A Request to Register');
  const { password, codename, email } = req.body;
  if (!(password && codename && email)) {
    res.status(400).json({
      error: 'Invalid Form Data',
      message: 'Please Provide a Valid Email, Codename and Password',
    });
  } else {
    // create account in db

    res.status(200).json({ success: true });
  }
};
