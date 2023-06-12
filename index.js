const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  const welcomeMessage = `182 Main St.
You are standing on Main Street between Church and South Winooski.
There is a door here. A keypad sits on the handle.
On the door is a handwritten sign.\n`;
  let answer = await ask(welcomeMessage);
  console.log('Now write your code to make this work!');
  process.exit();
}
//! Turn this into bite size chunks and just put in the time

//todo SNOWMAN = MULTIPLE SNOW BALLS

//!Don't worry about simplification or complexity (minimal viable product)

//?   Tu l'as!!! Optimisme est le premier regle

//maybe hand draw a wire frame to help conceptualize everything //!check
// I need a state for all the rooms to be in //!check
//each class should be a name of an item in the state to do the following:
//into an inventory, a description, and a connection //!check, not, check
//player location //!Check need to display w/ command
//create a read function
//create a take function //! Check
//create a drop function //! Check
//create a keypad function and a class to go with

//! Room Changing Functions
let Rooms = {
  firstRoom:["secondRoom", "fourthRoom"],
  secondRoom:["firstRoom","thirdRoom","fifthRoom"],
  thirdRoom:["secondRoom","sixthRoom"],
  fourthRoom:["firstRoom", "fifthRoom"],
  fifthRoom:["secondRoom", "fourthRoom"],
  sixthRoom:["thirdRoom"],
  escapeHatch:["sixthRoom"]
}
let currentRoom = "firstRoom";
function roomChanger(newRoom){
  let validTransition= Rooms[currentRoom]
  if (validTransition.includes(newRoom)){
    currentRoom = newRoom
    console.log(`You have entered ${currentRoom}`)//todo change into running root function
  }
}
let playerLocation = currentRoom;
  //!Room Changing Functions


//! Item Functions/Works

let charInventory = [];
//Room-based item inventories
firstRoomItemArray=["jagged-note"]; //puzzle item is behind main sign
secondRoomItemArray=["butcher's-knife"];//puzzle item is a number inscribed on the handle
thirdRoomItemArray=["hint-note"]; //puzzle number is found from reading the hint and using the room description to spell out the word
fourthRoomItemArray=[];
fifthRoomItemArray=[];
sixthRoomItemArray=[];



function itemCollection(item){
  if (!firstRoomItemArray.includes(item) && !secondRoomItemArray.includes(item) && !thirdRoomItemArray.includes(item) && !fourthRoomItemArray.includes(item) && !fifthRoomItemArray.includes(item)){
    console.log(`The ${item} does not exist`)
  } else{
    if(playerLocation=Rooms.firstRoom && firstRoomItemArray.includes(item)){
      charInventory.push(item)
      firstRoomItemArray.splice([item],1)
    } else if(playerLocation=Rooms.secondRoom && secondRoomItemArray.includes(item)){
      charInventory.push(item)
      secondRoomItemArray.splice([item],1)
    } else if(playerLocation=Rooms.thirdRoomRoom && thirdRoomItemArray.includes(item)){
      charInventory.push(item)
      thirdRoomItemArray.splice([item],1)
    } else if(playerLocation=Rooms.fourthRoom && fourthRoomItemArray.includes(item)){
      charInventory.push(item)
      fourthRoomItemArray.splice([item],1)
    } else if(playerLocation=Rooms.fifthRoom && fifthRoomItemArray.includes(item)){
      charInventory.push(item)
      fifthRoomItemArray.splice([item],1)
    } else if(playerLocation=Rooms.sixthRoom && sixthRoomItemArray.includes(item)){
      charInventory.push(item)
      sixthRoomItemArray.splice([item],1)
    } else {
      console.log(`${item} is not in this room`)
    }
  }
}
function itemDroppage(item){
  if(playerLocation=firstRoom){
    firstRoomItemArray.push(item)
    charInventory.splice([item],1)
  } else if(playerLocation=secondRoom){
    secondRoomItemArray.push(item)
    charInventory.splice([item],1)
  } else if(playerLocation=thirdRoom){
    thirdRoomItemArray.push(item)
    charInventory.splice([item],1)
  } else if(playerLocation=fourthRoom){
    fourthRoomItemArray.push(item)
    charInventory.splice([item],1)
  } else if(playerLocation=fifthRoom){
    fifthRoomItemArray.push(item)
    charInventory.splice([item],1)
  } else {
    sixthRoomItemArray.push(item)
    charInventory.splice([item],1)
  } 
}
function seeCharacterInventory(){
  console.log(charInventory)
}
function readItem(item){
  if(e){}
}
//! Item Functions/ Works

seeCharacterInventory()