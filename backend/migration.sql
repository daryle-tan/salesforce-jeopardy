DROP TABLE IF EXISTS categories;

-- Create a table for categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    clues_count INTEGER NOT NULL
);

-- Create a table for clues
CREATE TABLE clues (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES categories(id),
    points INTEGER NOT NULL,
    answer VARCHAR(255) NOT NULL,
    question TEXT NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    explanation TEXT NOT NULL
);

-- Insert data into categories table
INSERT INTO categories (title, clues_count) VALUES
    ('Configuration & Setup', 5),
    ('Object Manager & Lightning App Builder', 5),
    ('Sales & Marketing Applications', 5),
    ('Service & Support Applications', 5),
    ('Productivity & Collaboration Applications', 5),
    ('Data & Analytics Management', 5),
    ('Workflow / Process Automation', 5);

-- Insert data into clues table
INSERT INTO clues (category_id, points, answer, question, option1, option2, option3, explanation) VALUES
    -- Configuration & Setup
    (1, 200, 'Atlantis', 'In 1912 Heinrich Schliemann''s grandson Paul claimed falsely that he had proof of finding this "lost continent"', '200', '22T12:00:00.000Z', '11508', 'Thera'),
    (1, 400, 'Noah''s Ark', 'Former astronaut James Irwin launched several expeditions in hopes of finding this on Mount Ararat', '300', '200Z', '508', 'Bill'),
    (1, 600, 'King Solomon', 'CNN reported in 2008 that ruins in Jordan could be the long-sought mines of this king', '2700', '00:00.000Z', 'Record Type', 'Jesse'),
    (1, 800, 'Ponce de Léon', 'He heard Bimini held the Fountain of Youth; sadly, he thought Florida was Bimini & died from an Indian attack', '909', '2009-07-22T12:00:00.000Z', 'Portugal', 'Object'),
    (1, 1000, 'Cibola', 'Antonio de Mendoza, viceroy of New Spain, sent Coronado to find the Seven Cities of this golden land; he didn''t', '222', '2009-07000Z', '11508', 'Roles'),

    -- Object Manager & Lightning App Builder
    (2, 200, '(Margaret) Mitchell', 'This 4''10" author began her epic in 1926 after an injury; David O. Selznick bought the rights & the rest is history', 'A1', '000Z', '4588', 'Permission Set'),
    (2, 400, 'Bonnie Parker', 'While on the run in the 1930s, this 4''10" bank robber sent poetry & photos of her & Clyde to newspapers', '253', '2009', '1158', 'Fields'),
    (2, 600, 'Linda Hunt', 'This 4''9" actress won an Oscar for only her second film, "The Year of Living Dangerously"', '519', 'Z', '8', 'Page Layout'),
    (2, 800, 'Madeleine Albright', 'Though not tall, this future Secy. of State made a big impression in 1993 as U.S. Ambassador to the United Nations', '7', 'T12:00:00.000Z', '608', 'Email-to-Case'),
    (2, 1000, 'Mother Teresa', 'In 1928 this diminutive daughter of an Albanian grocer joined the Sisters of Loretto in Ireland', '230', '2009-07-22T12:00:00.000Z', '158', 'Knowledge Article'),

    -- Sales & Marketing Applications
    (3, 200, '12', '2, 3 or this number means you rolled craps, so give up the dice already', '200', '2009-07-22T12:00:00.000Z', '11508', 'App Manager'),
    (3, 400, '3', 'In Yahtzee if you lose a pair of the dice you need to play, you''re left with this many', '200', '2009-07-22T12:00:00.000Z', '11508', 'Quick Action'),
    (3, 600, '$75', 'Roll your pair of dice & land on Luxury Tax on a classic Monopoly board & you lose this much cash', '200', '2009-07-22T12:00:00.000Z', '11508', 'List View'),
    (3, 800, '<i>High Rollers</i>', 'If your toss of the dice couldn''t knock off the last number on this game show that I once hosted, you lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Reports'),
    (3, 1000, 'the bar', 'If your man is on this 3-letter place in backgammon, your dice roll must correspond to an open point or your turn is lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Filter'),

    -- Service & Support Applications
    (4, 200, 'crimson', 'It''s Harvard''s school color', '200', '2009-07-22T12:00:00.000Z', '11508', 'Mobile'),
    (4, 400, 'a beet', 'You might blush as red as this plant of the goosefoot family that has an edible red root', '200', '2009-07-22T12:00:00.000Z', '11508', 'Validation Rule'),
    (4, 600, 'ruby', 'The name of this gem precedes "throated hummingbird", as seen here', '200', '2009-07-22T12:00:00.000Z', '11508', 'Flow'),
    (4, 800, 'brick red', 'This shade of red whose name includes a building block has been a Crayola color since 1949', '200', '2009-07-22T12:00:00.000Z', '11508', 'Process Builder'),
    (4, 1000, 'vermillion', 'This shade of scarlet gets its name from the Latin for "worm"', '200', '2009-07-22T12:00:00.000Z', '11508', 'Service Cloud'),

    -- Productivity & Collaboration Applications
    (5, 200, 'vice prespointsent', 'In 1945 Harry served just 83 days in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Chatter'),
    (5, 400, 'the vice prespointsent', 'In 1973 Spiro served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Lightning Experience'),
    (5, 600, 'vice prespointsent', 'In 1989 Dan served just 69 days in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Salesforce Mobile'),
    (5, 800, 'vice prespointsent', 'In 1974 Gerald served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Salesforce Connect'),
    (5, 1000, 'vice prespointsent', 'In 1974 Nelson served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Salesforce Connect'),


