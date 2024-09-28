function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos, identificada pelo ID "resultados-pesquisa".
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa || campoPesquisa == " "){
        section.innerHTML = "<p>Nada Informado!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa, que serão construídos dinamicamente.
    let resultados = ``;
    let titulo = "";
    let descricao = "";

    // Itera sobre cada elemento (dado) do array "dados".
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Concatena HTML para cada resultado, formatando os dados de cada elemento.
            resultados += `
                <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">
                    ${dado.descricao}
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </p>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Sem resultados para a busca.</p>"
    }

    // Atribui o HTML construído à propriedade innerHTML da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}