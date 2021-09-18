function setupConversation(world, worldState, name) {
  console.log("start conversation: " + worldState.utilityDock4.conversations.ele.current);
  worldState.utilityDock4.conversations.ele.current = name;
  world.startConversation('ele', "ELE");
  worldState.utilityDock4.conversations.ele[name] = true;
}

function processConversationEvents(event, world, worldState, name) {
  console.log('processConversationEvents (' + name + ')');
  const key = event.target.key;
  if (worldState.utilityDock4.conversations.ele[key] === false) {
    setupConversation(world, worldState, key);
  }
}

module.exports = {
  processConversationEvents
};
