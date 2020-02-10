using System.Collections.Generic;

namespace Infrastructure.Interfaces
{
    public interface IEntityService
    {
        TOut ConvertTo<TOut>(object value, TOut defaultValue);

        void AssignTo<TIn, TOut>(TIn source, TOut destination);

        TOut ConvertTo<TIn, TOut>(TIn source);

        void AssignTo<TIn, TOut>(TIn source, TOut destination, IDictionary<string, object> items);
    }
}
