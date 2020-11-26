

DROP TABLE IF EXISTS artist;

CREATE TABLE artist (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birth TEXT,
  death TEXT,
  alive BOOLEAN,
  favourite_work_title TEXT,
  favourite_work_url TEXT
);

INSERT INTO artist (name, birth, death, alive, favourite_work_title, favourite_work_url)
VALUES (
  'Vincent van Gogh',
  '30-03-1853',
  '29-07-1890',
  0,
  'The starry night',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/300px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg'

);

INSERT INTO artist (name, birth, death, alive, favourite_work_title, favourite_work_url)
VALUES (
  'Andy Warhol',
  '06-08-1928',
  '22-02-1987',
  0,
  'Campbells Soup',
  'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Warhol-Campbell_Soup-1-screenprint-1968.jpg/170px-Warhol-Campbell_Soup-1-screenprint-1968.jpg'

);
