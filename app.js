function pesquisar() {

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    if (!campoPesquisa) {
        section.innerHTML = `<p>Você deve passar um valor para pesquisa</p>`;
        return;
    }
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    campoPesquisa = campoPesquisa.toLowerCase();
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)
            || dado.tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados += `
            <p>Nenhum resultado encontrado.</p>
        `;
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}

function pesquisarEnter(event) {
     if (event.keyCode === 13 || event.which === 13) {
    //     let campoPesquisa = document.getElementById("campo-pesquisa").value;
    //     // Obtém a seção HTML onde os resultados serão exibidos
    //     let section = document.getElementById("resultados-pesquisa");

    //     if (!campoPesquisa) {
    //         section.innerHTML = `<p>Você deve passar um valor para pesquisa</p>`;
    //         return;
    //     }
    //     // Inicializa uma string vazia para armazenar os resultados
    //     let resultados = "";
    //     campoPesquisa = campoPesquisa.toLowerCase();
    //     let titulo = "";
    //     let descricao = "";
    //     let tags = "";

    //     // Itera sobre cada dado da lista de dados
    //     for (let dado of dados) {

    //         titulo = dado.titulo.toLowerCase();
    //         descricao = dado.descricao.toLowerCase();
    //         tags = dado.tags.toLowerCase();

    //         if (dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)
    //             || dado.tags.includes(campoPesquisa)) {
    //             // Cria um novo elemento HTML para cada resultado
    //             resultados += `
    //             <div class="item-resultado">
    //                 <h2>
    //                     <a href="#" target="_blank">${dado.titulo}</a>
    //                 </h2>
    //                 <p class="descricao-meta">${dado.descricao}</p>
    //                 <a href=${dado.link} target="_blank">Mais informações</a>
    //             </div>
    //         `;
    //         }
    //     }

    //     if (!resultados) {
    //         resultados += `
    //         <p>Nenhum resultado encontrado.</p>
    //     `;
    //     }

    //     // Atribui os resultados gerados à seção HTML
    //     section.innerHTML = resultados;
        pesquisar();
     }
}