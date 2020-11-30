DROP TABLE IF EXISTS backends;

CREATE TABLE backends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  date_released INTEGER,
  logo TEXT
);

INSERT INTO backends (name, date_released, logo)
  VALUES (
    'Node',
    2009,
    '/public/logos/nodejs.png'
  );

INSERT INTO backends (name, date_released, logo)
  VALUES (
    'Scala',
    2004,
    '/public/logos/scala.png'
  );

INSERT INTO backends (name, date_released, logo)
  VALUES (
    'Java',
    1996,
    '/public/logos/java.png'
  );

INSERT INTO backends (name, date_released, logo)
  VALUES (
    'Ruby on Rails',
    2004,
    '/public/logos/ror.png'
  );

INSERT INTO backends (name, date_released, logo)
  VALUES (
    'PHP',
    1998,
    '/public/logos/php.png'
  );
