let cat = document.querySelector("#qqa");
cat.style.position = "absolute";
cat.style.width = "100px";
cat.style.left = "0%";
//cat.style.right = "0%";
cat.style.top = "30%";
cat.alt = 1;

let innerFuncAcrossLeft = function(){
  let pos = parseInt(cat.style.left);
  pos += 1;
  cat.style.left = pos + "%";
  console.log(pos);
  if(pos === 45){
    clearInterval(catWalk);
    return catWalkDown = setInterval(innerFuncDownLeft,5)
  }
};

let innerFuncDownLeft = function(){
  let pos = parseInt(cat.style.top);
  let col = 1;
  pos += 1;
  col -= 0.91;
  cat.style.top = pos + "%";
  cat.style.opacity = col;
  cat.id = "";
  cat.alt = Math.floor(Math.random() * 10);
  console.log("This is alt:" + cat.alt);
  if(pos === 90){
    clearInterval(catWalkDown);
  //  let cat = document.querySelector("#qqa");
    cat.style.transform = "scaleX(-1)";
     cat.style.width = "100px";
     cat.style.position = "absolute";
     cat.style.right = "0%";
     cat.style.left = "";
     cat.style.top = "30%";
     cat.style.opacity = 1;
     cat.id = "qqa";
     catWalk = setInterval(innerFuncAcrossRight,100);
   }
  //   const catWalk = setInterval(i
};

let innerFuncAcrossRight = function(){
  let pos = parseInt(cat.style.right);
  pos += 1;
  cat.style.right = pos + "%";
  console.log(pos);
  if(pos === 45){
    clearInterval(catWalk);
    return catWalkDown = setInterval(innerFuncDownRight,5)
  }
};

let innerFuncDownRight = function(){
  let pos = parseInt(cat.style.top);
  let col = 1;
  pos += 1;
  col -= 0.91;
  cat.style.top = pos + "%";
  cat.style.opacity = col;
  cat.id = "";
  cat.alt = Math.floor(Math.random() * 10);
  console.log("This is alt:" + cat.alt);
  if(pos === 90){
    clearInterval(catWalkDown);
  //  let cat = document.querySelector("#qqa");
    cat.style.transform = "scaleX(1)";
     cat.style.width = "100px";
     cat.style.position = "absolute";
     cat.style.left = "0%";
     cat.style.right = "";
     cat.style.top = "30%";
     cat.style.opacity = 1;
     cat.id = "qqa";
     catWalk = setInterval(innerFuncAcrossLeft,100);
   }
  //   const catWalk = setInterval(i
};

let catWalk = setInterval(innerFuncAcrossLeft,100);
//const catWalkDown = setInterval(innerFuncDown,5);

console.log(cat.alt);










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
