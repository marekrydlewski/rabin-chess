using System.Data.Entity;
using System.Linq;
using RubinChess.Server.Database;
using RubinChess.Server.Database.Entities;

namespace RubinChess.Server.Logic.Interactions
{
    public class UserManager : IUserManager
    {
        private RubinChessContext _context;

        public UserManager(RubinChessContext context)
        {
            _context = context;
        }

        public int AddUser(User user)
        {
            User newUser = _context.Users.Add(user);
            _context.SaveChanges();
            int newUserId = newUser.Id;
            
            return newUserId;
        }

        public bool DeleteUser(int userId)
        {
            _context.Users.Remove(_context.Users.FirstOrDefault(user => user.Id == userId));
            _context.SaveChanges();
            
            return true;
        }

        public int UpdateUser(User user)
        {
            var existingUser = _context.Users.FirstOrDefault(dbUser => dbUser.Id == user.Id);
            existingUser.Email = user.Email;
            existingUser.FirstName = user.FirstName;
            existingUser.LastName = user.LastName;
            existingUser.PasswordHash = user.PasswordHash;
            existingUser.UserName = user.UserName;
            _context.SaveChanges();
            int userId = existingUser.Id;
            return userId;
        }

        public User GetUser(int userId)
        {
            User user = _context.Users.Include(dbUser => dbUser.Games).FirstOrDefault(dbUser => dbUser.Id == userId);
            return user;
        }

        public User GetUser(string userName)
        {
            User user = _context.Users.Include(dbUser => dbUser.Games).FirstOrDefault(dbUser => dbUser.UserName == userName);
            return user;
        }
    }
}