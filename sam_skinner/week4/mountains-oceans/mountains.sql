DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  elevation_m INTEGER,
  location TEXT,
  guided_climbs BOOLEAN,
  first_climber TEXT,
  year_climbed INTEGER,
  wikipedia TEXT
);

INSERT INTO mountains (name, elevation_m, location, guided_climbs, first_climber, year_climbed, wikipedia)
  VALUES (
    'Mount Everest',
    8848,
    'Nepal',
    1,
    'Edmund Hillary',
    1953,
    'https://en.wikipedia.org/wiki/Mount_Everest'
  );

INSERT INTO mountains (name, elevation_m, location, guided_climbs, first_climber, year_climbed, wikipedia)
  VALUES (
    'Mount Kilimanjaro',
    5895,
    'Tanzania',
    0,
    'Hans Meyer',
    1889,
    'https://en.wikipedia.org/wiki/Mount_Kilimanjaro'
  );

INSERT INTO mountains (name, elevation_m, location, guided_climbs, first_climber, year_climbed, wikipedia)
  VALUES (
    'Mount Fuji',
    3777,
    'Japan',
    1,
    'En no Odzunu',
    663,
    'https://en.wikipedia.org/wiki/Mount_Fuji'
  );
