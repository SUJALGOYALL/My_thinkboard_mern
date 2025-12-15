import ratelimit from "../config/upstash.js";


const rateLimter = async(req , res , next)=>{
    // we usually use user id or ip address to limit the requests
    try {
        const {success} = await ratelimit.limit("my-rate-limit")
        if(!success){
            return res.status(429).json({message : "Too many requests , please try again later"})
        }
        next();
    } catch (error) {
        console.log("rate limit error", error);
        next(error);
    }
};

export default rateLimter;