function MontaExercicios(exerciciosArray) {
    exerciciosArray.forEach((ex, index) => {
        $("#lista-exercicios").append(`
          <div class="col-sm-12 col-md-6 px-1">
            <div class="card card-success collapsed-card">
              <div class="card-header">
                <h3 class="card-title">
                  <div class="icheck-primary d-inline">
                    <input type="checkbox" id="checkboxPrimary${index}" >
                    <label for="checkboxPrimary${index}"> ${ex.nome} | <b>${ex.reps}</b></label>
                  </div>
                </h3>
                <div class="card-tools">
                  <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>

              <div class="card-body">
                <ul id="exercicio-${index}">
                </ul>
              </div>
            </div>
          </div>
        `);
        let $exercicioBody = $(`#exercicio-${index}`);
        $exercicioBody.append(`
          <img class="exe-img" src="${ex.img}" alt="${ex.nome}">
        `)
        ex.dicas.forEach(dica => {
          $exercicioBody.append(`<li>${dica}</li>`)
        })
      });
}