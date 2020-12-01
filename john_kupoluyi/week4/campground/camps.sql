-- setup posts database table

DROP TABLE IF EXISTS camps;

CREATE TABLE camps(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  image_url TEXT,
  description TEXT,
  price INTEGER,
  camper_id INTEGER,
  updated_by TEXT,
  created_on DATE,
  updated_on DATE
);
