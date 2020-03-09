using Dapper;
using Data.Entity;
using Infrastructure.Interfaces.Data;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace Data.Repositories
{
    public class BookRepository : RepositoryBase<BookEM, int>, IBookRepository
    {
        public BookRepository(IDataContext context) : base(context)
        {

        }
        public void CreateBook(BookEM model)
        {
            throw new NotImplementedException();
        }

        public void DeleteBook(int id)
        {
            throw new NotImplementedException();
        }

        public BookEM GetBook(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<BookEM> GetBooks(string searchExpression, int start, int length, out int totalRow)
        {
            var spName = "USPGetBooks";
            using (SqlConnection connection = new SqlConnection(CurrentContext.DbConnection))
            {
                totalRow = 0;
                DynamicParameters parameter = new DynamicParameters();

                parameter.Add("@SearchExpression", searchExpression, DbType.String, ParameterDirection.Input);
                parameter.Add("@Start", start, DbType.String, ParameterDirection.Input);
                parameter.Add("@Length", length, dbType: DbType.Int32, direction: ParameterDirection.Input);
                parameter.Add("@TotalFilter", totalRow, dbType: DbType.Int32, direction: ParameterDirection.Output);

                var result = connection.Query<BookEM>(spName, parameter, commandType: CommandType.StoredProcedure);
                totalRow = parameter.Get<int>("TotalFilter");


                return result;
            }
        }

        public void UpdateBook(BookEM model)
        {
            throw new NotImplementedException();
        }
    }
}
