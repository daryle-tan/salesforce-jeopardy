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
INSERT INTO clues (category_id, points, answer, question, option1, option2, option3, option4, explanation) VALUES
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
    (2, 200, 'Record Types', 'Universal Containers has a renewals sales team that will use the Opportunity object.
They want to use many of the same picklist fields that are already defined, but will need
unique picklist values.
What feature allows a System Administrator to maintain the same field for two different
teams?', 'Page Layout', ' Duplicate Picklists', 'Master Picklist', 'Record types determine which business processes, page layouts, fields and picklist values a user can
access and allow the admin to maintain the same field for two different teams.'),
    (2, 400, 'Stage Selected Values in the Sales Processes', 'Universal Containers has a sales team focused on renewals. They will use many
of the same Opportunity fields as other teams, but need different Stage values.
What should the System Administrator update to support this requirement?', 'Opportunity Record Types', 'Stage Selected Values in the Sales Processes', 'Opportunity Team Members', 'Use multiple business processes to display different picklist values according to each user’s profile.'),
   (2, 600, ['Page layouts','Record types','Support processes'], 'A company needs its customer service agents to collect and display different
information on case records based on whether customers are calling in with a
question, product suggestion, or complaint.
Which three features should the administrator use to meet this goal?
Choose 3 options.', 'Page layouts', 'Record types', 'Support processes', 'Workflow rules', 'Page layouts control the layout and related lists on object record pages. Customize the values in record type or business process picklists based on your organization’s unique
needs. Use multiple business processes to display different picklist values according to each user’s profile.'),
   (2, 800, ['Create two page layouts.','Create two record types.'], 'Universal Containers has two business groups, Products and Services. Both
groups will be using opportunities to track deals, but different fields are required
by each group.
In which two ways should an administrator meet this requirement?
Choose 2 options.', 'Create two profiles', 'Create two page layouts.', 'Create two record types.', 'By creating two page layouts, you are able to customize what fields are shown for each group based on the
type of page layout they have access to. By creating two record types, you are able to customize what fields are shown for each group based on the type of record type they have access to.'),
    (2, 1000, 'Mother Teresa', 'In 1928 this diminutive daughter of an Albanian grocer joined the Sisters of Loretto in Ireland', '230', '2009-07-22T12:00:00.000Z', '158', 'Knowledge Article'),
  
  -- Sales & Marketing Applications
    (3, 200, ['Leads','Contacts'], 'Which two objects can be related to Campaign Members?', 'Leads', 'Contacts', 'Roles', 'Campaign members are contacts or leads associated with campaigns.'),
    (3, 400, '3', 'In Yahtzee if you lose a pair of the dice you need to play, you''re left with this many', '200', '2009-07-22T12:00:00.000Z', '11508', 'Quick Action'),
    (3, 600, 'Add custom sizing as a new product in a pricebook.', 'Ursa Major Solar customers are starting to request custom-sized solar panels,
which are currently unavailable in the standard inventory. Management has
decided to add custom sizing as an add-on item in Salesforce.
The administrator needs to allow sales users to add custom sizing to the total
opportunity sale.
What should the administrator do to achieve this goal?', 'Create a new custom field on the Opportunity object to track custom sizing options.', 'Use validation rules to ensure sales users select the custom sizing option for appropriate opportunities.', 'Configure a separate custom object to manage custom sizing selections and link it to the Opportunity object through a lookup relationship.', 'Use products and pricebooks to track what is being sold.'),
    (3, 800, ['The standard and list price for a product can be listed in more than one currency.','A product can have a different list price in different price books.'], 'Ursa Major Solar is using products and price books.

Which two items should an administrator take into considerations about these
features?
Choose 2 options.', 'A product can have a different list price in different price books.', 'The standard and list price for a product can be listed in more than one currency.', 'Products cannot be associated with multiple price books simultaneously.','Price books can only be assigned to specific user profiles and not to roles.
', 'Each product can exist in multiple price books with different prices and currency.'),
    (3, 1000, '$75', 'Roll your pair of dice & land on Luxury Tax on a classic Monopoly board & you lose this much cash', '200', '2009-07-22T12:00:00.000Z', '11508', 'List View'),
 

    -- Service & Support Applications
    (4, 200, 'Chatter feed tracking must be enabled for the case object.', 'An administrator at Ursa Major Solar is setting up case feed.
What should the administrator consider?', 'Universal case feed must be enabled.', 'Email-to-Case must be enabled for the organization.', 'Chatter feed tracking must be enabled for the case object.', 'Case escalation rules must be configured.'),
    (4, 400, 'Enable Case Comment Notification to Contacts.', 'Customers complain that they do not know when Comments have been added to
their Cases.
Which configuration can a System Administrator implement to address this
concern?', 'Configure workflow rules to send email notifications for new comments on cases.', 'Create a custom field on the Case object to track comments.', 'Enable Case Comment Notification to Contacts.', 'Enabling case comment notifications to contacts notifies contacts when a case comment has been modified or added to a case.'),
    (4, 600, 'Assignment rules', 'Which feature should Ursa Major Solar use if they want their support agents who are
skilled in a particular product line to own cases directly after customers log them from an
automated channel?', 'Assignment rules', 'Workflow rules', 'Approval processes', 'Assignment rules automate your organization’s lead generation and support processes. Use lead
assignment rules to specify how leads are assigned to users or queues.'),
    (4, 800, ['Web-to-case','Email-to-case', 'Process Builder'] 'Ursa Major Solar needs a case to be automatically created.
Which three features can an administrator use to accomplish this goal?
Choose 3 options.', 'Web-to-case', 'Email-to-case', 'Process Builder', 'Setup Web-to-Case or Email-to-Case to automatically capture cases from your website and customer
emails. 
Configure a process to create records automatically with process builder'),
    (4, 1000, 'vermillion', 'This shade of scarlet gets its name from the Latin for "worm"', '200', '2009-07-22T12:00:00.000Z', '11508', 'Service Cloud'),

    -- Productivity & Collaboration Applications
    (5, 200, 'Search the AppExchange for free adoption report apps.', 'The managers at Ursa Major Solar asked the administrator to quickly provide
access to sales reports and dashboards.
How can this be done?', 'Search the AppExchange for free adoption report apps.', 'Grant access to individual reports and dashboards based on user roles.', 'Create a custom Visualforce page to display the required reports and dashboards for managers.', 'The Salesforce Adoption Dashboards app can be found on the AppEschange.'),
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
    (3, 400, 'Four as long as the objects have associations', 'Ursa Major Solar is adding objects to a custom report type.
How many objects, maximum, can be added to this report type?', 'Ten objects can be added to this report type, regardless of their associations.', 'Four as long as the objects have associations', 'There is no limit to the number of objects that can be added to this report type.', 'Only two objects can be added to this report type due to Salesforce limitations.', 'Each report type must specify a primary object and may optionally include other related objects. Up to four
objects may be linked in a report type.'),
    (3, 600, ['Metric', 'Gauge'] 'Ursa Major Solar uses data from the grand total of a custom report to create their
dashboard.
Which two components will populate the grand total properly?
Choose 2 options', 'Bar chart', 'Line chart', 'List view', 'Use a metric when you have one key value to display.
Use a gauge when you have a single value that you want to show within a range of custom values.'),
    (3, 800, ['Account Name', 'Site fields'], 'A System Administrator will use the Import Wizard to update existing Account
records.
Which values can the Import Wizard use to find matching records?', 'Account Name', 'Site fields', 'Email Address', 'Match Account Id, Account Name, and Account Site exactly as they appear in the application.'),
    (3, 1000, 'The import process will fail, but only for the records with invalid data.', 'Ursa Major Solar is importing data and has many records that do NOT meet the
data validation criteria.
What will occur?', 'The import process will succeed, and all records, including those with invalid data, will be imported without any issues.', 'The import process will fail for all records, regardless of whether they have valid or invalid data.', 'The import process will fail, but only for the records with invalid data.', 'Salesforce runs validation rules on records before they are imported. Records that fail validation are not
imported.'),
    

    -- Workflow / Process Automation
    (4, 200, 'Time-Based Workflow Queue', 'Universal Containers created a Time-Based Workflow rule that sends a follow-up
email to the customer two days after a Case is closed. The System Administrator
wants to verify that the workflow functions correctly.', 'Case History', 'Workflow Execution Log', 'Time-Based Workflow Queue', 'When a workflow rule that has time-dependent actions is triggered, use the workflow queue to view pending
actions and cancel them if necessary.'),
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
   
