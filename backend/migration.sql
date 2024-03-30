DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS clues CASCADE;

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
    (1, 200, ['Unique, 'Required'], 'Ursa Major Solar wants to ensure that unique data is always input into a specific field.
Which two field properties should the administrator configure?
Choose 2 options.', 'Important', 'Non-duplicates', 'Validation', 'Customize standard and custom fields to tailor your org to your own unique requirements.'),
    (1, 400, 'Noah''s Ark', 'Former astronaut James Irwin launched several expeditions in hopes of finding this on Mount Ararat', '300', '200Z', '508', 'Bill'),
    (1, 600, 'King Solomon', 'CNN reported in 2008 that ruins in Jordan could be the long-sought mines of this king', '2700', '00:00.000Z', 'Record Type', 'Jesse'),
    (1, 800, 'Ponce de Léon', 'He heard Bimini held the Fountain of Youth; sadly, he thought Florida was Bimini & died from an Indian attack', '909', '2009-07-22T12:00:00.000Z', 'Portugal', 'Object'),
    (1, 1000, 'Cibola', 'Antonio de Mendoza, viceroy of New Spain, sent Coronado to find the Seven Cities of this golden land; he didn''t', '222', '2009-07000Z', '11508', 'Roles'),

    -- Object Manager & Lightning App Builder
    (2, 200, '(Margaret) Mitchell', 'This 4''10" author began her epic in 1926 after an injury; David O. Selznick bought the rights & the rest is history', 'A1', '000Z', '4588', 'Permission Set'),
    (2, 400, 'Bonnie Parker', 'While on the run in the 1930s, this 4''10" bank robber sent poetry & photos of her & Clyde to newspapers', '253', '2009', '1158', 'Fields'),
    (2, 600, 'Record Types', 'Universal Containers has a renewals sales team that will use the Opportunity object.
They want to use many of the same picklist fields that are already defined, but will need
unique picklist values.
What feature allows a System Administrator to maintain the same field for two different
teams?', 'Page Layout', ' Duplicate Picklists', 'Master Picklist', 'Record types determine which business processes, page layouts, fields and picklist values a user can
access and allow the admin to maintain the same field for two different teams.'),
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
    (4, 400, ['Web-to-case','Email-to-case', 'Process Builder'] 'Ursa Major Solar needs a case to be automatically created.
Which three features can an administrator use to accomplish this goal?
Choose 3 options.', 'Web-to-case', 'Email-to-case', 'Process Builder', 'Setup Web-to-Case or Email-to-Case to automatically capture cases from your website and customer
emails. 
Configure a process to create records automatically with process builder'),
    (4, 600, 'ruby', 'The name of this gem precedes "throated hummingbird", as seen here', '200', '2009-07-22T12:00:00.000Z', '11508', 'Flow'),
    (4, 800, 'brick red', 'This shade of red whose name includes a building block has been a Crayola color since 1949', '200', '2009-07-22T12:00:00.000Z', '11508', 'Process Builder'),
    (4, 1000, 'vermillion', 'This shade of scarlet gets its name from the Latin for "worm"', '200', '2009-07-22T12:00:00.000Z', '11508', 'Service Cloud'),

    -- Productivity & Collaboration Applications
    (5, 200, 'vice prespointsent', 'In 1945 Harry served just 83 days in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Chatter'),
    (5, 400, 'the vice prespointsent', 'In 1973 Spiro served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Lightning Experience'),
    (5, 600, ['Opportunity Dashboard', 'Chatter groups'], 'Sales representatives at Ursa Major Solar are working on opportunities and need to see
how their colleagues have effectively managed other opportunities with comparable
products, competing against the same competitors.
Which two features should an administrator use to allow for this?
Choose 2 options.', 'Emails', 'Teams', 'Groups', 'A chatter group allows for discussion and sharing of the dashboard.'),
    (5, 800, 'vice prespointsent', 'In 1974 Gerald served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Salesforce Connect'),
    (5, 1000, 'vice prespointsent', 'In 1974 Nelson served just 8 months in this job', '200', '2009-07-22T12:00:00.000Z', '11508', 'Salesforce Connect');

    -- Data & Analytics Management
    (3, 200, '12', '2, 3 or this number means you rolled craps, so give up the dice already', '200', '2009-07-22T12:00:00.000Z', '11508', 'App Manager'),
    (3, 400, ['Metric', 'Gauge'] 'Ursa Major Solar uses data from the grand total of a custom report to create their
dashboard.
Which two components will populate the grand total properly?
Choose 2 options', 'Bar chart', 'Line chart', 'List view', 'Use a metric when you have one key value to display.
Use a gauge when you have a single value that you want to show within a range of custom values.'),
    (3, 600, '$75', 'Roll your pair of dice & land on Luxury Tax on a classic Monopoly board & you lose this much cash', '200', '2009-07-22T12:00:00.000Z', '11508', 'List View'),
    (3, 800, '<i>High Rollers</i>', 'If your toss of the dice couldn''t knock off the last number on this game show that I once hosted, you lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Reports'),
    (3, 1000, 'the bar', 'If your man is on this 3-letter place in backgammon, your dice roll must correspond to an open point or your turn is lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Filter'),

    -- Workflow / Process Automation
    (4, 200, 'crimson', 'It''s Harvard''s school color', '200', '2009-07-22T12:00:00.000Z', '11508', 'Mobile'),
    (4, 400, 'Make sure there is only one user in the role.', 'A System Administrator creates a Workflow Rule that assigns a task to a support
manager role when a case is escalated. The case owner is complaining about
being assigned these tasks.
What should a System Administrator do to correct this issue?', 'Delete the Workflow Rule', 'Edit the permissions on the support manager role ', 'freeze the user record', 'Select an assignee for your task. An assignee can be in the form of a user, role, record owner, record
creator, opportunity team role, or account team role, depending on the type of record you chose.'),
    (4, 600, 'ruby', 'The name of this gem precedes "throated hummingbird", as seen here', '200', '2009-07-22T12:00:00.000Z', '11508', 'Flow'),
    (4, 800, 'brick red', 'This shade of red whose name includes a building block has been a Crayola color since 1949', '200', '2009-07-22T12:00:00.000Z', '11508', 'Process Builder'),
    (4, 1000, 'vermillion', 'This shade of scarlet gets its name from the Latin for "worm"', '200', '2009-07-22T12:00:00.000Z', '11508', 'Service Cloud');
   
