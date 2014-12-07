Ext.define('PrinceApp.model.User', {
    extend: 'Ext.data.Model',
    fields: ['username', 'isAdmin', 'authenticated', 'loggedOut']
});