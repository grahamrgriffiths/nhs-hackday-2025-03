/* 
 *  Create & init site content
 */

-- Symptoms --

CREATE TABLE IF NOT EXISTS Symptoms (
  id INTEGER PRIMARY KEY,
  symptomName TEXT DEFAULT "",
  symptomDescription TEXT DEFAULT ""
);

INSERT INTO Symptoms
  (symptomName, symptomDescription) 
VALUES 
('Abdominal Pain','Pain in the side of the body');

-- OTHER TABLES --