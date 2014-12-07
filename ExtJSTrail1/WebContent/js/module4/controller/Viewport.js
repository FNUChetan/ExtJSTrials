Ext.define('My.controller.Viewport', {
    extend: 'Ext.app.Controller',
    
    

    init: function(application) {
    	//alert('init of viewport controller');
        if (this.inited) {
        	alert('if of ---init of viewport controller');
            return;
        }
        this.inited = true;

        this.control({
            'viewport #contacts': {
                click: function() {
                    this.application.runAction('Contacts', 'Index');
                }
            },
            'viewport #orders':{
                click:function(){
                    this.application.runAction('Orders', 'Index');
                }
            }
        });
    }
});
