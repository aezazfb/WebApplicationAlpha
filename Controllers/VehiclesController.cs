using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationForAlpha.Models;
using WebApplicationForAlpha.Services;

namespace WebApplicationForAlpha.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly VehicleService _vehicleService;

        public VehiclesController(VehicleService vehicleService)
        {
            _vehicleService = vehicleService;
        }

        [HttpGet]
        public IActionResult Get() 
        { 
            return Ok(_vehicleService.GetAll());
        }
        [HttpPost]
        public IActionResult Post([FromBody] Vehicle vehicle) 
        {
            if (vehicle == null || !ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }
            _vehicleService.Add(vehicle);

            return Ok();
        }
    }
}
