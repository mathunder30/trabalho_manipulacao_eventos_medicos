const DadosHistoricoMedico = JSON.parse(localStorage.getItem('DadosHistoricoMedico'));

if(DadosHistoricoMedico){
    document.getElementById('motivo').value = DadosHistoricoMedico.motivo;
    document.getElementById('diagnostico').value = DadosHistoricoMedico.diagnostico;
    document.getElementById('sintomas').value = DadosHistoricoMedico.sintomas;
}

document.getElementById('editarFormulario').addEventListener('submit', function(event){
    event.preventDefault();

    const motivo = document.getElementById('motivo').value;
    const diagnostico = document.getElementById('diagnostico').value;
    const sintomas = document.getElementById('sintomas').value;

    const DadosHistoricoMedicoAtualizados ={
        motivo,
        diagnostico,
        sintomas
    }

    localStorage.setItem('DadosHistoricoMedico', JSON.stringify(DadosHistoricoMedicoAtualizados));

    alert('Dados do Diagnosticos, Motivos e Sintomas atualizados com sucesso!')

    

} );