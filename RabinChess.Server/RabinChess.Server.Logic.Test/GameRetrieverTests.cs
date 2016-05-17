using System;
using System.Data.Entity;
using System.Linq;
using Moq;
using NUnit.Framework;
using RabinChess.Server.DataStructures;
using RubinChess.Server.Database;
using RubinChess.Server.Database.Entities;
using RubinChess.Server.Logic.Interactions;

namespace RabinChess.Server.Logic.Test
{
    [TestFixture]
    public class GameRetrieverTests
    {
        [Test]
        public void ListOfGamesIsRetrieved()
        {
            var mockGamesSet = TestDataFactory.GetMockGamesSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Games).Returns(mockGamesSet.Object);

            var gamesRetriever = new GamesRetriever(mockDbContext.Object);
            var games = gamesRetriever.GetGames(1);
            
            Assert.AreEqual(2, games.Count);
            Assert.Contains("Test1", games.Select(g => g.Name).ToList());
            Assert.Contains("Test2", games.Select(g => g.Name).ToList());
            Assert.Contains("Tag1 vs. Tag2 | Tag3", games.Select(g => g.Tags).ToList());
            Assert.Contains("Tag4 vs. Tag5 | Tag6", games.Select(g => g.Tags).ToList());
        }

        [Test]
        public void SingleGameIsRetrieved()
        {
            var mockGameSet = TestDataFactory.GetMockGamesSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Games).Returns(mockGameSet.Object);

            var gamesRetriever = new GamesRetriever(mockDbContext.Object);
            var game = gamesRetriever.GetGame(new Guid("11111111-1111-1111-1111-111111111111"));

            Assert.IsNotNull(game);
            Assert.AreEqual("Test1", game.Name);
        }

        [Test]
        public void GameIsDeleted()
        {
            var mockGameSet = TestDataFactory.GetMockGamesSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Games).Returns(mockGameSet.Object);

            var gamesRetriever = new GamesRetriever(mockDbContext.Object);
            bool result = gamesRetriever.DeleteGame(new Guid("11111111-1111-1111-1111-111111111111"));

            mockGameSet.Verify(m => m.Remove(It.IsAny<Game>()), Times.Once);
            mockDbContext.Verify(m => m.SaveChanges(), Times.Once);

            Assert.IsTrue(result);
        }

        [Test]
        [Ignore]
        public void GameIsAdded()
        {
            var game = (GameVM) TestDataFactory.GetSampleGame();
            var mockGameSet = new Mock<DbSet<Game>>();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Games).Returns(mockGameSet.Object);

            var gamesRetriever = new GamesRetriever(mockDbContext.Object);
            var id = gamesRetriever.AddGame(game);

            mockGameSet.Verify(m => m.Add(It.IsAny<Game>()), Times.Once);
            mockDbContext.Verify(m => m.SaveChanges(), Times.Once);

            Assert.IsNotNull(id);
        }
    }
}