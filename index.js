let boxes = document.getElementsByClassName("box");
var count = 1;

for (box of boxes) {
  box.addEventListener("click", (e) => {
    if (count <= 9) {
      if (e.target.innerText == "X" || e.target.innerText == "O") {
        alert("Box already marked");
      } else {
        if (count % 2 == 0) {
          e.target.innerText = "O";
          count++;
          if (checkWinner()) {
              alert("Player 2 won");
                setTimeout(() => {
                    location.reload();
                }, 2000); 
          }
        } else {
          e.target.innerText = "X";
          count++;
          if (checkWinner()) {
            alert("Player 1 won");
              setTimeout(() => {
                  location.reload();
              }, 2000); 
        }
        }
      }
    } else {
        alert("match draw");
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
  });
}

function checkWinner() {
  if (checkRow() || checkCol() || checkDiag()) {
    console.log("Inside");
    return true;
  }
}
function getId(id) {
  return document.getElementById(`${id}`).innerText;
}
function checkRow() {
  if (
    (getId("box1") == getId("box2") &&
      getId("box2") == getId("box3") &&
      getId("box1") != "" &&
      getId("box2") != "" &&
      getId("box3") != "") ||
    (getId("box4") == getId("box5") &&
      getId("box5") == getId("box6") &&
      getId("box4") != "" &&
      getId("box5") != "" &&
      getId("box6") != "") ||
    (getId("box7") == getId("box8") &&
      getId("box8") == getId("box9") &&
      getId("box7") != "" &&
      getId("box8") != "" &&
      getId("box9") != "")
  ) {
    console.log("row true");

    return true;
  } else {
    return false;
  }
}
function checkCol() {
  if (
    (getId("box1") == getId("box4") &&
      getId("box4") == getId("box7") &&
      getId("box1") != "" &&
      getId("box4") != "" &&
      getId("box7") != "") ||
    (getId("box2") == getId("box5") &&
      getId("box5") == getId("box8") &&
      getId("box2") != "" &&
      getId("box5") != "" &&
      getId("box8") != "") ||
    (getId("box3") == getId("box6") &&
      getId("box6") == getId("box9") &&
      getId("box3") != "" &&
      getId("box6") != "" &&
      getId("box9") != "")
  ) {
    console.log("col true");
    return true;
  } else {
    return false;
  }
}
function checkDiag() {
  if (
    (getId("box1") == getId("box5") &&
      getId("box5") == getId("box9") &&
      getId("box1") != "" &&
      getId("box5") != "" &&
      getId("box9") != "") ||
    (getId("box3") == getId("box5") &&
      getId("box5") == getId("box7") &&
      getId("box3") != "" &&
      getId("box5") != "" &&
      getId("box7") != "")
  ) {
    console.log("diag true");
    return true;
  } else {
    return false;
  }
}
