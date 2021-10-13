
function enviarPeticion(){

    //Crea un nuevo objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = ' https://maker.ifttt.com/trigger/trigger_notification/with/key/dje2e2aNtKamVk_VWp90t9 ';

    

//Esto se llamará después de que la respuesta se reciba

xhr.onload = function() { //para no detectar estados intermedios uso onload
 
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta 200 = respuesta OK; != no ha ido bien la peticion
    
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado

    }else { //muestra el resultado
    
        alert(xhr.responseText)
   
    }
};


xhr.onerror = function() {
  alert("Solicitud fallida");
};


 //compongo la peticion GET para la URL establecida
 xhr.open('GET', url, true);

 //xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

 //Envía la solicitud a la red
 xhr.send();

}


function enviarPeticion2(){

    //Crea un nuevo objeto XMLHttpRequest
var xhr = new XMLHttpRequest();
var url = ' https://maker.ifttt.com/trigger/trigger_notification/with/key/dje2e2aNtKamVk_VWp90t9 ';
fecha = new Date();
//transformo el formato a formato local
fecha = fecha.toLocaleString();
var valores = { "value1" : "fecha", "value2" : "Fulano", "value3" : "De Tal" } 
//https://maker.ifttt.com/use/dje2e2aNtKamVk_VWp90t9
    

//Esto se llamará después de que la respuesta se reciba

xhr.onload = function() { //para no detectar estados intermedios uso onload
 
    if (xhr.status != 200) { // analiza el estado HTTP de la respuesta 200 = respuesta OK; != no ha ido bien la peticion
    
        alert(`Error ${xhr.status}: ${xhr.statusText}`); // ej. 404: No encontrado

    }else { //muestra el resultado
    
        alert(xhr.responseText)
   
    }
};


xhr.onerror = function() {
  alert("Solicitud fallida");
};


 //compongo la peticion GET para la URL establecida
 xhr.open('POST', url, true);

 //xhr.setRequestHeader('Access-Control-Allow-Origin', '*')

 //Envía la solicitud a la red
 xhr.send(JSON.stringify(valores));
 

}