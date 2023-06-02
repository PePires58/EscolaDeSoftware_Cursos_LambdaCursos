const getCoursesService = require('./services/get-courses.service');

exports.lambdaHandler = async (event, context) => {

    try {
        const cursos = await getCoursesService.getCourses();

        const hasCourses = cursos.length > 0;
        if (hasCourses)
            return defaultResult(200, cursos);
        else
            return errorResult(204, 'Não foram encontrados cursos');
    } catch (error) {
        return errorResult(500, error);
    }
}

function errorResult(statusCode, errors) {
    return defaultResult(statusCode, {
        errors: errors
    });
}

function defaultResult(statusCode, object) {
    return {
        'statusCode': statusCode,
        'body': JSON.stringify(object),
        'isBase64Encoded': false,
        'headers': {
            'Content-Type': 'application/json'
        }
    }
}