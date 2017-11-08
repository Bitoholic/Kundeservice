using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class CustomerServiceDAL
    {
        CustomerServiceContext db = new CustomerServiceContext();

        public List<FAQ> GetFAQList()
        {
            List<FAQ> FAQList = db.FAQ.ToList();
            if(FAQList != null && FAQList.Count > 0) FAQList.Sort();
            return FAQList;
        }

        public List<Inquiry> GetInquiryList()
        {
            List<Inquiry> InquiryList = db.Inquiries.ToList();
            if (InquiryList != null && InquiryList.Count > 0) InquiryList.Sort();
            return InquiryList;
        }

        public bool SaveInquiry(Inquiry Question)
        {
            int records = 0;

            try
            {
                Question.Received = DateTime.Now.ToString("dddd dd.MMMM yyyy");
                db.Inquiries.Add(Question);
                records = db.SaveChanges();
            }
            catch (Exception e) {
                Console.Write(e.StackTrace);
            }

            return records != 0;
        }
    }
}
