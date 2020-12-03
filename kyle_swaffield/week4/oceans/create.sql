
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  emp_id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT,
  mobile INTEGER,
  email TEXT,
  birthdate DATE,
  start_date DATE,
  image_url TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Kyle',
  'Swaffield',
  '0450121212',
  'kyle@swaff.com',
  '1987-06-24',
  '2010-01-01',
  'http://www.fillmurray.com/200/200'
);
INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Bernadine',
  'Swaffield',
  '0450121212',
  'bern@swaff.com',
  '1987-02-25',
  '2015-11-01',
  'http://www.fillmurray.com/200/200'
);
INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Wayne',
  'Swaffield',
  '0450121212',
  'wayne@swaff.com',
  '1959-05-11',
  '1955-03-20',
  'http://www.fillmurray.com/200/200'
);
INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Avril',
  'Swaffield',
  '0450121212',
  'avril@swaff.com',
  '1961-04-30',
  '1999-06-01',
  'http://www.fillmurray.com/200/200'
);
INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Hayden',
  'Swaffield',
  '0450121212',
  'hayden@swaff.com',
  '2018-11-20',
  '2020-01-01',
  'http://www.fillmurray.com/200/200'
);
INSERT INTO employees (
  first_name,
  last_name,
  mobile,
  email,
  birthdate,
  start_date,
  image_url
) VALUES (
  'Ava',
  'Swaffield',
  '0450121212',
  'ava@swaff.com',
  '2017-04-06',
  '2020-01-01',
  'http://www.fillmurray.com/200/200'
);
