import './login.html';


Template.LoginTemplate.events({
    'submit .login-form': function (event) {
        event.preventDefault();
        Meteor.loginWithPassword(event.target.login.value, event.target.password.value, function (err) {
           if(err){
               sAlert.error(`Ошибка входа: ${err.reason}` );
               return false;
           }
           Router.go('/list');
        });
    }
})
