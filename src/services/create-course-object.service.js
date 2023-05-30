exports.createCourseObject = function (item) {
    let objetoRetorno = {
        nome: "",
        categoria: ""
    };

    if (item.nome)
        objetoRetorno.nome = item.nome.S;
    if (item.categoria)
        objetoRetorno.categoria = item.categoria.S;

    return objetoRetorno;
}