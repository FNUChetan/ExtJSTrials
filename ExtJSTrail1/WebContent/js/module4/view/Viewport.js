Ext.define('My.view.Viewport', {
	extend : 'Ext.container.Viewport',

	layout : {
		type : 'border'
	},
    
    cls : 'viewport',

	initComponent : function() {
		//alert('My.view.Viewport');
		var me = this;

		Ext.applyIf(me, {
			items : [ /*{
				xtype : 'panel',
				//xtype : 'container',
				//layout: 'fit',
				region : 'center',
				//contentEl: 'BLayout3',
				items: [{
				        xtype : 'panel',
				        itemId: 'center-panel',
				        id: 'center-panel'
				}],
				id : 'centerRegion',
		        cls : 'panelrounded',
		        //layout : 'fit',
		        //border : false
			}*/{
				 xtype : 'container',
				 region : 'center',
				 layout : 'fit',
				 id : 'centerRegion'/*,
				 items : {
				 title : 'Center Region',
				 id : 'centerPanel',
				 //html : 'I am disposable',
				 frame : true
				 }*/
				 } , {
				xtype : 'panel',
				//xtype : 'container',
				layout: 'fit',
				region : 'west',
				itemId: 'westRegion',
				title : 'Sidebar',
				id: 'westRegion',
				width : 200,
				split : true,
				collapsible : true,
				floatable : false
			}, {
				xtype : 'container',
				//layout: 'fit',
				style : 'background-color:cornflowerblue',
				region : 'north',
				cls : 'ctnorth',
				items : [ {
					xtype : 'label',
					style : 'color:white;font-size:20px',
					text : 'My Application'
				}, {
					xtype : 'toolbar',
					items : [ {
						xtype : 'button',
						itemId : 'contacts',
						text : 'Contacts'
					}, {
						xtype : 'button',
						itemId : 'orders',
						text : 'Orders'
					} ]
				} ]
			} ]
		});

		me.callParent(arguments);
	}
});
