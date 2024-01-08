/*
    There are 2 ways to implement asyncHandler 
    1. Using Try catch 
    2. Promises

*/

const asyncHandler = (requestHandler) => {
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>
            next(err))
    }
}

export {asyncHandler}

// const asyncHandler = () => {} 
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func)=> async() =>{}

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