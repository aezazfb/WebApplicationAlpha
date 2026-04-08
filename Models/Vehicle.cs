using System.ComponentModel.DataAnnotations;


namespace WebApplicationForAlpha.Models
{
    public class Vehicle
    {
        [Required]
        public required string Make { get; set; }

        [Required]
        public required string Model { get; set; }

        [Range(1900, 2100)]
        public int Year { get; set; }
    }
}
