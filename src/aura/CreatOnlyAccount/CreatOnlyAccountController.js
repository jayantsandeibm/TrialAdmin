({
	handleLoad : function(component, event, helper) {
	component.set("v.showSpinner", false);
	//use this to pre populate fields wth some data
        component.set("v.defAccName", '****My Account  Name***');
	},
    
    handleSubmit : function(component, event, helper) {
       //We don't need to put basic validation here as that are handle by lightning:inputfield and recordEditForm
       //event.preventDefault(); use this to stop default flow
      
       component.set("v.showSpinner", true);
        //component.set("v.saved",true);
        event.preventDefault();       // stop the form from submitting
            var fields = event.getParam('fields');
            component.find('myRecordForm').submit(fields);
       
    },
    
    handleSuccess : function(component, event, helper) {
	    
	//Redirect to detail page on success
	var payload = event.getParams().response;
       console.log(payload);
         component.set("v.showSpinner", false);
        //component.set("v.saved",false);
        var vMessage = 'Saved! New record id is ' + payload.id;
        component.set("v.eMessage",vMessage);
        component.set("v.defAccName", '..New Account..');
         //component.set("v.AccName", '');
        //component.find("v.Description").set('v.value', null);
       //component.find("v.Industry").set('v.value', null);
         //component.find("v.Phone").set('v.value', '');
	     //component.find("v.AccountSource").set('v.value', '');
        //component.find("v.Type").set('v.value', '');
        //event.preventDefault();
        
    }
})