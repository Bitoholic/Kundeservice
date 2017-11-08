using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class FAQ : IComparable<FAQ>
    {
        [Key]
        public long Id { get; set; }
        public string Category { get; set; }
        public string GlyphIcon { get; set; }
        public virtual List<QA> QAList { get; set; }


        public int CompareTo(FAQ other)
        {
            return Category.CompareTo(other.Category);
        }
    }
}
