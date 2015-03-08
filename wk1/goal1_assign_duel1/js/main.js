/**
Justin Committe
 March 7, 2015
 Assignment 1
 */

// This is my self executing function
(function(){

    console.log("Fight")//Print out Fight when the program starts

    // My player names
    var homer = "Homer";
    var peter = "Peter";

    //This represents my players damage
    var homerDamage = 25;
    var peterDamage = 25;

    //This is my players health
    var homerHealth = 100;
    var peterHealth = 100;

    //Round starting at index 0
    var round = 0;

    function fight(){//this is my fight function containing all the fight code
        alert(homer + ":" + homerHealth + "  *START*   " + peter + ":" + peterHealth);//alert box that starts the for loop and thus the fight
        for (var i = 0; i < 10; i++){//for loop that counts up to ten meaning there are ten total rounds

            var homerMinDam = homerDamage *.5;//player one minimum damage is half of his damage
            var peterMinDam = peterDamage *.5;//player two minimum damage is half of his total damage
            var peterShot = Math.floor(Math.random()*(homerDamage - homerMinDam) + homerMinDam);//This is one of peter's shots taking a random number between maximum damage and minimum damage
            var homerShot = Math.floor(Math.random()*(peterDamage - peterMinDam) + peterMinDam);//one of homer's shots doing the same

            //now we will inflict the damage
            homerHealth = homerHealth - peterShot;//each shot homer's health goes down by the amount of peter's random shot
            peterHealth = peterHealth - homerShot;//each shot peter's health goes down by the amount of homer's random shot

            //console out the new Health's
            console.log(homer + ": " + homerHealth + "")

        }


    }

})();