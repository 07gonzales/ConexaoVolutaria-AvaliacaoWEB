document.getElementById('formCadastro').addEventListener('submit', function(e) {
    e.preventDefault();

    const necessidade = {
        instituicao: document.getElementById('instituicao').value,
        tipoAjuda: document.getElementById('tipoAjuda').value,
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        contato: document.getElementById('contato').value
    };

    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];
    necessidades.push(necessidade);
    localStorage.setItem('necessidades', JSON.stringify(necessidades));

    alert('Necessidade cadastrada com sucesso!');
    this.reset();
});
