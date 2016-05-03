using RubinChess.Server.Database.Entities;

namespace RubinChess.Server.Logic.Contexts
{
    public interface IUserContext
    {
        int AddUser(User user);
        bool DeleteUser(int userId);
        int UpdateUser(User user);
        User GetUser(int userId);
        User GetUser(string userName);
    }
}