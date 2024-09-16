const DadosProcedimentosRealizados = JSON.parse(localStorage.getItem("DadosProcedimentosRealizados"));

if(DadosProcedimentosRealizados){
    document.getElementById('procedimento').value = DadosProcedimentosRealizados.procedimento;
    document.getElementById('descricao').value = DadosProcedimentosRealizados.descricao;
    document.getElementById('data_procedimento').value = DadosProcedimentosRealizados.data_procedimento;
}

document.getElementById('editarFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    const procedimento = document.getElementById('procedimento').value;
    const descricao  = document.getElementById('descricao').value;
    const data_procedimento = document.getElementById('data_procedimento').value;
    
    const DadosProcedimentosRealizadosAtualizados = {
        procedimento,
        descricao,
        data_procedimento
    }

    localStorage.setItem('DadosProcedimentosRealizados', JSON.stringify(DadosProcedimentosRealizadosAtualizados));

    alert ("Dados do Procedimento atualizados com sucesso")
});