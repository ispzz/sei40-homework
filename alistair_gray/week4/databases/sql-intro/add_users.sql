-- To add rows to a table, we use the 'INSERT INTO' SQL command

INSERT INTO users (id, name, email, password, profile_image, verified, age)
  VALUES (
    1,
    'Luke',
    'luke@ga.co',
    'chicken',
    'http://placekitten.com/200/200',
    1, -- means TRUE
    12
  );

INSERT INTO users (id, name, email, password, profile_image, verified, age)
  VALUES (
    2,
    'Zara',
    'zara@ga.co',
    'chicken',
    'http://placekitten.com/400/400',
    0, -- means FALSE
    23
  );

INSERT INTO users (id, name, email, password, profile_image, verified, age)
  VALUES (
    3,
    'Lay',
    'lay@ga.co',
    'chicken',
    'http://placekitten.com/100/400',
    0, -- means FALSE
    26
  );
