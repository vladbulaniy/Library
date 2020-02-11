using AutoMapper;
using Data.Entity;
using ViewModel;

namespace Bootstrap
{
    public static class ApplicationMapper
    {
        public static void Init()
        {
            Mapper.Initialize((mapper) =>
            {
                mapper.CreateMap<BookVM, BookEM>().ReverseMap();
                //mapper.CreateMap<CreateBookVM, CreateBookEM>().ReverseMap();

                mapper.CreateMap<AuthorVM, AuthorEM>().ReverseMap();
            });
        }
    }
}
