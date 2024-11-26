document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Pegando valores dos campos
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');

    // Reset das mensagens de erro
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');

    // Validações
    let hasError = false;

    if (password !== confirmPassword) {
        document.getElementById('confirmpassword').nextElementSibling.textContent = 'As senhas não coincidem!';
        hasError = true;
    }

    if (!gender) {
        alert('Por favor, selecione um gênero.');
        return;
    }

    if (!validateEmail(email)) {
        document.getElementById('email').nextElementSibling.textContent = 'Por favor, insira um email válido.';
        hasError = true;
    }

    if (hasError) {
        return;
    }

    // Se tudo estiver ok, envia o formulário
    alert(`Cadastro realizado com sucesso! Nome: ${firstname} ${lastname}, Email: ${email}`);
    document.getElementById('cadastroForm').submit();
});

// Mascara de telefone
document.getElementById('number').addEventListener('input', function(event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (value.length <= 10) {
        input.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        input.value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }
});

// Validação de email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Mostrar/ocultar senha
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});

// Mostrar/ocultar senha
document.getElementById('toggleConfirmPassword').addEventListener('click', function() {
    const passwordField = document.getElementById('confirmpassword');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
});