using System.Data.Entity;
using RubinChess.Server.Database.Entities;

namespace RubinChess.Server.Database
{
    public class RubinChessContext : DbContext
    {
        public RubinChessContext() : base("RubinChess")
        {
            System.Data.Entity.Database.SetInitializer(new CreateDatabaseIfNotExists<RubinChessContext>());
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<GameTag> GameTags { get; set; }
    }
}