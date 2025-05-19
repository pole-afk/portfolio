
document.getElementById('dugme').addEventListener('click', function() {
    // Retrieve values from the input fields
    const meseci = parseInt(document.getElementById('meseci').value);
    const cena = parseFloat(document.getElementById('cena').value);
    const treninzi = parseInt(document.getElementById('treninzi').value);
    const vezbaci=parseFloat(document.getElementById('doveti').value);

    // Validate the input values
    if (isNaN(meseci) || isNaN(cena) || isNaN(treninzi)) {
        alert("Molimo unesite validne brojeve.");
        return;
    }

    // Calculate the ukupni popust
    let ukupniPopust = 0.005 * meseci;
    if(ukupniPopust>0.03)
        {
            ukupniPopust=0.03;
        } 

        else
        {
            if(vezbaci>=4)
                {
                    document.getElementById('suma').value="besplatno!";
                    
                }   
                else
                {   
                    if(vezbaci===2)
                    {
                        ukupniPopust+=0.5;
                    }                     
                        if (treninzi >= 15 && treninzi <= 19) {
                            ukupniPopust += 0.05;  // 5% popusta ako je broj treninga između 15 i 19
                        } else if (treninzi > 20) {
                            ukupniPopust += 0.1;  // 10% popusta ako je broj treninga veći od 20
                        }               
                    // Calculate the final price
                    const konacnaCena = meseci * cena * (1-ukupniPopust)
                    // Display the final price in the input field
                    document.getElementById('suma').value = konacnaCena.toFixed(2);
                }
        }
     
    
});

