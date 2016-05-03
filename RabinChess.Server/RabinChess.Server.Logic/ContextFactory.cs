namespace RubinChess.Server.Logic
{
    public static class ContextFactory
    {
        public static IGamesContext GamesContext { get; set; }

        static ContextFactory()
        {
            GamesContext = new GamesContext(new GamesRetriever());
        }

        public static IGamesContext GetGamesContext()
        {
            return GamesContext;
        }
    }
}