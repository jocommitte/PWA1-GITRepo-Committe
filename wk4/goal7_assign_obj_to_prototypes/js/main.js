/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/**
 justin Committe
 March 25
 Goal 7
 **/

(function(){

    //Define variables
    var numOfPeople = 3;// variable for three people to show on the html page
    var people = [];//array for making sure the same people don't come up twice
    var names = ['Justin', 'Jen', 'jason','jeremy','josh'];//list of names that will be displayed under names
    //for loop to account for three people

       for (var i = 0; i < numOfPeople; i++) {
           //generate a number up to the length of 5
           var personIndex = Math.floor(Math.random() * names.length);

           //set up a new person object
           var person = new Person(names[personIndex], i + 1);

           //populate the html

               populateHTML(person.name, 'r' + (i + 1) + 'c1');
               populateHTML(person.job, 'r' + (i + 1) + 'c2');

               //pushes names out and cuts index down by one
               people.push(person);
               names.splice(personIndex, 1);//cuts index down by one
           }
    setInterval(runUpdate, 10000/3);//setting an interval and calling runUpdate function 30 times a second

    function runUpdate(){
        people.forEach(function (people) {//run update function saying for each person update
            people.updates();
        })
    }

    //resets interval so only one runs at a  time
    //function used to populate information into th date field of the html page
    function populateHTML(data,field){
        var id = document.getElementById(field);//getting the field from html and setting it to data
        id.innerHTML = data;
    }





})();
