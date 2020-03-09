using System;
using System.Collections.Generic;

namespace ViewModel
{
    public class BookVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Date { get; set; }
        public int Rate { get; set; }
        public int Pages { get; set; }

        public string Author { get; set; }
    }
}