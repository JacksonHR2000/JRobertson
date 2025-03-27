export enum MonsterType {
    Human = "Human",
    Blob = "Blob",
    Undead = "Undead"
}

export interface Monster {
    firstName: string;
    lastName ?: string;
    age: number;
    type: "Human" | "Blob" | "Undead";
    moreInfo: string;
}

export interface SuperMonster extends Monster {
    powerLevel: number;
}

export type MonsterTuple = [string, number, string];