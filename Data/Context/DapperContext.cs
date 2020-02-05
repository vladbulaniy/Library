using Infrastructure.Interfaces.Data;
using System;

namespace Data.Context
{
    public class DapperContext : IDataContext
    {
        public string DbConnection { get; protected set; }
        public DapperContext(string connectionString)
        {
            this.DbConnection = connectionString;
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}
