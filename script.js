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