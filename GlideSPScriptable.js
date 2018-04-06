$sp api
I really dislike when Servicenow doesn't share the functions they make available and use in their code in front of us.See this thread on the community.Anyways, there are efforts to keep track of these things.I know I've contributed to this page on serviceportal.io.

    Documented
canReadRecord
canReadRecord(GlideRecord) - record canReadRecord(string table, string sys_id) - record

// Returns true if the user can read the specified GlideRecord.
// source: SQANDA Create Question[sqanda-create-question] line 40:
if (!$sp.canReadRecord(questionGR)) {

}
// source: SC Popular Items[cbcacf13cb21020000f8d856634c9ca0] line 14:
$sp.canReadRecord(
    "sc_cat_item",
    count.cat_item.sys_id.getDisplayValue()
);
getCatalogItem
getCatalogItem(string sys_id) - record getCatalogItem(string sys_id, boolean) - record

// Returns a model and view model for a sc_cat_item or
// sc_cat_item_guide.
// source: SC Catalog Item[widget-sc-cat-item] line 50
data.sc_cat_item = $sp.getCatalogItem(data.sys_id, true);
// source: sp-variable-editor[sp-variable-editor] line 25
data.sc_cat_item = $sp.getCatalogItem(
    gr.cat_item,
    !!options.isOrdering,
    targetTable
);
getDisplayValue
getDisplayValue(string field) - record

// Returns a display value from a field on a record in this order:
// 1. The widget's sp_instance* record
// 2.
// source: SC Catalog Item[widget-sc-cat-item] line 4
data.sc_catalog_page = $sp.getDisplayValue("sc_catalog_page");
getField
getField(GlideRecord, string field) - record

// Returns {display_value, label, type, value} for a given field
// on a GlideRecord.
// source: Approval Info[33442352cb30020000f8d856634c9c3f] line 21
fields.push($sp.getField(
    gr,
    'sys_updated_on'
));
getFields
getFields(GlideRecord, string fields) - record

// Like getField Checks the specified field names, and returns
// a comma seperated list of valid names.
// source: Approval Info[33442352cb30020000f8d856634c9c3f] line 18
var fields = $sp.getFields(
    gr,
    'state,sys_created_on'
);
getFieldsObject
getFieldsObject(GlideRecord, string fields) - record

// Checks the specified field names, and returns an object
// containing the valid names.
// source: Approval Record[525a2752cb30020000f8d856634c9cfd] line 15
var t = {};
t = $sp.getFieldsObject(
    task,
    'number,short_description,opened_by,requested_by,start_date'
);
getForm
getForm(string table, string sys_id) - record getForm(string table, string sysid, string query, string view) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=id=widget-form)

    // Returns the form.
    // If no view is passed, returns the form as it appears on view 'sp'
    // source: User Profile[user-profile] line 22
    $sp.getForm("live_profile", data.liveProfileID);
// source: Form[widget-form] line 63
data.f = $sp.getForm(data.table, data.sys_id, data.query, data.view);
getListColumns
getListColumns(string table, string view) - record

// Returns a list of the specified table's columns in the specified
// view
// source: Data Table[widget-data-table] line 37
data.fields = $sp.getListColumns(data.table, data.view);
getMenuHREF
getMenuHREF(GlideRecord) - record

// Returns the (?id=) portion of the URL based on the sp_menu type.
// source: Icon Link[3caa67afcb13020000f8d856634c9c2e] line 3
data.href = $sp.getMenuHREF(gr);
getMenuItems
getMenuItems(string sys_id) - record

// Returns the menu items for the specified instance.
// source Header Menu[5ef595c1cb12020000f8d856634c9c6e] line 8
data.menu.items = $sp.getMenuItems(menu_id);
getParameter
getParameter(string) - record

// Returns the value of a given key from the query string or post body.
// source: Form[widget-form] line 37
data.query = $sp.getParameter("query") || options.query;
getPortalRecord
getPortalRecord()record

// Returns the portal's GlideRecord.
// source: Subscribed Questions[sqanda-subscribed-questions] line 2
data.knowledgeBase = $sp.getPortalRecord().getValue("sqanda_knowledge_base");
getRecord
getRecord() - record getRecord(string table, string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=id=widget-form)

// Returns the GlideRecord for the current sp_instance\*. 
// Returns null if the widget is embedded by another widget.
// source: Request Fields[96cf39f3d7230200a9addd173e24d412] line 2
var gr = $sp.getRecord();
// source: Form[widget-form] line 54
var rec = $sp.getRecord(data.table, data.sys_id);
getRecordDisplayValues
getRecordDisplayValues(object data, GlideRecord, string fields) - record

// Copies display values for the specified field names
// from a GlideRecord into the data parameter.
// source: Catalog Content[sc-cat-content] line 26
$sp.getRecordDisplayValues(c, gr, 'picture');
getRecordElements
getRecordElements(object data, GlideRecord, string fields) - record

// Copies the value and display value for the specified
// field names from a GlideRecord into the data parameter.
// source: Data Table[widget-data-table] line 128
$sp.getRecordElements(record, gr, data.fields);
getRecordValues
getRecordValues(object data, GlideRecord, string fields) - record

// Copies values for the specified field names from a
// GlideRecord into the data parameter.
// source: KB View 2[c254be50d7201200a9addd173e24d410] line 6
$sp.getRecordValues(data, gr, 'title,description');
getStream
getStream(string table, string sys_id) - record

// Get the activity stream for a record.
// source: Ticket Conversations[widget-ticket-conversation] line 63
data.stream = $sp.getStream(data.table, data.sys_id);
getUserInitials
getUserInitials()

// Returns the user's initials as a string.
getValue
getValue(string field) - record

// Like getDisplayValue except that it returns the value instead of
// the display value.
// source: SC Popular Items[cbcacf13cb21020000f8d856634c9ca0] line 1
data.sc_catalog = $sp.getValue('sc_catalogs') || $sp.getValue('sc_catalog');
getValues
getValues(object data, string fields) - record getValues(string sys_id, object options) getValues(object data) - record

//source: KB Topic Articles[35c51f56d7f33100a9ad1e173e24d4b1] line 2
$sp.getValues(data, "color,glyph,kb_topic,title");
//source: Icon Menu List[88979930cb01020000f8d856634c9caa] line 2
$sp.getValues(data);
getWidget
getWidget(string sys_id / widget - id, object options) - record

// Returns a widget model for embedding a widget inside another widget.
// source: User Profile[user-profile] line 75
data.teamWidget = $sp.getWidget(
    'sp-my-team',
    { glyph: 'user', color: 'primary' }
);
Undocumented
getKBRecord
getKBRecord() - record

// Returns the portal's KB record where the workflow state is
// published.
// source: KB Most Viewed[7d903b52cb30020000f8d856634c9ce3] line 4
var z = $sp.getKBRecord();
getKBCount
getKBCount(string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=sys_id=ee307070d7201200a9addd173e24d4da)

// Returns the number of Knowledge Base articles.
// source: KB Categories - KBv3[ee307070d7201200a9addd173e24d4da] line 16
var kbCount = $sp.getKBCount(data.kb);
getKBCategoryArticles
getKBCategoryArticles(string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=sys_id=122ac7f0d7101200a9addd173e24d411)

// Returns KB articles in the specified category and its
// subcategories.Pass 'limit' to limit the number of
// articles returned.
// source: KB Categories[122ac7f0d7101200a9addd173e24d411] line 9
var articles = $sp.getKBCategoryArticles(t.getUniqueValue());
getKBTopicArticles
getKBTopicArticles(string topic) - record

// Returns array
// source: KB Topic Articles[35c51f56d7f33100a9ad1e173e24d4b1] line 3
data.items = $sp.getKBTopicArticles(data.kb_topic);
getKBTopCategoryID
getKBTopCategoryID(string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=sys_id=c254be50d7201200a9addd173e24d410)

    // Returns the top category in the hierarchy containing the
    // specified category.
    // source: KB View 2[c254be50d7201200a9addd173e24d410] line 22
    n.topCat = $sp.getKBTopCategoryID(n.kb_category);
getKBSiblingCategories
getKBSiblingCategories(string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=sys_id=ee307070d7201200a9addd173e24d4da)

    // Returns KB categories with same parent as the specified
    // category.
    // source: KB Categories - KBv3[ee307070d7201200a9addd173e24d4da] line 6
    cats = $sp.getKBSiblingCategories(data.catParam);
showCatalogPrices
showCatalogPrices() - record

// Returns- Is an object|
// source: SC Catalog Item[widget-sc-cat-item] line 20
data.showPrices = $sp.showCatalogPrices();
saveVariables
saveVariables() - record

// Retuns ?
// source: sp-variable-editor[sp-variable-editor] line 17
$sp.saveVariables(
    input.table,
    input.sys_id,
    vars
);
buildThemeVariableModel
buildThemeVariableModel(string sysid, array) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=id=widget-portal-config)

// Retuns ?
// source: Portal config[widget-portal-config] line 241
var variableValues = $sp.buildThemeVariableModel(portalId, keys.join(","));
getVariablesArray
getVariablesArray() - record

// Returns the tables variables as an object.
// source: Request Fields[96cf39f3d7230200a9addd173e24d412] line 22
data.variables = $sp.getVariablesArray();
getWidgetFromInstance
getWidgetFromInstance(string) - record

// Returns a widget from the specified widget instance.
// source: KB Search[9b6187d0d7201200a9addd173e24d4dd] line 1
data.typeahead = $sp.getWidgetFromInstance('typeahead_search_header');
getRecordVariablesArray
getRecordVariablesArray(GlideRecord) - record

// Returns the records variables.
// source: Approvals[f37aa302cb70020000f8d856634c9cfc] line 86
item.variables = $sp.getRecordVariablesArray(itemsGR);
getFilterBreadcrumbs
getFilterBreadcrumbs(string table, string, query, null) - record

// Returns an array of objects where each object contains
// the breadcrumb label, value, and flags for if fixed and
// if removed
// source: Filter Breadcrumbs[widget-filter-breadcrumbs] line 4
data.breadcrumbs = $sp.getFilterBreadcrumbs(table, query, null);
logStat
logStat(string param 1, string table, string sysid, string param 2) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=id=widget-sc-cat-item) logStat(string param 1, string table, string sysid) - [record](//.service-now.com/spwidgetlist.do?sysparmquery=id=widget-sc-order-guide)

    // Create a new entry in the `sp_log` table.
    // Record has a table name, a record sys_id from that name,
    // and some type and optional comments.
    // Handy for doing things like logging searches or visits
    // to pages, etc.
    // source: SC Catalog Item[widget-sc-cat-item] line 59
    $sp.logStat(
        'Catalog View',
        data.sc_cat_item.sys_class_name,
        data.sys_id,
        data.sc_cat_item.name
    );
// source: SC Order Guide[widget-sc-order-guide] line 38
$sp.logStat(
    'Catalog Order Guide View',
    data.sc_cat_item.sys_class_name,
    data.sys_id
);
getInstanceRecord
getInstanceRecord() - record

// Returns the widget instances GlideRecord.
// source: Icon Link[3caa67afcb13020000f8d856634c9c2e] line 2
var gr = $sp.getInstanceRecord();
log
log(string) - record
log(object) - record
// Sends the specified message to the log console.
// source: Calculator[calc] line 7
$sp.log("calc with input as follows... ");
// source: Preview Widget[core-preview] line 21
$sp.log(e);
saveRecord
saveRecord(string table, string sysid, array fields) - [record](.service - now.com / spwidgetlist.do ? sysparmquery = id = widget - form)

// Saves or updates the current record.
// source: Form[widget-form] line 25
result = $sp.saveRecord(
    input.table,
    input.sys_id,
    input._fields
);
logSearch
logSearch()

// Adds a record to the Service Portal Statistics logs.
// no examples in a new instance
sp logSearch
getSCRecord
getSCRecord()

// Returns sc_cat_item record for the portal's catalog with
// sys_class_name != sc_cat_item_wizard and active = true
// in the query. GlideRecord returned has not yet triggered
// the query.
// no examples in a new instance
sp getSCRecord
getStreamEntries
getStreamEntries()

// Get a record's actvivity stream as a JSON formatted list.
// Typically for a task record