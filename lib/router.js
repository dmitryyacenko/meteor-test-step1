import { Articles } from "./collections";

Router.route('/', {
    action: function () {
        this.layout('LandingLayout');
        this.render('LandingTemplate');
    }
});


Router.route('/login', {
    action: function () {
        if(Meteor.userId()){
            this.redirect('/list');
            return false;
        }
        this.layout('LandingLayout');
        this.render('LoginTemplate');
    }
});

Router.route('/list', {
    action: function () {
        if(!Meteor.userId()){
            this.redirect('/login');
            return false;
        }
        this.layout('MainLayout');
        this.render('ListTemplate', {
            data:{
                articles: Articles.find()
            }
        });
    }
});
