const Paper = require('../models/paper');

const getPapers = (req, res, next) => {
  Paper.getPapers()
    .then(papers => {
      res.json(papers)
    })
}

exports.postPaper = (req, res, next) => {
  const currentPaper = new Paper(req.body);
  currentPaper.save()
    .then(_=> {
      Paper.getPapers()
        .then(papers => {
          res.json(papers)
        })
    })
}

exports.postDeletePaper = (req, res, next) => {
  const paperId = req.body.id;
  Paper.deletePaperById(paperId)
    .then(_ => {
      Paper.getPapers()
        .then(papers => {
          res.json(papers)
        })
    })
}

exports.getPapers = getPapers;