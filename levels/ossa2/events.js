const { processDoorEvents, renderDoorState } = require('./events/doors');
const { processConversationEvents } = require('./events/conversations');
const { prepareAlertEvents, processAlertEvents, scheduleBlinking } = require ('./events/alerts');

const DEFAULT_MISSION_STATE = {
  utilityDock4: {
    unlockedDoors: {
      default_barracks_exit: false,
      barracks_medical_exit: false,
      barracks_riverway_exit: false,
      barracks_cryo_exit: false,
      barracks_internal: false,
      cryo_internal: false,
      cryo_exit: false
    },
  conversations: {
      ele: {
          current: 'none',
          all: false,
          default_welcome: false,
          barracks_welcome: false,
          barracks_internal: false,
          barracks_chest: false,
          cryo_welcome: false,
          cryo_internal: false,
          cryo_arm: false,
          cryo_chamber: false,
          riverway_welcome: false,
          riverway_bridge: false,

      }
    },
  alerts: {
      all_inactive: false,
      boolean_comparison: {
        object_key_base: 'barracks_chest',
        active: true,
        light_on: true,
        before_object: false,
        after_object: false
      },
      api_tunnel: {
        object_key_base: 'cryo_workbench',
        active: true,
        light_on: true,
        before_object: false,
        after_object: true
      },
      infinite_loops: {
        object_key_base: 'riverway_fountain',
        active: true,
        light_on: true,
        before_object: true,
        after_object: true
      }
  }}
};

function hasConversation(name, worldState)
{
  const conversations = worldState.utilityDock4.conversations;
  if (!conversations.hasOwnProperty(name) || conversations[name]['all'] == true) {
    return false;
  }
  for (let [key, value] of Object.entries(conversations[name])) {
    if (value === false) {
      return true;
    }
  }
  return false;
}

module.exports = function(event, world) {
  console.log(event); // levelDidLoad
  // console.log(world); //

  if (event.name === 'levelDidLoad') {
   // reset mission on levelDidLoad for testing
   console.log('reset mission on levelDidLoad for testing');
   completedObjectives = world.getContext('completedObjectives');
   console.log(completedObjectives);
   world.setState('ossHD_elephpantWorldState', DEFAULT_MISSION_STATE);
 }

  const worldState = world.getState('ossHD_elephpantWorldState') || DEFAULT_MISSION_STATE;

  // If the player interacts with an "ELE Terminal", a contextual NPC
  // conversation is triggered based on the current world state
  if (
    event.name === 'playerDidInteract' &&
    event.target &&
    event.target.key === 'ele_terminal'
  ) {
    world.startConversation('ele', 'ele');
  }

  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.name === 'eleDialogTrigger'
  ) {
    worldState.conversations = worldState.conversations || {};
    if (!worldState.conversations[event.target.key]) {
      worldState.conversations.current = event.target.key;
      world.startConversation('ele', 'ele');
      worldState.conversations[event.target.key] = true;
    }
  }

  if (event.name === 'mapDidLoad') {
    prepareAlertEvents(world, worldState);
    renderDoorState(world, worldState);
    scheduleBlinking(world, worldState);
  }

  world.setState('ossHD_elephpantWorldState', worldState);
};
