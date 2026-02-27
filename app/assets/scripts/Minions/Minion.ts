export function Minion() {
  const MinionLvl = 1;

  // Level system for the minions from 1 to 25
  // function Minion(lvl: number) {}

  function TimeBeforeAction(setTime: number) {
    const setTimed = setTime;
    const minionLvl = MinionLvl;

    if (setTimed && minionLvl) {
      const calced = setTimed / minionLvl;
    }
  }

  function MinionLevelsInfluence(setTime: number, lvl: number) {
    if (setTime && lvl) {
      const mathCalc = setTime / lvl;
      return mathCalc;
    }
  }

  MinionLevelsInfluence(1, 1);
  TimeBeforeAction(1);
}

export function MinionWork(type: string) {
  let xpProgress = 0;
  if (type) {
    if (type === "Mineur") {
      xpProgress++;
      console.log("Mine", xpProgress);
    } else if (type === "Bûcheron") {
      console.log("Bois");
    } else if (type === "Récolteur") {
      console.log("Baie");
    }
  }
}

// export function xpSystem(xpGet: number) {
// const xpGet = xpGet;
// }

export function MinionJobs() {}
