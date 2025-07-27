const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/dashboard", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ message: "Welcome to the dashboard!", user: decoded });
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
});

module.exports = router;
