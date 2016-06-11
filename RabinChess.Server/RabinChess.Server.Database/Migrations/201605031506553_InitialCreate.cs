namespace RubinChess.Server.Database.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        UserId = c.Int(nullable: false),
                        GameNotation = c.String(nullable: false),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.GameTags",
                c => new
                    {
                        GameId = c.Guid(nullable: false),
                        Name = c.String(nullable: false, maxLength: 128),
                        Value = c.String(nullable: false),
                    })
                .PrimaryKey(t => new { t.GameId, t.Name })
                .ForeignKey("dbo.Games", t => t.GameId, cascadeDelete: true)
                .Index(t => t.GameId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false, maxLength: 25),
                        PasswordHash = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        FirstName = c.String(nullable: false, maxLength: 25),
                        LastName = c.String(nullable: false, maxLength: 40),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Games", "UserId", "dbo.Users");
            DropForeignKey("dbo.GameTags", "GameId", "dbo.Games");
            DropIndex("dbo.GameTags", new[] { "GameId" });
            DropIndex("dbo.Games", new[] { "UserId" });
            DropTable("dbo.Users");
            DropTable("dbo.GameTags");
            DropTable("dbo.Games");
        }
    }
}
