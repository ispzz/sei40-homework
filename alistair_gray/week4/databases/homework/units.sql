DROP TABLE IF EXISTS units;

CREATE TABLE units (
  id INTEGER PRIMARY KEY AUTOINCREMENT,

  name TEXT,
  species TEXT,
  absoluteness BOOLEAN,
  rating INTEGER,
  image_url TEXT
);

INSERT INTO units (name, species, absoluteness, rating, image_url)
  VALUES(
    'Ewenit',
    'Sheep',
    1,
    10,
    'https://cdn.vox-cdn.com/thumbor/q8z_oV3S33jSzgVdgRH-RY4KOh4=/0x0:1200x870/920x613/filters:focal(516x282:708x474):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/59535207/absolute_unit_sheep.0.jpg'
  );
