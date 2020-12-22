const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc  Auth with Google
// @route GET /auth/google

router.get("/google", passport.authenticate("google", { scope: ["profile"] })); // strategy, want whatever is in profile

// @desc  Google auth callback
// @route GET /auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }), // if fails redirect to root
  (req, res) => {
    res.redirect("/dashboard"); // if passes, redirect to the dashboard
  }
); // strategy, redirect

module.exports = router;
