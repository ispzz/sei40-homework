DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  item_name TEXT,
  item_cost INTEGER,
  store_name TEXT,
  link TEXT,
  image_url TEXT,
  recipient TEXT,
  event TEXT,
  event_date TEXT,
  member_id INTEGER
);


INSERT INTO items ( item_name, item_cost, store_name, link, image_url, recipient, event, event_date, member_id)
VALUES (
  'Train Set',
   39,
  'Kmart',
  'https://www.kmart.com.au/product/wooden-train-table/2366308',
  'https://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/0/42705260-1-f.jpg',
  'Tony',
  'Birthday',
  '30-11-20',
  1 );


INSERT INTO items ( item_name, item_cost, store_name, link, image_url, recipient, event, event_date, member_id)
VALUES (
  'Metric Steel Drill Bit Set',
   25,
  'Bunnings',
  'https://www.bunnings.com.au/ryobi-19-piece-metric-high-speed-steel-drill-bit-set_p0056805?gclid=Cj0KCQiAh4j-BRCsARIsAGeV12Bs0zYo7sZVkVjbh0c1hAL5xNoz3D8Jtcdq1osaSxijkQrqqCuDRkoaAkvhEALw_wcB&gclsrc=aw.ds',
  'https://media.bunnings.com.au/Product-800x800/105786f0-1518-40f6-9c6a-b80ad20d0032.jpg',
  'Katy',
  'Christmas',
  '24-12-20',
  2 );

INSERT INTO items ( item_name, item_cost, store_name, link, image_url, recipient, event, event_date, member_id)
VALUES ('Kettle & Toaster set',
   79,
  'Kogan',
  'https://www.kogan.com/au/buy/westinghouse-17l-kettle-and-2-slice-toaster-kitchen-breakfast-pack-black-westinghouse/?utm_source=google&utm_medium=product_listing_ads&gclid=Cj0KCQiAh4j-BRCsARIsAGeV12Ca3kdZDs8QJqE8hlGfJfwngZOd6W9PCZHdE95NXCW-gV70YUZeHV0aAgf4EALw_wcB',
  'https://assets.kogan.com/files/product/etail/Westinghouse-/WST-WHKTPK09K_1.jpg?auto=webp&canvas=1200%2C800&fit=bounds&height=800&quality=75&width=1200',
  'Sara',
  'Christmas',
  '30-12-20',
  1 );
