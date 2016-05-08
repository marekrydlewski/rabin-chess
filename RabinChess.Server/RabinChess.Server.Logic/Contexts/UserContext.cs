using RubinChess.Server.Database.Entities;
using RubinChess.Server.Logic.Interactions;

namespace RubinChess.Server.Logic.Contexts
{
    public class UserContext : IUserContext
    {
        private IUserManager UserManager { get; set; }

        public UserContext(IUserManager userManager)
        {
            UserManager = userManager;
        }

        public int AddUser(User user)
        {
            return UserManager.AddUser(user);
        }

        public bool DeleteUser(int userId)
        {
            return UserManager.DeleteUser(userId);
        }

        public int UpdateUser(User user)
        {
            return UserManager.UpdateUser(user);
        }

        public User GetUser(int userId)
        {
            return UserManager.GetUser(userId);
        }

        public User GetUser(string userName)
        {
            return UserManager.GetUser(userName);
        }
    }
}