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
            //  find murals where search words match artist name
            // var results = _context.Murals.Where(w => w.ArtistName.ToLower().Contains(searchTerm.ToLower()));


            // // maybe do ArtistName and add City?
            // // if you want it to search multiple points of info like artist name, city, zip:
            var results = _context.Murals.Where(w =>
            w.ArtistName.ToLower().Contains(searchTerm.ToLower()) ||
            w.FullAddress.ToLower().Contains(searchTerm.ToLower())
            );


            return Ok(await results.ToListAsync());
        }
    }
}