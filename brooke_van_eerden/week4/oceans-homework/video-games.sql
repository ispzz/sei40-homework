DROP TABLE IF EXISTS video_games;

CREATE TABLE video_games(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  platform TEXT,
  description TEXT,
  max_players INTEGER,
  multiplayer BOOLEAN,
  box_art TEXT
);

INSERT INTO video_games( name, platform, description, max_players, multiplayer,box_art)
VALUES(
  'Mario Kart',
  "Nintendo",
  "Race around courses in the Nintendo universe and play as your favourite characters. To find out who is the Mario Kart Champion",
  4,
  1,
  'https://upload.wikimedia.org/wikipedia/en/7/7e/Mario_Kart_64box.png'
);

INSERT INTO video_games( name, platform, description, max_players, multiplayer, box_art)
VALUES(
  'Tomb Raider',
  "Xbox",
  "Lara Croft solves puzzles and fights bad guys to survive, HINT: Dont get in Helicopters ever!",
  1,
  1,
  'http://www.superherohype.com/images/stories/2012/October/TR_PC.png'
);

INSERT INTO video_games( name, platform, description, max_players, multiplayer,box_art)
VALUES(
  'Overcooked',
  "Xbox, PS, PC, Nintendo",
  "Crazy kitchen capers",
  4,
  1,
  'https://www.mobygames.com/images/covers/l/381815-overcooked-playstation-4-front-cover.png'
);
