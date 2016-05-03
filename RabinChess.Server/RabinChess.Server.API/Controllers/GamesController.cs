using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RabinChess.Server.API.Models;
using RubinChess.Server.Logic;

namespace RabinChess.Server.API.Controllers
{
    public class GamesController : ApiController
    {
        // GET: api/Games
        public List<GameListItemViewModel> Get()
        {
            return ContextFactory.GetGamesContext().GetGames(0).Cast<GameListItemViewModel>().ToList();
        }

        // GET: api/Games/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Games
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Games/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Games/5
        public void Delete(int id)
        {
        }
    }
}
