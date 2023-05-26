const getCoursesService = require('./services/get-courses.service');

exports.lambdaHandler = async (event, context) => {

    try {

        await getCoursesService.getCourses()
            .then((cursos) => {
                const hasCourses = cursos.length > 0;
                if (hasCourses)
                    return defaultResult(200, cursos);
                else
                    return errorResult(204, 'Não foram encontrados cursos');
            });
    } catch (error) {
        return errorResult(500, error);
    }
}

function errorResult(statusCode, errors) {
    return {
        'statusCode': statusCode,
        'body': JSON.stringify({
            errors: errors
        }),
        'isBase64Encoded': false,
        'headers': {
            'Content-Type': 'application/json'
        }
    };
}

function defaultResult(statusCode, message) {
    return {
        'statusCode': statusCode,
        'body': JSON.stringify({
            message: message
        }),
        'isBase64Encoded': false,
        'headers': {
            'Content-Type': 'application/json'
        }
    }
}