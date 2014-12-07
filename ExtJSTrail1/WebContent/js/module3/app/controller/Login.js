Ext.define('PrinceApp.controller.Login', {
    extend: 'Ext.app.Controller',
 
    models: ['User'],
    stores: ['Users'],
    views: [ 'MyPanel'],
    
    refs: [
           {
               ref: 'loginForm',
               selector: 'form'
           },
           {
           ref: 'loginButton',
           selector: 'princepanel button[action=login]'
           },
           {
           ref: 'logoutButton',
           selector: 'princepanel button[action=logout]'
           }
       ],
    
    init: function() {
        this.control({
        'princepanel button[action=logout]': {
        click: function(button)
        {
           var store = this.getUsersStore();
           var logoutButton = button;
           var loginButton = this.getLoginButton();
         
           this.getLoginForm().form.submit({
                        waitMsg:'Loading...',
                        url: 'login',
                        method: 'POST',
                        success: function(form,action) {                        
                           Ext.MessageBox.alert('Logged out', 'You have been logged out');
                           logoutButton.setVisible(false);
                           store.load();
                           store.sync();
                           loginButton.setVisible(true);
                        },
                        params:
                        {
                           view: 'sencha',
                           json: true,
                           logout: true
                        }
              });
            }
        },
         
        'princepanel button[action=login]': {
            click: function(button)
            {
            var store = this.getUsersStore();             
            var loginButton = button;
            var logoutButton = this.getLogoutButton();
             
            this.getLoginForm().form.submit({
                        waitMsg:'Loading...',
                        url: 'login',
                        method: 'POST',
                        success: function(form,action) {                        
                            store.load();
                            store.sync();
                            loginButton.setVisible(false);
                            logoutButton.setVisible(true);
                        },
                        failure: function(form,action){
                            Ext.MessageBox.alert('Error', "Invalid username/password");
                        },
                        params:
                        {
                           view: 'sencha',
                           json: true
                        }
               });
            }
            }
        });
    }
});