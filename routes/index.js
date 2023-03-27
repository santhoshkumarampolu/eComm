var express = require('express');
var router = express.Router();
let landing = require('../controller/landing');
const passport = require("passport");
require("../passport/passportConfig")

/* GET home page. */
router.get('/',landing.get_landing);
router.post('/',landing.sumbit_lead);
router.get('/leads',landing.show_leads);
router.get('/lead/:lead_id',landing.show_lead);
router.get('/lead/:lead_id/edit',landing.show_edit_lead);
router.post('/lead/:lead_id/edit',landing.edit_lead);
router.delete('/lead/:lead_id/delete', landing.delete_lead);
router.post(
      "/auth/signup",
      passport.authenticate(passport.Strategy("local-signup"), { session: false }),
      (req, res, next) => {
        res.json({
          user: req.user,
        });
      }
    );
    
router.post(
      "/auth/login",
      passport.authenticate("local-login", { session: false }),
      (req, res, next) => {
        res.json({ user: req.user });
      }
    );
module.exports = router;
