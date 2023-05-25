const scanDynamoDbService = require('./services/scan-dynamodb.service');

exports.lambdaHandler = async (event, context) => {

    try {
        await scanDynamoDbService.getCoursesFromDb()
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });

        return defaultResult(200, 'Dados buscados com sucesso');


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