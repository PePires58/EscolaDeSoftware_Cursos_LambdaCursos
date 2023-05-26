exports.createCourseObject = function (item) {
    let objetoRetorno = {
        nome: "",
        categoria: ""
    };

    if (item.nome)
        objetoRetorno = item.nome.S;
    if (item.categoria)
        objetoRetorno = item.categoria.S;

    return objetoRetorno;
}