using System;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security.OAuth;
using RabinChess.Server.API.Models;

namespace RabinChess.Server.API
{
    public partial class Startup
    {
        public static OAuthAuthorizationServerOptions OAuthOptions { get; private set; }

        public static string PublicClientId { get; private set; }

        public static Func<UserManager<UserModel, int>> UserManagerFactory { get; private set; }
 
        static Startup()
        {
            PublicClientId = "self";
        }
    }
}