using System;
using System.Collections.Generic;

namespace Data.Entity
{
    public class BookEM
    {
        public int BookId { get; set; }
        public string Title { get; set; }
        public DateTime PublicationDate { get; set; }
        public int Rating { get; set; }
        public int PagesCount { get; set; }

        public List<AuthorEM> Authors { get; set; } = new List<AuthorEM>();
    }
}
