"use strict";

var symGp =  "img/graPerAv.png";
var symGm = "img/graMerAv.png"
var symFem = "img/logoFemme.png";

var incM = "inconnu";
var incF = "inconnue";
var incMp = "inconnus";
var incFp = "inconnues";
var defaut = undefined;
var nomP = "Gap";
var masc = "Masculin";
var fem = "Feminin";


//Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture)


var patGranFa = new Person(nomP, "Michel", 67, masc, "Marin", incM, incF, defaut, defaut, "img/granFaAv.png");
var patGranMo = new Person(nomP, "Thérèse", 65, fem, "Femme au foyer", incM, incF, defaut, defaut, "img/granMoAv.png");
var matGranFa = new Person("Stern", "Gabriel", 61, masc, "inconnu", incM, incF, defaut, defaut, "img/granFaAv.png");
var matGranMo = new Person("Stern", "Mireille", 68, fem, "Couturière", incM, incF, defaut, defaut, "img/granMoAv.png");
var father = new Person(nomP, "Baptiste", 45, masc, "Ouvrier", patGranFa, patGranMo, defaut, defaut, "img/fathAv");
var mother = new Person("Duval", "Suzette", 44, fem, "Couturière", matGranFa, matGranMo, defaut, defaut, "img/mothAv.png");
var firstBorn = new Person(nomP, "Adèle", masc, 27, "Agriculteur", father, mother, array(youngerM, junior), array(youngerF), symHom);
var sonInLaw1 = new Person("Tokeida", "Zatoichi", 32, masc, "Cuisinier", incM, incF, defaut, defaut, symHom);
var youngerF = new Person(nomP, "Claudia", 24, fem, "Institutrice", father, mother, array(youngerM, junior), array(firstBorn), symFem);
var sonInLaw2 = new Person("Pommereau", "Paul", 39, masc, "Comedien", incM, incF, defaut, defaut, symHom);
var youngerM = new Person(nomP, "Maurice", 22, masc, "Cuisinier", father, mother, array(junior), array(firstBorn, youngerF), symHom);
var daughInLaw = new Person("AlBladiya", "Sonia", 22, fem, "Cuisinier", incM, incF, defaut, defaut, symHom);
var junior = new Person(nomP, "Bruno", masc, 19, "Cuisinier", father, mother, array(youngerM), array(firstBorn, youngerF), symHom);
var fBfirstBorn = new Person("Tokeida", "Kimiyo", fem, 8, defaut, sonInLaw1, firstBorn, defaut, defaut, symFem);
var fByounger = new Person("Tokeida", "Natsu", fem, 6, defaut, sonInLaw1, firstBorn, defaut, defaut, symFem);
var fBjunior = new Person("Tokeida", "Takao", fem, 2, defaut, sonInLaw1, firstBorn, defaut, defaut, symFem);
var yFfirstBorn = new Person("Pommereau", "Hélène", fem, 2, defaut, sonInLaw2, youngerF, defaut, defaut, symHom);

document.getElementById("symGp").src = symHom;
document.getElementById("grPp").innerHTML = graPerPat.firstname + " " + graPerPat.name;
document.getElementById("ageGrPp").innerHTML = graPerPat.age;
document.getElementById("genrGrPp").innerHTML = graPerPat.kind;
document.getElementById("tafGrPp").innerHTML = graPerPat.profession;


