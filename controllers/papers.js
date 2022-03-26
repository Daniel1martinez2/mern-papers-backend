const Paper = require('../models/paper');

exports.getPapers = (req, res, next) => {
  Paper.getPapers()
    .then(papers => {
      res.json(papers)
    })
}