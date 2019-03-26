/************************************************************
 Lightning Controller Details
 Purpose: Controller for lightning component createAccount.cmp
 ***********************************************************/
({
		create : function(component, event, helper) {
		console.log('Create record');
        
        //getting the account information
        var acc = component.get("v.acc");
        
        //Validation
        if($A.util.isEmpty(acc.name) || $A.util.isUndefined(acc.name)){
            alert('Account Name is Required');
            return;
        }            
        if($A.util.isEmpty(acc.type) || $A.util.isUndefined(acc.type)){
            alert('Type is Rqquired');
            return;
        }
        if($A.util.isEmpty(acc.rating) || $A.util.isUndefined(acc.rating)){
            alert('Rating is Required');
            return;
        }
        if($A.util.isEmpty(acc.phone) || $A.util.isUndefined(acc.phone)){
            alert('Phone is Required');
            return;
        }
        if($A.util.isEmpty(acc.Description) || $A.util.isUndefined(acc.description)){
            alert('Description is Required');
            return;
        }    
        
       //Calling the Apex Function
        var action = component.get("c.createRecord");
        
        //Setting the Apex Parameter
        action.setParams({
            acc : acc
        });
        
        //Setting the Callback
        action.setCallback(this,function(a){
            //get the response state
            var state = a.getState();
            
            //check if result is successfull
            if(state == "SUCCESS"){
                //Reset Form
                var newacc = {'sobjectType': 'Account',
                                    'Name': '',
                                    'Type': '',
                                    'Rating': '', 
                                    'Phone': '',
                              		'Description': ''   
                                   };
                //resetting the Values in the form
                component.set("v.acc",newAcc);
                alert('Record is Created Successfully');
            } else if(state == "ERROR"){
                alert('Error in calling server side action');
            }
        });  
        
        //adds the server-side action to the queue        
        $A.enqueueAction(action);    
	}
})