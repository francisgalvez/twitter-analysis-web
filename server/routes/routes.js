var ctrlAuth = require('../controllers/auth');
module.exports = (app, passport) => {
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.get('/about', function(req, res){
        res.render('about');
    });
    
    app.get('/apidocs', function(req, res){
        res.render('api');
    });
    
    app.get('/auth', isAlreadyLoggedIn, function(req, res){
        res.render('login', {
            message: req.flash('loginMessage')
        });
    });

    app.post('/auth/signup', ctrlAuth.signup);
    app.post('/auth/login', passport.authenticate('local-login', {
		successRedirect: '/dashboard',
		failureRedirect: '/auth',
		failureFlash: true
    }));

    app.post('/dashboard/changePassword', function(req, res, next){
        console.log(req.body.password);
        var user = req.user;

        user.password = req.body.password;

        user.save(function(err){
            if(err) {console.log(err)}
            else {
                res.redirect('/dashboard');
            }
        })
    });

    app.get('/dashboard', isLoggedIn, (req, res) => {
        res.render('dashboard', {
            user: req.user
        });
    });
    
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}

function isAlreadyLoggedIn (req, res, next) {
	if (!req.isAuthenticated()) {
		return next();
	}
	res.redirect('/dashboard');
}