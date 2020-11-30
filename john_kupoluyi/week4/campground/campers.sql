-- setup campers database table

DROP TABLE IF EXISTS campers;

CREATE TABLE campers(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);
