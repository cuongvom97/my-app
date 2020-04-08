export class Hero {
    id: string;
    key:string;
    name: string;
    tags:[];
    stats:{};
    icon:string;
    sprite:{};
    description:string;
}
export class Sprite {
    url:string;
    x:number;
    y:number;
}
export class Stats {
    hp:number;
    hpperlevel:number;
    mp:number;
    mapperlevel:number;
    movespeed:number;
    armor:number;
    armorperlevel:number;
    spellblock:number;
    spellblockperlevel:number;
    attackrange:number;
    hpregen:number;
    hpregenperlevel:number;
    mapregen:number;
    mapregenperlevel:number;
    crit:number;
    critperlevel:number;
    attackdamage:number;
    attackdamageperlevel:number;
    attackspeedoffset:number;
    attackspeesperlevel:number;
}
