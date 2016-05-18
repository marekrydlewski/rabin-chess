using System.Collections.Generic;
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

        [Test]
        public void UserIsRemoved()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            bool deleted = userManager.DeleteUser(1);

            mockUserSet.Verify(m => m.Remove(It.IsAny<User>()), Times.Once);
            mockDbContext.Verify(m => m.SaveChanges(), Times.Once);

            Assert.IsTrue(deleted);
        }

        [Test]
        public void UserIsUpdated()
        {
            var updatedUser = TestDataFactory.GetSampleUser();
            updatedUser.Id = 1;
            updatedUser.Games = new List<Game>();
            updatedUser.FirstName = "OtherName";

            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            int userId = userManager.UpdateUser(updatedUser);

            mockDbContext.Verify(m => m.SaveChanges(), Times.Once);

            Assert.AreEqual(1, userId);
        }

        [Test]
        [Ignore]
        public void UserIsRetrievedById()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();
            var mockGameSet = TestDataFactory.GetMockGamesSet();
            var mockTagSet = TestDataFactory.GetMockTagSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);
            mockDbContext.Setup(m => m.Games).Returns(mockGameSet.Object);
            mockDbContext.Setup(m => m.GameTags).Returns(mockTagSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            var user = userManager.GetUser(1);

            Assert.AreEqual(1, user.Id);
            Assert.AreEqual("Name", user.FirstName);
            Assert.AreEqual("Surname", user.LastName);
            Assert.AreEqual("User123", user.UserName);
            Assert.AreEqual("test@test.com", user.Email);
        }

        [Test]
        [Ignore]
        public void UserIsRetrievedByName()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();
            var mockGameSet = TestDataFactory.GetMockGamesSet();
            var mockTagSet = TestDataFactory.GetMockTagSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);
            mockDbContext.Setup(m => m.Games).Returns(mockGameSet.Object);
            mockDbContext.Setup(m => m.GameTags).Returns(mockTagSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            var user = userManager.GetUser("User123");

            Assert.AreEqual(1, user.Id);
            Assert.AreEqual("Name", user.FirstName);
            Assert.AreEqual("Surname", user.LastName);
            Assert.AreEqual("User123", user.UserName);
            Assert.AreEqual("test@test.com", user.Email);
        }

        [Test]
        public void GetUserWithNonExistingId()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            Assert.Throws<System.ArgumentNullException>(() => userManager.GetUser(8));
        }

        [Test]
        public void GetUserWithNonExistingName()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            Assert.Throws<System.ArgumentNullException>(() => userManager.GetUser("Hahahah"));
        }

        [Test]
        public void DeleteUserWithNonExistingId()
        {
            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            bool result = userManager.DeleteUser(8);

            Assert.IsFalse(result);
        }

        [Test]
        public void UpdateNonExistingUser()
        {
            var userToUpdate = TestDataFactory.GetSampleUser();
            userToUpdate.Id = 17;

            var mockUserSet = TestDataFactory.GetMockUsersSet();

            var mockDbContext = new Mock<RubinChessContext>();
            mockDbContext.Setup(m => m.Users).Returns(mockUserSet.Object);

            var userManager = new UserManager(mockDbContext.Object);
            Assert.Throws<System.NullReferenceException>(() => userManager.UpdateUser(userToUpdate));
        }
    }
}