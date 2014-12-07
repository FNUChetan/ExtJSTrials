Ext.define('My.store.Contacts', {
    extend: 'Ext.data.Store',
    storeId: 'Contacts',
    model: 'My.model.Contact',
    proxy: {
        type: 'ajax',
        url : 'js/module4/data/contacts.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }

});
