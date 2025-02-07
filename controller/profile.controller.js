export const Profile = (req, res) => {
  res.json({ message: "Profile Data", user: req.user });
};
