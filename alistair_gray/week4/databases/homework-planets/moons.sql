DROP TABLE IF EXISTS moons;

CREATE TABLE moons(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  orbital_period INTEGER,
  day_length INTEGER,
  inhabited BOOLEAN,
  atmosphere BOOLEAN,
  img_url TEXT,
  planet_id INTEGER
);

INSERT INTO moons (name, orbital_period, day_length, inhabited, atmosphere, img_url, planet_id)
  VALUES ('Luna', 27, 30, 0, 1, 'https://cdn.pixabay.com/photo/2016/11/29/13/14/astronomy-1869760_960_720.jpg', 3);
