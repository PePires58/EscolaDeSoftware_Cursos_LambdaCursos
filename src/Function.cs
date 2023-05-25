using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using EscolaDeSoftware.Cursos.LambdaCursos.Services;
using System.Net;
using System.Text.Json;

[assembly: LambdaSerializer(typeof(Amazon.Lambda.Serialization.SystemTextJson.DefaultLambdaJsonSerializer))]

namespace EscolaDeSoftware.Cursos.LambdaCursos
{
    public class Function
    {
        GetCoursesService GetCoursesService { get; }

        public Function()
        {
            GetCoursesService = new();
        }

        public async Task<APIGatewayHttpApiV2ProxyResponse> FunctionHandler(APIGatewayHttpApiV2ProxyRequest request, ILambdaContext context)
        {
            var courses = await GetCoursesService.GetCourses();

            if (courses.Any())
            {
                return new APIGatewayHttpApiV2ProxyResponse()
                {
                    Body = JsonSerializer.Serialize(courses),
                    IsBase64Encoded = false,
                    StatusCode = (int)HttpStatusCode.OK
                };
            }
            else
            {
                return new APIGatewayHttpApiV2ProxyResponse()
                {
                    Body = "nenhum curso encontrado",
                    IsBase64Encoded = false,
                    StatusCode = (int)HttpStatusCode.NoContent
                };
            }

        }
    }
}