function resumen()
{ 
                var cantidad = document.getElementById("cantidad").value
                console.log(cantidad)
                var categoria = document.getElementById('inputState').value
                console.log(categoria)
                

                  switch (categoria)
                    {
                        case 'estudiante': 
                            var total = cantidad*40
                            console.log(total)
                            document.getElementById('total').innerHTML = 'Total a pagar: $ ' + total      
                        break
                        case 'trainee':                            
                            var total = cantidad*100
                            console.log(total)
                            document.getElementById('total').innerHTML = 'Total a pagar: $ ' + total
                        break
                        case 'junior':
                            var total = cantidad*170
                            console.log(total)
                            document.getElementById('total').innerHTML = 'Total a pagar: $ ' + total
                        break
                    }                    
}

function borrar()
{
    document.getElementById('total').innerHTML = 'Total a pagar: $ '
}