DROP TABLE IF EXISTS renters;

CREATE TABLE renters (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "first_name" TEXT,
  "last_name" TEXT,
  "phone_number" TEXT,
  "paid" BOOLEAN,
  "rent" INTEGER,
  "created_at" TEXT DEFAULT CURRENT_TIMESTAMP,
  "property_id" INTEGER
);

INSERT INTO renters ("first_name", "last_name", "phone_number", "paid", "rent", "property_id")
VALUES (
  "Trevor",
  "Wilson",
  "0423123994",
  "true",
  "630",
  "1"
);

INSERT INTO renters ("first_name", "last_name", "phone_number", "paid", "rent", "property_id")
VALUES (
  "Krijstelle",
  "Lu",
  "0454367864",
  "false",
  "540",
  "2"
);

INSERT INTO renters ("first_name", "last_name", "phone_number", "paid", "rent", "property_id")
VALUES (
  "Sam",
  "Lu",
  "0457776864",
  "false",
  "540",
  "2"
);

INSERT INTO renters ("first_name", "last_name", "phone_number", "paid", "rent", "property_id")
VALUES (
  "Kate",
  "Wallace",
  "0464366864",
  "true",
  "890",
  "3"
);