using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RubinChess.Server.Database.Entities
{
    public class GameTag
    {
        public Game Game { get; set; }
 
        [Key, ForeignKey("Game"), Column(Order = 1)]
        public Guid GameId { get; set; }

        [Key, Column(Order = 2)]
        public string Name { get; set; }

        [Required]
        public string Value { get; set; }
    }
}