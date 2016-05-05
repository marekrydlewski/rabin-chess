using System.Data.Entity;
using System.Linq;
using RubinChess.Server.Database;
using RubinChess.Server.Database.Entities;

namespace RubinChess.Server.Logic.Interactions
{
    public class UserManager : IUserManager
    {
        public int AddUser(User user)
        {
            int newUserId;
            using (var ctx = new RubinChessContext())
            {
                User newUser = ctx.Users.Add(user);
                ctx.SaveChanges();
                newUserId = newUser.Id;
            }
            return newUserId;
        }

        public bool DeleteUser(int userId)
        {
            using (var ctx = new RubinChessContext())
            {
                ctx.Users.Remove(ctx.Users.FirstOrDefault(user => user.Id == userId));
                ctx.SaveChanges();
            }
            return true;
        }

        public int UpdateUser(User user)
        {
            int userId;
            using (var ctx = new RubinChessContext())
            {
                var existingUser = ctx.Users.FirstOrDefault(dbUser => dbUser.Id == user.Id);
                existingUser.Email = user.Email;
                existingUser.FirstName = user.FirstName;
                existingUser.LastName = user.LastName;
                existingUser.PasswordHash = user.PasswordHash;
                existingUser.UserName = user.UserName;
                ctx.SaveChanges();
                userId = existingUser.Id;
            }
            return userId;
        }

        public User GetUser(int userId)
        {
            User user;
            using (var ctx = new RubinChessContext())
            {
                user = ctx.Users.Include(dbUser => dbUser.Games).FirstOrDefault(dbUser => dbUser.Id == userId);
            }
            return user;
        }

        public User GetUser(string userName)
        {
            User user;
            using (var ctx = new RubinChessContext())
            {
                user = ctx.Users.Include(dbUser => dbUser.Games).FirstOrDefault(dbUser => dbUser.UserName == userName);
            }
            return user;
        }
    }
}