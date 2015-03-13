/**
Justin Committe
 March 7, 2015
 Assignment 1
 */

// This is my self executing function
(function(){

    console.log("Fight")//Print out Fight when the program starts

    // My player names
    //var homer = "Homer";
    //var peter = "Peter";
    //
    ////This represents my players damage
    //var homerDamage = 15;
    //var peterDamage = 15;
    //
    ////This is my players health
    //var homerHealth = 100;
    //var peterHealth = 100;
    var homer = ['homer',15, 100];
    var peter = ['peter',15,100];
    //Round starting at index 0
    var round = 0;

    function fight(){//this is my fight function containing all the fight code
        alert(homer[0] + ":" + homer[2] + "  *START*   " + peter[0] + ":" + peter[2]);//alert box that starts the for loop and thus the fight
        for (var i = 1; i < 11; i++){//for loop that counts up to ten meaning there are ten total rounds

            var homerMinDam = homer[1] *.5;//player one minimum damage is half of his damage
            var peterMinDam = peter[1] *.5;//player two minimum damage is half of his total damage
            var peterShot = Math.floor(Math.random()*(homer[1] - homerMinDam) + homerMinDam);//This is one of peter's shots taking a random number between maximum damage and minimum damage
            var homerShot = Math.floor(Math.random()*(peter[1] - peterMinDam) + peterMinDam);//one of homer's shots doing the same

            //now we will inflict the damage
            homer[2] = homer[2] - peterShot;//each shot homer's health goes down by the amount of peter's random shot
            peter[2] = peter[2] - homerShot;//each shot peter's health goes down by the amount of homer's random shot

            //console out the new Health's
            console.log(homer[0] + ": " + homer[2] + " " + peter[0] + ": " + peter[2]);//new health each round

            //check to see if there is a winner
            var result = winnerCheck(); //make a variable to hold the winner check function
            console.log(result);//print out the results

            if( result === "no winner"){//if the function returns no winner
                //run this code
                //round++;//add one to the round so we can progress
                alert( homer[0] + ": " + homer[2] + "  *ROUND " + i + " Over*" + peter[0] + ": " + peter[2]);//tells user the name's their health and the round as it progresses i used for round

            }else{//if the result isn't no winner run this code
                alert(result);//alert out the results
                break;//use this to jump out if there is a winner
            }

        }


    }
    function winnerCheck(){//my function for what is printed every round and to see if health is less than one
         var result = "no winner";//this is is string for if there is no winner
        if(homer[2] < 1 && peter[2] < 1){//if both players health is below one then run this code
            result = 'Both are dead';//comes back if both are less than one
        }else if(homer[2] <1){//or if homer's health is less than one run this
            result = peter[0] + " Wins!!";//result = player twos name plus wins
        }else if(peter[2] < 1){//or if peter's health is less than one
            result = homer[0] + " Wins!!";//result equals player ones name plus wins
        }
        return result;//return the results of these if else statements
    }
    //now we start the program by calling the fight function
    fight();
})();