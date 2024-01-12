// const color = prompt('ghjk').toLowerCase()

// switch(color){
//    case 'qizil':
//     console.log("To'xta");
//     break;
//   case 'sariq':
//     console.log("Tayorlan");
//     break;
//   case 'yashil':
//     console.log("yur");
//     break;
//   default:
//     console.log("notogri rang kiritildi");

// }

// const fruits = ["Nok" , "Nok" , "Banan" , "Olma",  "Shoptoli" , "Chingiz"];

// for(const meva of fruits){
//     console.log(meva);
// }

// for (let index = 0; index <= 100; index++) {
//     console.log(index);
// }

// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
// }

// const userName = +prompt("son kiriting");

// if(!userName){
//     console.log("juft");
// }else{
//     console.log("toq");
// }

// console.log("2" !==  2);

// const userName = +prompt("son kiriting");

// switch (userName) {
//   case 1:
//     console.log("Dsh");
//     break;
//   case 2:
//     console.log("ssh");
//     break;
//   case 3:
//     console.log("ch");
//     break;
//   case 4:
//     console.log("psh");
//     break;
//   case 5:
//     console.log("j");
//     break;
//   case 6:
//     console.log("sh");
//     break;
//   case 7:
//     console.log("yak");
//     break;
//   default:
//     console.log("error");
// }

const konopkaBtn = document.querySelector(".btn")

konopkaBtn.addEventListener("click" , ()=> {
    document.body.classList.toggle("rang")
})



