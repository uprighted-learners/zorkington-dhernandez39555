const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


start();

async function start() {
  const welcomeMessage = `Welcome to my personal hell!\n***How to Play***\nUpon entering a room, you will be provided a description of that room, AS IF YOU WERE STANDING IN THE MIDDLE OF IT AND FACING NORTH.\nWithin each description, there will be some words in [].\nThese words mark items that can be interacted with when placed after a command keyword (i.e [book]).\nAll available command keywords can be found at the end of each description and signify an action (i.e [read]).\nMake sure to input these as you see them or the game will not understand (i.e read book).\nNOTE: some items can be read once collected so make sure to try and read them.\nYour objective is to discover and arrange the numbers hidden throughout the building in order to unlock the final door, and escape.\nEnter anything below to begin, and good luck!\n> `;
  await ask(welcomeMessage);
  //! Room Changing Functions Below
  //asterisks are in place to set character length of each room to increment by one, see line 121 for the rest of the dynamic room index setup in order to properly read the descriptions
  let Rooms = {
    firstRoom:["secondRoom", "fourthRoom**"],
    secondRoom:["firstRoom","thirdRoom**"],
    thirdRoom:["secondRoom", "fifthRoom****"],
    fourthRoom:["firstRoom"],
    fifthRoom:["thirdRoom**"],
    escapeHatch:["fourthRoom**"]
  }
  let playerLocation = "firstRoom"
  function roomChanger(newRoom){
    let validTransition= Rooms[playerLocation]
    if (validTransition.includes(newRoom)){
      playerLocation= newRoom
    }else{ //this is here for redundancy only
      console.log("That room is not connected through this door")
    }
    game()
  }
  
  //!Room Changing Functions Above
  //! Item Functions/Works Below
  //Room-based item inventories
  let firstRoomItemArray=["surprise"];
  let secondRoomItemArray=["knife"];
  let thirdRoomItemArray=[];
  let fourthRoomItemArray=[]; 
  let fifthRoomItemArray=["speech", "water-bottle"];

  function itemCollection(item){
    console.log(playerLocation)
    if (!firstRoomItemArray.includes(item) && !secondRoomItemArray.includes(item) && !thirdRoomItemArray.includes(item) && !fourthRoomItemArray.includes(item) && !fifthRoomItemArray.includes(item)){
      console.log(`The ${item} does not exist`)
    } else{
      if(playerLocation="firstRoom" && firstRoomItemArray.includes(item)){
        let idx=firstRoomItemArray.indexOf(item)
        charInventory.push(item)
        playerLocation="firstRoom" //here to prevent type coercion manually bc I cannot figure out why it coerces
        firstRoomItemArray.splice(idx,1)
        console.log(`You have picked up the ${item}`)
      } else if(playerLocation="secondRoom" && secondRoomItemArray.includes(item)){
        let idx=secondRoomItemArray.indexOf(item)
        charInventory.push(item)
        playerLocation="secondRoom" //here to prevent type coercion manually bc I cannot figure out why it coerces
        secondRoomItemArray.splice(idx,1)
        console.log(`You have picked up the ${item}`)
      } else if(playerLocation="thirdRoom**" && thirdRoomItemArray.includes(item)){
        let idx=thirdRoomItemArray.indexOf(item)
        charInventory.push(item)
        playerLocation="thirdRoom**" //here to prevent type coercion manually bc I cannot figure out why it coerces
        thirdRoomItemArray.splice(idx,1)
        console.log(`You have picked up the ${item}`)
      } else if(playerLocation="fourthRoom**" && fourthRoomItemArray.includes(item)){
        let idx=fourthRoomItemArray.indexOf(item)
        charInventory.push(item)
        playerLocation="fourthRoom**" //here to prevent type coercion manually bc I cannot figure out why it coerces
        fourthRoomItemArray.splice(idx,1)
        console.log(`You have picked up the ${item}`)
      } else if(playerLocation="fifthRoom****" && fifthRoomItemArray.includes(item)){
        let idx=fifthRoomItemArray.indexOf(item)
        charInventory.push(item)
        playerLocation="fifthRoom****"
        fifthRoomItemArray.splice(idx,1)
        console.log(`You have picked up the ${item}`)
      } else {
        console.log(`${item} is not a takeable item in this room`)
      } game()
    } 
  }
  function itemDroppage(item){
    if(playerLocation=="firstRoom"){
      let idx=charInventory.indexOf(item)
      firstRoomItemArray.push(item)
      charInventory.splice(idx,1)
    } else if(playerLocation=="secondRoom"){
      let idx=charInventory.indexOf(item)
      secondRoomItemArray.push(item)
      charInventory.splice(idx,1)
    } else if(playerLocation=="thirdRoom**"){
      let idx=charInventory.indexOf(item)
      thirdRoomItemArray.push(item)
      charInventory.splice(idx,1)
    } else if(playerLocation=="fourthRoom**"){
      let idx=charInventory.indexOf(item)
      fourthRoomItemArray.push(item)
      charInventory.splice(idx,1)
    } else {
      let idx=charInventory.indexOf(item)
      fifthRoomItemArray.push(item)
      charInventory.splice(idx,1)
    } game()
  }
  let charInventory = []; //! For your dignity, guess what this variable is for...
  function seeCharacterInventory(){
    console.log("================================")
    console.log(`Your inventory: ${charInventory}`)
    console.log("================================")
    game()
  }
  function readItem(item){
    if(charInventory.includes(item) && item ==="surprise"){
      console.log("============================================")
      console.log("The note reads:'I am one more than the last and 3 less than the second.' ")
    } else if (charInventory.includes(item) && item ==="knife"){
      console.log("============================================")
      console.log("The knife displays a '4', engraved on the left side of its maroon handle,\n and 'Last' upon both sides of its shining blade.")
    } else if (charInventory.includes(item) && item ==="sheet"){
      console.log("============================================")
      console.log("The title of this piece is 'I have become Last, plus 3'.\n This piece appears to be an ode to one Mr. James Last, told through one of his adopted triplet sons.")
    } else if (playerLocation=="firstRoom" && item==="sign") {
      console.log("============================================")
      console.log("Welcome to something I've put together just for you!\n I've placed you inside a little puzzle of sorts, and I've scattered about some numbers.\n To help you on your journey, I have placed one off to the left, behind this very sign!\n Do make sure you [take] my [surprise], it will most assuredly come in handy!\n")
    } else if(playerLocation=="thirdRoom**" && item==="placard"){
      console.log("============================================")
      console.log("The placard reads In All Things, I am Three -Mme. Drei Trzy")
    } else if(charInventory.includes(item) && item==="speech"){
      console.log("============================================")
      console.log("This speech is titled: `All 7's: Sending Me To The Heavens`.\nThis speech, written by one Mr. Seconde T.O. Last, is about how gambling became prevalent in everyday society and how it will eventually cause the extinction of free-thinking consumers.")
    } else {
      console.log(`This is a(n) ${item}, there is nothing to read on it.`)
    } game()
  }
  //! Item Functions/ Works Above
  function game(){
     //below is setup for dynamic room description
    let i=playerLocation.length-9
  
    let roomDescription = [
    "You have entered a room that is rather damp and dark. In this room is a [red-door] to the right,\na [black-door] to the left, and a [sign] on the wall between them.\n [enter] [take] [read] [drop] [see inventory]\n>",
    "You have entered a kitchen of sorts. Each counter is miraculously clean and empty.\nThe cabinets all appear to be locked. The only object of note is a [knife], stuck into a chopping block upon the center island.\nTo the right is a [blue-door] and directly behind is a [green-door]\n [enter] [take] [read] [drop] [see inventory]\n>",
    "You enter a room with a sole painting and a [placard] below\nThe painting displays an analog clock, with a child in place of second hand,\na man in place of the minute hand,\nand a coffin in place of the hour hand,\nthe time on the clock is 3:33 with 33 seconds\nOpposite the painting is a [black-door]. To the left of the painting is a [yellow-door]\n [enter] [take] [read] [drop] [see inventory]\n>",
    "You have entered a room adorn with skulls across the entire room, in the center of the room is a [hatch] marked 'Выход'\n [enter] [take] [read] [drop] [see inventory]\n>",
    "You have entered a room that appears to be a small concert hall.\nThis room is decorated with long, red, satin curtains, bright purple chairs, and bright yellow walls.\nOn stage is a single spotlight, cast upon a single podium with a [water-bottle] and a [speech] upon it.\nOpposite the stage is a [green-door].\n [enter] [take] [read] [drop] [see inventory]\n>"]
    //above is setup for dynamic room description
    console.log("==============================")
    rl.question(roomDescription[i], (answer)=>{
      let answerArray = answer.split(" ")
      let command = answerArray[0]
      let item = answerArray[1]
      if (command== "take"){
        itemCollection(item)
      } else if (command=="drop"){
        itemDroppage(item)
      } else if (command=="read"){
        readItem(item)
      } else if (command=="see" && item=="inventory"){
        seeCharacterInventory()
      } else if (command=="enter"){
        if(playerLocation!="firstRoom" && item=="blue-door"){
          roomChanger("firstRoom")
        } else if(playerLocation!="secondRoom" && item=="black-door"){
          roomChanger("secondRoom")
        } else if(playerLocation!="thirdRoom**" && item=="green-door"){
          roomChanger("thirdRoom**")
        } else if (playerLocation!="fourthRoom**" && item=="red-door"){
          rl.question("Enter passcode\n", (combo)=>{
            if (combo=="58374"){
              console.log("Passcode Accepted: Door Unlocked")
              roomChanger("fourthRoom**")
            } else {
              console.log("Incorrect!")
              game()
            }
          })
        }else if(playerLocation!="fifthRoom****" && item=="yellow-door"){
          roomChanger("fifthRoom****")
        } else if (playerLocation="fourthRoom**" && item=="hatch"){
          console.log("Congratulations, you have escaped the puzzle! One piece of advice for the future:\n Do avoid getting knocked out and placed in someone's puzzle room!\nThanks for playing!!!");
          process.exit()
        } else {
          console.log("That is not a door in this room.")
          game()
        }
      } else {
        console.log(`${command} is not a valid command`)
        game()
      }
    })
  }
  game()
}