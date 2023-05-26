const scanDynamoDbService = require('./scan-dynamodb.service');
const createCourseObjectService = require('./create-course-object.service');

exports.getCourses = async function () {

    let objetosRetorno = [];

    await scanDynamoDbService.getCoursesFromDb()
        .then((data) => {
            const hasItensOnResult = data.Count > 0;

            if (hasItensOnResult) {
                data.Items.forEach((item) => {
                    objetosRetorno.push(
                        createCourseObjectService.createCourseObject(item)
                    );
                });
            }

        });

    return objetosRetorno;
}