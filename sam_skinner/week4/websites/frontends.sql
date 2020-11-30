DROP TABLE IF EXISTS frontends;

CREATE TABLE frontends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  date_released INTEGER,
  logo TEXT
);

INSERT INTO frontends (name, date_released, logo)
  VALUES (
    'Angular',
    2010,
    '/public/logos/angular.png'
  );

INSERT INTO frontends (name, date_released, logo)
  VALUES (
    'React',
    2013,
    '/public/logos/react.png'
  );

INSERT INTO frontends (name, date_released, logo)
  VALUES (
    'Vue',
    2014,
    '/public/logos/vue.png'
  );
