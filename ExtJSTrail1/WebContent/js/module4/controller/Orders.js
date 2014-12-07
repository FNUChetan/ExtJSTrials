Ext.define('My.controller.Orders', {
    extend: 'Ext.app.Controller',

    stores: [
        'Orders'
        ],

    views: [
        'OrdersGrid'
        ],

    refs: [
        {
        ref: 'grid',
        selector: '',
        xtype: 'orders-grid',
        autoCreate: true}
    ],

    init: function(application) {
        if (this.inited) {
            return;
        }
        this.inited = true;

        this.control({
            'orders-grid': {
                itemdblclick: function() {
                    alert('you double clicked an item in the orders grid');
                }
            }
        });
    },

    actionIndex: function() {
        var me = this;
        me.getOrdersStore().load({
    		callback: function() {
    			//me.getGrid().reconfigure(me.getOrdersStore());
    			me.application.setMainView(me.getGrid());
    		},
    		scope: me
    	});
    }
});
