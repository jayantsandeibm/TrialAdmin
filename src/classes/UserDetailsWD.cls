Public class UserDetailsWD{

private final User userrecord;
public String lastName = 'enter last name';
public String username ='';

public UserDetailsWD()
{
 lastName ='';
username='';
}

public UserDetailsWD(ApexPages.StandardController stdController)
{
userrecord = (user)stdController.getRecord();
}

}