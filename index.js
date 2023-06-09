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

//maybe hand draw a wire frame to help conceptualize everything
// I need a state for all the rooms to be in
//each class should be a name of an item in the state to do the following:
//into an inventory, a description, and a connection
//a player state, with an updatable array and a status 
//status= location?
//create a read function
//create a take function
//create a drop function
//create a keypad function and a class to go with

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
    console.log(`You have entered ${currentRoom}`)
  }
}

class takeableItems {
  constructor(isTakeable,isInRoom,){
    this.isTakeable=isTakeable
    this.isInRoom=isInRoom
  }
}

let charInventory = [];
let playerLocation = currentRoom;
let globalItemArray = ["Knife"]

function collectItem(item){
  if(globalItemArray.includes(item)){
    if(item.isTakeable && item.isInRoom){
      charInventory.push()
      return `You have taken the ${item}`
    } else if (item.isTakeable && !item.isInRoom){
      return `${item} is not in this room`
    } else if (item.isInRoom && !item.isTakeable){
      return `${item} is not able to be taken`
    } else {
      return `${item} does not exist `
    }
  } else {
    return `${item} does not exist `
  }
}

function displayInventory(){
  console.log(charInventory)
}
roomChanger("secondRoom")