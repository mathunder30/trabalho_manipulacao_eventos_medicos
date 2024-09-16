const dadosPaciente = JSON.parse(localStorage.getItem('dadosPaciente'));

if(dadosPaciente){
    document.getElementById('nome').innerText = dadosPaciente.nome;
    document.getElementById('data').innerText = dadosPaciente.data;
    document.getElementById('idade').innerText = dadosPaciente.idade;
    document.getElementById('sexo').innerText = dadosPaciente.sexo;
    document.getElementById('cpf').innerText = dadosPaciente.cpf;
    document.getElementById('telefone').innerText = dadosPaciente.telefone;
    document.getElementById('endereco').innerText = dadosPaciente.endereco;
} else {
    document.getElementById("dadosAluno").innerHTML = "<p>Nenhum dado encontrado, por favor, preencha o formulário</p>";
}



const DadosHistoricoMedico = JSON.parse(localStorage.getItem('DadosHistoricoMedico'));

if(DadosHistoricoMedico){
    document.getElementById('motivo').innerText = DadosHistoricoMedico.motivo;
    document.getElementById('diagnostico').innerText = DadosHistoricoMedico.diagnostico;
    document.getElementById('sintomas').innerText = DadosHistoricoMedico.sintomas;
} else {
    document.getElementById("DadosHistoricoMedico").innerHTML = "<p>Nenhum dado encontrado, por favor, preencha o formulário</p>";
}



const DadosProcedimentosRealizados = JSON.parse(localStorage.getItem("DadosProcedimentosRealizados"));

if(DadosProcedimentosRealizados){
    document.getElementById("procedimento").innerText = DadosProcedimentosRealizados.procedimento;
    document.getElementById('descricao').innerText = DadosProcedimentosRealizados.descricao;
    document.getElementById('data_procedimento').innerText = DadosProcedimentosRealizados.data_procedimento;
} else{
    document.getElementById("DadosProcedimentosRealizados").innerHTML = "<p>Nenhum dado encontrado, por favor, preencha o formulário</p>";
}



const DadosMedicacao = JSON.parse(localStorage.getItem("DadosMedicacao"));

if(DadosMedicacao){
    document.getElementById('medicamentos').innerText = DadosMedicacao.medicamentos;
    document.getElementById('instrucoes').innerText = DadosMedicacao.instrucoes;
} else{
    document.getElementById("DadosMedicacao").innerHTML = "<p>Nenhum dado encontrado, por favor, preencha o formulário</p>";
}

const DadosObservacao = JSON.parse(localStorage.getItem("DadosObservacao"));

if(DadosObservacao){
    document.getElementById('observacoes').innerText = DadosObservacao.observacoes;
    
} else{
    document.getElementById("DadosObservacao").innerHTML = "<p>Nenhum dado encontrado, por favor, preencha o formulário</p>";
}

function gerarPDF() {
    const doc = new jsPDF({});
    doc.setFontSize(22);
    doc.text("Prontuário Médico", 105, 20, { align: 'center' }); // Centraliza o título

    // Define o tamanho da fonte para o conteúdo
    doc.setFontSize(14);

    let yPosition = 40; // Posição inicial no eixo Y
    let lineHeight = 15; // Altura da linha para espaçamento

    doc.text(`Nome: ${document.getElementById('nome').textContent}`, 20, yPosition);
    yPosition += lineHeight; // Adiciona espaçamento vertical

    doc.text(`Data de Nascimento: ${document.getElementById('data').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Idade: ${document.getElementById('idade').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Sexo: ${document.getElementById('sexo').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`CPF: ${document.getElementById('cpf').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Telefone: ${document.getElementById('telefone').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    let endereco = `Endereço: ${document.getElementById('endereco').textContent}`;
    let enderecoLines = doc.splitTextToSize(endereco, 180);
    doc.text(enderecoLines, 20, yPosition);
    yPosition += enderecoLines.length * lineHeight;

    doc.text(`Motivo: ${document.getElementById('motivo').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Diagnóstico: ${document.getElementById('diagnostico').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Sintomas: ${document.getElementById('sintomas').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Procedimento: ${document.getElementById('procedimento').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Descrição: ${document.getElementById('descricao').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Data do Procedimento: ${document.getElementById('data_procedimento').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Medicação: ${document.getElementById('medicamentos').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Instruções: ${document.getElementById('instrucoes').textContent}`, 20, yPosition);
    yPosition += lineHeight;

    doc.text(`Observações: ${document.getElementById('observacoes').textContent}`, 20, yPosition);

    // Salva o PDF
    doc.save('relatorio_aluno.pdf');
}
