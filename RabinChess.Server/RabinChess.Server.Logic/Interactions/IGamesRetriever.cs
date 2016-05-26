using System;
using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RubinChess.Server.Logic.Interactions
{
    public interface IGamesRetriever
    {
        List<GameListItemVM> GetGames(int userId);
        GameVM GetGame(Guid gameId);
        Guid AddGame(GameVM game);
        bool DeleteGame(Guid gameId);
    }
}