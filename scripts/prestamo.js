function gen_table(){
    document.getElementById("tab").innerHTML="";
    let numeroUno=Number(document.getElementById("capital").value);
    let numeroDos=Number(document.getElementById("cuota").value);
    let numeroTres=Number(document.getElementById("interes").value);
    if(numeroUno>0){   
        for(i=1;i<=numeroDos;i++){
            capital=numeroUno/numeroDos;
            d1=capital.toFixed(2);
            intereses=((numeroUno*numeroTres)/100)/numeroDos;
            d2=intereses.toFixed(2);
            pagar=capital+intereses;
            d3=pagar.toFixed(2);
            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <td> ${i}</td>
                        <td> ${d1}</td>
                        <td> ${d2}</td>
                        <td> ${d3}</td>
                    </tr>`;
        }
        n1=numeroUno.toFixed(2);
        t_i=intereses*numeroDos;
        d4=t_i.toFixed(2);
        t_p=pagar*numeroDos;
        d5=t_p.toFixed(2);
        document.getElementById("t1").innerHTML=n1;
        document.getElementById("t2").innerHTML=d4;
        document.getElementById("t3").innerHTML=d5;        
    }else{
        alert("Falta ingresar un Número");
    }
}