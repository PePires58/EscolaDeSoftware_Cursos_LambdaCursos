using EscolaDeSoftware.Cursos.LambdaCursos.Entidades;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EscolaDeSoftware.Cursos.LambdaCursos.Services
{
    internal class GetCoursesService
    {
        ScanDynamoDbService ScanDynamoDbService { get; }

        internal GetCoursesService()
        {
            ScanDynamoDbService = new();
        }

        internal async Task<List<Course>> GetCourses()
        {
            List<Course> courses = new();
            var itens = await ScanDynamoDbService.ScanTable();

            itens.ForEach((item) =>
            {
                Course course = new();
                if (item.TryGetValue("categoria", out var categoria))
                    course.Categoria = categoria.S;
                if (item.TryGetValue("nome", out var nome))
                    course.Nome = nome.S;

                courses.Add(course);
            });

            return courses;
        }
    }
}
