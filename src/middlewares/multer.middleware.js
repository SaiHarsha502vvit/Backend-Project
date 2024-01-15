import multer from "multer"

const storage= multer.diskStorage(  
    /* 
        Storing the File in Our Local Server
        By Invoking a Function 
        multer.diskStorage
        Where We pass a Object 
        in Which we have 
        2 properities called 
        1.destination --> Where the Temporary store the file which came from FrontEnd or Client 
                          Generally we dont not get Response in the form of file 
                          it Just comes in Url 
                          but by using the multer we can also get the File of any format 
                          That is why we use multer 
                          So in destination is like 
                          function(req,file,cb){
                                    cb(null,"./public/temp")
                          }
                          where we pass req,file,cb where cb is short form of CallBack function
                          here in callback pass null,place where we store the file in server
        2.filename --> Here we keep the file name as it is Just for simplicity 
        
    */
    {
        destination: function(req,file,cb){
            cb(null,"./public/temp")
        },
        filename: function(req,file,cd){
            cb(null,file.originalname)
        }
    }
)

export const upload=multer(
    {
        storage, // ES6 feature similar to storage:storage
    }
)