let doing = false;

function doSlot() {
  if (doing) {
    return;
  }

  doing = true;

  const numChanges = randomInt(1,4) * 7;
  const numberSlot1 = numChanges + randomInt(1,7);
  const numberSlot2 = numChanges + 2 * 7 + randomInt(1,7);
  const numberSlot3 = numChanges + 4 * 7 + randomInt(1,7);
  let i1 = 0;
  let i2 = 0;
  let i3 = 0; 

  slot1 = setInterval(spin1, 50);
  slot2 = setInterval(spin2, 50);
  slot3 = setInterval(spin3, 50);

  function spin1() {
    i1++;

    if (i1 >= numberSlot1) {
      clearInterval(slot1);
      doing = false;
      return;
    }

    slotTile = document.getElementById("slot1");

    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }

    slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1);
  }

  function spin2() {
    i2++;

    if (i2 >= numberSlot2) {
      clearInterval(slot2);
      doing = false;
      return;
    }

    slotTile = document.getElementById("slot2");

    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }

    slotTile.className = "a"+(parseInt(slotTile.className.substring(1)) + 1);
  }

  function spin3() {
    i3++;

    if (i3 >= numberSlot3) {
      clearInterval(slot3);
      doing = false;
      return;
    }

    slotTile = document.getElementById("slot3");

    if (slotTile.className == "a7") {
      slotTile.className = "a0";
    }

    slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1);
  }
}

function randomInt(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}

setTimeout(setInterval(doSlot, 5000), 1000);