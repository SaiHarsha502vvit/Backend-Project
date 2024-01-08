/*
    Here we use this class to 
    Send ApiResponse in a Particular Way 

    Here there are Three things to deal with in response 
    as this is our Custome ApiResponse 
    we included that 3 things 
    they are 
    1.statusCode
        1. Informational responses ( 100- 199)
        2. Successful responses ( 200- 299)
        3. Redirection messages ( 300- 399 )
        4. Client error responses ( 400- 499 )
        5. Server error responses ( 500 - 599 )
        generally they come to use 
    2.data comes to us
    3.message we keep it Success by default --> it is called as default parameter
      and then setting those values into 
      Class variables 

*/

class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400
    }
}


/* 
 
*/  
    
   