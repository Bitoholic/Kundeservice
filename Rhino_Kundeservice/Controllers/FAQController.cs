using BLL;
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
    public class FAQController : ApiController
    {
        private CustomerServiceBLL db = new CustomerServiceBLL();

        public HttpResponseMessage Get()
        {
            var FAQList = db.GetFAQList();
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(FAQList);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
