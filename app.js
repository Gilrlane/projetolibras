// Função de busca
function buscar() {
    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const pesquisa = document.getElementById('pesquisa').value.trim().toLowerCase();
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    // Verifica se a pesquisa está vazia
    if (pesquisa === '') {
        alert('Por favor, digite uma palavra.');
        return;
    }

    // Filtra os dados com base no título digitado ou em sinônimos
    const resultado = bancoDePalavras.find(item => 
        item.palavra.toLowerCase() === pesquisa ||
        item.sinonimos.some(sinonimo => sinonimo.toLowerCase() === pesquisa)
    );

    // Se encontrar o resultado, exibe na tela
    if (resultado) {
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        // Adiciona a imagem
        const imagem = document.createElement('img');
        imagem.src = resultado.imagem;
        imagem.alt = resultado.palavra;
        itemResultado.appendChild(imagem);

        // Adiciona o título
        const titulo = document.createElement('h2');
        titulo.textContent = resultado.palavra;
        itemResultado.appendChild(titulo);

        // Adiciona o link do vídeo
        const link = document.createElement('a');
        link.href = resultado.video;
        link.textContent = 'Assistir Vídeo Aula';
        link.target = '_blank'; // Abre em uma nova aba
        itemResultado.appendChild(link);

        // Adiciona a descrição
        const descricao = document.createElement('p');
        descricao.textContent = resultado.descricao || '';
        descricao.classList.add('descricao-meta');
        itemResultado.appendChild(descricao);

        // Exibe o resultado na página
        resultadosDiv.appendChild(itemResultado);
    } else {
        // Se não encontrar o resultado, exibe uma mensagem
        const mensagem = document.createElement('p');
        mensagem.textContent = 'Palavra ainda não cadastrada. Tente outra.';
        resultadosDiv.appendChild(mensagem);
    }
}

// Evento para o botão de busca
document.getElementById('buscar').addEventListener('click', buscar);

// Evento para pressionar Enter no campo de pesquisa
document.getElementById('pesquisa').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão do Enter
        buscar(); // Chama a função de busca
    }
});
