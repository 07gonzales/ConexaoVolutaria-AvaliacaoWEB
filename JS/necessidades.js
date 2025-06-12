const lista = document.getElementById('listaNecessidades');
const pesquisa = document.getElementById('pesquisa');
const filtro = document.getElementById('filtro');

function renderizarLista(necessidades) {
    lista.innerHTML = '';

    if (necessidades.length === 0) {
        lista.innerHTML = '<p class="text-center">Nenhuma necessidade encontrada.</p>';
        return;
    }

    necessidades.forEach(n => {
        const card = document.createElement('div');
        card.className = 'col-md-6';

        card.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${n.titulo}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${n.instituicao}</h6>
                    <p class="card-text">${n.descricao}</p>
                    <p class="card-text"><strong>Tipo:</strong> ${n.tipoAjuda}</p>
                    <p class="card-text"><strong>Contato:</strong> ${n.contato}</p>
                    <p class="card-text"><small>${n.rua}, ${n.bairro}, ${n.cidade} - ${n.estado}</small></p>
                </div>
            </div>
        `;

        lista.appendChild(card);
    });
}

function filtrarLista() {
    const termo = pesquisa.value.toLowerCase();
    const tipoSelecionado = filtro.value;

    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];

    const filtradas = necessidades.filter(n => {
        const tituloMatch = n.titulo.toLowerCase().includes(termo);
        const descMatch = n.descricao.toLowerCase().includes(termo);
        const tipoMatch = tipoSelecionado ? n.tipoAjuda === tipoSelecionado : true;

        return (tituloMatch || descMatch) && tipoMatch;
    });

    renderizarLista(filtradas);
}

pesquisa.addEventListener('input', filtrarLista);
filtro.addEventListener('change', filtrarLista);

document.addEventListener('DOMContentLoaded', () => {
    const necessidades = JSON.parse(localStorage.getItem('necessidades')) || [];
    renderizarLista(necessidades);
});
