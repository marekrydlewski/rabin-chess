using Microsoft.AspNet.Identity;
using RubinChess.Server.Database.Entities;

namespace RabinChess.Server.API.Models
{
    public class UserModel : IUser<int>
    {
        public int Id { get; private set; }
        public string UserName { get; set; }
        public string PasswordHash { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public static explicit operator UserModel(User user)
        {
            return new UserModel
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Id = user.Id,
                PasswordHash = user.PasswordHash,
                UserName = user.UserName
            };
        }

        public static explicit operator User(UserModel user)
        {
            return new User
            {
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                Id = user.Id,
                PasswordHash = user.PasswordHash,
                UserName = user.UserName
            };
        }
    }
}