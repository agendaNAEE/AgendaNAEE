function validar() {
    var senha = form.senha.value;
    var confirm_senha = form.confirm_senha.value;
    if (senha != confirm_senha) {
        alert('Senhas diferentes');
        form.senha.focus();
        return false;
    }
}