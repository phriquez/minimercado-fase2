flatpickr("#dataAgendamento", {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    minDate: "today",
    locale: "pt"
});

// Manipulação do formulário de agendamento
document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envio padrão do formulário

    const tipoAgendamento = document.getElementById('tipoAgendamento').value;
    const dataAgendamento = document.getElementById('dataAgendamento').value;

    if (!dataAgendamento) {
        alert('Por favor, selecione uma data e horário para o agendamento.');
        return;
    }

    alert(`Agendamento realizado com sucesso! Tipo: ${tipoAgendamento}, Data e Horário: ${dataAgendamento}`);
});
