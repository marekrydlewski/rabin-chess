using System;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using RabinChess.Server.API.Models;
using RubinChess.Server.Database.Entities;
using RubinChess.Server.Logic;

namespace RabinChess.Server.API.Stores
{
    public class UserStore : IUserPasswordStore<UserModel, int>
    {
        public void Dispose()
        {
            
        }

        public Task CreateAsync(UserModel user)
        {
            return Task.FromResult(ContextFactory.GetUserContext().AddUser((User) user));
        }

        public Task UpdateAsync(UserModel user)
        {
            return Task.FromResult(ContextFactory.GetUserContext().UpdateUser((User) user));
        }

        public Task DeleteAsync(UserModel user)
        {
            return Task.FromResult(ContextFactory.GetUserContext().DeleteUser(user.Id));
        }

        public Task<UserModel> FindByIdAsync(int userId)
        {
            return Task.FromResult((UserModel) ContextFactory.GetUserContext().GetUser(userId));
        }

        public Task<UserModel> FindByNameAsync(string userName)
        {
            return Task.FromResult((UserModel) ContextFactory.GetUserContext().GetUser(userName));
        }

        public Task SetPasswordHashAsync(UserModel user, string passwordHash)
        {
            user.PasswordHash = passwordHash;
            return Task.FromResult(0);
        }

        public Task<string> GetPasswordHashAsync(UserModel user)
        {
            if(user == null)
                throw new ArgumentNullException("user");
            return Task.FromResult(user.PasswordHash);
        }

        public Task<bool> HasPasswordAsync(UserModel user)
        {
            return Task.FromResult(user.PasswordHash != null);
        }
    }
}