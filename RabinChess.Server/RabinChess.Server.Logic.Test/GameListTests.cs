using System;
using System.Collections.Generic;
using Moq;
using NUnit.Framework;
using RabinChess.Server.DataStructures;
using RubinChess.Server.Logic.Contexts;
using RubinChess.Server.Logic.Interactions;

namespace RabinChess.Server.Logic.Test
{
    [TestFixture]
    public class GameListTests
    {
        [Test]
        public void ListOfGamesIsRetrieved()
        {
            var mockRetriever = new Mock<IGamesRetriever>();
            mockRetriever.Setup(t => t.GetGames(0))
                .Returns(new List<GameListItemVM>
            {
                new GameListItemVM
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    Name = "Game 1",
                    Tags = "Man vs. Woman | Some event"
                },
                new GameListItemVM
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    Name = "Game 2",
                    Tags = "Someone vs. noone | None event"
                }
            });

            IGamesContext context = new GamesContext(mockRetriever.Object);
            Assert.AreEqual(context.GetGames(0).Count, 2);
        }
    }
}