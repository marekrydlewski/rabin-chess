using System;
using System.Collections.Generic;
using RabinChess.Server.DataStructures;

namespace RabinChess.Server.API.Models
{
    public class GameListItemViewModel
    {
        public string Name { get; set; }
        public string Tags { get; set; }
        public Guid Id { get; set; }

        public static explicit operator GameListItemViewModel(GameListItemVM model)
        {
            return new GameListItemViewModel
            {
                Id = model.Id,
                Name = model.Name,
                Tags = model.Tags
            };
        }
    }
}