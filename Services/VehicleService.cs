using WebApplicationForAlpha.Models;

namespace WebApplicationForAlpha.Services
{
    public class VehicleService
    {
        private readonly List<Vehicle> _vehicles = new()
        {
            new Vehicle { Make = "Toyota", Model = "Corolla", Year = 2020 },
            new Vehicle { Make = "Honda", Model = "Civic", Year = 2019 },
            new Vehicle { Make = "Nissan", Model = "GTR", Year = 2014 }
        };

        public List<Vehicle> GetAll() => _vehicles;

        public void Add(Vehicle vehicle)
        {
            _vehicles.Add(vehicle);
        }
    }
}
