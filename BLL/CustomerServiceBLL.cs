using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class CustomerServiceBLL
    {

        public List<FAQ> GetFAQList()
        {
            var db = new DAL.CustomerServiceDAL();
            return db.GetFAQList();
        }

        public List<Inquiry> GetInquiryList()
        {
            var db = new DAL.CustomerServiceDAL();
            return db.GetInquiryList();
        }

        public bool SaveInquiry(Inquiry Question)
        {
            var db = new DAL.CustomerServiceDAL();
            return db.SaveInquiry(Question);
        }
    }
}
