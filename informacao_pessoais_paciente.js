const dadosPaciente = JSON.parse(localStorage.getItem("dadosPaciente"));

if(dadosPaciente){
    document.getElementById('nome').value = dadosPaciente.nome;
    document.getElementById('data').value = dadosPaciente.data;
    document.getElementById('idade').value = dadosPaciente.idade;
    document.getElementById('sexo').value = dadosPaciente.sexo;
    document.getElementById('cpf').value = dadosPaciente.cpf;
    document.getElementById('telefone').value = dadosPaciente.telefone;
    document.getElementById('endereco').value = dadosPaciente.endereco;

} 

document.getElementById("editarFormulario").addEventListener('submit', function(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const data = document.getElementById('data').value;
    const idade = document.getElementById('idade').value;
    const sexo = document.getElementById('sexo').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;

    const dadosPacienteAtualizados ={
        nome,
        data,
        idade,
        sexo,
        cpf,
        telefone,
        endereco

    };

    localStorage.setItem('dadosPaciente', JSON.stringify(dadosPacienteAtualizados));

    alert('Dados do Paciente atualizados com sucesso!')
});

