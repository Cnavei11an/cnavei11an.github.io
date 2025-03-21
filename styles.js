$(document).ready(function() {
    // URL de la API de noticias
    const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=31094695f20d41fcb16a84829bfd3f32';

    // Función para cargar las noticias
    function cargarNoticias() {
        $.getJSON(apiUrl, function(data) {
            const noticias = data.articles;
            let noticiasHtml = '<div class="row">';
            
            // Iterar sobre las noticias y agregar a la página
            noticias.forEach(function(noticia) {
                noticiasHtml += `
                    <div class="col-md-4">
                        <div class="card news-card">
                            <img src="${noticia.urlToImage}" class="card-img-top" alt="${noticia.title}">
                            <div class="card-body">
                                <h5 class="card-title">${noticia.title}</h5>
                                <p class="card-text">${noticia.description}</p>
                                <a href="${noticia.url}" class="btn btn-primary" target="_blank">Leer más</a>
                            </div>
                        </div>
                    </div>
                `;
            });
            noticiasHtml += '</div>';
            $('#news-articles').html(noticiasHtml);
        });
    }

    // Llamar a la función para cargar las noticias al hacer clic en el botón
    $('#load-news-btn').click(function() {
        cargarNoticias();
    });
});
