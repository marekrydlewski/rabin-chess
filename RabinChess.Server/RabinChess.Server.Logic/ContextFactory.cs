using RubinChess.Server.Logic.Contexts;
using RubinChess.Server.Logic.Interactions;

namespace RubinChess.Server.Logic
{
    public static class ContextFactory
    {
        private static IUserContext UserContext { get; set; }

        private static IGamesContext GamesContext { get; set; }

        static ContextFactory()
        {
            GamesContext = new GamesContext(new GamesRetriever());
            UserContext = new UserContext(new UserManager());
        }

        public static IGamesContext GetGamesContext()
        {
            return GamesContext;
        }

        public static IUserContext GetUserContext()
        {
            return UserContext;
        }
    }
}