DROP TABLE IF EXISTS planets;

CREATE TABLE planets(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  orbital_period INTEGER,
  day_length INTEGER,
  dist_sun INTEGER,
  inhabited BOOLEAN,
  atmosphere BOOLEAN,
  img_url TEXT
);

INSERT INTO planets (name, orbital_period, day_length, dist_sun, inhabited, atmosphere, img_url)
  VALUES ('Mercury', 88, 58, 0.4, 0, 1, 'https://cdn.pixabay.com/photo/2012/01/09/09/33/mercury-11591_960_720.png');

INSERT INTO planets (name, orbital_period, day_length, dist_sun, inhabited, atmosphere, img_url)
  VALUES ('Venus', 225, 116, 0.7, 0, 1, 'https://cdn.pixabay.com/photo/2011/12/13/14/39/venus-11022_960_720.jpg');

INSERT INTO planets (name, orbital_period, day_length, dist_sun, inhabited, atmosphere, img_url)
  VALUES ('Earth', 365, 1, 1.0, 1, 1, 'https://cdn.pixabay.com/photo/2011/12/13/14/28/earth-11009_960_720.jpg');
