let cat = document.querySelector("#qqa");
let hole = document.querySelector("#middle")
let topCalc = 30;
let leftCalc = 45;
let rightCalc = 45;
let counter = 0;
cat.style.position = "absolute";
cat.style.width = "100px";
cat.style.left = "0vw";
//cat.style.right = "0%";
cat.style.top = "30vh";
cat.alt = 1;
hole.style.left = rightCalc;
counter = 0;


let innerFuncAcrossLeft = function(){
  let pos = parseInt(cat.style.left);
  pos += 1;
  cat.style.left = pos + "vw";
  if(pos === rightCalc){
    clearInterval(catWalk);
    return catWalkDown = setInterval(innerFuncDownLeft,5)
  }
};

let innerFuncDownLeft = function(){
  let pos = parseInt(cat.style.top);
  let col = 1;
  pos += 1;
  col -= 0.91;
  cat.style.top = pos + "vh";
  cat.style.opacity = col;
  if(counter % 4 === 0){
    document.body.style.backgroundImage = "url(img/catDrop.gif)";
  }
  else{
    document.body.style.backgroundImage = "";
  }
  cat.id = "";
  cat.alt = Math.floor(Math.random() * 10);
  //console.log("This is alt:" + cat.alt);
  if(pos === 90){
    clearInterval(catWalkDown);
  //  let cat = document.querySelector("#qqa");
    cat.style.transform = "scaleX(-1)";
    cat.style.width = "100px";
    cat.style.position = "absolute";
    cat.style.right = "0vw";
    cat.style.left = "";
    cat.style.opacity = 1;
    cat.id = "qqa";
    topCalc = Math.floor(Math.random() * 100);
    if(topCalc > 90){
      topCalc = topCalc - 10;
    }else if(topCalc < 10){
      topCalc = topCalc + 10;
    }
    leftCalc = Math.floor(Math.random() * 100);
    const leftTest = leftCalc;
    leftCalc = leftTest;
    if(leftCalc > 90){
      leftCalc = leftCalc - 10;
    }else if(leftCalc < 10){
      leftCalc = leftCalc + 10;
    }
    cat.style.top = topCalc + "vh";
    hole.style.top = (topCalc + 5) + "vh";
    hole.style.left = (100 - (leftCalc + 10)) + 'vw';
    counter ++;
    catWalk = setInterval(innerFuncAcrossRight,100);
   }
  //   const catWalk = setInterval(i
};

let innerFuncAcrossRight = function(){
  let pos = parseInt(cat.style.right);
  pos += 1;
  cat.style.right = pos + "vw";
  if(pos === leftCalc){
    clearInterval(catWalk);
    return catWalkDown = setInterval(innerFuncDownRight,5)
  }
};

let innerFuncDownRight = function(){
  let pos = parseInt(cat.style.top);
  let col = 1;
  pos += 1;
  col -= 0.91;
  cat.style.top = pos + "vh";
  cat.style.opacity = col;
  if(counter % 4 === 0){
    document.body.style.backgroundImage = "url(img/catDrop.gif)";
  }
  else{
    document.body.style.backgroundImage = "";
  }
  cat.id = "";
  cat.alt = Math.floor(Math.random() * 10);
//  console.log("This is alt:" + cat.alt);
  if(pos === 90){
    clearInterval(catWalkDown);
  //  let cat = document.querySelector("#qqa");
    cat.style.transform = "scaleX(1)";
     cat.style.width = "100px";
     cat.style.position = "absolute";
     cat.style.left = "0vw";
     cat.style.right = "";
     topCalc = Math.floor(Math.random() * 100);
     if(topCalc > 90){
       topCalc = topCalc - 10;
     }else if(topCalc < 10){
       topCalc = topCalc + 10;
     }
     rightCalc = Math.floor(Math.random() * 100);
     const rightTest = rightCalc;
     rightCalc = rightTest;
     if(rightCalc > 90){
       rightCalc = rightCalc - 10;
     }else if(rightCalc < 10){
       rightCalc = rightCalc + 10;
     }
     cat.style.top = topCalc + "vh";
     hole.style.top = (topCalc + 5) + "vh";
     hole.style.left = rightCalc + "vw";
     cat.style.opacity = 1;
     cat.id = "qqa";
     counter++;
     catWalk = setInterval(innerFuncAcrossLeft,100);
   }
  //   const catWalk = setInterval(i
};

let catWalk = setInterval(innerFuncAcrossLeft,100);

//working version 4
// let cat = document.querySelector("#qqa");
// let hole = document.querySelector("#middle")
// let topCalc = 30;
// let leftCalc = 45;
// let rightCalc = 45;
// cat.style.position = "absolute";
// cat.style.width = "100px";
// cat.style.left = "0vw";
// //cat.style.right = "0%";
// cat.style.top = "30vh";
// cat.alt = 1;
// hole.style.left = rightCalc;
//
//
// let innerFuncAcrossLeft = function(){
//   let pos = parseInt(cat.style.left);
//   pos += 1;
//   cat.style.left = pos + "vw";
//   if(pos === rightCalc){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownLeft,5)
//   }
// };
//
// let innerFuncDownLeft = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "vh";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
//   //console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(-1)";
//     cat.style.width = "100px";
//     cat.style.position = "absolute";
//     cat.style.right = "0vw";
//     cat.style.left = "";
//     cat.style.opacity = 1;
//     cat.id = "qqa";
//     topCalc = Math.floor(Math.random() * 100);
//     if(topCalc > 90){
//       topCalc = topCalc - 10;
//     }else if(topCalc < 10){
//       topCalc = topCalc + 10;
//     }
//     leftCalc = Math.floor(Math.random() * 100);
//     const leftTest = leftCalc;
//     leftCalc = leftTest;
//     if(leftCalc > 90){
//       leftCalc = leftCalc - 10;
//     }else if(leftCalc < 10){
//       leftCalc = leftCalc + 10;
//     }
//     cat.style.top = topCalc + "vh";
//     hole.style.top = (topCalc + 5) + "vh";
//     hole.style.left = (100 - (leftCalc + 10)) + 'vw';
//     catWalk = setInterval(innerFuncAcrossRight,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let innerFuncAcrossRight = function(){
//   let pos = parseInt(cat.style.right);
//   pos += 1;
//   cat.style.right = pos + "vw";
//   if(pos === leftCalc){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownRight,5)
//   }
// };
//
// let innerFuncDownRight = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "vh";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
// //  console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(1)";
//      cat.style.width = "100px";
//      cat.style.position = "absolute";
//      cat.style.left = "0vw";
//      cat.style.right = "";
//      topCalc = Math.floor(Math.random() * 100);
//      if(topCalc > 90){
//        topCalc = topCalc - 10;
//      }else if(topCalc < 10){
//        topCalc = topCalc + 10;
//      }
//      rightCalc = Math.floor(Math.random() * 100);
//      const rightTest = rightCalc;
//      rightCalc = rightTest;
//      if(rightCalc > 90){
//        rightCalc = rightCalc - 10;
//      }else if(rightCalc < 10){
//        rightCalc = rightCalc + 10;
//      }
//      cat.style.top = topCalc + "vh";
//      hole.style.top = (topCalc + 5) + "vh";
//      hole.style.left = rightCalc + "vw";
//      cat.style.opacity = 1;
//      cat.id = "qqa";
//      catWalk = setInterval(innerFuncAcrossLeft,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let catWalk = setInterval(innerFuncAcrossLeft,100);
//const catWalkDown = setInterval(innerFuncDown,5);

//console.log(cat.alt);
//working code v3
// let cat = document.querySelector("#qqa");
// let hole = document.querySelector("#middle")
// let topCalc = 30;
// let leftCalc =
// cat.style.position = "absolute";
// cat.style.width = "100px";
// cat.style.left = "0%";
// //cat.style.right = "0%";
// cat.style.top = "30%";
// cat.alt = 1;
//
//
// let innerFuncAcrossLeft = function(){
//   let pos = parseInt(cat.style.left);
//   pos += 1;
//   cat.style.left = pos + "%";
//   //console.log(pos);
//   if(pos === 45){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownLeft,5)
//   }
// };
//
// let innerFuncDownLeft = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "%";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
//   //console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(-1)";
//     cat.style.width = "100px";
//     cat.style.position = "absolute";
//     cat.style.right = "0%";
//     cat.style.left = "";
//     cat.style.opacity = 1;
//     cat.id = "qqa";
//     topCalc = Math.floor(Math.random() * 100);
//     if(topCalc > 90){
//       topCalc = topCalc - 10;
//     }else if(topCalc < 10){
//       topCalc = topCalc + 10;
//     }
//     cat.style.top = topCalc + "%";
//     hole.style.top = (topCalc + 5) + "%";
//     console.log(topCalc);
//     catWalk = setInterval(innerFuncAcrossRight,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let innerFuncAcrossRight = function(){
//   let pos = parseInt(cat.style.right);
//   pos += 1;
//   cat.style.right = pos + "%";
// //  console.log(pos);
//   if(pos === 45){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownRight,5)
//   }
// };
//
// let innerFuncDownRight = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "%";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
// //  console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(1)";
//      cat.style.width = "100px";
//      cat.style.position = "absolute";
//      cat.style.left = "0%";
//      cat.style.right = "";
//      topCalc = Math.floor(Math.random() * 100);
//      if(topCalc > 90){
//        topCalc = topCalc - 10;
//      }else if(topCalc < 10){
//        topCalc = topCalc + 10;
//      }
//      cat.style.top = topCalc + "%";
//      hole.style.top = (topCalc + 5) + "%";
//      cat.style.opacity = 1;
//      cat.id = "qqa";
//      catWalk = setInterval(innerFuncAcrossLeft,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let catWalk = setInterval(innerFuncAcrossLeft,100);
// //const catWalkDown = setInterval(innerFuncDown,5);
//
// console.log(cat.alt);

//working code v2
// let cat = document.querySelector("#qqa");
// let hole = document.querySelector("#middle")
// cat.style.position = "absolute";
// cat.style.width = "100px";
// cat.style.left = "0%";
// //cat.style.right = "0%";
// cat.style.top = "30%";
// cat.alt = 1;
//
// let innerFuncAcrossLeft = function(){
//   let pos = parseInt(cat.style.left);
//   pos += 1;
//   cat.style.left = pos + "%";
//   console.log(pos);
//   if(pos === 45){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownLeft,5)
//   }
// };
//
// let innerFuncDownLeft = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "%";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
//   console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(-1)";
//     cat.style.width = "100px";
//     cat.style.position = "absolute";
//     cat.style.right = "0%";
//     cat.style.left = "";
//     cat.style.top = "30%";
//     cat.style.opacity = 1;
//     cat.id = "qqa";
//     catWalk = setInterval(innerFuncAcrossRight,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let innerFuncAcrossRight = function(){
//   let pos = parseInt(cat.style.right);
//   pos += 1;
//   cat.style.right = pos + "%";
//   console.log(pos);
//   if(pos === 45){
//     clearInterval(catWalk);
//     return catWalkDown = setInterval(innerFuncDownRight,5)
//   }
// };
//
// let innerFuncDownRight = function(){
//   let pos = parseInt(cat.style.top);
//   let col = 1;
//   pos += 1;
//   col -= 0.91;
//   cat.style.top = pos + "%";
//   cat.style.opacity = col;
//   cat.id = "";
//   cat.alt = Math.floor(Math.random() * 10);
//   console.log("This is alt:" + cat.alt);
//   if(pos === 90){
//     clearInterval(catWalkDown);
//   //  let cat = document.querySelector("#qqa");
//     cat.style.transform = "scaleX(1)";
//      cat.style.width = "100px";
//      cat.style.position = "absolute";
//      cat.style.left = "0%";
//      cat.style.right = "";
//      cat.style.top = "30%";
//      cat.style.opacity = 1;
//      cat.id = "qqa";
//      catWalk = setInterval(innerFuncAcrossLeft,100);
//    }
//   //   const catWalk = setInterval(i
// };
//
// let catWalk = setInterval(innerFuncAcrossLeft,100);
// //const catWalkDown = setInterval(innerFuncDown,5);
//
// console.log(cat.alt);


  // //working code
  // cat.style.position = "absolute";
  // cat.style.width = "100px";
  // cat.style.left = "0%";
  // //cat.style.right = "0%";
  // cat.style.top = "30%";
  // let i = 0;
  // const catWalk = setInterval(function(){
  //   let pos = parseInt(cat.style.left);
  //   pos += 1;
  //   cat.style.left = pos + "%";
  //   console.log(pos);
  //   i++;
  //   if(pos === 45){
  //     clearInterval(catWalk);
  //     const catWalkDown = setInterval(function(){
  //       let pos = parseInt(cat.style.top);
  //       let col = 1;
  //       pos += 1;
  //       col -= 0.91;
  //       cat.style.top = pos + "%";
  //       cat.style.opacity = col;
  //       console.log(0);
  //       i++
  //       if(pos === 90){
  //         clearInterval(catWalkDown);
  //          const nextCat = document.createElement("img");
  //          nextCat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
  //          cat.id = "";
  //          nextCat.style.width = "100px";
  //          nextCat.style.position = "absolute";
  //          nextCat.style.left = "0%";
  //          nextCat.style.top = "30%";
  //          nextCat.id = "qqa";
  //          document.body.appendChild(nextCat);
  //          catWalk;
  //       }
  //     },5);
  //   }
  // },100);
