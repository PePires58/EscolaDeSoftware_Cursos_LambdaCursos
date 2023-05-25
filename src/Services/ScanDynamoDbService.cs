using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace EscolaDeSoftware.Cursos.LambdaCursos.Services
{
    internal class ScanDynamoDbService
    {
        IAmazonDynamoDB AmazonDynamoDB { get; }

        internal ScanDynamoDbService()
        {
            AmazonDynamoDB = new AmazonDynamoDBClient(RegionEndpoint.SAEast1);
        }
        
        internal async Task<List<Dictionary<string, AttributeValue>>> ScanTable()
        {
            ScanResponse response = await AmazonDynamoDB.ScanAsync(new ScanRequest("tbes_cursos_dev")
            {
                ConsistentRead = false,
            });

            if (response.HttpStatusCode == HttpStatusCode.OK)
            {
                return response.Items;
            }

            return new List<Dictionary<string, AttributeValue>>();
        }
    }
}
