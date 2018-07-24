let config = {
	cookieParserSecret: "<SECRET>", // secret for cookie parser
    JWTsecret: "<SECRET>", // secret for JWT 
    nodemailerEmail:"<YOUR@EMAIL.CLIENT>", // your email client
    nodemailerPw:"<EMAILCLIENTPASSWORD>", // your email password client
    smtp:"<YOUREMAILSMTP>", // i.e 'smtp.domain.com'
    mongoUsername:"<mongo username>", // if you have your db
    mongoPw:"<mongo pw>" // if you have your db
};


module.exports = config