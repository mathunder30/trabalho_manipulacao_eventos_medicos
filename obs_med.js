const DadosObservacao = JSON.parse(localStorage.getItem("DadosObservacao"));

if(DadosObservacao){
    document.getElementById('observacoes').value = DadosObservacao.observacoes;
}

document.getElementById('editarFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    const observacoes = document.getElementById('observacoes').value;

    const DadosObservacaoAtualizados ={
        observacoes
    }

    localStorage.setItem('DadosObservacao', JSON.stringify(DadosObservacaoAtualizados));

    alert('Observações foram atualizados com sucesso!')


});