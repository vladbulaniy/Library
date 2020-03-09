using System;
using System.Collections.Generic;

namespace Data.Entity
{
    public class BookEM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public int Rate { get; set; }
        public int Pages { get; set; }
        public int MyProperty { get; set; }
        public string Author { get; set; }
        //public List<AuthorEM> Authors { get; set; } = new List<AuthorEM>();
    }
}
