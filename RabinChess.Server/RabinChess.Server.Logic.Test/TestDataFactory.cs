using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using Moq;
using RubinChess.Server.Database.Entities;

namespace RabinChess.Server.Logic.Test
{
    public static class TestDataFactory
    {
        public static Mock<DbSet<Game>> GetMockGamesSet()
        {
            var games = GetSampleGames().AsQueryable();

            var mockGamesSet = new Mock<DbSet<Game>>();
            mockGamesSet.As<IQueryable<Game>>().Setup(m => m.Provider).Returns(games.Provider);
            mockGamesSet.As<IQueryable<Game>>().Setup(m => m.Expression).Returns(games.Expression);
            mockGamesSet.As<IQueryable<Game>>().Setup(m => m.ElementType).Returns(games.ElementType);
            mockGamesSet.As<IQueryable<Game>>().Setup(m => m.GetEnumerator()).Returns(() => games.GetEnumerator());

            return mockGamesSet;
        }

        public static Mock<DbSet<User>> GetMockUsersSet()
        {
            User user = GetSampleUser();
            user.Games = GetSampleGames();
            user.Id = 1;

            var users = new List<User>
            {
                user
            }.AsQueryable();

            var mockUserSet = new Mock<DbSet<User>>();
            mockUserSet.As<IQueryable<User>>().Setup(m => m.Provider).Returns(users.Provider);
            mockUserSet.As<IQueryable<User>>().Setup(m => m.Expression).Returns(users.Expression);
            mockUserSet.As<IQueryable<User>>().Setup(m => m.ElementType).Returns(users.ElementType);
            mockUserSet.As<IQueryable<User>>().Setup(m => m.GetEnumerator()).Returns(() => users.GetEnumerator());

            return mockUserSet;
        }

        public static Mock<DbSet<GameTag>> GetMockTagSet()
        {
            var tags = new List<GameTag>
            {
                new GameTag
                {
                    GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                    Name = "White",
                    Value = "Tag1"
                },
                new GameTag
                {
                    GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                    Name = "Black",
                    Value = "Tag2"
                },
                new GameTag
                {
                    GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                    Name = "Event",
                    Value = "Tag3"
                },
                new GameTag
                {
                    GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                    Name = "White",
                    Value = "Tag4"
                },
                new GameTag
                {
                    GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                    Name = "Black",
                    Value = "Tag5"
                },
                new GameTag
                {
                    GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                    Name = "Event",
                    Value = "Tag6"
                }
            }.AsQueryable();

            var mockTagsSet = new Mock<DbSet<GameTag>>();
            mockTagsSet.As<IQueryable<GameTag>>().Setup(m => m.Provider).Returns(tags.Provider);
            mockTagsSet.As<IQueryable<GameTag>>().Setup(m => m.Expression).Returns(tags.Expression);
            mockTagsSet.As<IQueryable<GameTag>>().Setup(m => m.ElementType).Returns(tags.ElementType);
            mockTagsSet.As<IQueryable<GameTag>>().Setup(m => m.GetEnumerator()).Returns(() => tags.GetEnumerator());

            return mockTagsSet;
        }

        public static User GetSampleUser()
        {
            return new User
            {
                Email = "test@test.com",
                FirstName = "Name",
                LastName = "Surname",
                PasswordHash = "1a1dc91c907325c69271ddf0c944bc72",
                UserName = "User123"
            };
        }

        public static List<Game> GetSampleGames()
        {
            var games = new List<Game>
            {
                new Game
                {
                    Id = new Guid("11111111-1111-1111-1111-111111111111"),
                    Name = "Test1",
                    Tags =
                        new List<GameTag>
                        {
                            new GameTag
                            {
                                GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                                Name = "White",
                                Value = "Tag1"
                            },
                            new GameTag
                            {
                                GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                                Name = "Black",
                                Value = "Tag2"
                            },
                            new GameTag
                            {
                                GameId = new Guid("11111111-1111-1111-1111-111111111111"),
                                Name = "Event",
                                Value = "Tag3"
                            }
                        },
                    GameNotation = "",
                    UserId = 1
                },
                new Game
                {
                    Id = new Guid("22222222-2222-2222-2222-222222222222"),
                    Name = "Test2",
                    Tags =
                        new List<GameTag>
                        {
                            new GameTag
                            {
                                GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                                Name = "White",
                                Value = "Tag4"
                            },
                            new GameTag
                            {
                                GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                                Name = "Black",
                                Value = "Tag5"
                            },
                            new GameTag
                            {
                                GameId = new Guid("22222222-2222-2222-2222-222222222222"),
                                Name = "Event",
                                Value = "Tag6"
                            }
                        },
                    GameNotation = "",
                    UserId = 1
                }
            };

            var user = GetSampleUser();
            user.Id = 1;
            user.Games = games;

            games.ForEach(g => g.User = user);

            return games;
        }
    }
}