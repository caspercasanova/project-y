export default async (req, res) => {
  console.log(req.body);
  const { body } = req;
  // if (!body.password && !body.email) {
  //   res.status(401).json();
  // }

  // check database for existance
  // generate new token

  res.status(200).json({ sick: 'stay cool' });
};
