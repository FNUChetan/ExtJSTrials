Ext.application({
	autoCreateViewport : true,
	name : 'My',
	appFolder : './js/module4',
	stores : [ 'ContactLeftLinks' ],

	launch : function() {
		// alert('launch function 111111111111');
		this.viewport = Ext.ComponentQuery.query('viewport')[0];
		// alert('launch function 2222222222');
		var c = this.getController('Viewport');
		// alert('launch function 333333333333');

	},

	runAction : function(controllerName, actionName) {
		var leftLinkStore = Ext.StoreManager.lookup('ContactLeftLinks');
		var westRegion = Ext.getCmp('westRegion');
		westRegion.removeAll();
		var parentPanel = new Ext.create('Ext.form.Panel');
		leftLinkStore
				.each(function(record) {
					if (record.get('name') == 'contact'
							&& controllerName == 'Contacts') {
						parentPanel.add({
							xtype : 'panel',
							title : record.get('phone')
						});
					} else if (record.get('name') == 'order'
							&& controllerName == 'Orders') {
						parentPanel.add({
							xtype : 'panel',
							title : record.get('phone')
						});
					}
				});

		westRegion.add(parentPanel);

		var controller = this.getController(controllerName);
		controller['action' + actionName]();
	},

	setMainView : function(view) {
		var centerRegion = Ext.getCmp('centerRegion');
		if (centerRegion.items.items.length > 0
				&& view.xtype === centerRegion.items.items[0].xtype) {
			return;
		}
		centerRegion.removeAll();
		centerRegion.add(view);
	}
});
