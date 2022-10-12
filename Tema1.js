// 1.1. ES6 - Metode (exemple, explicatii).
// 1.2. Diferenta dintre var, let, const.
// 1.3. Spread operator.
// 1.4. Obiecte. Cum se itereaza un obiect, deep copy.
// 1.5. Arrays - accesor, iteration, mutator methods (care sunt, cum se folosesc).
// 1.6. Promise. Callback.
// 1.7. Async. Await. 
// 1.8. Closures.


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



