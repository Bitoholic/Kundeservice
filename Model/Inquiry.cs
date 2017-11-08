using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Inquiry : IComparable<Inquiry>
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MinLength(2)]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,30}$")]
        public string FirstName { get; set; }

        [Required]
        [MinLength(2)]
        [RegularExpression("^[a-zæøåA-ZÆØÅ. \\-]{2,30}$")]
        public string LastName { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }
        public string Received { get; set; }

        [Required]
        [MinLength(5)]
        public string Question { get; set; }



        public int CompareTo(Inquiry other)
        {
            return (other.Id - this.Id);
        }
    }
}
