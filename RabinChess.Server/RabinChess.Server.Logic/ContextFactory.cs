using RubinChess.Server.Database;
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
            var context = new RubinChessContext();
            GamesContext = new GamesContext(new GamesRetriever(context));
            UserContext = new UserContext(new UserManager(context));
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