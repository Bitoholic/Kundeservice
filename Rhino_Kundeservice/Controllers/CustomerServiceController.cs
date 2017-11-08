using BLL;
using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace Rhino_Kundeservice.Controllers
{
    public class CustomerServiceController : ApiController
    {
        private CustomerServiceBLL db = new CustomerServiceBLL();

        public HttpResponseMessage Get()
        {
            var InquiryList = db.GetInquiryList();
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(InquiryList);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Inquiry inquiry)
        {
            if(ModelState.IsValid)
            {
                bool OK = db.SaveInquiry(inquiry);
                if (OK)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                }
            }

            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Could not post inquiry to DB")
            };
        }
    }
}
