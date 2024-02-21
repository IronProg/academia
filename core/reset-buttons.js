$("#reseta-marcacao").on("click", function() {
    $(".checkbox-exercicio").each(function() {
      let isChecked = $(this)[0].checked;
      if (isChecked) {
        $(this).click();
      }
    });
  });
  $("#reseta-comentario").on("click", function() {
    let exerciciosArray = JSON.parse(localStorage.getItem("dbSegunda"));
    exerciciosArray.forEach(exercicio => {
      exercicio.comentario = "";
    })
    localStorage.setItem("dbSegunda", JSON.stringify(exerciciosArray));
    $(".input-comentario").each(function() {
      $(this).val("");
    });
  });