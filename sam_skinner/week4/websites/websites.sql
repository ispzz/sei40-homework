DROP TABLE IF EXISTS websites;

CREATE TABLE websites (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  frontend_id INTEGER,
  backend_id INTEGER,
  launched INTEGER,
  hacked BOOLEAN,
  domain TEXT,
  owned_by TEXT,
  wiki TEXT
);

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'Paypal',
    1, --Angular
    1, --Node
    1998,
    0,
    'paypal.com',
    'Public',
    'https://en.wikipedia.org/wiki/PayPal'
  );

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'The Guardian',
    1, --Angular
    2, --Scala
    1999,
    0,
    'theguardian.com',
    'Scott Trust Limited',
    'https://en.wikipedia.org/wiki/The_Guardian'
  );

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'Netflix',
    2, --React
    3, --Java
    1999,
    1,
    'netflix.com',
    'Public',
    'https://en.wikipedia.org/wiki/Netflix'
  );

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'Airbnb',
    2, --React
    4, --RoR
    2008,
    0,
    'airbnb.com',
    'Multiple private - filed for IPO',
    'https://en.wikipedia.org/wiki/Airbnb'
  );

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'Nintendo',
    3, --Vue
    1, --Node
    1990,
    1,
    'nintendo.com',
    'Public',
    'https://en.wikipedia.org/wiki/Nintendo'
  );

INSERT INTO websites (name, frontend_id, backend_id, launched, hacked, domain, owned_by, wiki)
  VALUES (
    'Font Awesome',
    3, --Vue
    5, --PHP
    2012,
    0,
    'fontawesome.com',
    'Open Source - Created by Dave Gandy',
    'https://en.wikipedia.org/wiki/Font_Awesome'
  );
