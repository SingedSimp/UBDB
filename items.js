const Embeds = require("./embeds.js");

function PrintArrays() {
    console.log("AP Starting Items:");
    for (let i = 0; i < apStarter.length; i++) {
        console.log(apStarter[i].emote);
    }
    console.log("AD Starting Items:");
    for (let i = 0; i < adStarter.length; i++) {
        console.log(adStarter[i].emote);
    }
    console.log("Miscellaneous Starting Items:");
    for (let i = 0; i < miscStarter.length; i++) {
        console.log(miscStarter[i].emote);
    }
    console.log("AP Support Items:");
    for (let i = 0; i < apSupport.length; i++) {
        console.log(apSupport[i].emote);
    }
    console.log("AD Support Items:");
    for (let i = 0; i < adSupport.length; i++) {
        console.log(adSupport[i].emote);
    }
    console.log("AD Items:");
    for (let i = 0; i < ad.length; i++) {
        console.log(ad[i].emote);
    }
    console.log("AP Items:");
    for (let i = 0; i < ap.length; i++) {
        console.log(ap[i].emote);
    }
    console.log("AP Mythic Items:");
    for (let i = 0; i < apMythic.length; i++) {
        console.log(apMythic[i].emote);
    }
    console.log("AD Mythic Items:");
    for (let i = 0; i < adMythic.length; i++) {
        console.log(adMythic[i].emote);
    }
};

function SortArrays() {
    for (let item = 0; item < items.length; item++) {
        console.log(items[item].emote); // logs item emote name
        if (items[item].starting.toLowerCase() === "true") {
            // checks if item is a starting item
            if (items[item].support.toLowerCase() === "true") {
                // checks if item is a support item
                if (items[item].type.toLowerCase() === "ad") {
                    // checks if item is an ad support item
                    adSupport.push(items[item]);
                    console.log("adSupport");
                } else if (items[item].type.toLowerCase() === "ap") {
                    // checks if item is an ap support item
                    apSupport.push(items[item]);
                    console.log("apSupport");
                } else {
                    // you formatted one of the items wrong
                    console.log("how did we get here");
                }
            } else if (items[item].type.toLowerCase() === "ad") {
                // checks if item is an ad starting item
                adStarter.push(items[item]);
                console.log("adStarter");
            } else if (items[item].type.toLowerCase() === "ap") {
                // checks if item is an ap starting item
                apStarter.push(items[item]);
                console.log("apStarter");
            } else {
                // checks if item is neither an AD or AP starting item
                miscStarter.push(items[item]);
                console.log("miscStarter");
            }
        } else if (items[item].type.toLowerCase() === "ap") {
            // checks if item is AP
            if (items[item].mythic.toLowerCase() === "true") {
                // checks if item is a mythic
                apMythic.push(items[item]);
                console.log("apMythic");
            } else { // if item is not mythic
                ap.push(items[item]);
                console.log("ap");
            }
        } else if (items[item].type.toLowerCase() === "ad") {
            if (items[item].mythic.toLowerCase() === "true") {
                // checks if item is a mythic
                adMythic.push(items[item]);
                console.log("adMythic");
            } else {
                // if item is not mythic
                ad.push(items[item]);
                console.log("ad");
            }
        }
    }
};

function RandomItem(arg) {
    if (arg.toLowerCase() === "apstarter") {
        arg = apStarter;
    } else if (arg.toLowerCase() === "adstarter") {
        arg = adStarter;
    } else if (arg.toLowerCase() === "miscstarter") {
        arg = miscStarter;
    } else if (arg.toLowerCase() === "apsupport") {
        arg = apSupport;
    } else if (arg.toLowerCase() === "adsupport") {
        arg = adSupport;
    } else if (arg.toLowerCase() === "ap") {
        arg = ap;
    } else if (arg.toLowerCase() === "ad") {
        arg = ad;
    } else if (arg.toLowerCase() === "apmythic") {
        arg = apMythic;
    } else if (arg.toLowerCase() === "admythic") {
        arg = adMythic;
    }
    let item = arg[Math.floor(Math.random() * arg.length)];
    return item;
};

function ItemSet(type) {
    let start;
    let mythic;
    let boots;
    let item1;
    let item2;
    let item3;
    let item4;
    if (type.toLowerCase() === "ad") {
        start = RandomItem("adStarter");
        mythic = RandomItem("adMythic");
        boots = RandomItem("apSupport");
        item1 = RandomItem("ad");
        item2 = RandomItem("ad");
        item3 = RandomItem("ad");
        item4 = RandomItem("ad");
    } else if (type.toLowerCase() === "ap") {
        start = RandomItem("apStarter");
        mythic = RandomItem("apMythic");
        boots = RandomItem("adSupport");
        item1 = RandomItem("ap");
        item2 = RandomItem("ap");
        item3 = RandomItem("ap");
        item4 = RandomItem("ap");
    };
    loadout.length = 0;
    loadout.push(start);
    loadout.push(boots);
    loadout.push(mythic);
    loadout.push(item1);
    loadout.push(item2);
    loadout.push(item3);
    loadout.push(item4);
    Embeds.fillLoadoutTemplate();
};

const hullbreaker = {
    name: "Hullbreaker",
    emote: "<:Hullbreaker:857375429614239744>",
    type: "ad",
    mythic: "false",
    starting: "false",
    support: "false"
};
const trinityForce = {
    name: "Trinity Force",
    emote: "<:Trinity_Force:806606084554883102>",
    type: "ad",
    mythic: "true",
    starting: "false",
    support: "false"
};
const doransRing = {
    name: "Doran's Ring",
    emote: "<:Dorans_Ring:806602778218463315>",
    type: "ap",
    mythic: "false",
    starting: "true",
    support: "false"
};
const spellthiefsEdge = {
    name: "Spellthief's Edge",
    emote: "<:Spellthiefs_Edge:806606084151181323>",
    type: "ap",
    mythic: "false",
    starting: "true",
    support: "true"
};
const spectralSickle = {
    name: "Spectral Sickle",
    emote: "<:Spectral_Sickle:806606085208539146>",
    type: "ad",
    mythic: "false",
    starting: "true",
    support: "true"
};
const everfrost = {
    name: "Everfrost",
    emote: "<:Everfrost:806605075685703700>",
    type: "ap",
    mythic: "true",
    starting: "false",
    support: "false"
};
const cosmicDrive = {
    name: "Cosmic Drive",
    emote: "<:Cosmic_Drive:806602777899302923>",
    type: "ap",
    mythic: "false",
    starting: "false",
    support: "false"
};
const doransBlade = {
    name: "Doran's Blade",
    emote: "<:Dorans_Blade:806602778137853963>",
    type: "ad",
    mythic: "false",
    starting: "true",
    support: "false"
};
const corruptingPotion = {
    name: "Corrupting Potion",
    emote: "<:Corrupting_Potion:806602778126319617>",
    type: "potion",
    mythic: "false",
    starting: "true",
    support: "false"
};
const loadout = [];
const apStarter = [];
const adStarter = [];
const miscStarter = [];
const apSupport = [];
const adSupport = [];
const ap = [];
const ad = [];
const apMythic = [];
const adMythic = [];
const items = [hullbreaker, trinityForce, spellthiefsEdge, doransRing, doransBlade,
    corruptingPotion, cosmicDrive, everfrost, spectralSickle
];

exports.RandomItem = RandomItem;
exports.PrintArrays = PrintArrays;
exports.SortArrays = SortArrays;
exports.ItemSet = ItemSet;
exports.loadout = loadout;