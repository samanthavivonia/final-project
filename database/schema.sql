set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "games" (
	"gameId" serial NOT NULL,
	"gameDifficulty" TEXT NOT NULL,
	"gamePointsToWin" integer NOT NULL,
	"gameRating" TEXT NOT NULL,
	CONSTRAINT "games_pk" PRIMARY KEY ("gameId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "questionCategories" (
	"questionCategoryId" serial NOT NULL,
	"questionCategoryName" TEXT NOT NULL,
	CONSTRAINT "questionCategories_pk" PRIMARY KEY ("questionCategoryId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "difficulties" (
	"difficultyId" serial NOT NULL,
	"difficultyName" TEXT NOT NULL,
	"pointsAwarded" integer NOT NULL,
	CONSTRAINT "difficulties_pk" PRIMARY KEY ("difficultyId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "ratings" (
	"ratingId" serial NOT NULL,
	"ratingName" TEXT NOT NULL,
	CONSTRAINT "ratings_pk" PRIMARY KEY ("ratingId")
) WITH (
  OIDS=FALSE
);

-- CREATE TABLE "pointsToWin" (
-- 	"pointsToWinId" serial NOT NULL,
-- 	"pointsToWinName" TEXT NOT NULL,
--   "pointsToWinNumber" integer NOT NULL,
-- 	CONSTRAINT "pointsToWin_pk" PRIMARY KEY ("pointsToWinId")
-- ) WITH (
--   OIDS=FALSE
-- );

CREATE TABLE "questions" (
	"questionId" serial NOT NULL,
	"questionCategoryId" integer NOT NULL,
	"questionText" TEXT NOT NULL,
	"difficultyId" integer NOT NULL,
	"ratingId" integer NOT NULL,
	CONSTRAINT "questions_pk" PRIMARY KEY ("questionId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "bonusChallenges" (
	"bonusChallengeId" serial NOT NULL,
	"bonusChallengeText" TEXT NOT NULL,
	"difficultyId" integer NOT NULL,
	CONSTRAINT "bonusChallenges_pk" PRIMARY KEY ("bonusChallengeId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "messageSuccess" (
	"messageSuccessId" serial NOT NULL,
	"messageSuccessText" TEXT NOT NULL,
	"ratingId" integer NOT NULL,
	CONSTRAINT "messageSuccess_pk" PRIMARY KEY ("messageSuccessId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "messageFail" (
	"messageFailId" serial NOT NULL,
	"messageFailText" TEXT NOT NULL,
	"ratingId" integer NOT NULL,
	CONSTRAINT "messageFail_pk" PRIMARY KEY ("messageFailId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "teams" (
	"teamId" serial NOT NULL,
	"gameId" integer NOT NULL,
	"teamName" TEXT NOT NULL,
	"teamPoints" integer NOT NULL,
	CONSTRAINT "teams_pk" PRIMARY KEY ("teamId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "characters" (
	"characterId" serial NOT NULL,
	"characterName" TEXT NOT NULL,
	"teamId" integer NOT NULL,
	CONSTRAINT "characters_pk" PRIMARY KEY ("characterId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "questions" ADD CONSTRAINT "questions_fk0" FOREIGN KEY ("questionCategoryId") REFERENCES "questionCategories"("questionCategoryId");
ALTER TABLE "questions" ADD CONSTRAINT "questions_fk1" FOREIGN KEY ("difficultyId") REFERENCES "difficulties"("difficultyId");
ALTER TABLE "questions" ADD CONSTRAINT "questions_fk2" FOREIGN KEY ("ratingId") REFERENCES "ratings"("ratingId");
ALTER TABLE "bonusChallenges" ADD CONSTRAINT "bonusChallenges_fk0" FOREIGN KEY ("difficultyId") REFERENCES "difficulties"("difficultyId");
ALTER TABLE "messageSuccess" ADD CONSTRAINT "messageSuccess_fk0" FOREIGN KEY ("ratingId") REFERENCES "ratings"("ratingId");
ALTER TABLE "messageFail" ADD CONSTRAINT "messageFail_fk0" FOREIGN KEY ("ratingId") REFERENCES "ratings"("ratingId");
ALTER TABLE "teams" ADD CONSTRAINT "teams_fk0" FOREIGN KEY ("gameId") REFERENCES "games"("gameId");
ALTER TABLE "characters" ADD CONSTRAINT "characters_fk0" FOREIGN KEY ("teamId") REFERENCES "teams"("teamId");
