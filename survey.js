const readline = require('readline');
const person = {};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable :)', (name) =>{
  person.name = name
  rl.question('What\'s an activity you like doing?', (activity) => {
 
    person.activity = activity;
    rl.question('What do you listen to while doing that?', (listen) => {
      person.listen = listen;
      person.activity = activity;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (favouriteMeal) => {
      person.favouriteMeal = favouriteMeal;
      
      rl.question('What\'s your favourite thing to eat for that meal?', (favouriteThingToEatMeal) => {
        person.favouriteThingToEatMeal = favouriteThingToEatMeal;
       
        rl.question('Which sport is your absolute favourite?', 
        (favouriteSport) => {
          person.favouriteSport = favouriteSport;
         
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', 
          (amazingAt) => {
          person.amazingAt = amazingAt;
          console.log(person);
          rl.close();
       
          });
       
          });
     
        });
   
      });
    });
    
   
  });
 

  

 
});

