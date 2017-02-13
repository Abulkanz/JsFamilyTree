"use strict";

var symGp =  "img/graPerAv.png";
var symGm = "img/graMerAv.png"
var symFem = "img/womaAv.png";
var symHom = "img/manAv.png"
var incM = "inconnu";
var incF = "inconnue";
var defaut = undefined;
var fsDefaut = [];
var nomP = "Gap";
var masc = "Masculin";
var fem = "Feminin";


//Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture)


var patGranFa = new Person(nomP, "Michel", 67, masc, "Marin", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var patGranMo = new Person(nomP, "Murielle", 65, fem, "Femme au foyer", incM, incF, fsDefaut, fsDefaut, "img/granMoAv.png");
var matGranFa = new Person("Stern", "Gabriel", 61, masc, "inconnu", incM, incF, fsDefaut, fsDefaut, "img/granFaAv.png");
var matGranMo = new Person("Stern", "Mireille", 68, fem, "Couturière", incM, incF, fsDefaut, fsDefaut, "img/granMoAv.png");
var father = new Person(nomP, "Baptiste", 45, masc, "Ouvrier", patGranFa, patGranMo, fsDefaut, fsDefaut, "img/fathAv");
var mother = new Person("Duval", "Suzette", 44, fem, "Couturière", matGranFa, matGranMo, fsDefaut, fsDefaut, "img/mothAv.png");
var firstBorn = new Person(nomP, "Adèle", masc, 27, "Agriculteur", father, mother, [youngerM, junior], [youngerF], "img/firstBornAv.png");
var sonInLaw1 = new Person("Tokeida", "Zatoichi", 32, masc, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv.png");
var youngerF = new Person(nomP, "Claudia", 24, fem, "Institutrice", father, mother, [youngerM, junior], [firstBorn], "img/youngerAv.png");
var sonInLaw2 = new Person("Pommereau", "Paul", 39, masc, "Comedien", incM, incF, fsDefaut, fsDefaut, "img/sInLawAv2.png");
var youngerM = new Person(nomP, "Maurice", 22, masc, "Cuisinier", father, mother, [junior], [firstBorn, youngerF], symHom);
var daughInLaw = new Person("AlBladiya", "Sonia", 22, fem, "Cuisinier", incM, incF, fsDefaut, fsDefaut, "img/dInLawAv.png");
var junior = new Person(nomP, "Bruno", masc, 19, "Cuisinier", father, mother, [youngerM], [firstBorn, youngerF], symHom);
var fBfirstBorn = new Person("Tokeida", "Kimiyo", fem, 8, defaut, sonInLaw1, firstBorn, [fBjunior], [fByounger], symFem);
var fByounger = new Person("Tokeida", "Natsu", fem, 6, defaut, sonInLaw1, firstBorn, [fBjunior], [fBfirstBorn], symFem);
var fBjunior = new Person("Tokeida", "Takao", fem, 2, defaut, sonInLaw1, firstBorn, fsDefaut, [fBfirstBorn, fByounger], symFem);
var yFfirstBorn = new Person("Pommereau", "Laura", fem, 2, defaut, sonInLaw2, youngerF, fsDefaut, fsDefaut, symHom);

var family = [patGranFa, patGranMo, matGranFa, matGranMo, father, mother, firstBorn, sonInLaw1, youngerF, sonInLaw2, youngerM, daughInLaw, junior, fBfirstBorn, fByounger, fBjunior, yFfirstBorn];

alert(patGranFa.name);
//for(var i = 0; i < family.length; i++){
//    
//}

function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    for(var i = 0; i < 3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 2; j++){
            if(i == 2 && j == 1){
                break;
            } else {
                var td = tr.insertCell();
                td.appendChild(document.createTextNode('Cell'));
                td.style.border = '1px solid black';
                if(i == 1 && j == 1){
                    td.setAttribute('rowSpan', '2');
                }
            }
        }
    }
    body.appendChild(tbl);
}
tableCreate();



