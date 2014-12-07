Ext.define('PrinceApp.view.MyPanel', {
	extend : 'Ext.form.Panel',
	alias : 'widget.princepanel',
		title: 'Account Registration',
        frame: true,
        width: 350,
        bodyPadding: 10,
        bodyBorder: true,
        fieldDefaults: {
            labelWidth: 110,
            labelAlign: 'left',
            msgTarget: 'none',
            invalidCls: '' //unset the invalidCls so individual fields do not get styled as invalid
        },
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'User Name',
            allowBlank: false,
            minLength: 6,
            msgTarget: 'side'
        }, {
            xtype: 'textfield',
            msgTarget: 'side',
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password1',
            fieldLabel: 'Password',
            inputType: 'password',
            style: 'margin-top:15px',
            allowBlank: false,
            msgTarget: 'side',
            minLength: 8
        }, {
        	
            xtype: 'textfield',
            msgTarget: 'side',
            name: 'password2',
            fieldLabel: 'Repeat Password',
            inputType: 'password',
            allowBlank: false,
            /**
             * Custom validator implementation - checks that the value matches what was entered into
             * the password1 field.
             */
            validator: function(value) {
                var password1 = this.previousSibling('[name=password1]');
                return (value === password1.getValue()) ? true : 'Passwords do not match.'
            }
        },

        /*
         * Terms of Use acceptance checkbox. Two things are special about this:
         * 1) The boxLabel contains a HTML link to the Terms of Use page; a special click listener opens this
         *    page in a modal Ext window for convenient viewing, and the Decline and Accept buttons in the window
         *    update the checkbox's state automatically.
         * 2) This checkbox is required, i.e. the form will not be able to be submitted unless the user has
         *    checked the box. Ext does not have this type of validation built in for checkboxes, so we add a
         *    custom getErrors method implementation.
         */
        {
            xtype: 'checkboxfield',
            name: 'acceptTerms',
            /*fieldLabel: 'Terms of Use',
            hideLabel: true,*/
            margin: '15 0 0 0',
            boxLabel: 'I have read and accept the Terms of Use.',
            listeners: {
            	change: function( newValue, oldValue, eOpts ) {
            		var me = this;
            		//alert('ddddddddd');
            		panel = me.up('princepanel');
            		/*console.log(panel.getForm());
            		console.log(panel.isValid());
            		alert(panel.isValid());
            		console.log(panel.get('ddd'));*/
                	if (panel.isValid()) {
                		panel.getDockedItems()[1].items.items[0].setDisabled(false);	
                		//alert('dfdfgdfffffffffffffffff');
                        /*var out = [];
                        Ext.Object.each(me.getForm().getValues(), function(key, value){
                            out.push(key + '=' + value);
                        });
                        Ext.Msg.alert('Submitted Values', out.join('<br />'));
                		console.log(panel.get('ddd'));*/
                		//panel.getDockedItems()[1].disable = false;
                		
                    } else {
                    	panel.getDockedItems()[1].items.items[0].setDisabled(true);
                    }
            	}
            }

        }],

        dockedItems: [{
            cls: Ext.baseCSSPrefix + 'dd-drop-ok',
            xtype: 'container',
            dock: 'bottom',
            layout: {
                type: 'hbox',
                align: 'middle'
            },
            padding: '10 10 5',

            items: [{                
                xtype: 'button',
                /*formBind: true,*/
                itemId: 'ddd',
                disabled: true,
                text: 'Submit Registration',
                width: 140
            }]
        }]
    });


