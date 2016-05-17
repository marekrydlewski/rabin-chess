using System;
using System.Collections.Generic;
using System.Linq;
using RubinChess.Server.Database.Entities;

namespace RabinChess.Server.DataStructures
{
    public class GameVM
    {
        public string Name { get; set; }
        public string Notation { get; set; }
        public List<GameTagVM> Tags { get; set; }
        public int UserId { get; set; }
        public Guid Id { get; set; }

        public static explicit operator GameVM(Game model)
        {
            return new GameVM
            {
                Name = model.Name,
                Id = model.Id,
                Notation = model.GameNotation,
                Tags = model.Tags.Select(x => (GameTagVM) x).ToList(),
                UserId = model.UserId
            };
        }

        public static explicit operator Game(GameVM model)
        {
            return new Game
            {
                GameNotation = model.Notation,
                Id = model.Id,
                Name = model.Name,
                Tags = model.Tags.Select(x => (GameTag) x).ToList(),
                UserId = model.UserId
            };
        }
    }
}