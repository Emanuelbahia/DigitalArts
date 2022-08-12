window.addEventListener("load", function(){
    let form = document.querySelector("form")
    
    console.log(form)
    //hago foco en el primer campo a completar
    form.category.focus(),

   //validaciones on-line
   form.category.addEventListener ("change", function(){
    alert("Estas seguro que quieres esa categoría?")
    }),

   form.name.addEventListener ("blur", function(){
    if(form.name.value == " "){
      form.name.style.border = "red 3px solid";
      div1.innerHTML = "Tienes que poner un nombre";
    }else{
      form.name.style.border = "green 3px solid";
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
   }),
   form.addEventListener("submit", function(e){
    let errors = [];
    //chequeamos que no haya errores
        //campo nombre
    if(form.name.value ="") {
        errors.push("El campo nombre no puede estar vacio");
        form.name.style.border = "red 3px solid";
        this.p.innerHTML = "Tienes que poner un nombre";
        this.p.color = "red";
    }else{
        form.size.style.border = "green 3px solid";
        form.name.focus(); 
    }
      //campo tamaño
    if(form.size.value ="") {
        errors.push("El campo tamaño no puede estar vacio");
  
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