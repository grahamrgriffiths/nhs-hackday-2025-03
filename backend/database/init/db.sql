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
('Abdominal Pain','Pain in the side of the body'),
('Headache','Pain loated in the head'),
('Nausea', 'Nausea is an uneasiness in your stomach. Vomiting is the forcible emptying (“throwing up”) of stomach contents through your mouth.');

-- OTHER TABLES --