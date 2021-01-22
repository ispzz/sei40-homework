-- This file defines the structure of the 'users' table.
-- Its also know as a 'schema'

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name TEXT,
  email TEXT,
  password TEXT,
  profile_image TEXT,
  verified BOOLEAN,
  age INTEGER
);
