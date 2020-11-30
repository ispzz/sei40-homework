-- setup comments database table

DROP TABLE IF EXISTS comments;

CREATE TABLE comments(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  comment TEXT,
  rating INTEGER,
  camper_id INTEGER,
  camp_id INTEGER,
  created_on DATE
);
