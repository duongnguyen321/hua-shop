const loginController = async (req, res, router, bcrypt) => {
  const { username, password } = req.body;
  const user = router.db.get("users").find({ username }).value();
  if (!user) {
    return res
      .status(401)
      .json({ message: "Đăng nhập không thành công, vui lòng thử lại!" });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "Đăng nhập không thành công, vui lòng thử lại!" });
  }
  const { password: userPassword, ...userInfo } = user;
  res.json({ message: "Đăng nhập thành công!", user: userInfo });
};
module.exports = loginController;
