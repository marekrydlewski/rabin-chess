using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNet.Identity;

namespace RabinChess.Server.API.Security
{
    public class PasswordHasher : IPasswordHasher
    {
        public string HashPassword(string password)
        {
            var x = new MD5CryptoServiceProvider();
            byte[] passwordBytes = Encoding.ASCII.GetBytes(password);
            passwordBytes = x.ComputeHash(passwordBytes);
            return passwordBytes.Aggregate("", (current, passwordByte) => current + passwordByte.ToString("x2").ToLower());
        }

        public PasswordVerificationResult VerifyHashedPassword(string hashedPassword, string providedPassword)
        {
            return hashedPassword == HashPassword(providedPassword)
                ? PasswordVerificationResult.Success
                : PasswordVerificationResult.Failed;
        }
    }
}