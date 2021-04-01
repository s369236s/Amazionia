import { AttrState } from "../Components/State/AttrState";

let tick = 0;

export const StateSystem = () => {
  tick++;
  if (AttrState.hunger <= 0) AttrState.hunger = 0;
  if (AttrState.thirsty <= 0) AttrState.thirsty = 0;
  if (AttrState.health <= 0) AttrState.health = 0;
  if (AttrState.mentality <= 0) AttrState.mentality = 0;

  if (tick % 3 === 0) {
    if (AttrState.health > 0) {
      if (
        (AttrState.hunger < 50 && AttrState.hunger >= 25) ||
        (AttrState.thirsty < 60 && AttrState.thirsty >= 40)
      )
        AttrState.health -= 0.5;
      if (
        (AttrState.hunger < 25 && AttrState.hunger >= 5) ||
        (AttrState.thirsty < 40 && AttrState.thirsty >= 10)
      )
        AttrState.health -= 1;
      if (AttrState.hunger < 5 || AttrState.thirsty < 10) AttrState.health -= 5;
    }
  }
  if (AttrState.mentality > 0) {
    if (AttrState.mentality < 60) {
      AttrState.mentalityRate = 0.8;
    }
    if (AttrState.mentality < 25 && AttrState.mentality >= 60) {
      AttrState.mentalityRate = 0.6;
    }
  }
  if (AttrState.hunger > 0) {
    if (tick === 5) {
      AttrState.hunger -= 1;
    }
  }
  if (AttrState.mentality > 0) {
    if (tick === 6) {
      if (
        (AttrState.hunger < 50 && AttrState.hunger >= 25) ||
        (AttrState.thirsty < 60 && AttrState.thirsty >= 40)
      )
        AttrState.mentality -= 1;
      if (AttrState.hunger < 25 || AttrState.thirsty < 40)
        AttrState.mentality -= 1.5;
    }
  }
  if (AttrState.thirsty > 0) {
    if (tick === 6) {
      AttrState.thirsty -= 1;
    }
  }
  if (tick === 8) {
    tick = 0;
  }
};
