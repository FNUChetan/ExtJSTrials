Ext.define('My.store.ContactLeftLinks', {
	extend : 'Ext.data.Store',
	storeId : 'ContactLeftLinksStoreId',
	fields : [ 'name', 'phone' ],
	data : [ {
		name : "contact",
		phone : "contact link 1"
	}, {
		name : "contact",
		phone : "contact link 2"
	}, {
		name : "contact",
		phone : "contact link 3"
	}, {
		name : "order",
		phone : "order link 1"
	}, {
		name : "order",
		phone : "order link 2"
	}, {
		name : "order",
		phone : "order link 3"
	}, ],
	autoLoad : true
});
