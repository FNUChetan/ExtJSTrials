Ext.application({
	autoCreateViewport : true,
	name : 'My',
	appFolder : './js/module4',
	stores : [ 'ContactLeftLinks' ],

	launch : function() {
		 //alert('launch function 111111111111');
		this.viewport = Ext.ComponentQuery.query('viewport')[0];
		 //alert('launch function 2222222222');
		var c = this.getController('Viewport');
		 //alert('launch function 333333333333');
		// c.init();
	},

	runAction : function(controllerName, actionName) {
		// alert(actionName);
		
		/*var leftRegion = this.viewport.layout.getLayoutItems()[1];
		leftRegion.removeAll(true);
		var pan1 = null;
		var leftLinkStore = Ext.StoreManager.lookup('ContactLeftLinks');
		leftLinkStore.each(function(record) {
			if (record.get('name') == 'contact' && controllerName == 'Contacts') {
				leftRegion.add(Ext.create('Ext.panel.Panel', {
					layout: 'fit',
					title : record.get('phone')
				}));
			} else if (record.get('name') == 'order' && controllerName == 'Orders') {
				leftRegion.add(Ext.create('Ext.panel.Panel', {
					layout: 'fit',
					title : record.get('phone')
				}));
			}
		});*/
		//console.log(leftLinkStore);
		
		// leftRegion.add(pan1);
		var controller = this.getController(controllerName);
		// controller.init(this);
		controller['action' + actionName]();
	},

	setMainView : function(view) {
		var center = this.viewport.layout.centerRegion;
		//Ext.suspendLayouts();
		//centerPanel = center.items.get('center-panel');
		//center.removeAll(true);
		//center.suspendEvents();
		/*var c= center.down();
		//center.removeAll();
		//c.suspendEvents();
		center.removeAll();
		center.add(view);
		center.setActive(view);*/
		/*c.add(Ext.create('Ext.panel.Panel', {
			title : 'updated grid',
			id: 'updated-grid',
			itemId: 'updated-grid',
			items: [view]
		}));*/
		
		//center.items.item
		
		//center.doLayout();
		//center.setActive(view);
		//c.resumeEvents();
		
		

		 

		// center.setActiveTab(view);
		 //center.setActive(view);
		 //center.doLayout();
		 //center.show();
		 
		 //Ext.resumeLayouts(true);
		 //center.resumeEvents();
		
		//var centerPanel = Ext.getCmp('centerPanel');
		
		 var centerRegion = Ext.getCmp('centerRegion');
		 	 //centerPanel = centerRegion.items.items[0];
		 if (centerRegion.items.items.length > 0 && view.xtype === centerRegion.items.items[0].xtype) {
			 return;
		 }
		 centerRegion.removeAll();
		//centerRegion.remove(centerPanel, true);
		centerRegion.add(view);
		 
		 /*if (centerPanel.items !== undefined) {
			 centerPanel.remove(0);
			 centerPanel.add(view);
		 }else {
			 centerPanel.add(view);
		 }*/
		//centerRegion.setActive(1);
		 
		//centerRegion.setActive(0);
		//center.doLayout();
		//center.show();
	}
});
