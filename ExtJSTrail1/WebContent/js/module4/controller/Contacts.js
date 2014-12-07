Ext.define('My.controller.Contacts', {
    extend: 'Ext.app.Controller',

    stores: [
        'Contacts'
        ],

    views: [
        'ContactsGrid'
        ],

    refs: [
        {
        ref: 'grid',
        selector: '',
        xtype: 'contacts-grid',
        autoCreate: true}
    ],

    init: function(application) {
        if (this.inited) {
            return;
        }
        this.inited = true;

        this.control({
            'contacts-grid': {
                itemdblclick: function() {
                    alert('you double clicked an item in the contacts grid');
                }
            }
        });
    },

    actionIndex: function() {
    	/*this.getContactsStore().on('load', function() {
    	    this.isLoaded = true;
    	});*/
    	/*if(!this.isLoaded) {
    		this.getContactsStore().load();
    	}*/
    	var me = this;
    	me.getContactsStore().load({
    		callback: function() {
    			//me.getGrid().reconfigure(me.getContactsStore());
    			me.application.setMainView(me.getGrid());
    		},
    		scope: me
    	});
    	
        
    }
});
