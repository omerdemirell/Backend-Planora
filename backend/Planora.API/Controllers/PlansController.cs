using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Planora.API.Models;
using Planora.API.Services;

namespace Planora.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlansController : ControllerBase
    {
        private readonly IPlanService _planService;

        public PlansController(IPlanService planService)
        {
            _planService = planService;
        }

        [HttpGet]
        public IActionResult GetPlans()
        {
            var plans = _planService.GetPlans();
            return Ok(plans);
        }
    }
}
