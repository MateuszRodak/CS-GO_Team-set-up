function de_dust2()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "block"
}

function de_mirage()
{
    document.getElementById("de_mirage").style.display = "block"
    document.getElementById("de_train").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
}

function de_train()
{
    document.getElementById("de_mirage").style.display = "none"
    document.getElementById("de_dust2").style.display = "none"
    document.getElementById("de_train").style.display = "block"
}

function set_up()
{ 
    document.getElementsByClassName('mirage')[0].style.display = "none"
    for(var i=0;i<5;i++){
        var a=Math.floor(Math.random() * 5)+1;
    }
    document.getElementById('test').innerHTML=a;
    changeColor('mirage',0,1,2,3,4)
}

function changeColor(map, num1, num2, num3, num4, num5)
{
    document.getElementsByClassName(map)[num1].style.borderTopColor = "blue"
    document.getElementsByClassName(map)[num2].style.borderTopColor = "purple"
    document.getElementsByClassName(map)[num3].style.borderTopColor = "yellow"
    document.getElementsByClassName(map)[num4].style.borderTopColor = "green"
    document.getElementsByClassName(map)[num5].style.borderTopColor = "orange"
    
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