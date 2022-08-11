window.addEventListener("load", function(){
    let form = document.querySelector("form")
    

    //hago foco en el primer campo a completar
    form.category.focus(),

   //validaciones on-line
   category.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa categoría?")
    }),

   form.name.addEventListener ("blur", function(){
    if(form.name.value == ""){
      form.name.classList.add("inValid");
    }else {
      form.name.classList.remove("inValid");
      form.name.classList.add("valid");
    }
    }),

   form.description.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa técnica?")
   }),

   form.size.addEventListener ("blur", function(){
    if(form.size.value == ""){
        form.size.classList.add("inValid");
      }else {
        form.size.classList.remove("inValid");
        form.size.classList.add("valid");
      }
   }),

   form.material.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa material?")
   }),
   form.price.addEventListener ("blur", function(){
    if(form.price.value == ""){
        form.price.classList.add("inValid");
      }else {
        form.price.classList.remove("inValid");
        form.price.classList.add("valid");
      }
   }),
   form.image.addEventListener ("blur", function(){
    if(form.image.value == ""){ 
   alert("Sube una imagen")
    }
   }),
   form.addEventListener("submit", function(e){
    let errors = [];
    //chequeamos que no haya errores
        //campo nombre
    if(form.name.value ="") {
        errors.push("El campo nombre no puede estar vacio");
      form.classList.add("inValid");
    }else{
        form.name.classList.remove("inValid");
        form.name.classList.add("valid");
        form.name.focus(); 
    }
      //campo tamaño
    if(form.size.value ="") {
        errors.push("El campo tamaño no puede estar vacio");
      form.classList.add("inValid");
    }else{
        form.size.classList.remove("inValid");
        form.size.classList.add("valid");
        form.size.focus();
    }
      //campo precio
    if(form.price.value ="") {
        errors.push("El campo precio no puede estar vacio");
      form.classList.add("inValid");
    }else{
        form.price.classList.remove("inValid");
        form.price.classList.add("valid");
        form.price.focus(); 
    }
   if (errors.length > 0) { 
   e.preventDefault()  
   } else {
    alert("Creación exitosa!!")
   }
    })
 
})