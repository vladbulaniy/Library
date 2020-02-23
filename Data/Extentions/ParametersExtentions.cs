using System.Collections.Generic;
using System.Data;

namespace Data.Extentions
{
    public static class ParametersExtentions
    {
        public static DataTable AsDataTableParam<T>(this IEnumerable<T> data)
        {
            var tableAsParam = new DataTable();

            tableAsParam.Columns.Add("ItemId");

            if (data != null)
            {
                foreach (var item in data)
                {
                    tableAsParam.Rows.Add(item);
                }
            }

            return tableAsParam;
        }
    }
}
