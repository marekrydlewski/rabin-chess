using System.Collections.Generic;
using RabinChess.Server.DataStructures;
using RubinChess.Server.Logic.Interactions;

namespace RubinChess.Server.Logic.Contexts
{
    public class GamesContext : IGamesContext
    {
        private IGamesRetriever GamesRetriever { get; set; }

        public GamesContext(IGamesRetriever gamesRetriever)
        {
            GamesRetriever = gamesRetriever;
        }

        public List<GameListItemVM> GetGames(int userId)
        {
            return GamesRetriever.GetGames(userId);
        }
    }
}