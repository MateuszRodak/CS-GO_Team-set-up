var actualMap = "de_mirage"

function de_dust2()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    document.getElementById("de_dust2").style.display = "block"
    actualMap = "de_dust2"
    document.getElementById("mapNameOnTop").innerText = actualMap;
    
}

function de_mirage()
{
    document.getElementById("de_mirage").style.display = "block"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_mirage"
    document.getElementById("mapNameOnTop").innerText = actualMap;
}

function de_train()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "block"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_train"
    document.getElementById("mapNameOnTop").innerText = actualMap;
}

function de_cache()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "block"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_cache"
    document.getElementById("mapNameOnTop").innerText = actualMap;
}

function de_inferno()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "block"
    actualMap = "de_inferno"
     document.getElementById("mapNameOnTop").innerText = actualMap;
}

function set_up()
{ 
    var randomNumberA,randomNumberB,randomNumberC,randomNumberD,randomNumberE
    var mapCollectionOfPoints = document.getElementsByClassName(actualMap);

    randomNumberA=Math.floor(Math.random() * mapCollectionOfPoints.length);
    randomNumberB=Math.floor(Math.random() * mapCollectionOfPoints.length);
    while(randomNumberB==randomNumberA)
    {
        randomNumberB=Math.floor(Math.random() * mapCollectionOfPoints.length);
    }
    randomNumberC=Math.floor(Math.random() * mapCollectionOfPoints.length);
    while(randomNumberC==randomNumberB || randomNumberC== randomNumberA)
    {
        randomNumberC=Math.floor(Math.random() * mapCollectionOfPoints.length);
    }
    var randomNumberD=Math.floor(Math.random() * mapCollectionOfPoints.length);
    while(randomNumberD==randomNumberC || randomNumberD==randomNumberB || randomNumberD== randomNumberA)
    {
        randomNumberD=Math.floor(Math.random() * mapCollectionOfPoints.length);
    }
    var randomNumberE=Math.floor(Math.random() * mapCollectionOfPoints.length);
    while(randomNumberE==randomNumberD || randomNumberE==randomNumberC || randomNumberE==randomNumberB || randomNumberE==randomNumberA)
    {
        randomNumberE=Math.floor(Math.random() * mapCollectionOfPoints.length);
    }
    changeColor(randomNumberA,randomNumberB,randomNumberC,randomNumberD,randomNumberE)
  //  document.getElementById('test').innerHTML=a
  //  document.getElementById('test').innerHTML+=b
 //   document.getElementById('test').innerHTML+=c
  //  document.getElementById('test').innerHTML+=d;
 //   document.getElementById('test').innerHTML+=e; 
}

function changeColor(num1, num2, num3, num4, num5)
{
    show_marks_on_map = false;
    show_red_marks_on_map = true;
    showmap()

    for (var i = 0; i < trd.length; i ++) 
    {
        trd[i].style.borderTopColor = "red"
    }

    document.getElementsByClassName(actualMap)[num1].style.borderTopColor = "blue"
    document.getElementsByClassName(actualMap)[num2].style.borderTopColor = "purple"
    document.getElementsByClassName(actualMap)[num3].style.borderTopColor = "yellow"
    document.getElementsByClassName(actualMap)[num4].style.borderTopColor = "green"
    document.getElementsByClassName(actualMap)[num5].style.borderTopColor = "orange"
    
}

var trd = document.getElementsByClassName('trd');
var show_marks_on_map = true;
var show_red_marks_on_map = true;

function showmap()
{
        if(show_marks_on_map)
            {
                for (var i = 0; i < trd.length; i ++) 
                    {
                        trd[i].style.display = 'none';
                    }
                show_marks_on_map = false;
            }
        else
            {
                for (var i = 0; i < trd.length; i ++) 
                    {
                        trd[i].style.display = 'block';
                    }
                show_marks_on_map=true;
            }
}
function showmapAndNoRedMarks()
{
    if(show_red_marks_on_map)
    {
        for (var i = 0; i < trd.length; i ++) 
            {
                if(trd[i].style.borderTopColor == "red")
                trd[i].style.display = 'none';
            }
        show_red_marks_on_map = false;
    }
else
   {
     show_red_marks_on_map = true;
     show_marks_on_map = false;
     showmap()
   }
}