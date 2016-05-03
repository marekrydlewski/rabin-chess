using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic.Contexts
{
    public interface IGamesContext
    {
        List<GameListItemVM> GetGames(int userId);
    }
}