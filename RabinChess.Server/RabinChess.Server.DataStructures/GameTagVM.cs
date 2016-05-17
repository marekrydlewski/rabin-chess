using System;
using RubinChess.Server.Database.Entities;

namespace RabinChess.Server.DataStructures
{
    public class GameTagVM
    {
        public string Name { get; set; }
        public string Value { get; set; }
        public Guid GameId { get; set; }

        public static explicit operator GameTagVM(GameTag model)
        {
            return new GameTagVM
            {
                GameId = model.GameId,
                Name = model.Name,
                Value = model.Value
            };
        }

        public static explicit operator GameTag(GameTagVM model)
        {
            return new GameTag
            {
                GameId = model.GameId,
                Name = model.Name,
                Value = model.Value
            };
        }
    }
}