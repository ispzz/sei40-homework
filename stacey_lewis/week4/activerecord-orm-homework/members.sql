
DROP TABLE IF EXISTS members;

CREATE TABLE members (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  competency_rating TEXT,
  shopping_style TEXT,
  phone_number TEXT
);


INSERT INTO members ( name, competency_rating, shopping_style, phone_number)
VALUES ('Stacey', 7, 'Wanderer', '0400-000-000' );

INSERT INTO members ( name, competency_rating, shopping_style, phone_number)
VALUES ('Tim', 8, 'Researcher', '0400-000-000' );
