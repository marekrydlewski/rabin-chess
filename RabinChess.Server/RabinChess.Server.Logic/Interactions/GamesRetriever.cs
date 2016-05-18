using System;
using System.Collections.Generic;
using System.ComponentModel.Design;
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
            var game = _context.Games.FirstOrDefault(g => g.Id == gameId);

            if (game == null)
                return false;

            _context.Games.Remove(game);
            _context.SaveChanges();

            return true;
        }

        public static string TagsStringCreator(List<GameTag> tags)
        {
            string tagsString = string.Empty;

            if (tags.Count == 0)
                return "This game has no tags. Click \"Edit\" to add some!";

            var white = tags.FirstOrDefault(tag => tag.Name == "White");
            var black = tags.FirstOrDefault(tag => tag.Name == "Black");
            var ev = tags.FirstOrDefault(tag => tag.Name == "Event");

            if (white == null && black == null && ev == null)
                return "Click \"View\" to see tags!";

            tagsString += white != null ? white.Value : "?";
            tagsString += " vs. ";
            tagsString += black != null ? black.Value : "?";
            tagsString += " | ";
            tagsString += ev != null ? ev.Value : "?";

            return tagsString;
        }
    }
}