var actualMap = "de_mirage"

function de_dust2()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "block"
    actualMap = "de_dust2"
}

function de_mirage()
{
    document.getElementById("de_mirage").style.display = "block"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    actualMap = "de_mirage"
}

function de_train()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "block"
    actualMap = "de_train"
}

function set_up()
{ 
    var maplen = document.getElementsByClassName(actualMap);

   // for(var i=0;i<5;i++){
  //      var a=Math.floor(Math.random() * 5)+1;
 //   }
  //  document.getElementById('test').innerHTML=a;

    var a=Math.floor(Math.random() * maplen.length);
    var b=Math.floor(Math.random() * maplen.length);
    var c=Math.floor(Math.random() * maplen.length);
    var d=Math.floor(Math.random() * maplen.length);
    var e=Math.floor(Math.random() * maplen.length);

    changeColor(a,b,c,d,e)
}

function changeColor(num1, num2, num3, num4, num5)
{

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
    var works = true;

function showmap()
{
        if(works)
            {
                for (var i = 0; i < trd.length; i ++) 
                    {
                        trd[i].style.display = 'none';
                    }
                works = false;
            }
        else
            {
                for (var i = 0; i < trd.length; i ++) 
                    {
                        trd[i].style.display = 'block';
                    }
                works=true;
            }
    
}