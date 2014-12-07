Ext.define('PrinceApp.view.Viewport', {
	extend : 'Ext.container.Viewport',
	layout : 'fit',
	requires : [ 'PrinceApp.view.MyPanel' ],
	items : [ {
		xtype : 'panel',
		items : [ {
			xtype : 'princepanel'
		} ]

	} ]
});