-- To add rows to a table, we use the 'INSERT INTO' SQL
-- command

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
VALUES (
  1,
  'luke@ga.co',
  'luke',
  'chicken',
  'http://placekitten.com/200/200',
  1, -- means TRUE
  12
);

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
VALUES (
  2,
  'zara@ga.co',
  'zara',
  'chicken',
  'http://placekitten.com/100/300',
  0, -- means FALSE
  23
);

INSERT INTO users ( id, email, name, password, profile_image, verified, age )
VALUES (
  3,
  'LAY@ga.co',
  'LAY',o
  'chicken',
  'http://placekitten.com/200/200',
  0, -- means TRUE
  26
);
