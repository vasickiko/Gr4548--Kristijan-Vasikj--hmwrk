const studenti = [
  { ime: "Bojan", prosek: 7.5, grad: "Skopje" },
  { ime: "Pero", prosek: 8.3, grad: "Bitola" },
  { ime: "Janko", prosek: 6.9, grad: "Bitola" },
  { ime: "Vesna", prosek: 9.2, grad: "Skopje" },
  { ime: "Elena", prosek: 9.9, grad: "Kumanovo" },
  { ime: "Vancho", prosek: 10, grad: "Tetovo" },
  { ime: "Elena", prosek: 9.9, grad: "Ohrid" },
  { ime: "Ivana", prosek: 6.9, grad: "Kumanovo" },
  { ime: "Natasha", prosek: 8.1, grad: "Skopje" },
  { ime: "Stanko", prosek: 7.2, grad: "Strumica" },
];

// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).

const filteredArray= studenti.filter((student)=>
    student.ime.endsWith("a") &&
    student.prosek > 7 &&
    student.grad === "Skopje"
).sort((a,b) => a.ime - b.ime);

console.log("Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки) -->",filteredArray);


// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.

const filteredArrayTwo = studenti.filter((student)=>
    student.prosek > 9 &&
    student.grad !== "Skopje" 
).sort((a, b) => b.prosek - a.prosek )

console.log("Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки -->", filteredArrayTwo);

// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.

const filteredArrayThree = studenti.filter((student)=>
    student.ime.length === 5 
)
.slice(0, 3)
.sort((a ,b) => b.prosek - a.prosek)

console.log("Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек -->", filteredArrayThree)

// ===================================================================================================
// 4. Градови подредени по групна висина на просек.

const sumPerCity = studenti.reduce(
  (acc, student) => {
    if (!acc[student.grad]) {
      acc[student.grad] = 0; 
    }
    acc[student.grad] += student.prosek;
    return acc;
  },
  {}
);

console.log("Gradovi podredeni po grupna visina na prosek -->", sumPerCity)

// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

const sumProsek = studenti.reduce(
  (acc, student) => {
    if (student.ime.endsWith("a")) {
      acc.a += student.prosek;
    } else {
      acc.b += student.prosek;
    }
    return acc;
  },
  { a: 0, b: 0 }
);

console.log("Prosek na studenti cie ime zavrsuva na A -->", sumProsek.a);
console.log("Prosek na studenti cie ime ne zavrsuva na A -->", sumProsek.b);
