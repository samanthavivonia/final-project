require('dotenv/config');
const express = require('express');
const db = require('./db');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');

const app = express();

app.use(staticMiddleware);

app.get('/api/gamesettings', (req, res, next) => {
  const respData = {};
  const sqlDifficulties = `
    select *
      from "difficulties";
  `;
  db.query(sqlDifficulties)
    .then(result => {
      respData.difficulties = result.rows;
      const sqlPointsToWin = `
        select *
          from "pointsToWin";
      `;
      db.query(sqlPointsToWin)
        .then(result => {
          respData.pointsToWin = result.rows;
          const sqlRatings = `
            select *
              from "ratings";
          `;
          db.query(sqlRatings)
            .then(result => {
              respData.ratings = result.rows;
              res.json(respData);
            })
            .catch(err => next(err));
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

app.get('/api/difficulties', (req, res, next) => {
  const sql = `
    select *
    from "difficulties";
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/ratings', (req, res, next) => {
  const sql = `
    select *
    from "ratings"
  `;

  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/games', (req, res, next) => {
  const gameDifficulty = Number(req.body.gameDifficulty);
  const gamePointsToWin = Number(req.body.gamePointsToWin);
  const gameRating = Number(req.body.gameRating);
  if (!gameDifficulty || !gamePointsToWin || !gameRating) {
    throw new ClientError(400, 'Invalid post');
  }
  const sql = `
    insert into "games"
      ("gameDifficulty", "gamePointsToWin", "gameRating")
      values
        ('$1', '$2', '$3')
    returning *
  `;
  const params = [gameDifficulty, gamePointsToWin, gameRating];
  db.query(sql, params)
    .then(result => {
      const [newGame] = result.rows;
      res.status(201).json(newGame);
    })
    .catch(err => next(err));
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});
