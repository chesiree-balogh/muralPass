using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using muralPass.Models;

namespace muralPass.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private DatabaseContext _context;

        // dependency injection
        // we are going to pass stuff into you when ever you are created
        public SearchController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpGet("murals")]
        public async Task<ActionResult> SeachMurals(string searchTerm)
        {
            //  find murals where search words match

            var results = _context.Murals.Where(w => w.ArtistName.ToLower().Contains(searchTerm.ToLower()));
            // if you want it to search multiple points of info like artist name, city, latitude etc:
            // var results = _context.Murals.Where(w => 
            // w.ArtistName.ToLower().Contains(searchTerm.ToLower())) ||
            // w.MuralDescription.ToLower().COntails(searchTerm.ToLower())
            // maybe do ArtistName and add City?


            return Ok(await results.ToListAsync());
        }
    }
}