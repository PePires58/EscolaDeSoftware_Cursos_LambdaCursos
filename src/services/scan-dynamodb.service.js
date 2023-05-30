const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.getCoursesFromDb = async function () {
    const params = {
        TableName: process.env.TableName,
        ConsistentRead: false
    };

    return await dynamodb.scan(params)
        .promise()
        .then((data) => {
            return data;
        });
}