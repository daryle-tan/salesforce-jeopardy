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
    answer TEXT[] NOT NULL,
    question TEXT NOT NULL,
    option1 VARCHAR(255) NOT NULL,
    option2 VARCHAR(255) NOT NULL,
    option3 VARCHAR(255) NOT NULL,
    option4 VARCHAR(255) NOT NULL,
    explanation VARCHAR(2000) NOT NULL
);

ALTER TABLE clues
ALTER COLUMN explanation TYPE VARCHAR(2000);

-- Insert data into categories table
INSERT INTO categories (title, clues_count) VALUES
    ('Salesforce Fundamentals', 5),
    ('Data Modeling and Management', 5),
    ('Business Logic and Process Automation', 5),
    ('User Interface', 5),
    ('App Deployment', 5);

-- Insert data into clues table
INSERT INTO clues (category_id, points, answer, question, option1, option2, option3, option4, explanation) VALUES
    -- Salesforce Fundamentals
    (1, 200, ARRAY['Build a Visualforce page to display the necessary data.'], 'Ursa Major College is an educational institution that tracks student data using Salesforce. It would like to generate the attendance records for its students in a printable PDF format with data from at least five different objects. Which of the following would help in achieving this user case?
    Choose 1 answer.', 'Add a built-in Convert PDF button to the page layout.', 'Add the PDF Lightning component in the Lightning App Builder.', 'Build a Visualforce page to display the necessary data.', 'Build a report in Report Builder and export it as a PDF File.', 'A Visualforce page can be created and rendered as a PDF file by setting the "renderAs" attribute of the <apex:page> Visualforce tag to "pdf".'),
    (1, 400, ARRAY['Assign the "Minimum Access" standard profile to the users, along with a recruitment app permission set.', 'Create a new profile by cloning an existing profile and modify it to only include permissions to the app.'], 'Swan Solutions has developed a new recruitment application in Salesforce for supporting their global recruitment team. Salesforce Administrator wants to give access to this new application to several users from the HR and recruitment teams who have not used Salesforce before and do not need access to any other apps or functionality in Salesforce. What are the best options to address this scenario? Choose 2 answers.', 'Assign the "Minimum Access" standard profile to the users, along with a recruitment app permission set.', 'Create a new profile by cloning an existing profile and modify it to only include permissions to the app.', 'Assign an existing profile to the users and add permission that allows the users to access the app.', 'Modify an existing profile and modify it to only include permissions to the app.', '
    The best option is to assign the standard profile "Minimum Access - Salesforce" which contains minimal permissions and acess. 
    Access to the new recruitment app, along with any other permissions related to this, can be contained within a new permission set.
    The other possible solution would be to create a new profile by cloning an existing profile and modify it to only include permissions to the app.'),
    (1, 600, ARRAY['The user must have access to the report folder', 'The user must have the "Run Reports" permission'], 'What is true about running reports in Salesforce? Choose 2 answers.','The user must have access to the report folder', 'The user must have the "Run Reports" permission', 'The user must have the "Customize Reports" permission', 'The user must have access to all the data in the report', 'The "Run Reports" permission and access to the report folder are required for running reports.'),
    (1, 800, ARRAY['Add a cross filter to include related cases, activities, and contracts', 'Add a subfilter to the filter to the cross filter to show only escalated cases and accounts with tasks & active contracts', 'Create an account report and add a filter to see only customer accounts'], 'The sales department of Universal Containers would like a report that displays accounts that use the "Customer" record type and have escalated cases, related tasks, and active contracts. Which of the following are required when creating such a report? Choose 3 answers.', 
    'Add a cross filter to include related cases, activities, and contracts', 'Add a subfilter to the filter to the cross filter to show only escalated cases and accounts with tasks & active contracts', 'Add a report filter to show only escalated cases and accounts with tasks & active contracts', 'Create an account report and add a filter to see only customer accounts', 'Cross filters can be used to include or exclude records in report results based on related objects and their fields. Subfilters can be added to cross filters to further refine report results.'),
    (1, 1000, ARRAY['Dashboard subscriptions can be by a user, group or role-based', 'Any filters applied to the dashboard are not applied to the emailed dashboard.', 'Only a user who has permission to access the dashboard can be added as a subscriber.'], 'A user wants to subscribe to a dashboard in Lightning Experience to receive its refreshed results every day by email. She would also like to send the results to two of her coworkers by adding them as subscribers. Which of the following statements are important to consider for adding other users as subscribers?
    Choose 3 answers.', 'Dashboard subscriptions can be by a user, group or role-based', 'Any filters applied to the dashboard are not applied to the emailed dashboard.', 'Only a user who has permission to access the dashboard can be added as a subscriber.', 'Any user with access to the dashboard can add other users as subscribers.', 'More than one user can be added as a subscriber to a dashboard. Only users with access to the dashboard are shown in the list of recipients who  are available for subscription. Filters applied to a dashboard are not applied to the
     emailed dashboard; the dashboard appears unfiltered. Dashboard subscriptions can be by a user, group, or role-based. To add other users to the dashboard subscription, the user must have the specific "Subscribe to Dashboards:Add Recipients" permission granted vis profile or permission set.'),

    -- Business Logic & Process Automation
    (2, 200, ARRAY['Add the Sales Director role to the list of allowed initial submitters by selecting the "Roles and Subordinates" submitter type'], 'Only users in the sales department are permitted to submit contracts for approval. Members of the sales department are assigned to either the Sales Director, Sales Manager, or Sales Rep role. The Sales Manager and Sales Rep roles are below the Sales Director in the role hierarchy. How should the approval process be configured to ensure this? Choose 1 anser.', 
    'Add the Sales Director role to the list of allowed initial submitters by selecting the "Roles and Subordinates" submitter type','Add the contract owner to the list of allowed initial submitters by selecting the "Owner" submitter type', 'Add a "Sales" public group to the list of allowed initial submitters by selecting the "Public Groups" submitter type', 'Add all Sales users to the list of allowed initial submitters by selecting the "User" submitter type', 'Although specifying all Sales or a "Sales" public group as initial submitters will technically work, allowing users to submit contracts for approval based on their assigned roles is the recommended approach and provides an efficient solution. For example, if a user joins the Sales department, the user will automatically be enabled to act. If the user leaves the department, the capability will also be removed automatically.'),
    (2, 400, ARRAY['COUNT'], 'Custodia Solutions Salesforce Administrator has received a request to display the number of "Project" records related with an account on each account record. In a master-detail relationship. "Project" is a child object of Account. The Salesforce Administrator has made the decision to add a roll-up summary feature. Which roll-up type should be used for the requirement? Choose 1 answer.', 'MAX', 'SUM', 'COUNT', 'MIN', 'COUNT is used for counting how many child records are associated with the master record.'),
   (2, 600, ARRAY['A roll-up summary field can be used if the formula does not contain the DATEVALUE, NOW, or TODAY functions','A roll-up summary field can be used if the formula only refers to fields on the Opportunity Product object'], 'A developer has created a formula field on the Opportunity Product object to display the discounted amount associated with a product. There is a requirement to display the total discounted amount of the related products on every opportunity. Which of the following statements are true regarding the use of a roll-up summary field for this requirement? Choose 2 answers.',
    'A roll-up summary field can be used if the formula does not contain the DATEVALUE, NOW, or TODAY functions','A roll-up summary field can be used if the formula only refers to fields on the Opportunity Product object', 'A roll-up summary field can be used if the formula does not contain any functions', 'It is not possible to use a roll-up summary field', 'A formula containing supported functions can be referenced by a roll-up summary field. If the formula refers to a field on the related Product object, it will not work. The formula field cannot use any dynamic formulas such as DATEVALUE, NOW, or TODAY.'),
   (2, 800, ARRAY['COUNT','MIN', 'SUM'], 'Which of the following functions are available when defining a roll-up summary field? Choose 3 answers.', 
   'COUNT', 'MIN', 'SUM', 'AVG', 'The functions available for defining a roll-up summary field are COUNT, SUM, MIN, and MAX.'),
    (2, 1000, ARRAY['By submitting the request using Apex', 'By submitting the request using a process', 'By having a user click on a button or link'], 'How can an approval request be triggered? Choose 3 answers.', 'By submitting the request using Apex', 'By submitting the request using a process', 'By having a user click on a button or link', 'By triggering an assignment rule', 'Approval requests can be submitted using a button, a process("Submit for Approval" action), flow ("Submit for Approval" flow core action), or programmatically using Apex.'),
  
  -- Data Modeling and Management
    (3, 200, ARRAY['Create validation rules'], 'Which of the following are NOT capabilities of the Schema Builder? Choose 1 answer.', 'Create validation rules', 'Create lookup and master-detail relationships', 'Create formula fields', 'Create custom objects', 'Schema Builder provides the ability to add custom objects, lookup relationships, master-detail relationships, formula fields, and all custom fields.'),
    (3, 400, ARRAY['Create a many-to-many relationship by creating a new junction object between Project and Employee objects'], 'Lisa, the Salesforce administrator at Ursa Major Consulting, is required to design the data model for project and employee data. A project can have many employees working on it, and an employee can work on multiple projects. 
What design should Lisa propose?
Choose 1 answer.', 'Create a many-to-many relationship by creating a new junction object between Project and Employee objects', 'Create a lookup relationship from Employee object to Project object', 'Create a lookup relationship from Project object to Employee object','Create a master-detail relationship from Project object to Employee object', 'Prohect and Employee data should have a many-to-many relationship. Such relationships are possible by creating a junction object between the two objects.'),
    (3, 600, ARRAY['Look-up relationship between Order Group and Order, and master-detail relationship between Order and Order Item.'], 'Ursa Major Solar needs to create a data model using custom objects based on Order Groups, Orders, and Order Items. Order Group is a collection of Orders, and each Order has multiple associated Order Items. Order Groups can be deleted when necessary, but the related Order data
    should not be lost. Order Items should not exist without an Order record. Which types of relationships would need to be created for this requirement? Choose 1 answer.', 'Look-up relationship between Order Group and Order, and master-detail relationship between Order and Order Item.', 'Look-up relationship between Order Group and Order, and look-up relationship between Order and Order Item.', 'Master-detail relationship between Order Group and Order, and look-up relationship between Order and Order Item.', 'Master-detail relationship between Order Group and Order, and master-detail relationship between Order and Order Item.', 'Order Group and Order would need to have a lookup relationship since a loose association with independent security is required between the two. Order and Order Item need to be in a master-detail relationship since Order Items should only exist if there is a related master record.'),
    (3, 800, ARRAY['Data will be loaded faster when using the Bulk API','Parallel processing is used to load data faster', 'Data is processed in batches'], 'Which of the following statements are true with regard to enabling the Bulk API in Data Loader? Choose 3 answers.', 'Synchrononous processing is used to load data faster', 'Data will be loaded faster when using the Bulk API','Parallel processing is used to load data faster', 'Data is processed in batches', 'The Bulk API loads data faster as it uses parallel processing of batches. Serial mode can be enabled via the "Settings" screen if data contention is a problem with parallel processing, but this will result in a slower overall process.'),
    (3, 1000, ARRAY['The filter can be used to only display objects of interest', 'The map can be used to navigate to objects of interest', 'Performance can be improved by selecting the "Hide Relationships" option'], 'The Salesforce Administrator working for Ursa Major Solar recently tried the Schema Builder, but found that it displays too many objects and relationships, has long loading times, and is too difficult to work with. Which of the following features could help with these issues? Choose 3 answers.', 'The filter can be used to only display objects of interest', 'The map can be used to navigate to objects of interest', 'Performance can be improved by selecting the "Hide Relationships" option', 
    'Performance can be improved by selecting the "Hide Grids" option', 'Hiding the relationship details reduces the rendering work needed on the canvas. Using the map feature aids in navigating the canvas much quicker and finding the required object. Using the Objects filter minimizes the number of objects that need to be rendered.'),
 

    -- User Interface
    (4, 200, ARRAY['Modify the Contact compact page layout properties'], 'A Salesforce developer is asked to include the Birthdate field in the Contact hover details layout. What is the best way to achieve this requirement in Lightning Experience? Choose 1 answer.', 'Modify the Contact compact page layout properties', 'Modify the properties of the Contact Mini Page layout', 'Modify the Search Layout', 'Design a Visualforce page with a Standard Controller', 'In Lightning Experience, the first few fields added to a compact layout appear in the expanded lookup card displayed when hovering over a lookup field in record details.'),
    (4, 400, ARRAY['Related List Layouts', 'Field Layouts'], 'Which of the following are configurable through a Salesforce object detail page? Choose 2 answers.',
'Related List Layouts', 'Field Layouts','Sidebar Layout', 'List Views', 'List Views and Sidebar layout are not part of a detail page layout.'),
    (4, 600, ARRAY['Opportunity', 'Activity'], 'Which of the following supports custom buttons in Salesforce? Choose 2 answers.', 
'Opportunity', 'Activity', 'User', 'Web-to-Lead', 'Custom buttons and links are available for the Opportunity object and Activities under the individual setup links for Tasks and Events.'),
    (4, 800, ARRAY['Web-to-case','Email-to-case', 'Process Builder'], 'Ursa Major Solar needs a case to be automatically created.
Which three features can an administrator use to accomplish this goal?
Choose 3 options.', 'Web-to-case', 'Email-to-case', 'Process Builder', 'Escalation Rule', 'Setup Web-to-Case or Email-to-Case to automatically capture cases from your website and customer
emails. 
Configure a process to create records automatically with process builder'),
    (4, 1000, ARRAY['Records can be placed in a queue via an assignment rule or manually', 'Custom object records can be assigned to a queue', 'A list view is automatically created when a queue is created for Cases, Leads, or custom objects'], 'What is true regarding queues? Choose 3 options.', 'Records can be placed in a queue via an assignment rule or manually', 'Custom object records can be assigned to a queue', 'A list view is automatically created when a queue is created for Cases, Leads, or custom objects', 'Records are removed from queues if not assigned within 60 days', 'Standard objects such as Cases, Leads, Orders, Service Contracts, and Knowledge Article Versions, as well as custom objects, can be assigned to queues. List views are automatically created for Cases, Leads, and custom objects when a queue is created for those objects. Records can be placed in a queue manually by a user. For leads and cases, assignment rules can be created to automate this process based on records meeting defined criteria. Only members of a queue can accept records from that queue and take ownership.'),

    -- App Deployment
    (5, 200, ARRAY['Check the all-day event checkbox on the event.'], 'How should a sales rep create an all-day event in Salesforce?', 'Check the all-day event checkbox on the event.', 'Set the event start and end times to midnight to indicate an all-day event.', 'Use a specific keyword in the event title, such as "All Day" or "Full Day."','Add the event to a special "All-Day" calendar within Salesforce.', 'Checking the all-day event checkbox sets the start and end times for 24 hours.'),
    (5, 400, ARRAY['Search the AppExchange for free adoption report apps.'], 'The managers at Ursa Major Solar asked the administrator to quickly provide
access to sales reports and dashboards.
How can this be done?', 'Search the AppExchange for free adoption report apps.', 'Use Lightning Web Components to build custom sales reports and dashboards', 'Grant access to individual reports and dashboards based on user roles.', 'Create a custom Visualforce page to display the required reports and dashboards for managers.', 'The Salesforce Adoption Dashboards app can be found on the AppEschange.'),
    (5, 600, ARRAY['Opportunity Dashboard', 'Chatter groups'], 'Sales representatives at Ursa Major Solar are working on opportunities and need to see
how their colleagues have effectively managed other opportunities with comparable products, competing against the same competitors.
Which two features should an administrator use to allow for this?
Choose 2 options.', 'Opportunity Dashboard', 'Chatter groups', 'Teams', 'Groups', 'A chatter group allows for discussion and sharing of the dashboard.'),
    (5, 800, ARRAY['Log a separate task, call, or activity on the account.'], 'Ursa Major Solar has the following environment and requirements:
Critical, high-priority accounts have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative.
The Sales Manager wants to prevent these accounts from being inadvertently contacted more than once on the same day. The Sales Manager wants to report on various customer interactions.
How should the administrator fulfill these requirements?', 'Configure an automatic email notification to alert users when they are about to contact a critical account more than once in a day.', 'Implement a time-based workflow to restrict interactions with critical accounts to once per day.', 'Use a custom validation rule to prevent multiple interactions with the same account in a day.','Log a separate task, call, or activity on the account.', 'Use activities to log key touchpoints on customers so that a report can be pulled.'),
    (5, 1000, ARRAY['Last Email Sent Date', 'Last Email Received Date'], 'Luna Consulting uses Einstein Activity Capture to sync emails, events, and contacts between sales users` connected Microsoft and Gmail accounts and Salesforce. For instance, emails that users send and receive are automatically captured and added to the activity timeline of related records, including accounts, contacts, and leads. The sales director would like to view a report that shows email activity metrics, such as the date when the most recent email was received and the date when the most recent email was sent. 
    Which of the following are valid activity metric fields that can be added to a report for this requirement?
    Choose 2 options.', 'Last Email Sent Date', 'Last Email Received Date', 'Latest Email Sent Date', 'Latest Email Received Date', '"Last Email Sent Date" is an activity metric field that can be added to a report to show the date when the most recent email was sent. "Last Email Received Date" is another activity metric field that can be added to show the date when the most recent email was received.');

    


   
