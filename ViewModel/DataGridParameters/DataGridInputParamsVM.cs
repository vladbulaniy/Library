﻿using System.Collections.Generic;

namespace ViewModel.DataGridParameters
{
    public class DataGridInputParamsVM
    {
        public int Draw { get; set; }
        public int Start { get; set; }
        public int Length { get; set; }
        public Search Search { get; set; }
        public IEnumerable<Order> Order { get; set; }
        public IEnumerable<Column> Columns { get; set; }
    }
}
