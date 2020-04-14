using System; 

namespace muralPass.Models
{
    public class Mural
    {
        
        public int Id { get; set; }
        public string MuralDescription { get; set; }
        public string ArtistName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
    }
}