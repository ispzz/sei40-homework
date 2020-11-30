DROP TABLE IF EXISTS events;

CREATE TABLE events(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  contact_name TEXT,
  contact_email TEXT,
  description TEXT,
  start_date TEXT,
  end_date TEXT,
  cast_count INTEGER,
  paid BOOLEAN,
  venue_id INTEGER
);


INSERT INTO events( name, contact_name, contact_email, description , start_date, end_date, cast_count, paid, venue_id )
VALUES(
  'S & G Wedding',
  'Sarah Chan',
  'sarah@gmail.com',
  'The wedding of Sarah and Gary. Formal Dress code',
  '12-03-2020',
  '12-03-2020',
    150,
    1,
    1
);


INSERT INTO events( name, contact_name, contact_email, description ,  start_date, end_date, cast_count, paid, venue_id)
VALUES(
  'Barnum',
  'Storyboard Entertainment',
  'Storey@gmail.com',
  'The timeless life story of PT Barnum. An "entreprenuer"-see jerk, who took advantage of everyone around him, and cheated them, so he could earn money',
  '06-04-2019',
  '06-06-2019',
  50,
  0,
  3
  );

  INSERT INTO events( name, contact_name, contact_email, description ,  start_date, end_date, cast_count, paid, venue_id)
  VALUES(
    'Billy Eilliot',
    'Production Company',
    'producers@gmail.com',
    'A Young boy wants to dance but toxic masculity filled town is scared of it until they realise he is not only passionate but talented. Set in a town who learns to unionize.',
  '06-02-2020',
    '13-03-2020',
    100,
    1,
    2
  );
