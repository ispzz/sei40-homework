DROP TABLE IF EXISTS properties;

CREATE TABLE properties (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "description" TEXT,
  "street_name" TEXT,
  "suburb" TEXT,
  "postcode"
  CHECK(
    typeof("postcode") = "text" AND
    length("postcode") = 4
  ),
  "state"
  CHECK(
    typeof("state") = "text" AND
    length("state") = 3
  ),
  "image_url" TEXT,
  "created_at" TEXT DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO properties ("description", "street_name", "suburb", "postcode", "state", "image_url")
VALUES (
  "Brand new apartment with ample natural light and stunning Botanic Gardens backdrop",
  "121 St Kilda Rd",
  "Southbank",
  "3006",
  "VIC",
  "https://unsplash.com/photos/MP0bgaS_d1c"
);

INSERT INTO properties ("description", "street_name", "suburb", "postcode", "state", "image_url")
VALUES (
  "Renovators dream! Beautiful ceiling hole, free decorated mattress",
  "131 Church St",
  "Richmond",
  "3121",
  "VIC",
  "https://unsplash.com/photos/MP0bgaS_d1c"
);
