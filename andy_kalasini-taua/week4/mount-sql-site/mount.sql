

DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT,
  location TEXT,
  mountain_range TEXT,
  first_ascenders TEXT,
  elevation INTEGER,
  image_url TEXT
);


INSERT INTO mountains ( name, location, mountain_range, first_ascenders, elevation, image_url )
VALUES (
  'Mount Everest',
  'Solukhumbu District',
  'Himalayas',
  'Edmund Hillary',
  '8,848',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/auto-Everest_kalapatthar.jpg'
);

INSERT INTO mountains ( name, location, mountain_range, first_ascenders, elevation, image_url )
VALUES (
  'Kangchenjunga',
  'Taplejung District',
  'Himalayas',
  'George Band',
  '8,586',
  'https://sp-images.summitpost.org/83310.jpg?auto=format&fit=max&ixlib=php-2.1.1&q=35&w=1024&s=08f38f13b58ea1355723b10a687e57d0'
);

INSERT INTO mountains ( name, location, mountain_range, first_ascenders, elevation, image_url )
VALUES (
  'Cho Oyu',
  'China',
  'Himalayas',
  'Herbert Tichy',
  '8,188',
  'https://upload.wikimedia.org/wikipedia/commons/1/1c/ChoOyu-fromGokyo.jpg'
);

INSERT INTO mountains ( name, location, mountain_range, first_ascenders, elevation, image_url )
VALUES (
  'Lhotse',
  'Nepal',
  'Himalayas',
  'Fritz Luchsinger',
  '8,516',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Lhotse-fromChukhungRi.jpg/800px-Lhotse-fromChukhungRi.jpg'
);

INSERT INTO mountains ( name, location, mountain_range, first_ascenders, elevation, image_url )
VALUES (
  'Makalu',
  'China',
  'Himalayas',
  'Lionel Terray',
  '8,481',
  'https://upload.wikimedia.org/wikipedia/commons/7/72/Lhotse-fromChukhungRi.jpg'
);
