function unlockDoor(world, key) {
  //world.showAllEntities(`${key}_tiles`);
  var str = key.replace("_internal","") + "_door";
  console.log("unlockDoor: search for tiles with a key matching " + str);
  const doorPieces = world.entityService.getAll(
    entity => entity.instance.key && entity.instance.key.search(str) > -1
  );

  doorPieces.forEach(({ instance }) => {
    instance.hide();
    instance.sprite.body.enable = false;
    instance.interactionDisabled = true;
});
}

function lockDoor(world, key) {
  //world.hideAllEntities(`${key}_tiles`);
  var str = key + "_door";
  console.log("lockDoor: search for tiles with a key matching " + str);
  const doorPieces = world.entityService.getAll(
    entity => entity.instance.key.search(str) > -1
  );

  doorPieces.forEach(({ instance }) => {
    instance.show();
    instance.sprite.body.enable = true;
    instance.interactionDisabled = false;
});
}

function processDoorEvents(event, worldState) {
    console.log('processDoorEvents for ' + event.objective);
    for (let [key, value] of Object.entries(worldState.utilityDock4.unlockedDoors)) {
        if (event.objective == `${key}_unlock`
            || event.objective == key) {
            worldState.utilityDock4.unlockedDoors[key] = true;
    }}
}

function renderDoorState(world, worldState) {
    //console.log('renderDoorState');
    for (let [key, value] of Object.entries(worldState.utilityDock4.unlockedDoors)) {
      if (value) unlockDoor(world, key);
}}

module.exports = {
  unlockDoor,
  lockDoor,
  processDoorEvents,
  renderDoorState,
};
