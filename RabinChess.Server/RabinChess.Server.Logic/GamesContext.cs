using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic
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