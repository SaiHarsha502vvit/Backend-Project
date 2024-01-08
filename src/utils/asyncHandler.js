/*
    There are 2 ways to implement asyncHandler 
    1. Using Try catch 
    2. Promises

*/

/* 

    const express = require('express');
const app = express();
const port = 3000;

// Define an asynchronous request handler
const asyncRequestHandler = async (req, res, next) => {
    // Simulate an asynchronous operation (e.g., querying a database or making an API call)
    setTimeout(() => {
        // Assuming an error occurs during the asynchronous operation
        next(new Error('Simulated error'));
    }, 1000);
};

// Create the asyncHandler middleware
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => {
            next(err);
        });
    };
};

// Use the asyncHandler middleware for the asyncRequestHandler
app.get('/', asyncHandler(asyncRequestHandler));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the Express app
app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});


    Example code for Understanding puropse 
    here How asyncHandler gets executed 

    1. app.get('/', asyncHandler(asyncRequestHandler));
         is called now 
         the function asyncRequestHandler is passed as a parameter
         that doesnt mean it executes right after passing as a paramter 
         asyncHandler is a Higher-Order Function it Takes a function as a paramter
         and inside the asyncHandler we can call it any time 
         it means that ....

    2. (req,res,next) are parameter that are we passed as objects for the middleware and 
       next para is for (middleware purpose)

    3. Generally How a middleware looks like is 
        const middleware2 = (req, res, next) => {
             console.log('Middleware 2');
             next();
        };

        So we cannot use any function call as we cannot pass function 
        as the standard is (err, req, res, next) 
        so we use this approach 
        const asyncHandler = (func)=>{ 
                                    async () =>{
                                        func('hello')
                                    } 
                                }
        Here we used func inside asyncHandler .... which is a middleware 


    4. Here calling asyncHandler and then going into 
       inside middleware (err,req,res,next) and 
       then inside Promise asyncRequestHandler middleware function is Executed 
       and then we thrown an error that is new Error('Simulated error')
       which doesn't  stop it from execution instead that error is added into 
       a Stack which is ----> err.stack <----
       then we can set 
       console.log(err.stack);
       res.status(500).send('Something went wrong!'); 
       
*/

const asyncHandler = (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>{
             next(err)
        })
    }
}
export { asyncHandler };




// const asyncHandler = () => {} 
// const asyncHandler = (func) => () => {}
/* const asyncHandler = (func)=>{ 
                                    async () =>{
                                        func('hello')
                                    } 
                                }
*/
/*

    asyncHandler Using Try Catch Format

const asyncHandler = (func) => async (req,res,next) => {
    try {
    await func(req,res,next)
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }
}
*/