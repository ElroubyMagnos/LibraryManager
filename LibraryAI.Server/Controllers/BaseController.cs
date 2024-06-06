using LibraryCore;
using LibraryCore.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryAI.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : ControllerBase
    {
        private readonly ILogger<BaseController> _logger;

        public BaseController(ILogger<BaseController> logger)
        {
            _logger = logger;
        }

        [HttpPost("SignUp")]
        public async Task<bool> SignUp([FromBody] Customer Customer)
        {
            var l = new library();

            var Selected = await l.Customers.FirstOrDefaultAsync(x => x.Phone == Customer.Phone);

            if (Selected == null)
            {
                await l.Customers.AddAsync(Customer);

                await l.SaveChangesAsync();

                return true;
            }
            else return false;
        }

        [HttpPost("CheckValidCustomer/{Phone}/{Password}")]
        public async Task<bool> CheckValidCustomer(string Phone, string Password)
        {
            var l = new library();
            if ((await l.Customers.FirstOrDefaultAsync(x => x.Phone == Phone && x.Password == Password)) != null)
            {
                return true;
            }
            else return false;
        }

        [HttpGet("GetNameFromPhone/{Phone}")]
        public async Task<string> GetNameFromPhone(string Phone)
        {
            var l = new library();

            return (await l.Customers.FirstOrDefaultAsync(x => x.Phone == Phone))?.Name;
        }

        [HttpPost("UploadAFile/{RequestID}")]
        public async Task UploadAFile([FromForm] UploadFileModel File, int RequestID)
        {
            var l = new library();

            var ms = new MemoryStream();
            await File.File.CopyToAsync(ms);

            await l.Files.AddAsync(new DocumentsFile(){
                FileItself = ms.ToArray(),
                NameOfFile = File.File.Name,
                RequestID = RequestID
            });

            await l.SaveChangesAsync();
        }

        [HttpGet("GetIDFromPhone/{Phone}")]
        public async Task<int> GetIDFromPhone(string Phone)
        {
            return (await new library().Customers.FirstOrDefaultAsync(x => x.Phone == Phone)).ID;
        }

        [HttpPost("GetRequestFromZero")]
        public async Task<int> GetRequestFromZero([FromBody] PrintRequest pr)
        {
            var l = new library();

            await l.PrintRequests.AddAsync(new PrintRequest()
            {
                IsColored = pr.IsColored,
                OwnerId = pr.OwnerId,
            });

            await l.SaveChangesAsync();

            return (await l.PrintRequests.OrderByDescending(x => x.ID).LastAsync()).ID;
        }

        [HttpGet("IsRequestValid/{CurrentRequestID}")]
        public async Task<bool> IsRequestValid(int CurrentRequestID)
        {
            var l = new library();

            var request = await l.PrintRequests.Include(x => x.DocumentsFiles).Include(x => x.CustomerClass).FirstOrDefaultAsync(x => x.ID == CurrentRequestID);

            if (request.CustomerClass != null && request.DocumentsFiles != null
            && request.DocumentsFiles.Count() > 0 && request.OwnerId > 0)
            {
                return true;
            }
            else return false;
        }
    }
    public class UploadFileModel
    {
        public IFormFile File { get; set; }
    }
}
