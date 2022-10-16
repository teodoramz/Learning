// 1.1. ES6 - Metode (exemple, explicatii).
// 1.2. Diferenta dintre var, let, const.
// 1.3. Spread operator.
// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.
// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
// 1.6. Promise. Callback.
// 1.7. Async. Await. 
// 1.8. Closures.

//**********************//
/*  
  Am incercat sa explic cat de bine am putut tot ce am citit, am incercat sa trec prin cat mai multe exemple si sa le testez pe toate.
  
  Sper ca nu va fi greu de urmarit.
*/
// 

// //#region 1.1. Metode

// //1.1. Metodele in javascript (si nu numai) sunt niste actiuni (functii) 
// // care pot fi efectuate asupra unor entitati/obiecte.
// // Metodele sunt apelate de clasa de obiecte din care fac parte.
// // Metodele sunt in esenta niste functii speciale, salvate la nivel de obiect. Insa functiile obisnuite pot fi standalone, declarate separat si fara 
// //     nicio legatura cu vreun obiect)

// //exemple 

// //functie: 
// function Mesaj(msg){
//     console.log(msg);
// }
// Mesaj("Salut!");  //se afiseaza in consola mesajul "Salut!"
// //sau

// function Mesaj(msg){
//     return msg;
// }
// Mesaj("Salut!"); //nu se afiseaza nimic in consola, e returnat un string 
// console.log(Mesaj("Salut!")); //se afiseaza in consola mesajul "Salut!"

// //metode:
// var cafeluta = {    //nu ma pricep la cafea
//     perioada: "Dimineata",
//     pahar: "mare",
//     tip_cafea: "neagra",
//     nevoie: function(x){ //putem cu sau fara parametrii 
//         return this.perioada + " e nevoie " + x + " de cafea";
//     },
//     nevoie2: function(){ //putem cu sau fara parametrii 
//         return this.perioada + " e nevoie  de cafea";
//     },
//     nevoie3: function(){ //putem cu sau fara parametrii 
//         console.log( this.perioada + " e nevoie  de cafea");
//     }

// }
// console.log(cafeluta.nevoie("mare")); // se afiseaza mesajul "Dimineata e nevoie mare de cafea"
// console.log(cafeluta.nevoie2()); // se afiseaza mesajul "Dimineata e nevoie de cafea"
// console.log(cafeluta.nevoie2); //in consola este afisat ce se apeleaza, [Function: nevoie2], insa nu si rezultatul acestei functii
// cafeluta.nevoie3; //nu se afiseaza nimic la consola
// cafeluta.nevoie3(); //se afiseaza mesajul "Dimineata e nevoie  de cafea"


// //  Sus am definit niste metode in obiectul 'cafeluta', insa exista si niste metode, pre-definite in clasele mari de obiecte,
// // cum ar fi al stringurilor, numerelor intregi, ...

// var mesaj = "Mesaj";
// console.log(mesaj.toLowerCase()); //se afiseaza 'mesaj', s-a apelat functia predefinita a stringurilor, toLowerCase

// //#endregion

// //#region 1.2. Var, let, const

// // De obicei, cele mai simple lucruri sunt si cele mai greu de explicat :))

// // Se pare ca inainte de aparitia ES6, declararea cu var era predominanta. 
// // Eu, de cate ori am scris ceva in javascript, am folosit var, chiar daca stiam si de let si const.
// // Am scris prea putin cod incat sa ma deranjeze sau sa observ diferente intre scrierea cu var, let si const.


// // Var  :

// // Putem declara orice tip de variabile, le putem initializa imediat in declaratie sau mai tarziu.
// var a = 3;

// var b;
// b = 5;

// console.log(a + b); // se afiseaza 8

// //Variabilele definite cu var pot fi re-initializate ori de cate ori dorim dar si re-declarate;

// var a = 3;
// console.log(a); // se afiseaza 3
// console.log(a.toLowerCase());  // aici o sa primim eroare (int-ul nu are astfel de metoda)

// var a = "ABC";
// console.log(a.toLowerCase()); // se afiseaza 'abc' (se observa ca aici a este string, putem apela metoda toLowerCase)

// // Variabila var este globala cand este declarata in afara unei functii si locala daca este declarata intr-o functie anume.

// var a = 3;
// function Ceva(){
//     var b = 5;
//     console.log(b);  //5
//     console.log(a);  //3
// }
// Ceva(); // 5 (b), 3 (pt a)
// console.log(b); // o sa primim eroare, b-ul exista doar in interiorul functiei Ceva()

// // Exista probleme in a folosi declararea cu var in momentul in care, din neatentie refolosim anumite nume de 
// //variabile si astfel, rescriem/reinitializa/redeclaram anumite variabile

// var a = 3;
// console.log(a); // 3
// if(1){
//     var a = 5;
//     console.log(a); // 5
// }

// console.log(a); // 5

// //sau

// var a = 3;
// console.log(a); // 3
// if(1){
//     var a = "abc";
//     console.log(a); // abc
// }

// console.log(a); // abc


// // Let : 

// // Let este varianta de preferat pentru a declara variabile, acest key-word venind cu rezolvari pentru vari
// // cazurile speciale aduse de var.

// // Putem declara orice tip de variabile, le putem initializa imediat in declaratie sau mai tarziu.
// let a = 3;

// let b;
// b = 5;
// console.log(a + b); // se afiseaza 8


// //Variabilele definite cu let pot fi re-initializate(modificate) ori de cate ori dori, insa nu pot fi redeclarate;

// let a = 3;
// console.log(a); // se afiseaza 3
// a = 5;
// console.log(a); // se afiseaza 5

// let a = 4; // eroare, a-ul deja a fost definit
// let a = "ABC"; // eroare, a-ul deja a fost definit


// //Variabilele declarate cu let exista doar in blocuri/sectiuni (de obicei intre {}). Astfel, se rezolva problema de a folosi 
// //aceleasi nume de variabile in codul nostru, chiar daca sunt in sectiuni de cod diferite

// let a = 3;
// let c = 4;
// function Ceva(){
//     let b = 5;
//     let c = 7;
//     console.log(b);  //5
//     console.log(a);  //3
//     console.log(c);  // 7, c-ul este vazut doar acela definit in functia Ceva()
// }
// console.log(c); //4
// Ceva(); // 5 (b), 3 (pt a)
// console.log(b); // o sa primim eroare, b-ul exista doar in interiorul functiei Ceva()


// // Ajungem la problema de alegere a aceluiasi nume al variabilelor noastre


// let a = 3;
// console.log(a); // 3
// if(1){
//     let a = 5;
//     console.log(a); // 5
// }

// console.log(a); // 3

// // sau

// let a = 3;
// console.log(a); // 3
// if(1){
//     let a = "abc";
//     console.log(a); // abc
// }

// console.log(a); // 3

// // Deci acum daca se afla in blocuri diferite (in exemplul de sus, declaram un a in if si celalalt e in afara),
// // valorile acelor variabile persista cat timp se afla in acel bloc. (intre {} )


// // Const  : 

// // Variabilele declarate cu const sunt cele constante, cele pe care dorim sa ramana neschimbate/nemodificate

// // Putem declara orice tip de variabile, le putem initializa doar imediat ce le declaram.

// const a = 3;

// const b; //eroare, trebuie initializat in declaratie
// b = 5;

// //Variabilele definite cu const nu pot fi re-initializate(modificate) si nici nu pot fi redeclarate;

// const a = 3;
// console.log(a); // se afiseaza 3
// a = 5;  // eroare, nu putem da valoarea 5 lui a, care este o variabila constanta

// const a = 4; // eroare, a-ul deja a fost definit
// const a = "ABC"; // eroare, a-ul deja a fost definit


// //Variabilele declarate cu const exista doar in blocuri/sectiuni (de obicei intre {}). Astfel, se rezolva problema de a folosi 
// //aceleasi nume de variabile in codul nostru, chiar daca sunt in sectiuni de cod diferite

// const a = 3;
// const c = 4;
// function Ceva(){
//     const b = 5;
//     const c = 7;
//     console.log(b);  //5
//     console.log(a);  //3
//     console.log(c);  // 7, c-ul este vazut doar acela definit in functia Ceva()
// }
// console.log(c); //4
// Ceva(); // 5 (b), 3 (pt a)
// console.log(b); // o sa primim eroare, b-ul exista doar in interiorul functiei Ceva()

// // Ajungem la problema de alegere a aceluiasi nume al variabilelor noastre

// const a = 3;
// console.log(a); // 3
// if(1){
//     const a = 5;
//     console.log(a); // 5
// }

// console.log(a); // 3

// // sau

// const a = 3;
// console.log(a); // 3
// if(1){
//     const a = "abc";
//     console.log(a); // abc
// }

// console.log(a); // 3

// // Deci acum daca se afla in blocuri diferite (in exemplul de sus, declaram un a in if si celalalt e in afara),
// // valorile acelor variabile persista cat timp se afla in acel bloc. (intre {} )


//!Nota finala: Acum ca am aflat mai multe lucruri despre var, let si const, o sa incerc sa folosesc
//cat mai mult ceea ce e mai recomandat, adica let si const :)).

// //#endregion

// //#region  1.3. Spread operator

// // Deci spread operator-ul ne confera posibilitatea de a lista/itera toate elementele dintr-un anumit obiect/variabila.
// // Spre exemplu, daca avem un vector de n numere naturale, nu trebuie sa gasim/facem o functie anume, construita sa separe si sa
// // returneze toate elementele vectorului in sine.

// // Putem sa il folosim la concatenarea/combinarea a doua obiecte:

// let a = [1,2,3]
// let b = [4,5]

// let c = [...a,...b];
// console.log(c); // se afiseaza [ 1, 2, 3, 4, 5 ]
// console.log(c[0]); // se afiseaza primul element, 1

// let a = {
//     a1: 'a1',
//     a2: 'a2'
// }

// let b = {
//     b1: 'b1',
//     b2: 'b2'
// }

// let c = {...a,...b};

// console.log(c); // se afiseaza { a1: 'a1', a2: 'a2', b1: 'b1', b2: 'b2' }
// console.log(c['a2']); // a2

// // Atentie! Daca obiectele a si b ar avea un membru denumit la fel, in obiectul c, ramane 
// // elementul cu numele comun din ultimul obiect din declarare (in cazul de mai sus, din b)

// let a = {
//     a1: 'a1',
//     a2: 'a2',
//     d:'aaaaa'
// }

// let b = {
//     b1: 'b1',
//     b2: 'b2',
//     d:'bbbb'
// }

// let c = {...a,...b};

// console.log(c); // se afiseaza { a1: 'a1', a2: 'a2', d: 'bbbb', b1: 'b1', b2: 'b2' }
// console.log(c['a2']); // a2

// // Putem initializa niste variabile cu cateva valori dintr-o variabila, si ce ar ramane, sa fie initializate toate in alta variabila se

// let a = [1,2,3,4,5,6,7];

// let [b,c,...d] = a; // ...d se poate pune doar la final
// console.log(b); // 1
// console.log(c); // 2
// console.log(d); // restul din a

// // Putem copia doar valorile dintr-o variabila, nu doar luam o referinta si simulam copierea

// //spre exemplu
// let a = [1,2,3];
// let b = a;

// console.log(a); // [1,2,3]
// console.log(b); // [1,2,3]

// b.push(6);
// console.log(a); // [1,2,3,6]
// console.log(b); // [1,2,3,6]

// // Deci in exemplul acesta, chiar daca modificam b, se va modifica si a. Variabila b indica catre a,
// // contine referinta variabilei a, asadar, orice facem asupra lui b, s-ar intampla si lui a.

// let a = [1,2,3];
// let b = [...a];

// console.log(a); // [1,2,3]
// console.log(b); // [1,2,3]

// b.push(6);
// console.log(a); // [1,2,3]
// console.log(b); // [1,2,3,6]

// //Aici am rezolvat problema, modificam doar b, se copiaza valorile
// //putem spune ca ar fi echivalent cu o iterare a vectorului a si adaugare pe rand a valorilor iterate
// //in b

// // Ne usuram viata de a apela unele functii/metode care iau niste parametri pe care ii avem 
// //pe toti in niste variabile. Asadar, trecem mult mai rapid peste pasi, nu mai iteram variabila si preluam 
// //anumite valori si mai apoi sa apelam functia/metoda. 

// function add(a,b){
//     return a + b;
// }
// let a = [3, 2];
// console.log(add(...a)); //5
// console.log(add(a)); // 3,2 undefined


// //#endregion

// //#region 1.4. Obiecte. Deep copy

// // Obiectele sunt niste entitati ce contin una sau mai multe proprietati/unul sau mai multi membri si metodelle
// // Prin proprietati ne referim la niste asocieri dintre un nume si o valoare.Prin
// // Deci, cu alte cuvinte, obiectele sunt niste variabile ce contin o lista de variabile si metode.

// //exemplu


// //prima metoda de definire
// let a = new Object();

// a.nr1 = 3;
// a.nr2 = 5;

// console.log(a.nr1 + a.nr2);  //8

// //a doua metoda de definire
// let a = {
//     nr1: 3,
//     nr2: 5
// }
// console.log(a.nr1 + a.nr2);  //8


// //a treia metoda de definire
// let a ={};

// a.nr1 = 3;
// //sau
// a['nr2'] = 5;

// console.log(a['nr1'] + a.nr2); //8

// //obiect cu membri si metode


// let a = {
//     nr1: 3,
//     nr2: 5,
//     add: function(){
//         console.log(this.nr1 + this.nr2);
//     }
// }
// a.add();  //8

// let a = {};

// a.nr1 = 3;
// a.nr2=5;
// a.add=function(){
//     console.log(this.nr1 + this.nr2);
// }

// a.add(); // 8

// // Deep Copy

// //Oarecum am atins putin aceast subiect, indirect, la categoria de spread operator.


// // Deci, deep copy se refera la realizarea unui obiect identic cu cel pe care il dorim, 
// // insa, fara sa aiba, dupa copiere, orice alta legatura cu obiectul copiat.

// //exemplu 

// //in cazul acestor asignari a unor variabile primitive, "basic", javascript
// //face automat o copiere a datelor, b-ul primeste valoarea lui a si dupa 
// // nu mai are nicio legatura cu a

// let a = 3;

// let b = a;

// b = b+3;

// console.log(a); //3
// console.log(b); //6

// let a = "abc";

// let b = a;

// b = b + "de";

// console.log(a); //abc
// console.log(b); //abcde

// // Cand vorbim de niste variabile mai complexe, adica niste array-uri, obiecte,
// //daca pastram aceasi structura ca cea mai sus, nu creem o noua variabila ce contine
// //acele date, ci se copiaza o referinta catre obiectul pe care il vrem copiat.

// //Cu alte cuvinte, amandoua variabilele vor indica catre acceasi zona de memorie, 
// //catre aceleasi date, si orice modificare asupra uneia dintre variabile este vizibila
// //si de catre cealalta.

// let a = ['a','b','c'];

// let b = a;

// b.push('d');
// b.push('e');

// console.log(a); //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(b); //[ 'a', 'b', 'c', 'd', 'e' ]

// //se observa ca amandoua variabilele, afiseaza aceleasi date, chiar Daca
// // am adus modificari doar lui b

// //exemplul de mai sus este cunoscut si sub numele de "Shallow copying"


// // Am gasit 5 metode de a copia in sensul definit la inceput, acel deep-copy

// //a) pur si simplu asignarea, asa cum am prezentat-o putin mai sus (merge doar la variabilele primitive)

// let a = 3;

// let b = a;

// b = b+3;

// console.log(a); //3
// console.log(b); //6

// //b) prin JSON.stringify() si JSON.parse() (copiaza datele, insa nu poate copia metodele din acestea)

// let a = {
//     nr1: 32,
//     desc: "variabila a"
// }

// let b = JSON.parse(JSON.stringify(a));

// console.log(a); //{ nr1: 32, desc: 'variabila a' }
// console.log(b); //{ nr1: 32, desc: 'variabila a' }

// b.nr1 = 33;
// b.desc = "variabila b";

// console.log(a); //{ nr1: 32, desc: 'variabila a' }
// console.log(b); //{ nr1: 33, desc: 'variabila b' }

// //obiecte cu metode

// let a = {
//     nr1: 32,
//     desc: "variabila a",
//     getNr: function () { return 32;}
// }

// let b = JSON.parse(JSON.stringify(a));

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 32, desc: 'variabila a' }

// console.log(b.getNr()); //eroare, nu exista declarata metoda getNr

// b.nr1 = 33;
// b.desc = "variabila b";

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 33, desc: 'variabila b' }


// //c) prin Object.assign() (copiaza si metodele, insa daca obiectele copiate contin membri care la randul lor sunt obiecte
// //si tot asa, nu copiaza totul, in profunzime, in cazurile acelea se rezuma la copiat de referinte)

// let a = {
//     nr1: 32,
//     desc: "variabila a",
//     getNr: function () { return 32;}
// }

// let b = Object.assign({}, a);

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }

// console.log(b.getNr()); //32

// b.nr1=33;
// b.desc = "variabila b";

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 33, desc: 'variabila b', getNr: [Function: getNr] }

// //caz cu obiecte imbricate
// let a = {
//     nr1: 32,
//     nrs:{
//         nr2: 33,
//         nr3: 34
//     },
//     desc: "variabila a",
//     getNr: function () { return 32;}
// }

// let b = Object.assign({}, a);

// console.log(a); 
// /*{
//     nr1: 32,
//     nrs: { nr2: 33, nr3: 34 },
//     desc: 'variabila a',      
//     getNr: [Function: getNr]  
//   }*/
// console.log(b); 
// /*{
//     nr1: 32,
//     nrs: { nr2: 33, nr3: 34 },
//     desc: 'variabila a',      
//     getNr: [Function: getNr]  
//   }*/

// console.log(b.getNr()); //32

// b.nr1=33;
// b.desc = "variabila b";
// b.nrs.nr2 = 55;
// b.nrs.nr3 = "abc";

// console.log(a); 
// /*{
//   nr1: 32,
//   nrs: { nr2: 55, nr3: 'abc' },
//   desc: 'variabila a',
//   getNr: [Function: getNr]
// }
// */
// console.log(b); 
// /*

// {
//   nr1: 33,
//   nrs: { nr2: 55, nr3: 'abc' },
//   desc: 'variabila b',
//   getNr: [Function: getNr]
// }

// */

// // Asadar, se intampla deep copy pt primul nivel de variabile/obiecte, iar pentru al doilea nivel se intampla
// // un shallow copy

// // d) cu operatorul spread (...). Metoda preferata de copiere, simpla si usoara. Asemenea cu Object.assign(), 
// // nu se face copierea in detaliu a tuturor obiectelor din variabile imbricate

// let a = {
//     nr1: 32,
//     desc: "variabila a",
//     getNr: function () { return 32;}
// }

// let b = {...a};

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }

// console.log(b.getNr()); //32

// b.nr1=33;
// b.desc = "variabila b";

// console.log(a); //{ nr1: 32, desc: 'variabila a', getNr: [Function: getNr] }
// console.log(b); //{ nr1: 33, desc: 'variabila b', getNr: [Function: getNr] }

// //obiecte imbricate

// let a = {
//     nr1: 32,
//     nrs:{
//         nr2: 33,
//         nr3: 34
//     },
//     desc: "variabila a",
//     getNr: function () { return 32;}
// }

// let b = {...a};

// console.log(a); 
// /*{
//     nr1: 32,
//     nrs: { nr2: 33, nr3: 34 },
//     desc: 'variabila a',      
//     getNr: [Function: getNr]  
//   }*/
// console.log(b); 
// /*{
//     nr1: 32,
//     nrs: { nr2: 33, nr3: 34 },
//     desc: 'variabila a',      
//     getNr: [Function: getNr]  
//   }*/

// console.log(b.getNr()); //32

// b.nr1=33;
// b.desc = "variabila b";
// b.nrs.nr2 = 55;
// b.nrs.nr3 = "abc";

// console.log(a); 
// /*{
//   nr1: 32,
//   nrs: { nr2: 55, nr3: 'abc' },
//   desc: 'variabila a',
//   getNr: [Function: getNr]
// }
// */
// console.log(b); 
// /*

// {
//   nr1: 33,
//   nrs: { nr2: 55, nr3: 'abc' },
//   desc: 'variabila b',
//   getNr: [Function: getNr]
// }

// */

// // e) folosim metoda _.cloneDeep() din libraria Lodash 

// //aceasta metoda este capabila sa faca deep-copy recursiv, pentru toate obiectele imbricate
// //dintr-o variabila

// //exemplu preluat din documentatia lodash 
// //https://lodash.com/docs/4.17.15

// var objects = [{ 'a': 1 }, { 'b': 2 }];
 
// var deep = _.cloneDeep(objects);
// console.log(deep[0] === objects[0]); // => false


// //#endregion


// //#region 1.5. Arrays - accesor, iteration, mutator methods

// // Array -ul este o variabila care e folosita sa stocheze diferite elemente/entitati/variabile
// // Diferenta dintre array si un obiect este faptul ca nu atribuim
// // un nume  unei variabile, nu avem cheie -> valoarea
// //am inteles ca este de recomandat de lucrat doar 
// //Declarare

// let a = [1,2];
// let b = new Array(3,4);

// console.log(a); //[ 1, 2 ]
// console.log(b); //[ 3, 4 ]


// // sau
// let a = [1,2, "ab"];
// let b = new Array(3,4, "cd");

// console.log(a); //[ 1, 2, 'ab']
// console.log(b); //[ 3, 4, 'cd']

// //sau 
// let c = {
//   nr1: 13
// }
// let a = [1,2, "ab", c];
// let b = new Array(3,4, "cd", a);

// console.log(a); //[ 1, 2, 'ab', { nr1: 13 } ]
// console.log(b); // [ 3, 4, 'cd', [ 1, 2, 'ab', { nr1: 13 } ] ]


// // Spre deosebire de  obiecte unde putem accesa elementele din acesta atat printr-o proprietate(prin numele variabilei in sine) dar si 
// // ca un id de intrare (intre paranteze drepte ['nume_var']), la array putem doar printr-un id, iterator.

// //obiect
// let c = {
//   nr1: 13
// }
// console.log(c.nr1); //13
// console.log(c['nr1']); //13

// //array
// let a = [1,2, "ab"];
// console.log(a[0]); //1
// console.log(a[2]); // 'ab'

// // Putem itera, accesa elementele dintr-un array folosind 
// // numere de la 0 la lungimea array-ului (array.lenght - 1)
// let a = [1,2, "ab"];
// console.log(a.length); //3
// console.log(a[2]); // 'ab'
// console.log(a[3]); //undefined

// //Mutator methods vs Non-mutator methods

// // In cel mai simplu mod de a explica, mutator methods sunt acele
// //metode din interiorul clasei array care modifica si array-ul in sine,
// // cel initializat.
// // Non-mutator methods sunt cele care nu modifica nimic in array-ul respectiv insa
// // intorc finalitatea actiunii asupra acelui array

// //Mutator

// //cateva exemple

// let a = [1,2,3,4,5];
// console.log(a); //[ 1, 2, 3, 4, 5 ]

// a.push(7); //metoda push
// console.log(a); //[ 1, 2, 3, 4, 5, 7 ]

// a.reverse(); //metoda reverse
// console.log(a); //[ 7, 5, 4, 3, 2, 1 ]

// //se observa ca se modifica array-ul initial

// //Non-mutator

// let a = [1,2]; 
// let b = [9,19,12];

// let c = a.concat(b); //metoda concat
// console.log(c); //[ 1, 2, 9, 19, 12 ]
// console.log(a); //[ 1, 2 ]
// console.log(b); //[ 9, 19, 12 ]

// let d = a.includes(3); //metoda includes
// console.log("Contine a pe 3? " + d); //Contine a pe 3? false

// //se observa ca nu sunt aduse schimbari asupra niciunui array
// // la metodele non-mutator

// //#endregion

//Urmatoarele sectiuni sunt destul de ample si cred ca e mult
//mai mult de studiu pentru a le intelege pe toate, cu adevarat.
// O sa incerc sa le inteleg cat mai bine, sa explic ce am inteles
// si sper eu sa acopar destule concepte.

//#region 1.6. Promise. Callback.

//Deci, cum ii spune si numele, Promise este promisiunea de a se intampla ceva,
//de a primi ceva, candva, in urma unei actiuni.


// Promisiunea reprezinta terminarea unor actiuni, asincron. 
//Returneaza o valoare in functie de rezultat (daca promisiunea a fost ignorata sau rezolvata).


// Promisiunea exista in 3 stadii:
// Pending : "Inca nu s-a promis nimic", adica inca nu a ajuns sa se execute functia din promisiune.
// Fullfilled: Intreaga promisiune s-a efectuat.
// Rejected: Erori aparute in timpul executiei promisiunii.

//Promisiunile se definesc cu ajutorul clasei Promise

//let promise = new Promise(function(resolve, reject) {})

//Promisiunea primeste ca argumente functiile resolve si rejected
// si returneaza fie rezultatul primei functii, fie pe al doilea

// let aPromise = new Promise(function(resolve, reject){
//   let a = 5;

//   if(a==3){
//     resolve("Succes!");
//   }
//   else{
//     reject("Esec!");
//   }
// })

// aPromise.then(//unde x este rezultatul intors de promisiune
//   function(x){ 
//      console.log(x); //succes
//   },
//   function(x){ 
//   console.log(x)} //esec
//             )

//Promisiunea are urmatoarele metode care efectuaza actiuni cu rezultatul intors de promisiune a
//.then() - care preia rezultatul intors de promisiune, si in functie daca este rezolvata sau respinsa, apeleaza functiile definite in acestea

//sintaxa: promisiune.then(
//     functie_pt_reusita(in care ii dam si valoarea returnata sau nu),
//     functie_pt_esec(in care ii dam si valoarea returnata sau nu)
// );

//un exemplu cu acest tip 

// let aPromise = new Promise(function(resolve, reject){
//   let a = 5;

//   if(a==3){
//     resolve("Succes!");
//   }
//   else{
//     reject("Esec!");
//   }
// })

// aPromise.then(//unde x este rezultatul intors de promisiune
//   function(x){ 
//      console.log(x); //succes
//   },
//   function(x){ 
//   console.log(x)} //esec
//             )

// .catch() - modalitatea de a rezolva erori sau esecuri ale promisiunii

// let aPromise = new Promise(function(resolve, reject){
//   let a = 5;

//   if(a==3){
//     resolve("Succes!");
//   }
//   else{
//     reject("Esec!");
//   }
// })

// aPromise.then(//unde x este rezultatul intors de promisiune
//   function(x){ 
//      console.log(x); //succes
//   })
//         .catch(function(x){ 
//               console.log(x); //esec
//         })

//se va afisa esec
//daca la exemplul cu metoda then, punem la parametri in metoda then doar o functie, 
//in momentul cand promisiunea esuaza, nu exista o functie care sa se ocupe de fail


// .resolve() si .reject()   - ne returneaza un pointer cu un obiect Promise terminat/ esuat 

// Promise.resolve('Succes').then(function(val) {  
//   console.log(val);  
// }, function(val) {  
// });  

// Promise.reject('Esuat').then(function(val) {  }, function(val) {  console.log(val);  });  


// Callback

// Prin callback-uri manageriem executia unei functii dupa ce alta functie s-a terminator
// De obicei sunt folosite cand lucram cu event-uri
// Callback-urile sunt niste functii trimise ca argumente catre alte functii

// function sayHello(x){
//   console.log(x);
// }

// function functie(x){
  
//  sayHello(x);
// }

// function functie2(sayHello){
//   console.log("Hei hei");
// }

// functie("Salut");
// functie2();

//este o apelare recursiva a functiilor

//#endregion


//#region 1.7.  Async. Await. 

//Cu async ne asiguram ca nu mai asteptam dupa executia unei functii, trecem mai departe, 
// functia terminandu-se candva, cand reuseste

//async face ca o functie sa returneze o promisiune
// pornind de la exemplul cu promisiunea:


// let aPromise = new Promise(function(resolve, reject){
//   let a = 5;

//   if(a==3){
//     resolve("Succes!");
//   }
//   else{
//     reject("Esec!");
//   }
// })

// aPromise.then(//unde x este rezultatul intors de promisiune
//   function(x){ 
//      console.log(x); //succes
//   },
//   function(x){ 
//   console.log(x)} //esec
//             )

//cu async 

// async function myFunc(){
//   let a = 5;
//   if(a==3){
//     return "Succes";
//   }
//   else{
//     return "Esec";
//   }
// }

// console.log(myFunc());  //Promise { 'Esec' }

//deci putem sa continuam si cu o metoda de a prelua informatia data de functie

// myFunc().then(function(x){console.log(x)}).catch(function(err){console.log(err)});  //esec

// await inainte de o functie o face pe aceasta sa astepte dupa o promisiune (poate fi folosit doar in interiorul unei functii async)
 
// async function myFunc(){
//   let a = 3;
//   if(a==3){
//     return "Succes1";
//   }
//   else{
//     return "Esec1";
//   }
// }

// async function myFunc2(){
//   let a = 3;
//   let rez = await myFunc();
//   if(a==3){
//     return rez;
//   }
//   else{
//     return "Esec2";
//   }
// }

// myFunc2().then(function(x){console.log(x)}).catch(function(err){console.log(err)}); 


//#endregion


//#region 1.8. Closures

// Closures este o colectie de variabile aflate intr-o functie ce ne permite sa securizam anumite date (privatizam) si sa dam
// acces doar la anumite functii sa le acceseze

//ca o paralela, le putem compara cu o clasa din C, unde closure simuleaza aceasta clasa, in care avem membrii privati si doar 
//functiile din aceasta clasa pot lucra cu acestia.

// let app = (function () {
//   //membri privati

//   let a = 3;
//   let b = 5;
//   let suma = 0;
//   function add(){
//     suma = suma + a + b;
//     return suma;
//   }
//   return add;

// })();

// let a = app(); 
// console.log(a); //8
// a = app();
// console.log(a); //16
// a = app();
// console.log(a); //24

// Closures au venit si ca solutie pentru rezolvarea problemei redenumirii variabilelor cu var
// cu acestea ne asiguram ca nu modifica nimeni nicio valoare din interiorul functiei, doar functiile publice, care pot fi apelate

//#endregion

