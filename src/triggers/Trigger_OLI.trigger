trigger Trigger_OLI on OpportunityLineItem (after delete) {
if(Trigger.isAfter)
{
  if(Trigger.isDelete)
  {
   for(OpportunityLineItem oli :Trigger.old)
   {
    System.debug('Deleted with order ' + oli.SortOrder + ' ID ' + oli.ID  + ' service date ' + oli.ServiceDate + ' Desc '+ oli.description);
   } 
  
  }
}

}