/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/**
 * Justin Committe
 * March25
 * goal7
 */

(function(){
    //add object to global window object so that main.js can use it
    window.Person=Person;

    //defines jobs and actions that can be selected
    Person.jobs = ['Driver', 'singer', 'photographer', 'assistant','teacher'];
    Person.actions = ['sleep', 'working', 'eating'];

    //function created to cycle through actions, names and jobs so they are all random
    function Person(name, row){
        this.name = name;
        //sets initial action for each person randomly
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //creates and sets job per person randomly
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //define row so that js knows what row to update in html
        this.row = row;

        //variable called id that will add this.row to the proper position
        var id = document.getElementById('r'+this.row+'c3');

        //display initial action
        id.innerHTML = this.action;
    }

    //Prototype runs and randomizes actions, at a set interval
    Person.prototype.updates = function(){
        //if(Math.floor(Math.random() < .01)){
            var i = Math.floor(Math.random()* Person.actions.length);
            this.action = Person.actions[i];
            var id = document.getElementById('r'+this.row+'c3');
            id.innerHTML = this.action;
        //}
    }








})();