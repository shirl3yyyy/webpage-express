function workinghours(req,res,next){
    const now = new Date();
    const day = now.getDay(); // (0 is Sunday
    const hour = now.getHours();

    if (day >=1 && day <=5 && hour >=9 && hour <17){
        next();
    }else{
        res.send('<h1>We are closed. Our working hours are Monday to Friday, 9 AM to 5 PM.</h1>');
    }
}

module.exports = workinghours;