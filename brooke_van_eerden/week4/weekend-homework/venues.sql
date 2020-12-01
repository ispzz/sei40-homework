DROP TABLE IF EXISTS venues;

CREATE TABLE venues(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  capacity INTEGER,
  description TEXT,
  image_url TEXT
);

INSERT INTO venues( name, capacity, description, image_url)
VALUES(
  'Plaza Ballroom',
  300,
  'Perfect for dinners and weddings with a stage to captivate your audience',
  ''
);



INSERT INTO venues( name, capacity, description, image_url)
VALUES(
  'Regent Theatre',
  2000,
  'A state of the art recently renovated theatre venue, in the heart of Melbounre',
  ''
);

INSERT INTO venues( name, capacity, description, image_url)
VALUES(
  'Comedy Theatre',
  500,
  'A venue perfect for smaller, more intimate performances. Great for comedy sets or small productions alike',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2o4Y70UNN-UgHF96IVWD8lubu3n2bhpgOEw&usqp=CAU'
);
