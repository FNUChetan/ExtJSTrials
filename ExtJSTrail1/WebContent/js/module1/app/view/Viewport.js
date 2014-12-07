Ext.define('PrinceApp.view.Viewport', {
	extend : 'Ext.container.Viewport',
	layout : 'fit',
	requires : ['PrinceApp.view.MyPanel'],
	items : [ {
		xtype : 'princepanel'
	} ]
});