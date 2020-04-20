namespace mapTest.Models
{
    public class PointOfInterest
    {
        public int Id { get; set; }
        public string Description { get; set; }
        // this is the small description in popup

        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string FullAddress { get; set; }


        // public string Address { get; set; }
        // public string City { get; set; }
        // public string State { get; set; }
        // public string ZipCode { get; set; }
        // public string ArtistNameOnMural { get; set; }

    }
}