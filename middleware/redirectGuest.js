
module.exports = (req, res, next) => {
   if(!req.user){
      res.redirect('/login');
      return;
   }

   next();
}