const scanDynamoDbService = require('./scan-dynamodb.service');
const createCourseObjectService = require('./create-course-object.service');

exports.getCourses = async function () {

    await scanDynamoDbService.getCoursesFromDb()
        .then((data) => {
            const objetosRetorno = [];
            const hasItensOnResult = data.Count > 0;

            if (hasItensOnResult) {
                data.Items.forEach((item) => {
                    objetosRetorno.push(
                        createCourseObjectService.createCourseObject(item)
                    );
                });
            }

            return objetosRetorno;
        });
}