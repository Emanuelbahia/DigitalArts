window.addEventListener("load", function(){
    let form = document.querySelector("form.needs-validation");
    let div1 = document.querySelector("#div1");
    let div2 = document.querySelector("#div2");
    let div3 = document.querySelector("#div3");
    
  
  //hago foco en el primer campo a completar
    form.category.focus(),
    
    //validaciones on-line
  form.category.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa categoría?")
    }),

   form.name.addEventListener ("blur", function(){
    if(form.name.value == " "){
      let alert= document.createElement("p");
      alert.innerText="Tienes que poner un nombre";
      form.name.style.border = "red 3px solid";
      div1.appendChild(alert)
     
    } else {
      form.name.style.border = "green 3px solid";
      alert.innerText = "Campo completo !";
      
    } 
    }),

   description.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa técnica?")
   }),

   size.addEventListener ("blur", function(){
    if(size.value == " "){
      size.style.border = "red 3px solid";
      div2.innerHTML = "Tienes que poner un nombre";
      }else {
      size.style.border = "green 3px solid";
      }
   }),

   material.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa material?")
   }),

   price.addEventListener ("blur", function(){
    if(form.price.value == " "){
      form.price.style.border = "red 3px solid";
      div3.innerHTML = "Tienes que poner un nombre";
      }else {
        form.price.style.border = "green 3px solid";
      }
   }),
   form.image.addEventListener ("blur", function(){
    if(form.image.value == ""){ 
   alert("Sube una imagen")
    }
  
    
   form.addEventListener("submit", function(e){
    e.preventDefault();
    let errors = [];
    //chequeamos que no haya errores
        //campo nombre
    if(form.name.value ="") {
        errors.push("El campo nombre no puede estar vacio");
        form.name.style.border = "red 3px solid";
        div1.innerHTML = "Tienes que poner un nombre";
        div1.style.color = "red";
    }else{
        form.name.style.border = "green 3px solid";
        form.name.focus(); 
    }
      //campo tamaño
    if(form.size.value ="") {
      errors.push("El campo nombre no puede estar vacio");
        form.size.style.border = "red 3px solid";
        div1.innerHTML = "Tienes que poner un tamaño";
        div1.style.color = "red";
    }else{
        form.size.style.border = "green 3px solid";
        form.size.focus(); 
    }
     //campo precio

    if(form.price.value ="") {
        errors.push("El campo precio no puede estar vacio");
        form.price.style.border = "red 3px solid";
        div1.innerHTML = "Tienes que poner un tamaño";
        div1.style.color = "red";
    }else{
        form.price.style.border = "green 3px solid";
        form.price.focus(); 
    }
   if (errors.length > 0) { 
 
   let ulerrors = document.querySelector(".errores") ;
   ulerrors.innerHTML = "";
   for ( let i = 0; i< errors.length; i++){
    ulerrors.innerHTML+= "<li>" + errors + "</li>"
   }
   } else {
    alert("Creación exitosa!!")
   }
    })
 
  });

   })
  