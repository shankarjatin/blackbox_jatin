const User = require("./../models/user");

exports.check_login = (req, res, next)=>{
	if(req.isAuthenticated()){
		next();
	}else{
		res.redirect("/");
	}
}
