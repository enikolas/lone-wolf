export enum Responsibility {
  DICE = "Dice",
  ENDURANCE_POINTS = "Endurance Points",
  GM = "GM",
  GOLD = "Gold",
  ITEMS = "Items",
  WEAPONS = "Weapons",
}

export enum Discipline {
  CAMOUFLAGE = "Camouflage",
  HUNTING = "Hunting",
  SIXTH_SENSE = "Sixth Sense",
  TRACKING = "Tracking",
  HEALING = "Healing",
  WEAPONSKILL = "Weaponskill",
  MINDSHIELD = "Mindshield",
  MINDBLAST = "Mindblast",
  ANIMAL_KINSHIP = "Animal Kinship",
  MIND_OVER_MATTER = "Mind Over Matter",
}

export enum Weapon {
  DAGGER = "Dagger",
  SPEAR = "Spear",
  MACE = "Mace",
  SHORTSWORD = "Shortsword",
  WARHAMMER = "Warhammer",
  SWORD = "Sword",
  AXE = "Axe",
  QUARTERSTAFF = "Quarterstaff",
  BROADSWORD = "Broadsword",
}

export enum CreationState {
  WAIT_FOR_PLAYERS = "Wait For Players",
  COMBAT_SKILL = "Combat Skill",
  ENDURANCE_POINTS = "Endurance Points",
  DISCIPLINES = "Disciplines",
}

export interface Player {
  name: string;
  responsibilities: Responsibility[];
}
