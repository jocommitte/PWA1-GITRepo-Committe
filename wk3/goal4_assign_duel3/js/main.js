/**
Justin Committe
 March 15, 2015
 Assignment 2
 */

// This is my self executing function
(function(){


//dom pieces
    var homer_txt = document.getElementById('homer').querySelector('p');//declares homers text and finds paragraph in id homer
    var peter_txt = document.getElementById('peter').querySelector('p');//declares peters text and finds paragraph in id peter
    var round_txt = document.getElementById('round');//variable to control the round numbers
    var button = document.getElementById('fight_btn');//button variable
    var result_txt = document.getElementById('result').querySelector('p');//variable for result_txt

    //event listener on button and runs function fight
    button.addEventListener('click', fight, false);

    var fighters = [ //array of player objects
        //First player
        {
            name: 'homer', //fighter one's name and damage and overall health
            damage: 15,
            health: 100
        },
        //second player
        {
        name: 'peter',  //fighter two's name and damage and overall health
        damage: 15,
        health: 100
        }]//this is my array for peter
    //Round starting at index 0
    var round = 0;
    peter_txt.innerHTML = fighters[1].name +': '+ fighters[1].health;//setting peter html to his name and health
    homer_txt.innerHTML = fighters[0].name +': '+ fighters[0].health;//setting homer html to his name and health
    round_txt.innerHTML = 'press fight button to start';//setting round text to round and converting the number to a string
    function fight(){//this is my fight function containing all the fight code
        //alert(fighters[0].name + ":" + fighters[0].health + "  *START*   " + fighters[1].name + ":" + fighters[1].health);//alert box that starts the for loop and thus the fight
        round++
        round_txt.innerHTML = 'round: ' +String(round);//setting round text to round and converting the number to a string

        var homerMinDam = fighters[0].damage *.5;//player one minimum damage is half of his damage
            var peterMinDam = fighters[1].damage *.5;//player two minimum damage is half of his total damage
            var peterShot = Math.floor(Math.random()*(fighters[0].damage - homerMinDam) + homerMinDam);//This is one of peter's shots taking a random number between maximum damage and minimum damage
            var homerShot = Math.floor(Math.random()*(fighters[1].damage - peterMinDam) + peterMinDam);//one of homer's shots doing the same

            //now we will inflict the damage
            fighters[0].health = fighters[0].health - peterShot;//each shot homer's health goes down by the amount of peter's random shot
            fighters[1].health = fighters[1].health - homerShot;//each shot peter's health goes down by the amount of homer's random shot

            //console out the new Health's
           // console.log(fighters[0].name + ": " + fighters[0].health + " " + fighters[1].name + ": " + fighters[1].health);//new health each round
            peter_txt.innerHTML = fighters[1].name +': '+ fighters[1].health;//changing the peter text on html
            homer_txt.innerHTML = fighters[0].name +': '+ fighters[0].health;//changing homer text on html
            //check to see if there is a winner
            var result = winnerCheck(); //make a variable to hold the winner check function

            if( result === "no winner"){//if the function returns no winner
                //run this code
                //round++;//add one to the round so we can progress
                //round++;
                result_txt.innerHTML = '';//making the result box empty
                //alert( fighters[0].name + ": " + fighters[0].health + "  *ROUND " + i + " Over*" + fighters[1].name + ": " + fighters[1].health);//tells user the name's their health and the round as it progresses i used for round
            }else{//if the result isn't no winner run this code
               peter_txt.innerHTML = ' ';//set peter text to nothing
                homer_txt.innerHTML = ' ';//set homer txt to nothing
                result_txt.style.margin.left = '50%';//increasing left margin of result txt
                result_txt.innerHTML = result;//put results in the result texts place
                round_txt.innerHTML = 'Fight Over';//set round text to fight over
            }

    }
    function winnerCheck(){//my function for what is printed every round and to see if health is less than one
         var result = "no winner";//this is is string for if there is no winner
        if(fighters[0].health < 1 && fighters[1].health < 1){//if both players health is below one then run this code
            result = 'Both are dead';//comes back if both are less than one
        }else if(fighters[0].health <1){//or if homer's health is less than one run this
            result = fighters[1].name + " Wins!!";//result = player twos name plus wins
        }else if(fighters[1].health < 1){//or if peter's health is less than one
            result = fighters[0].name + " Wins!!";//result equals player ones name plus wins
        }
        return result;//return the results of these if else statements
    }
    //now we start the program by calling the fight function
})();