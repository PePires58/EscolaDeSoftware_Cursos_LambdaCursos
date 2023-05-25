using System.Text.Json.Serialization;

namespace EscolaDeSoftware.Cursos.LambdaCursos.Entidades
{
    internal class Course
    {
        internal Course()
        {
            Categoria = Nome = string.Empty;
        }
        
        [JsonPropertyName("categoria")]
        internal string Categoria { get; set; }

        [JsonPropertyName("nome")]
        internal string Nome { get; set; }
    }
}
