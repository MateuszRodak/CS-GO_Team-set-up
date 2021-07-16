var actualMap = "de_mirage"

function de_dust2()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    document.getElementById("de_dust2").style.display = "block"
    actualMap = "de_dust2"
}

function de_mirage()
{
    document.getElementById("de_mirage").style.display = "block"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_mirage"
}

function de_train()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "block"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_train"
}

function de_cache()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "block"
    document.getElementById("de_inferno").style.display = "none"
    actualMap = "de_cache"
}

function de_inferno()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_cache").style.display = "none"
    document.getElementById("de_inferno").style.display = "block"
    actualMap = "de_inferno"
}

function set_up()
{ 
    var a,b,c,d,e
    var maplen = document.getElementsByClassName(actualMap);

   // for(var i=0;i<5;i++){
  //      var a=Math.floor(Math.random() * 5)+1;
 //   }
  //  document.getElementById('test').innerHTML=a;

    a=Math.floor(Math.random() * maplen.length);
    b=Math.floor(Math.random() * maplen.length);
    while(b==a)
    {
        b=Math.floor(Math.random() * maplen.length);
    }
    c=Math.floor(Math.random() * maplen.length);
    while(c==b || c== a)
    {
        c=Math.floor(Math.random() * maplen.length);
    }
    var d=Math.floor(Math.random() * maplen.length);
    while(d==c || d==b || d== a)
    {
        d=Math.floor(Math.random() * maplen.length);
    }
    var e=Math.floor(Math.random() * maplen.length);
    while(e==d || e==c || e==b || e==a)
    {
        e=Math.floor(Math.random() * maplen.length);
    }
    document.getElementById('test').innerHTML=a
    document.getElementById('test').innerHTML+=b
    document.getElementById('test').innerHTML+=c
    document.getElementById('test').innerHTML+=d;
    document.getElementById('test').innerHTML+=e;
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
var show_marks_on_map = true;

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