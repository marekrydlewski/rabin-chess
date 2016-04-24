using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RubinChess.Server.Database.Entities
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [MinLength(5), MaxLength(25), Required]
        public string UserName { get; set; }

        [Required]
        public string PasswordHash { get; set; }

        [Required]
        public string Email { get; set; }

        public virtual List<Game> Games { get; set; } 
    }
}