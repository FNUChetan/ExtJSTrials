Ext.define('My.view.OrdersGrid', {
    extend: 'Ext.grid.Panel',
    alias:'widget.orders-grid',

    height: 250,
    width: 400,
    title: 'Orders',
    store: 'Orders',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'product',
                    text: 'Product'
                },
                {
                    xtype: 'numbercolumn',
                    dataIndex: 'quantity',
                    text: 'Quantity'
                }
            ],
            viewConfig: {

            }
        });

        me.callParent(arguments);
    }
});
