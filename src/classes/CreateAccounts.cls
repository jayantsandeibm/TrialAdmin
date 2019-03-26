/************************************************************
 Purpose: Apex Class  for  lightning component CreateAccountController.cmp
 ***********************************************************/
public with sharing class CreateAccounts {

  /**
   * Create a new account Record
   *   @param Account acc record to be inserted
   */
    @AuraEnabled
    public static void createRecord (Account acc){
        
        try{
            System.debug('CreateaccRecord::createRecord::acc'+acc);
            
            if(acc != null){
                insert acc;
            }
            
        } catch (Exception ex){
        }//End Try Catch
        
    }//End Class    
}