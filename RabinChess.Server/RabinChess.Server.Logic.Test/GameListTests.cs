using System.Linq;
using Moq;
using NUnit.Framework;
using RubinChess.Server.Database;
using RubinChess.Server.Logic.Interactions;

namespace RabinChess.Server.Logic.Test
{
    [TestFixture]
    public class GameListTests
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
    }
}