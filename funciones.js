
var valido 
function Validar(num)
{
    if(num > 0 && num < 11)
    {
        valido = true;

    }
    else
    {
        valido = false;

    }
}

function Promedio()
{
    var nota1 = document.getElementById("notaMatematica").value;
    var nota2 = document.getElementById("notaLengua").value;
    var nota3 = document.getElementById("notaEFSI").value;

    if(nota1 == 0 || nota2 == 0 || nota3 == 0)
    {
        alert("Ingrese una nota por materia");
    }
    else
    {
        var promedio = document.getElementById("promedio");

        Validar(nota1);
        valido1 = valido
        

        Validar(nota2);
        valido2 = valido
        

        Validar(nota3);
        valido3 = valido

        
        
        if(valido1 == true && valido2 == true && valido3 == true)
        {
    
            var promedioTotal = (+(nota1) + +(nota2) + +(nota3) ) / 3

            Colores(valido1, valido2, valido3, promedioTotal)
          
            if(promedioTotal >= 6)
            {
                promedio.innerHTML = "El promedio es: " + promedioTotal;
               
            }
            else
            {
                promedio.innerHTML = "El promedio es: " + promedioTotal;

            }

        }
        else
        {
            promedio.innerHTML = "Una de las notas ingresadas no es valida";
        }

        
    }

}

function Colores(valido1, valido2, valido3, promedioTotal)
{
    var color1 = document.getElementById("notaMatematica");
    var color2 = document.getElementById("notaLengua");
    var color3 = document.getElementById("notaEFSI");

    
    var colores = [color1, color2, color3];
    var validos = [valido1, valido2, valido3];

    for(var i = 0; i < 3 ; i++)
    {
        if(validos[i] == true)
        {
            colores[i].style.borderColor = "green"
        }
        else
        {
            colores[i].style.borderColor = "red"
        }
    }


    var colorPromedio = document.getElementById("promedio")

    if(promedioTotal >= 6)
    {
        colorPromedio.style.backgroundColor = "green";
    }
    else 
    {
        colorPromedio.style.backgroundColor = "red";
    }

    var colorMateria = document.getElementById("mayornota")
    colorMateria.style.backgroundColor = "blue"
    
}

function MateriaMayor()
{
    var nota1 = document.getElementById("notaMatematica").value;
    var nota2 = document.getElementById("notaLengua").value;
    var nota3 = document.getElementById("notaEFSI").value;

    var notas = [nota1, nota2, nota3]
    var materias = ["Matematica", "Lengua", "EFSI"]
    var notaMax = 0;
    var materiaMax;

    for(var i = 0; i < 3; i++)
    {
        if(notas[i] > notaMax)
        {
            notaMax = notas[i];
            materiaMax = materias[i];
        }
        else if(notas[i] == notaMax)
        {
            materiaMax = materiaMax + ", " + materias[i]
        }
        
    }  

    Validar(nota1);
    valido1 = valido

    Validar(nota2);
    valido2 = valido

    Validar(nota3);
    valido3 = valido

    Colores(valido1, valido2, valido3)
    
    var mayornota = document.getElementById("mayornota");
    mayornota.innerHTML = "Materia(s) con mayor nota: " + materiaMax;
}