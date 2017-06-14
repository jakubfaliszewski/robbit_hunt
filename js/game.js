// definiowanie
var r1none = document.getElementById("robbit1").style.pointerEvents = "none";
var r2none = document.getElementById("robbit2").style.pointerEvents = "none";
var r3none = document.getElementById("robbit3").style.pointerEvents = "none";
var r4none = document.getElementById("robbit4").style.pointerEvents = "none";
var robbit1=document.getElementById("robbit1");
var robbit2=document.getElementById("robbit2");
var robbit3=document.getElementById("robbit3");
var robbit4=document.getElementById("robbit4");
var content=document.getElementById("content");
var point=document.getElementById("pointvalue");
var pointvalue=point.value;
pointvalue = 0;
var bullet=document.getElementById("bulletvalue");
var bulletvalue=bullet.value;
bulletvalue = 20;

// losowanie robbitow
function GameIsOn()
{
    var time=200;
    var random=Math.random();
    if(random<=0.25)
    {
        robbit1.style.pointerEvents = "auto";
        $("#robbit1").animate
        ({
          top: "-=100px",
          left: "+=20px"
        }, "fast").delay(time).animate
        ({
          top: "+=100px",
          left: "-=20px",
        }, "fast");
        setTimeout(function(){robbit1.style.pointerEvents = "none";}, 800);
    }
      else if(random>0.25 && random<=0.50)
      {
          robbit2.style.pointerEvents = "auto";
          $("#robbit2").animate
          ({
            top: "-=100px",
            left: "-=20px"
          }, "fast").delay(time).animate
          ({
            top: "+=100px",
            left: "+=20px"
          }, "fast");
          setTimeout(function(){robbit2.style.pointerEvents = "none";}, 800);
      }
        else if(random>0.50 && random<=0.75)
        {
            robbit3.style.pointerEvents = "auto";
            $("#robbit3").animate
            ({
              top: "-=100px",
              left: "+=40px"
            }, "fast").delay(time).animate
            ({
              top: "+=100px",
              left: "-=40px"
            }, "fast");
            setTimeout(function(){robbit3.style.pointerEvents = "none";}, 800);
        }
          else if(random>0.75)
          {
              robbit4.style.pointerEvents = "auto";
              $("#robbit4").animate
              ({
                top: "-=110px",
                left: "-=40px"
              }, "fast").delay(time).animate
              ({
                top: "+=110px",
                left: "+=40px"
              }, "fast");
              setTimeout(function(){robbit4.style.pointerEvents = "none";}, 800);
            }
}

// podsumowanie

function sum()
{

  document.getElementById("end").style.display="block";
  document.getElementById("sumup").innerHTML = (pointvalue+" points and "+bulletvalue+" bullets left<br/> accuracy: "+Math.round(pointvalue/20*100)+"%");
}

// system punktowania

$("button").click(function pointsystem()
{
  function pointup()
  {
    pointvalue++;
    document.getElementById("pointvalue").innerHTML = pointvalue;
    if(pointvalue>=20)
    {
      clearInterval(start);
      sum();
    }
  }

  robbit1.onmousedown=pointup;
  robbit2.onmousedown=pointup;
  robbit3.onmousedown=pointup;
  robbit4.onmousedown=pointup;

  content.onmouseup=bulletdown;
  function bulletdown()
  {
    if (bulletvalue!==0)
    {
      bulletvalue--;
    }
    document.getElementById("bulletvalue").innerHTML = bulletvalue;
    if(bulletvalue<=0)
    {
      clearInterval(start);
      sum();
    }
  }
});


// new game

$(document).ready(function()
{
    $("button").click(function()
    {
        $(this).hide();
        start = setInterval(GameIsOn, 800);
    });

});


// loading
$(window).ready(function()
{
  $("#loading").delay(1000).fadeOut("slow");;
});
