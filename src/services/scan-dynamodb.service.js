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
            console.log(data);
            return data;
        })
        .catch((error) => {
            console.log(error);
            throw
        });
}