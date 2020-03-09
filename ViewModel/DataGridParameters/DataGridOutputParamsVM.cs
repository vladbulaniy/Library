﻿using System.Collections.Generic;

namespace ViewModel.DataGridParameters
{
    public class DataGridOutputParamsVM
    {
        public int draw { get; set; }
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public IEnumerable<BookVM> data { get; set; }
    }
}
