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


//Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture)


var granFa1 = new Person(nomP, "Michel", 67, masc, "Marin", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var granMo1 = new Person(nomP, "Murielle", 65, fem, "Femme au foyer", incM, incF, fsDefaut, fsDefaut, "img/granMoAv.png");
var granFa2 = new Person("Stern", "Gabriel", 61, masc, "inconnu", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var granMo2 = new Person("Stern", "Mireille", 68, fem, "Couturière", incM, incF, fsDefaut, fsDefaut, "img/granMoAv.png");
var father1 = new Person(nomP, "Baptiste", 45, masc, "Ouvrier", patGranFa, patGranMo, fsDefaut, fsDefaut, "img/fathAv");
var mother1 = new Person("Duval", "Suzette", 44, fem, "Couturière", matGranFa, matGranMo, fsDefaut, fsDefaut, "img/mothAv.png");
var daughter1 = new Person(nomP, "Adèle", masc, 27, "Agriculteur", father, mother, [youngerM, junior], [youngerF], "img/firstBornAv.png");
var sonInLaw1 = new Person("Tokeida", "Zatoichi", 32, masc, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv.png");
var daughter2 = new Person(nomP, "Claudia", 24, fem, "Institutrice", father, mother, [youngerM, junior], [firstBorn], "img/youngerAv.png");
var sonInLaw2 = new Person("Pommereau", "Paul", 39, masc, "Comedien", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv2.png");
var son1 = new Person(nomP, "Maurice", 22, masc, "Cuisinier", father, mother, [junior], [firstBorn, youngerF], symHom);
var daughInLaw1 = new Person("AlBladiya", "Sonia", 22, fem, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/dInLawAv.png");
var son2 = new Person(nomP, "Bruno", masc, 19, "Cuisinier", father, mother, [youngerM], [firstBorn, youngerF], symHom);
var grandaughter1 = new Person("Tokeida", "Kimiyo", fem, 8, defaut, sonInLaw1, firstBorn, [fBjunior], [fByounger], symFem);
var grandaughter2 = new Person("Tokeida", "Natsu", fem, 6, defaut, sonInLaw1, firstBorn, [fBjunior], [fBfirstBorn], symFem);
var granson1 = new Person("Tokeida", "Takao", masc, 2, defaut, sonInLaw1, firstBorn, fsDefaut, [fBfirstBorn, fByounger], symFem);
var grandaughter3 = new Person("Pommereau", "Laura", fem, 2, defaut, sonInLaw2, youngerF, fsDefaut, fsDefaut, symHom);

var family = [granFa1, granMo1, granFa2, granMo2, father1, mother1, daughter1, sonInLaw1, daughter2, sonInLaw2, son1, daughInLaw1, son2, grandaughter1, grandaughter2, granson1, grandaughter3];


for (var i = 0; i < family.length; i++) {

}

//function tableCreate(){
//    var body = document.body,
//        tbl  = document.createElement('table');
//    tbl.style.width  = '100px';
//    tbl.style.border = '1px solid black';
//
//    for(var i = 0; i < 3; i++){
//        var tr = tbl.insertRow();
//        for(var j = 0; j < 2; j++){
//            if(i == 2 && j == 1){
//                break;
//            } else {
//                var td = tr.insertCell();
//                td.appendChild(document.createTextNode('Cell'));
//                td.style.border = '1px solid black';
//                if(i == 1 && j == 1){
//                    td.setAttribute('rowSpan', '2');
//                }
//            }
//        }
//    }
//    body.appendChild(tbl);
//}
//tableCreate();



