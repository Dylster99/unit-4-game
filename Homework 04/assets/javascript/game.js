const crystal = {
    red:
    {
      name: "Redcrystal",
      value: 0
    },
    blue:
    {
      name: "Bluecrystal",
      value: 0
    },
    yellow:
    {
      name: "Yellowcrystal",
      value: 0
    },
    green:
    {           
      name: "Greencrystal",
      value: 0
    }
  };
  
  let YourScore = 0;
  let TargetScore = 0;
  let Wincounter = 0;
  let Losscounter = 0;
  
  function Getnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  function StartGame() {
  
    TargetScore = Getnumber(20, 80);
    console.log(TargetScore)
    YourScore = 0;
    crystal.red.value = Getnumber(1, 12);
    crystal.blue.value = Getnumber(1, 12);
    crystal.yellow.value = Getnumber(1, 12);
    crystal.green.value = Getnumber(1, 12);

    $("#targetscore").text(TargetScore);
    $("#yourscore").text(YourScore);
  
  };

  function wincondition() {
  
    if (YourScore > TargetScore) {

      Losscounter++;
  
      $("#losscounter").text(Losscounter);
  
      StartGame();
    }
  
    else if (YourScore === TargetScore) {
  
      Wincounter++;

      $("#wincounter").text(Wincounter);
  
      StartGame();
    }
  
  };
  
  StartGame();
  
  $("#red").click(function() {
    YourScore += crystal.red.value;
  
    $("#yourscore").text(YourScore);
 
    wincondition();
    console.log(this)
    console.log(crystal.red.value)
  });

  $("#blue").click(function() {
    
    YourScore += crystal.blue.value;
  
    $("#yourscore").text(YourScore);
 
    wincondition();
  });
  
  $("#yellow").click(function() {

    YourScore += crystal.yellow.value;
  
    $("#yourscore").text(YourScore);
 
    wincondition();
  });
  
  $("#green").click(function() {

    YourScore += crystal.green.value;
  
    $("#yourscore").text(YourScore);
 
    wincondition();
  });
  