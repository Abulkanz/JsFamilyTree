"use strict";



function Person(type, name, firstname, age, kind, profession, father, mother, brothers, sisters, profilPicture) {
    this.type = type;
    this.name = name;
    this.firstname = firstname;
    this.age = age;
    this.kind = kind;
    this.profession = profession;
    this.mother = mother;
    this.father = father;
    this.brothers = brothers;
    this.sisters = sisters;
    this.profilPicture = profilPicture;
}
;


//function addBrotherOrSister() {
//    var genre = prompt("H pour homme, F pour femme");
//    if (genre == "H" || genre == "h") {
//        var frere = new Person
//        (
//                //Boucle s'il n'y a pas de prénom
//                do {
//                    frere.firstName = prompt("Prénom");
//                } while (frere.firstName == (reference == null || reference == undefined || reference == ""));
//        //Boucle si ce n'est pas un chiffre
//        do {
//            frere.age = prompt("Age");
//        } while (isNaN(frere.age));
//        frere.kind = masc;
//        frere.profession = prompt("Profession");
//        frere.mother = mere;
//        frere.father = pere;
//        );
//    } else if (genre == "F" || genre == "f") {
//    }
//}
