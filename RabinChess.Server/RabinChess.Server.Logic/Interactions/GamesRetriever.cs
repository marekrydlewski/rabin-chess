using System;
using System.Collections.Generic;
using System.Linq;
using RabinChess.Server.DataStructures;
using RubinChess.Server.Database;
using RubinChess.Server.Database.Entities;

namespace RubinChess.Server.Logic.Interactions
{
    public class GamesRetriever : IGamesRetriever
    {
        private RubinChessContext _context;

        public GamesRetriever(RubinChessContext context)
        {
            _context = context;
        }

        public List<GameListItemVM> GetGames(int userId)
        {
            var gameListItems = new List<GameListItemVM>();
            List<Game> games = _context.Games.Where(g => g.UserId == userId).ToList();
            games.ForEach(game => gameListItems.Add(new GameListItemVM{Id = game.Id, Name = game.Name, Tags = TagsStringCreator(game.Tags)}));
            return gameListItems;
        }

        public GameVM GetGame(Guid gameId)
        {
            return (GameVM) _context.Games.FirstOrDefault(g => g.Id == gameId);
        }

        public Guid AddGame(GameVM game)
        {
            var gameEntity = (Game) game;
            Game res = _context.Games.Add(gameEntity);
            _context.SaveChanges();
            return res.Id;
        }

        public bool DeleteGame(Guid gameId)
        {
            _context.Games.Remove(_context.Games.FirstOrDefault(g => g.Id == gameId));
            _context.SaveChanges();
            return true;
        }

        private static string TagsStringCreator(List<GameTag> tags)
        {
            string tagsString = string.Empty;

            tagsString += tags.FirstOrDefault(tag => tag.Name == "White").Value;
            tagsString += " vs. ";
            tagsString += tags.FirstOrDefault(tag => tag.Name == "Black").Value;
            tagsString += " | ";
            tagsString += tags.FirstOrDefault(tag => tag.Name == "Event").Value;

            return tagsString;
        }
    }
}