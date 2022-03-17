insert into "difficulties"
  ("difficultyName", "pointsAwarded")
  values
    ('Beginner', '1'),
    ('Intermediate', '2'),
    ('Advanced', '3');

insert into "ratings"
  ("ratingName")
  values
    ('Family Friendly'),
    ('A Little Risky'),
    ('Adults Only');

-- insert into "pointsToWin"
--   ("pointsToWinName", "pointsToWinNumber")
--   values
--     ('Short (First to 10', '10'),
--     ('Medium (First to 20)', '20'),
--     ('Long (First to 20)', '50');

insert into "questionCategories"
  ("questionCategoryName")
  values
    ('Facts & Opinions'),
    ('Story Time'),
    ('Dares & Activities'),
    ('Spicy');

insert into "questions"
  ("questionCategoryId", "difficultyId", "ratingId", "questionText")
  values
  -- Facts & Opinions
    (1, 1, 1, 'This is an easy, family friendly, fact/opinion question.'),
    (1, 2, 1, 'This is an intermediate, family friendly, fact/opinion question.'),
    (1, 3, 1, 'This is a hard, family friendly, fact/opinion question.'),
    (1, 1, 2, 'This is an easy, little risky, fact/opinion question.'),
    (1, 2, 2, 'This is an intermediate, little risky, fact/opinion question.'),
    (1, 3, 2, 'This is a hard, little risky, fact/opinion question.'),
    (1, 1, 3, 'This is an easy, adults only, fact/opinion question.'),
    (1, 2, 3, 'This is an intermediate, adults only, fact/opinion question.'),
    (1, 3, 3, 'This is a hard, adults only, fact/opinion question.'),
  -- Story Time
    (2, 1, 1, 'This is an easy, family friendly, story time question.'),
    (2, 2, 1, 'This is an intermediate, family friendly, story time question.'),
    (2, 3, 1, 'This is a hard, family friendly, story time question.'),
    (2, 1, 2, 'This is an easy, little risky, story time question.'),
    (2, 2, 2, 'This is an intermediate, little risky, story time question.'),
    (2, 3, 2, 'This is a hard, little risky, story time question.'),
    (2, 1, 3, 'This is an easy, adults only, story time question.'),
    (2, 2, 3, 'This is an intermediate, adults only, story time question.'),
    (2, 3, 3, 'This is a hard, adults only, story time question.'),
  -- Dares & Activities
    (3, 1, 1, 'This is an easy, family friendly, dares/activities question.'),
    (3, 2, 1, 'This is an intermediate, family friendly, dares/activities question.'),
    (3, 3, 1, 'This is a hard, family friendly, dares/activities question.'),
    (3, 1, 2, 'This is an easy, little risky, dares/activities question.'),
    (3, 2, 2, 'This is an intermediate, little risky, dares/activities question.'),
    (3, 3, 2, 'This is a hard, little risky, dares/activities question.'),
    (3, 1, 3, 'This is an easy, adults only, dares/activities question.'),
    (3, 2, 3, 'This is an intermediate, adults only, dares/activities question.'),
    (3, 3, 3, 'This is a hard, adults only, dares/activities question.'),
  -- Spicy
    (4, 1, 1, 'This is an easy, family friendly, spicy question.'),
    (4, 2, 1, 'This is an intermediate, family friendly, spicy question.'),
    (4, 3, 1, 'This is a hard, family friendly, spicy question.'),
    (4, 1, 2, 'This is an easy, little risky, spicy question.'),
    (4, 2, 2, 'This is an intermediate, little risky, spicy question.'),
    (4, 3, 2, 'This is a hard, little risky, spicy question.'),
    (4, 1, 3, 'This is an easy, adults only, spicy question.'),
    (4, 2, 3, 'This is an intermediate, adults only, spicy question.'),
    (4, 3, 3, 'This is a hard, adults only, spicy question.');

insert into "bonusChallenges"
  ("difficultyId", "bonusChallengeText")
  values
    (1, 'This is an easy bonus challenge.'),
    (2, 'This is an intermediate bonus challenge.'),
    (3, 'This is a hard bonus challenge.');

insert into "messageSuccess"
  ("ratingId", "messageSuccessText")
  values
    (1, 'Success!'),
    (1, 'Hooray!'),
    (1, 'You Did it!'),
    (2, 'Killin it!'),
    (2, 'Yas Queen!'),
    (3, 'F@&% Yeah!');

insert into "messageFail"
  ("ratingId", "messageFailText")
  values
    (1, 'Darn!'),
    (1, 'Better luck next time...'),
    (1, 'Nuts!'),
    (2, 'Ya blew it'),
    (2, '(Peter voice) Sad...'),
    (3, 'Boo you whore.');
