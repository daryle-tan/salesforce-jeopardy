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
    (1, 200, ARRAY['Unique', 'Required'], 'Ursa Major Solar wants to ensure that unique data is always input into a specific field.
Which two field properties should the administrator configure?
Choose 2 options.', 'Required', 'Unique', 'Non-duplicates', 'Validation', 'Customize standard and custom fields to tailor your org to your own unique requirements.'),
    (1, 400, ARRAY['Private'], 'An administrator at Ursa Major Solar is implementing an organization-wide default option for the Account object.
What is a correct option for the administrator in this scenario?', 'Private', 'Public Read/Write', 'Public Read Only', 'Controlled by Parent', 'An admin would want to choose Private access at an org-wide level, because you can always open up
access from the org-wide default, but you cannot restrict access.'),
    (1, 600, ARRAY['A My Domain request can be reverted before deploying a new domain', 'Visualforce page URLs will change'], 'Th leadership of a large online widget company wishes to enable the My Domain feature in Salesforce. What does the Salesforce Administrator need to consider before enabling the My Domain feature? Choose 2 answers.','A My Domain request can be reverted before deploying a new domain', 'Visualforce page URLs will change', 'My Domain cannot be used in a sandbox environment', 'Users will not be able to log in from https://login.salesforce.com', 'My Domain is available for sandbox environments, and users still have the option to log in from login.salesforce.com unless it has been prevented. After saving a My Domain change, the request can be canceled before deploying a new Domain by clicking on `Cancel New Domain`. Visualforce page URLs will change once My Domain is enabled and deployed.'),
    (1, 800, ARRAY['Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product
Development Profile Read, Create, Edit permissions; give the Executive Profile Read Only permissions for that object.'], 'Universal Containers uses a custom object within the product development team.
Product development, executives, and System Administrators should be the only users with access to records of this object. Product development needs
read/write access to all the records within the object, while the executives should only be able to view the records.
How can the System Administrator configure the security model to meet these requirements?', 'Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product
Development Profile Read, Create, Edit permissions; give the Executive Profile Read Only permissions for that object.', 'Set the Organization-Wide Defaults for the custom object to Private; Give the Product Development Profile Read Only permissions; give the Executive Profile Read, Create, Edit permissions for that object.', 'Set the Organization-Wide Defaults for the custom object to Public Read Write; Give the Product Development Profile Read, Create, Edit permissions; give the Executive Profile Modify All permissions for that object.', 'Set the Organization-Wide Defaults for the custom object to Public Read Only; Give the Product Development Profile Read, Create, Edit permissions; give the Executive Profile No Access permissions for that object.', 'Assign default access to Controlled by Parent, Private, Public Read Only, or Public Read/Write. Object
permissions specify the base-level access users have to create, read, edit, and delete records for each object.
Manage object permissions in permission sets and profiles.'),
    (1, 1000, ARRAY['A user that is assigned as the sole recipient of a workflow email alert cannot be deactivated.', 'Her records can be transferred to another user.', 'Jesse will not be deleted from the system but will no longer be able to log in to their Salesforce org.'], 'Jesse, an accounting executive, has resigned and joined a new company. The Salesforce Administrator from her previous company needs to remove this user from the system. She has decided to deactivate Jesse from the system. What are some considerations when deactivating users in Salesforce? 
    Choose 3 answers.', 'Jesse will not be deleted from the system but will no longer be able to log in to their Salesforce org.', 'A user that is assigned as the sole recipient of a workflow email alert cannot be deactivated.', 'Her records can be transferred to another user.', 'Deactivated users retain access to records manually shared with them.', 'In Salesforce, users cannot be deleted; they can only be deactivated. Inactive users will continue to be listed as the Created By user. A user that`s assigned as the sole recipient of a workflow email alert cannot be deactivated. Deactivated users lose access to records that are manually shared with them.'),

    -- Object Manager & Lightning App Builder
    (2, 200, ARRAY['Record Types'], 'Universal Containers has a renewals sales team that will use the Opportunity object.
They want to use many of the same picklist fields that are already defined, but will need unique picklist values.
What feature allows a System Administrator to maintain the same field for two different teams?', 'Record Types', 'Page Layout', ' Duplicate Picklists', 'Master Picklist', 'Record types determine which business processes, page layouts, fields and picklist values a user can
access and allow the admin to maintain the same field for two different teams.'),
    (2, 400, ARRAY['Stage Selected Values in the Sales Processes'], 'Universal Containers has a sales team focused on renewals. They will use many
of the same Opportunity fields as other teams, but need different Stage values.
What should the System Administrator update to support this requirement?', 'Stage Selected Values in the Support Processes', 'Opportunity Record Types', 'Stage Selected Values in the Sales Processes', 'Opportunity Team Members', 'Use multiple business processes to display different picklist values according to each user`s profile.'),
   (2, 600, ARRAY['Page layouts','Record types','Support processes'], 'A company needs its customer service agents to collect and display different
information on case records based on whether customers are calling in with a question, product suggestion, or complaint.
Which three features should the administrator use to meet this goal?
Choose 3 options.', 'Page layouts', 'Record types', 'Support processes', 'Workflow rules', 'Page layouts control the layout and related lists on object record pages. Customize the values in record type or business process picklists based on your organization`s unique
needs. Use multiple business processes to display different picklist values according to each user`s profile.'),
   (2, 800, ARRAY['Create two page layouts.','Create two record types.'], 'Universal Containers has two business groups, Products and Services. Both
groups will be using opportunities to track deals, but different fields are required by each group.
In which two ways should an administrator meet this requirement?
Choose 2 options.', 'Create two profiles', 'Create two sales processes', 'Create two page layouts.', 'Create two record types.', 'By creating two page layouts, you are able to customize what fields are shown for each group based on the
type of page layout they have access to. By creating two record types, you are able to customize what fields are shown for each group based on the type of record type they have access to.'),
    (2, 1000, ARRAY['The values can be reordered', 'Additional values can be added', 'The standard values can be deleted'], 'The Sales Director of Luna Consulting would like the picklist values of the "Rating" field on the Lead object modified. 
    What options are available to modify the standard field values?', 'The values can be reordered', 'Additional values can be added', 'The standard values can be deleted', 'New values can be added, but standard values cannot be deleted', 'Picklist values on standard fields can be added, deleted, or reordered.'),
  
  -- Sales & Marketing Applications
    (3, 200, ARRAY['Leads','Contacts'], 'Which two objects can be related to Campaign Members?', 'Leads', 'Contacts', 'Roles', 'Reports', 'Campaign members are contacts or leads associated with campaigns.'),
    (3, 400, ARRAY['Custom lead fields can be mapped to account, contact, and opportunity fields.','Standard lead fields are automatically converted to account, contact, and opportunity fields.'], 'Ursa Major Solar (UMS) is configuring the lead conversion process.
Which two factors should UMS consider before setting up the process?
Choose 2 options.', 'Leads cannot be converted if they have custom fields populated.', 'Conversion of leads only applies to standard Salesforce objects and not custom objects.', 'Custom lead fields can be mapped to account, contact, and opportunity fields.','Standard lead fields are automatically converted to account, contact, and opportunity fields.', 'When leads are converted lead records, standard lead fields map to contact, account, person account, and opportunity fields. Custom fields are map to newly created records. When leads are converted lead records, standard lead fields map to contact, account, person account, and opportunity fields. Custom fields are map to newly created records.'),
    (3, 600, ARRAY['Add custom sizing as a new product in a pricebook.'], 'Ursa Major Solar customers are starting to request custom-sized solar panels,
which are currently unavailable in the standard inventory. Management has decided to add custom sizing as an add-on item in Salesforce. The administrator needs to allow sales users to add custom sizing to the total opportunity sale.
What should the administrator do to achieve this goal?', 'Add custom sizing as a new product in a pricebook.', 'Create a new custom field on the Opportunity object to track custom sizing options.', 'Use validation rules to ensure sales users select the custom sizing option for appropriate opportunities.', 'Configure a separate custom object to manage custom sizing selections and link it to the Opportunity object through a lookup relationship.', 'Use products and pricebooks to track what is being sold.'),
    (3, 800, ARRAY['The standard and list price for a product can be listed in more than one currency.','A product can have a different list price in different price books.'], 'Ursa Major Solar is using products and price books.
Which two items should an administrator take into considerations about these features?
Choose 2 options.', 'A product can have a different list price in different price books.', 'The standard and list price for a product can be listed in more than one currency.', 'Products cannot be associated with multiple price books simultaneously.','Price books can only be assigned to specific user profiles and not to roles.
', 'Each product can exist in multiple price books with different prices and currency.'),
    (3, 1000, ARRAY['Filters can be applied to narrow the view by criteria or to help identify areas of concern.', 'Tiered Einsten opportunity scores are displayed along with key factors and score changes.', 'Key performance indicators for sales pipelines are displayed as metrics at the top of the page.'], 'The Sales Manager at Bit Chain are taking a more proactive role in managing the opportunity pipeline. The Sales Cloud Consultant recommended that they use Pipeline Inspection. Which of the following capabilities are features of Pipeline Inspection?', 'Filters can be applied to narrow the view by criteria or to help identify areas of concern.', 'Tiered Einsten opportunity scores are displayed along with key factors and score changes.', 'Key performance indicators for sales pipelines are displayed as metrics at the top of the page.', 'The `Pipeline` tab can be accessed to view the changes to opportunities in different forecast categories over time.', 'Pipeline Inspection is available as part of the Sales Cloud license at no extra cost with Enterprise, Performance, and Unlimited editions. It provides sales managers with better visibility of their pipeline by providing information on key metrics (based on the available number and currency fields), opportunities, and weekly changes. Metrics such as new opportunities created, increases or decreases in amounts, and overdue opportunities, can be displayed for the sales teams. 
    Pipeline views can be created using different filters to help identify areas of concern. Pipeline Inspection users who have the `Revenue Intelligence User` or the `Revenue Intelligence Admin` permission set can see the changes to opportunities in different forecast categories over time from the `Flow` tab. Opportunities of multiple record types can be edited inline in the same list view. Users do not have to filter list views by one record type to edit opportunities inline. 
    Einstein Deal Insights, powered by Einstein`s machine learning capability, predicts the opportunities unlikely to be won in the current month. Lastly, Einstein Conversation Insights and Email Insights are also features of Pipeline Inspection. Einstein Conversation Insights and Email Insights provide sales agents with the information they need to analyze all customer interactions to track deals. These functionalities encompass suggested actions, such as reviewing call and email logs, producing call summaries for voice and video calls, and generating editable summaries to incorporate future actions and client input.'),
 

    -- Service & Support Applications
    (4, 200, ARRAY['Chatter feed tracking must be enabled for the case object.'], 'An administrator at Ursa Major Solar is setting up case feed.
What should the administrator consider?', 'Universal case feed must be enabled.', 'Email-to-Case must be enabled for the organization.', 'Chatter feed tracking must be enabled for the case object.', 'Case escalation rules must be configured.', 'Enabling Case Feed actions and feed items gives your users access to both standard actions they’ll need when working with cases, such as Email and Change Status, and to feed items related to those actions.'),
    (4, 400, ARRAY['Enable Case Comment Notification to Contacts.'], 'Customers complain that they do not know when Comments have been added to their Cases.
Which configuration can a System Administrator implement to address this concern?',
'Configure workflow rules to send email notifications for new comments on cases.', 'Enable Case Comment Notification to Internal Users Only.','Create a custom field on the Case object to track comments.', 'Enable Case Comment Notification to Contacts.', 'Enabling case comment notifications to contacts notifies contacts when a case comment has been modified or added to a case.'),
    (4, 600, ARRAY['Assignment rules'], 'Which feature should Ursa Major Solar use if they want their support agents who are
skilled in a particular product line to own cases directly after customers log them from an automated channel?', 
'Assignment rules', 'Workflow rules', 'Approval processes', 'Sharing rules', 'Assignment rules automate your organization`s lead generation and support processes. Use lead
assignment rules to specify how leads are assigned to users or queues.'),
    (4, 800, ARRAY['Web-to-case','Email-to-case', 'Process Builder'], 'Ursa Major Solar needs a case to be automatically created.
Which three features can an administrator use to accomplish this goal?
Choose 3 options.', 'Web-to-case', 'Email-to-case', 'Process Builder', 'Escalation Rule', 'Setup Web-to-Case or Email-to-Case to automatically capture cases from your website and customer
emails. 
Configure a process to create records automatically with process builder'),
    (4, 1000, ARRAY['Records can be placed in a queue via an assignment rule or manually', 'Custom object records can be assigned to a queue', 'A list view is automatically created when a queue is created for Cases, Leads, or custom objects'], 'What is true regarding queues?', 'Records can be placed in a queue via an assignment rule or manually', 'Custom object records can be assigned to a queue', 'A list view is automatically created when a queue is created for Cases, Leads, or custom objects', 'Records are removed from queues if not assigned within 60 days', 'Standard objects such as Cases, Leads, Orders, Service Contracts, and Knowledge Article Versions, as well as custom objects, can be assigned to queues. List views are automatically created for Cases, Leads, and custom objects when a queue is created for those objects. Records can be placed in a queue manually by a user. For leads and cases, assignment rules can be created to automate this process based on records meeting defined criteria. Only members of a queue can accept records from that queue and take ownership.'),

    -- Productivity & Collaboration Applications
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
    Choose 2 answers.', 'Last Email Sent Date', 'Last Email Received Date', 'Latest Email Sent Date', 'Latest Email Received Date', '`Last Email Sent Date`is an activity metric field that can be added to a report to show the date when the most recent email was sent. `Last Email Received Date` is another activity metric field that can be added to show the date when the most recent email was received.'),

    -- Data & Analytics Management
    (6, 200, ARRAY['Create a unique External ID field on Accounts in Salesforce for matching.'], 'Universal Containers regularly imports Accounts from an external order system that has its own ID field for each record.
What should the System Administrator do to help prevent duplicates during these imports?', 'Create a unique External ID field on Accounts in Salesforce for matching.', 'Create a unique field on Accounts', 'Create a new contact for the external account', 'Create a new profile', 'An external ID field contains record identifiers from a system outside of Salesforce.'),
    (6, 400, ARRAY['Four as long as the objects have associations'], 'Ursa Major Solar is adding objects to a custom report type.
How many objects, maximum, can be added to this report type?', 'Ten objects can be added to this report type, regardless of their associations.', 'Four as long as the objects have associations', 'There is no limit to the number of objects that can be added to this report type.', 'Only two objects can be added to this report type due to Salesforce limitations.', 'Each report type must specify a primary object and may optionally include other related objects. Up to four
objects may be linked in a report type.'),
    (6, 600, ARRAY['Metric', 'Gauge'], 'Ursa Major Solar uses data from the grand total of a custom report to create their
dashboard.
Which two components will populate the grand total properly?
Choose 2 options.', 'Bar chart', 'Line chart', 'Metric','Gauge', 'Use a metric when you have one key value to display.
Use a gauge when you have a single value that you want to show within a range of custom values.'),
    (6, 800, ARRAY['Account Name', 'Site fields'], 'A System Administrator will use the Import Wizard to update existing Account records.
Which values can the Import Wizard use to find matching records? 
Choose 2 options.', 'Account Name', 'Site fields', 'Email Address','Billing Address', 'Match Account Id, Account Name, and Account Site exactly as they appear in the application.'),
    (6, 1000, ARRAY['The import process will fail, but only for the records with invalid data.'], 'Ursa Major Solar is importing data and has many records that do NOT meet the data validation criteria.
What will occur?', 'The import process will skip the records with invalid data and continue with the import.','The import process will succeed, and all records, including those with invalid data, will be imported without any issues.', 'The import process will fail for all records, regardless of whether they have valid or invalid data.', 'The import process will fail, but only for the records with invalid data.', 'Salesforce runs validation rules on records before they are imported. Records that fail validation are not
imported.'),
    

    -- Workflow / Process Automation
    (7, 200, ARRAY['Time-Based Workflow Queue'], 'Universal Containers created a Time-Based Workflow rule that sends a follow-up email to the customer two days after a Case is closed. The System Administrator
wants to verify that the workflow functions correctly. How can the System Administrator achieve this?', 'Check the Case record`s Activity History for the email status.','Case History', 'Workflow Execution Log', 'Time-Based Workflow Queue', 'When a workflow rule that has time-dependent actions is triggered, use the workflow queue to view pending
actions and cancel them if necessary.'),
    (7, 400, ARRAY['Make sure there is only one user in the role.'], 'A System Administrator creates a Workflow Rule that assigns a task to a support
manager role when a case is escalated. The case owner is complaining about being assigned these tasks.
What should a System Administrator do to correct this issue?', 'Make sure there is only one user in the role.', 'Delete the Workflow Rule', 'Edit the permissions on the support manager role ', 'Freeze the user record', 'Select an assignee for your task. An assignee can be in the form of a user, role, record owner, record
creator, opportunity team role, or account team role, depending on the type of record you chose.'),
    (7, 600, ARRAY['Record Triggered-Flow that runs Before save'], 'Universal Containers has asked its Administrator to automatically set some fields when a Lead is created.
What is the best way for the administrator to perform this automation?', 'Record Triggered-Flow that runs Before save', 'Use a Process Builder with a scheduled action to update the fields after lead creation.', 'Write an Apex trigger that fires after the lead is inserted to update the fields.','Utilize a workflow rule with field updates based on lead creation criteria.', 'Update new and changed records by using before-save updates in flows.'),
    (7, 800, ARRAY['Rule actions can take place immediately or can be time based.','Rules can be evaluated when records are created or edited.'], 'An administrator at Ursa Major Solar is configuring a workflow rule.
What are two considerations for an administrator in this situation?
Choose 2 options.', 'Rule actions can take place immediately or can be time based.', 'Rules can be evaluated when records are created or edited.', 'Rule actions are limited to one per workflow rule, and cannot be combined for different scenarios.','Workflow rules can only be triggered by manual record updates, not by system events or automation.', 'Workflow rules can be triggered any time a record is saved or created, depending on your rule criteria.'),
    (7, 1000, ARRAY['Assignment', 'Collection Sort', 'Loop'], 'Luna HR Services has a flow that runs on leads from companies with more than 500 employees which are created via data imports, third party integration,
    and manual input. The flow updates the "Teleservices Representative" custom field value of the first 50 leads to Sales Agent A. The flow loops again through the remaining leads that do not have "Teleservices Representative" values and updates the field to Sales Rep B, and so on.
    Which elements are required  to be in the flow?
    Choose 3 answers.', 'Assignment', 'Collection Sort', 'Loop', 'Subflow', 'The autolaunched flow should have at least loop, assignment, and collection sort elements. The Loop element repeatedly runs over items in a collection variable. The Assignment element is used to set values in variables, collection variables, record variables, record collection variables, and global variables. The Collection Sort element can be added to the flow to sort and set the limit of data collected in a collections variable.');
   
