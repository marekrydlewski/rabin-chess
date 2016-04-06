using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace RabinChess.Server.API.Controllers
{
    public class SampleController : ApiController
    {
        // GET: api/Sample
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Sample?id=5
        public string Get([FromUri]int id)
        {
            return "value";
        }

        // POST: api/Sample
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Sample
        public void Put([FromBody]string value)
        {
        }

        // DELETE: api/Sample?id=5
        public void Delete([FromUri]int id)
        {
        }
    }
}
