using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using RabinChess.Server.API.Models;

namespace RabinChess.Server.API.Stores
{
    public class UserStore : IUserPasswordStore<UserModel, int>
    {
        public void Dispose()
        {
            
        }

        public Task CreateAsync(UserModel user)
        {
            throw new System.NotImplementedException();
        }

        public Task UpdateAsync(UserModel user)
        {
            throw new System.NotImplementedException();
        }

        public Task DeleteAsync(UserModel user)
        {
            throw new System.NotImplementedException();
        }

        public Task<UserModel> FindByIdAsync(int userId)
        {
            throw new System.NotImplementedException();
        }

        public Task<UserModel> FindByNameAsync(string userName)
        {
            throw new System.NotImplementedException();
        }

        public Task SetPasswordHashAsync(UserModel user, string passwordHash)
        {
            throw new System.NotImplementedException();
        }

        public Task<string> GetPasswordHashAsync(UserModel user)
        {
            throw new System.NotImplementedException();
        }

        public Task<bool> HasPasswordAsync(UserModel user)
        {
            throw new System.NotImplementedException();
        }
    }
}