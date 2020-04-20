using System;

namespace muralPass.Models
{
    public class Mural
    {

        public int Id { get; set; }
        public string MuralDescription { get; set; }
        public string ArtistName { get; set; }
        public double Longitude { get; set; }
        public double Latitude { get; set; }

        public string FullAddress { get; set; }

    }
}