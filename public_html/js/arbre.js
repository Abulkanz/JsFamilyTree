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
var graPerPat = new Person(nomP, "Michel", 67, masc, "Marin", incM, incF, defaut, defaut, symGp);
var graMerPat = new Person(nomP, "Thérèse", 65, fem, "Femme au foyer", incM, incF, defaut, defaut, symGm);
var graPerMat = new Person("Stern", "Gabriel", 61, masc, "inconnu", incM, incF, defaut, defaut, symGp);
var graMerMat = new Person("Stern", "Mireille", 68, fem, "Couturière", incM, incF, defaut, defaut, symGm);
var pere = new Person(nomP, "Baptiste", 45, masc, "Ouvrier", graPerPat, graMerPat, defaut, defaut, symHom);
var mere = new Person("Duval", "Suzette", 44, fem, "Couturière", graPerMat, graMerMat, defaut, defaut, symFem);
var ainee = new Person(nomP, "Adèle", masc, 27, "Agriculteur", pere, mere, defaut, defaut, symHom);
var gendreA = new Person("Tokeida", "Zatoichi", 32, masc, "Cuisinier", incM, incF, defaut, defaut, symHom);
var puinee = new Person(nomP, "Claudia", 24, fem, "Institutrice", pere, mere, defaut, defaut, symFem);
var gendreP = new Person("Pommereau", "Paul", 39, masc, "Comedien", incM, incF, defaut, defaut, symHom);
var cadet = new Person(nomP, "Maurice", 22, masc, "Cuisinier", pere, mere, defaut, defaut, symHom);
var bru = new Person("AlBladiya", "Sonia", 22, fem, "Cuisinier", incM, incF, defaut, defaut, symHom);
var benj = new Person(nomP, "Bruno", masc, 19, "Cuisinier", pere, mere, defaut, defaut, symHom);
var aineeAinee = new Person("Tokeida", "Kimiyo", fem, 8, defaut, gendreA, ainee, defaut, defaut, symFem);
var puineeAinee = new Person("Tokeida", "Natsu", fem, 6, defaut, gendreA, ainee, defaut, defaut, symFem);
var benjAinee = new Person("Tokeida", "Takao", fem, 2, defaut, gendreA, ainee, defaut, defaut, symFem);
var aineePuinee = new Person("Pommereau", "Hélène", fem, 2, defaut, incM, incF, defaut, defaut, symHom);

document.getElementById("symGp").src = symHom;
document.getElementById("grPp").innerHTML = graPerPat.firstname + " " + graPerPat.name;
document.getElementById("ageGrPp").innerHTML = graPerPat.age;
document.getElementById("genrGrPp").innerHTML = graPerPat.kind;
document.getElementById("tafGrPp").innerHTML = graPerPat.profession;


