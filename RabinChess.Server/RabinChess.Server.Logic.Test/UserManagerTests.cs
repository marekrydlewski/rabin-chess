using System.Data.Entity;
using Moq;
using NUnit.Framework;
using RubinChess.Server.Database;
using RubinChess.Server.Database.Entities;
using RubinChess.Server.Logic.Interactions;

namespace RabinChess.Server.Logic.Test
{
    [TestFixture]
    public class UserManagerTests
    {
        [Test]
        [Ignore]
        public void UserIsAdded()
        {
            var mockUserSet = new Mock<DbSet<User>>();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            int userId = userManager.AddUser(TestDataFactory.GetSampleUser());

            mockUserSet.Verify(m => m.Add(It.IsAny<User>()), Times.Once);
            mockDbContext.Verify(m => m.SaveChanges(), Times.Once);

            Assert.AreNotEqual(0, userId);
        }
    }
}