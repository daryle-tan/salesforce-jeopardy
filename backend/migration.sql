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
    (1, 400, 'Private', 'An administrator at Ursa Major Solar is implementing an organization-wide
default option for the Account object.
What is a correct option for the administrator in this scenario?', 'Public Read/Write', 'Public Read Only', 'Controlled by Parent', 'An admin would want to choose Private access at an org-wide level, because you can always open up
access from the org-wide default, but you cannot restrict access.'),
    (1, 600, 'King Solomon', 'CNN reported in 2008 that ruins in Jordan could be the long-sought mines of this king', '2700', '00:00.000Z', 'Record Type', 'Jesse'),
    (1, 800, 'Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product
Development Profile Read, Create, Edit permissions; give the Executive Profile Read Only
permissions for that object.', 'Universal Containers uses a custom object within the product development team.
Product development, executives, and System Administrators should be the only
users with access to records of this object. Product development needs
read/write access to all the records within the object, while the executives should
only be able to view the records.
How can the System Administrator configure the security model to meet these
requirements?', 'Set the Organization-Wide Defaults for the custom object to Private; Give the Product Development Profile Read Only permissions; give the Executive Profile Read, Create, Edit permissions for that object.', 'Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product Development Profile Read, Create, Edit permissions; give the Executive Profile Modify All permissions for that object.', 'Set the Organization-Wide Defaults for the custom object to Public Read Only; Give the Product Development Profile Read, Create, Edit permissions; give the Executive Profile No Access permissions for that object.', 'Assign default access to Controlled by Parent, Private, Public Read Only, or Public Read/Write. Object
permissions specify the base-level access users have to create, read, edit, and delete records for each object.
Manage object permissions in permission sets and profiles.'),
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
    (3, 200, ['Leads','Contacts'], 'Which two objects can be related to Campaign Members?', 'Leads', 'Contacts', 'Roles', 'Campaign members are contacts or leads associated with campaigns.'),
    (3, 400, '3', 'In Yahtzee if you lose a pair of the dice you need to play, you''re left with this many', '200', '2009-07-22T12:00:00.000Z', '11508', 'Quick Action'),
    (3, 600, '$75', 'Roll your pair of dice & land on Luxury Tax on a classic Monopoly board & you lose this much cash', '200', '2009-07-22T12:00:00.000Z', '11508', 'List View'),
    (3, 800, 'High Rollers', 'If your toss of the dice couldn''t knock off the last number on this game show that I once hosted, you lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Reports'),
    (3, 1000, 'Add custom sizing as a new product in a pricebook.', 'Ursa Major Solar customers are starting to request custom-sized solar panels,
which are currently unavailable in the standard inventory. Management has
decided to add custom sizing as an add-on item in Salesforce.
The administrator needs to allow sales users to add custom sizing to the total
opportunity sale.
What should the administrator do to achieve this goal?', 'Create a new custom field on the Opportunity object to track custom sizing options.', 'Use validation rules to ensure sales users select the custom sizing option for appropriate opportunities.', 'Configure a separate custom object to manage custom sizing selections and link it to the Opportunity object through a lookup relationship.', 'Use products and pricebooks to track what is being sold.'),

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
    (3, 200, 'Create a unique External ID field on Accounts in Salesforce for matching.', 'Universal Containers regularly imports Accounts from an external order system
that has its own ID field for each record.
What should the System Administrator do to help prevent duplicates during these
imports?', 'Create a unique field on Accounts', 'Create a new contact for the external account', 'Create a new profile', 'An external ID field contains record identifiers from a system outside of Salesforce.'),
    (3, 400, ['Metric', 'Gauge'] 'Ursa Major Solar uses data from the grand total of a custom report to create their
dashboard.
Which two components will populate the grand total properly?
Choose 2 options', 'Bar chart', 'Line chart', 'List view', 'Use a metric when you have one key value to display.
Use a gauge when you have a single value that you want to show within a range of custom values.'),
    (3, 600, ['Account Name', 'Site fields'], 'A System Administrator will use the Import Wizard to update existing Account
records.
Which values can the Import Wizard use to find matching records?', 'Account Name', 'Site fields', 'Email Address', 'Match Account Id, Account Name, and Account Site exactly as they appear in the application.'),
    (3, 800, 'The import process will fail, but only for the records with invalid data.', 'Ursa Major Solar is importing data and has many records that do NOT meet the
data validation criteria.
What will occur?', 'The import process will succeed, and all records, including those with invalid data, will be imported without any issues.', 'The import process will fail for all records, regardless of whether they have valid or invalid data.', 'The import process will fail, but only for the records with invalid data.', 'Salesforce runs validation rules on records before they are imported. Records that fail validation are not
imported.'),
    (3, 1000, 'the bar', 'If your man is on this 3-letter place in backgammon, your dice roll must correspond to an open point or your turn is lost', '200', '2009-07-22T12:00:00.000Z', '11508', 'Filter'),

    -- Workflow / Process Automation
    (4, 200, 'crimson', 'It''s Harvard''s school color', '200', '2009-07-22T12:00:00.000Z', '11508', 'Mobile'),
    (4, 400, 'Make sure there is only one user in the role.', 'A System Administrator creates a Workflow Rule that assigns a task to a support
manager role when a case is escalated. The case owner is complaining about
being assigned these tasks.
What should a System Administrator do to correct this issue?', 'Delete the Workflow Rule', 'Edit the permissions on the support manager role ', 'freeze the user record', 'Select an assignee for your task. An assignee can be in the form of a user, role, record owner, record
creator, opportunity team role, or account team role, depending on the type of record you chose.'),
    (4, 600, 'ruby', 'The name of this gem precedes "throated hummingbird", as seen here', '200', '2009-07-22T12:00:00.000Z', '11508', 'Flow'),
    (4, 800, ['Rule actions can take place immediately or can be time based.','Rules can be evaluated when records are created or edited.'], 'An administrator at Ursa Major Solar is configuring a workflow rule.
What are two considerations for an administrator in this situation?
Choose 2 options.', 'Rule actions can take place immediately or can be time based.', 'Rules can be evaluated when records are created or edited.', 'Rule actions are limited to one per workflow rule, and cannot be combined for different scenarios.', 'Workflow rules can be triggered any time a record is saved or created, depending on your rule criteria.'),
    (4, 1000, 'vermillion', 'This shade of scarlet gets its name from the Latin for "worm"', '200', '2009-07-22T12:00:00.000Z', '11508', 'Service Cloud');
   
