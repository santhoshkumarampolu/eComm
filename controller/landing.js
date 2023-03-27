
const models = require('../database/models');
const bcrypt = require("bcryptjs");

exports.get_landing = function (req, res, next) {
  res.render('landing', { title: 'Express' });
}
exports.sumbit_lead = function (req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads');
  })

}
exports.show_leads = function (req, res, next) {
  return models.User.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })
}
exports.show_lead = function (req, res, next) {
  return models.Lead.findOne({
    where: {
      id: req.params.lead_id
    }
  }).then(lead => {
    res.render('lead', { lead: lead });
  })

}
exports.show_edit_lead = function (req, res, next) {
  return models.Lead.findOne({
    id: req.params.lead_id
  }).then(lead => {
    res.render('lead/edit_lead', { lead: lead });
  })

}
exports.edit_lead = function (req, res, next) {

  return models.Lead.update({
    email: req.body.lead_email
  }, {
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/lead/' + req.params.lead_id);
  })

}
exports.delete_lead = function (req, res, next) {
  return models.Lead.destroy({
    where: {
      id: req.params.lead_id
    }
  }).then(result => {
    res.redirect('/leads');
  })
}
exports.emailExists = (req, res, next) => {
  const data = models.User.findOne({
    where: {
      email: req.params.email
    }
  });
  if (data.rowCount == 0) return false;
  return data.rows[0];
}
exports.createUser = function (req, res, next) {
  console.log(req.body)
   const salt =  bcrypt.genSalt(10);
  const hash =  bcrypt.hash(req.body.password, salt);
  const data = models.User.create({
    email: req.body.email,
    password:hash
  });
  if (data.rowCount == 0) return false;
  return data.rows[0];
  }
  exports.matchPassword =(password, hashPassword) =>{
   
        const match =  bcrypt.compare(password, hashPassword);
        return match
      
  }

