using System;
using System.Collections.Generic;

namespace ViewModel
{
    public class BookVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public int Rate { get; set; }
        public int Pages { get; set; }

        public List<AuthorVM> Authors { get; set; } = new List<AuthorVM>();
    }
}