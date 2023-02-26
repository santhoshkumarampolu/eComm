var express = require('express');
var router = express.Router();
let landing = require('../controller/landing')
/* GET home page. */
router.get('/',landing.get_landing);
router.post('/',landing.sumbit_lead);
router.get('/leads',landing.show_leads);
router.get('/lead/:lead_id',landing.show_lead);
module.exports = router;
