const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.lambdaHandler = async (event, context) => {

    try {
        const params = {
            TableName: "tbes_cursos_dev",
            ConsistentRead: false
        };

        dynamodb.scan(params, function (err, data) {
            if (err) console.log(err, err.stack);
            else console.log(data);
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