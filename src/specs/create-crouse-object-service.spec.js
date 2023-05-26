const assert = require('assert').strict;
const createCourseObjectService = require('../services/create-course-object.service');

describe('Should create a object from item', function () {
    it('Should return an object', function () {

        const item = {
            nome: {
                S: "AWS Cloud Practitioner"
            },
            categoria: {
                S: "Cloud Computing"
            }
        };

        const objetoRetorno = createCourseObjectService.createCourseObject()

        assert.strictEqual(objetoRetorno.categoria, item.categoria.S);
        assert.strictEqual(objetoRetorno.nome, item.nome.S);
    });
});