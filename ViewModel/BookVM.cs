using System;
using System.Collections.Generic;

namespace ViewModel
{
    public class BookVM
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime PublicationDate { get; set; }
        public int Rating { get; set; }
        public int PagesCount { get; set; }

        public List<AuthorVM> Authors { get; set; } = new List<AuthorVM>();
    }
}