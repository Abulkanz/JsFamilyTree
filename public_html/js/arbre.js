"use strict";
var symHom =  "img/logoHomme.png";
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
var graPerPat = new Person(nomP, "Michel", 67, masc, "Marin", incM, incF, "inconnus", "inconnues", symHom);
var graMerPat = new Person(nomP, 75, "Thérèse", fem, "Femme au foyer", incM, incF, "inconnus", "inconnues", symFem);
var graPerMat = new Person("Stern", "Gabriel", 61, masc, "inconnu", incM, incF, "inconnus", "inconnues", symHom);
var graMerMat = new Person("Stern", "Cordier", 68, fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var pere = new Person(nomP, "Baptiste", masc, "Ouvrier", graMerPat.firstname + graMerPat.name, graPerPat.firstname + graPerPat.name, "inconnus", "inconnues", symHom);
var mere = new Person("Duval", "Cordier", fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var ainee = new Person(nomP, "René", masc, "Agriculteur", incM, incF, "inconnus", "inconnues", symHom);
var gendre = new Person("Tokeida", "Zatoichi", masc, "Cuisinier", incM, incF, incMp, incFp, symHom);
var puinee = new Person(nomP, "Claudia", 24, fem, "Institutrice", pere.firstName + " " + pere.name, mere.firstName + " " + mere.name, incMp, incFp, symFem);
var aineeAinee = new Person(nomP, "Cordier", fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var puineeAinee = new Person("Paulette", "Cordier", fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var benjAinee = new Person("Paulette", "Cordier", fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var soeurAine = new Person(nomP, "Cordier", fem, "Couturière", incM, incF, "inconnus", "inconnues", symFem);
var broInLaw = new Person("Bruce", "Lee", masc, "Karateka", "Chuck Norris", "Rosa Parks", "inconnus", "inconunes", symHom);
var frerNeveuUn = new Person("LeFrapper", "René", masc, "Agriculteur", incM, incF, "inconnus", "inconnues", symHom);
var frerNeveuDeux = new Person("LeFrapper", "René", masc, "Agriculteur", incM, incF, "inconnus", "inconnues", symHom);

alert(graPerPat.kind);
console.log(graPerPat);
        
document.getElementById("symGp").src = symHom;
document.getElementById("grPp").innerHTML = graPerPat.firstname + " " + graPerPat.name;
document.getElementById("ageGrPp").innerHTML = graPerPat.age;
document.getElementById("genrGrPp").innerHTML = graPerPat.kind;
document.getElementById("tafGrPp").innerHTML = graPerPat.profession;


