"use strict";
var symHom =  "../img/logoHomme.jpg";
var symFem = "../img/logoFemme.jpg";
var defaut = undefined;
var masc = "Masculin";
var fem = "Feminin";

//Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture)
var graPerPat = new Person("LeFrapper", "René", "Masculin", "Agriculteur", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");
var graMerPat = new Person("LeFrapper", "Thérèse", "Feminin", "Femme au foyer", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var graPerMat = new Person("Violeau", "Gabriel", "Masculin", "inconnu", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");
var graMerMat = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var pere = new Person("LeFrapper", "René", "Masculin", "Agriculteur", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");
var mere = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var ainee = new Person("LeFrapper", "René", "Masculin", "Agriculteur", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");
var aineeAinee = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var puineeAinee = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var benjAinee = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var soeurAine = new Person("Paulette", "Cordier", "Feminin", "Couturière", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sFem.png");
var broInLaw = new Person("Bruce", "Lee", "Masculin", "Karateka", "Chuck Norris", "Rosa Parks", "inconnus", "inconunes", "../img/sMasc.png");
var frerNeveuUn = new Person("LeFrapper", "René", "Masculin", "Agriculteur", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");
var frerNeveuDeux = new Person("LeFrapper", "René", "Masculin", "Agriculteur", "inconnu", "inconnue", "inconnus", "inconnues", "../img/sMasc.png");

console.log(graPerPat);
        
document.getElementsByClassName("pHomme").src = symHom;
document.getElementById("ageGrPp").innerHTML = graPerPat.firstname + " " + graPerPat[name];
document.getElementById("genrGrPp").innerHTML = masc;
document.getElementById("tafGrPp").innerHTML = graPerPat.profession;
