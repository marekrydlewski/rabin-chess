using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic
{
    public interface IGamesRetriever
    {
        List<GameListItemVM> GetGames(int userId);
    }
}