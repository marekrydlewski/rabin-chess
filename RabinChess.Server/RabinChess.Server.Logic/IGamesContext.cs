using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic
{
    public interface IGamesContext
    {
        List<GameListItemVM> GetGames(int userId);
    }
}