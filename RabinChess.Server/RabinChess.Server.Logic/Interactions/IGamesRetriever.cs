using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic.Interactions
{
    public interface IGamesRetriever
    {
        List<GameListItemVM> GetGames(int userId);
    }
}