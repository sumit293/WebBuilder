export const getCurrentUser=async(req,res)=>{
    try {
        if(!req.user){
            return res.status(401).json({message:"Unauthorized! User not found"})
        }
        return res.json(req.user)
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error", error:error.message})
    }
}