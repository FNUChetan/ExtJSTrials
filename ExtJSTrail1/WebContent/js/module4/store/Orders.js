Ext.define('My.store.Orders', {
    extend: 'Ext.data.Store',
    storeId: 'Orders',
    model: 'My.model.Order',
    proxy: {
        type: 'ajax',
        url : 'js/module4/data/orders.json',
        reader: {
            type: 'json',
            root: 'data'
        }
    }
});