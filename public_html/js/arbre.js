"use strict";

var symGp = "img/graPerAv.png";
var symGm = "img/graMerAv.png"
var symFem = "img/womanAv.png";
var symHom = "img/manAv.png"
var incM = "inconnu";
var incF = "inconnue";
var defaut = undefined;
var fsDefaut = [];
var nomP = "Gap";
var masc = "Masculin";
var fem = "Feminin";


//Person(type, name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture)

var granFa1 = new Person("granFa1", nomP, "Michel", 67, masc, "Marin", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var granMo1 = new Person("granMo1", nomP, "Murielle", 65, fem, "Femme au foyer", incM, incF, fsDefaut, fsDefaut, "img/graMoAv.png");
var granFa2 = new Person("granFa2", "Stern", "Gabriel", 61, masc, "inconnu", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var granMo2 = new Person("granMo2", "Stern", "Mireille", 68, fem, "Couturière", incM, incF, fsDefaut, fsDefaut, "img/graMoAv.png");
var father1 = new Person("father1", nomP, "Baptiste", 45, masc, "Ouvrier", granFa1, granMo1, fsDefaut, fsDefaut, "img/fathAv.png");
var mother1 = new Person("mother1", "Duval", "Suzette", 44, fem, "Couturière", granFa2, granMo2, fsDefaut, fsDefaut, "img/mothAv.png");
var daughter1 = new Person("daughter1", nomP, "Adèle", masc, 27, "Agriculteur", father1, mother1, [son1, son2], [daughter2], "img/daughter1Av.png");
var sonInLaw1 = new Person("sonInLaw1", "Tokeida", "Zatoichi", 32, masc, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv.png");
var daughter2 = new Person("daughter2", nomP, "Claudia", 24, fem, "Institutrice", father1, mother1, [daughter2, son1], [daughter1], "img/youngerAv.png");
var sonInLaw2 = new Person("sonInLaw2", "Pommereau", "Paul", 39, masc, "Comedien", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv2.png");
var son1 = new Person("son1", nomP, "Maurice", 22, masc, "Cuisinier", father1, mother1, [son1], [daughter1, daughter2], symHom);
var daughInLaw1 = new Person("daughInLaw1", "AlBladiya", "Sonia", 22, fem, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/dInLawAv.png");
var son2 = new Person("son2", nomP, "Bruno", masc, 19, "Cuisinier", father1, mother1, [daughter2], [daughter1, daughter2], symHom);
var grandaughter1 = new Person("grandaughter1", "Tokeida", "Kimiyo", fem, 8, defaut, sonInLaw1, daughter1, [granson1], [grandaughter2], symFem);
var grandaughter2 = new Person("grandaughter2", "Tokeida", "Natsu", fem, 6, defaut, sonInLaw1, daughter1, [granson1], [grandaughter1], symFem);
var granson1 = new Person("granson1", "Tokeida", "Takao", masc, 2, defaut, sonInLaw1, daughter1, fsDefaut, [grandaughter1, grandaughter2], symFem);
var grandaughter3 = new Person("grandaughter3","Pommereau", "Laura", fem, 2, defaut, sonInLaw2, daughter2, fsDefaut, fsDefaut, symHom);

var family = [granFa1, granMo1, granFa2, granMo2, father1, mother1, daughter1, sonInLaw1, daughter2, sonInLaw2, son1, daughInLaw1, son2, grandaughter1, grandaughter2, granson1, grandaughter3];

for (var i = 0; i < family.length; i++) {
var who = family[i].type;
    document.getElementById(who+"name").innerHTML = family[i].name + " " + family[i].firstname;
    document.getElementById(who+"img").src = family[i].profilPicture;
    document.getElementById(who+"age").innerHTML = family[i].age;
    document.getElementById(who+"taf").innerHTML = family[i].profession;
//    var who = family[i].type;
//    document.getElementById(who).src = family[i].profilPicture;
}




