--

DROP TABLE IF EXISTS property;

CREATE TABLE property (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  address TEXT,
  description TEXT,
  price INTEGER,
  beds INTEGER,
  bath INTEGER,
  size INTEGER,
  image_url TEXT
);
