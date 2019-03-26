({
    doInit : function(component, event, helper) {
        
        
        
    },
    
    doSave: function(component, event, helper) {
		// Save account first to get parent Id for attachment record
        helper.saveAccountHelper(component, event); 
    },
 
    handleFilesChange: function(component, event, helper) {
       
       
        if (event.getSource().get("v.files").length > 0) {
           
            component.set("v.fileName", event.getSource().get("v.files")[0]['name']); 
        }
    	   
    }
})