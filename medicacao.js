const DadosMedicacao = JSON.parse(localStorage.getItem('DadosMedicacao'));

if(DadosMedicacao){
    document.getElementById('medicamentos').value = DadosMedicacao.medicamentos;
    document.getElementById('instrucoes').value = DadosMedicacao.instrucoes;

}

document.getElementById('editarFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    const medicamentos = document.getElementById('medicamentos').value;
    const instrucoes = document.getElementById('instrucoes').value;

    const DadosMedicacaoAtualizados = {
        medicamentos,
        instrucoes
    }

    localStorage.setItem('DadosMedicacao', JSON.stringify(DadosMedicacaoAtualizados));

    alert ("Dados dos Medicamentos atualizados com sucesso")
})