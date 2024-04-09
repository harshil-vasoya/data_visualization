const mongoose = require("mongoose");
mongoose.set("strictQuery", true);




exports.connect = (callback) =>{
	var connectionString = process.env.CONNECTION_STRING;
	var connectionStringAtlas = process.env.CONNECTION_STRING_ATLAS;
	
	mongoose.connect(connectionStringAtlas).then(()=>{
			console.log(
				"\x1b[32m\b%s\x1b[36m\x1b[1m%s\x1b[0m\n",
				"Database has been connected",
				);
		

		if(callback)callback();
		
	}).catch((error)=>{
		console.log("\x1b[41m","database connection faild.","\x1b[0m"+"\n");
		console.log(error);
		process.exit(1);	
	})
}
