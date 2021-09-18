let blinkerTimeout;

function scheduleBlinking(world, worldState) {
  //console.log('scheduleBlinking');
  //console.log('infinite_loops.active = '+worldState.utilityDock4.alerts.infinite_loops.active);
  let all_inactive = true;

  if (!worldState.utilityDock4 || !worldState.utilityDock4.alerts) {
    return;
  }

  for (let [key, value] of Object.entries(worldState.utilityDock4.alerts)) {
    if (key == 'all_inactive') continue;

    if (!value.active) {
      //console.log('scheduleBlinking hide alert: '+key+': '+value.object_key_base+': '+value.active);
      world.hideEntities(key + '_alert_on');
      world.hideEntities(key + '_alert_off');
      continue;
    }
    //console.log('scheduleBlinking continue alert: '+key+': '+value.object_key_base+': '+value.active);
    let objectKeyBase = value.object_key_base;
    all_inactive = false;
    if (value.light_on) {
      value.light_on = false;
      world.showEntities(objectKeyBase + '_alert_off');
      world.hideEntities(objectKeyBase + '_alert_on');
      continue;
    }
    value.light_on = true;
    world.showEntities(objectKeyBase + '_alert_on');
    world.hideEntities(objectKeyBase + '_alert_off');
  }

  if (all_inactive) {
    worldState.utilityDock4.alerts.all_inactive = true;
    // exisiting timeout
    if (blinkerTimeout) {
      clearTimeout(blinkerTimeout);
    }
    return;
  }

  // schedule next blink update
  blinkerTimeout = setTimeout(() => scheduleBlinking(world, worldState), 600);
}

function prepareAlertEvents(world, worldState) {
    console.log('prepareAlertEvents');
    for (let [key, value] of Object.entries(worldState.utilityDock4.alerts)) {
      //console.log('prepareAlertEvents: '+key+': '+value.object_key_base+': '+worldState.utilityDock4.alerts[key]['active']);
      if (worldState.utilityDock4.alerts[key]['active'] == false ||
      (!value.before_object && !value.after_object)) {
        continue;
      }
      let objectKeyBase = value.object_key_base;
      console.log('prepareAlertEvents: '+objectKeyBase);
      const alertObjects = world.entityService.getAll(
        entity => entity.instance.key && entity.instance.key.search(objectKeyBase) > -1
      );
      alertObjects.forEach(({ instance }) => {
        if (instance.key == objectKeyBase + '_off') {
          if (value.active) {
            instance.show();
            instance.interactionDisabled = false;
            return;
          }
          instance.hideEntities();
          instance.interactionDisabled = true;
          return;
        }
        if (instance.key == objectKeyBase + '_on') {
          if (value.active) {
            instance.hide();
            instance.interactionDisabled = true;
            return;
          }
          instance.show();
          instance.interactionDisabled = false;
          return;
        }
      });
    }
}

function processAlertEvents(event, world, worldState) {
    console.log('processAlertEvents');
    for (let [key, value] of Object.entries(worldState.utilityDock4.alerts)) {
      if (event.objective == key) {
        // existing timer has old worldState, so clear it.
        if (blinkerTimeout) {
          clearTimeout(blinkerTimeout);
        }

        console.log("hideEntities alerts: "+value.object_key_base);
        world.hideEntities(value.object_key_base + '_alert_on');
        world.hideEntities(value.object_key_base + '_alert_off');
        worldState.utilityDock4.alerts[key]['active'] = false;

        // create a new blink timer with the updated worldState
        if (blinkerTimeout) {
          clearTimeout(blinkerTimeout);
        }
        blinkerTimeout = setTimeout(() => scheduleBlinking(world, worldState), 600);

        if (worldState.utilityDock4.alerts[key]['before_object'] ||
          worldState.utilityDock4.alerts[key]['after_object']) {
            let objectKeyBase = worldState.utilityDock4.alerts[key]['object_key_base'];
            const alertObjects = world.entityService.getAll(
              entity => entity.instance.key && entity.instance.key.search(objectKeyBase) > -1
            );
            alertObjects.forEach(({ instance }) => {
              if (instance.key == objectKeyBase + '_off') {
                instance.hide();
                instance.interactionDisabled = true;
              }
              if (instance.key == objectKeyBase + '_on') {
                instance.show();
                instance.interactionDisabled = false;
              }
            });
        }
    }}
}

module.exports = {
  prepareAlertEvents,
  scheduleBlinking,
  processAlertEvents
};
