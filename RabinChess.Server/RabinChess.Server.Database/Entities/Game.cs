using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RubinChess.Server.Database.Entities
{
    public class Game
    {
        [Key]
        public Guid Id { get; set; }

        public User User { get; set; }
 
        [ForeignKey("User"), Required]
        public int UserId { get; set; }

        [Required]
        public string GameNotation { get; set; }

        public virtual List<GameTag> Tags { get; set; } 
    }
}