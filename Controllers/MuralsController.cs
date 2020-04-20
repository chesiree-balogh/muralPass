using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using muralPass.Models;

namespace muralPass.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MuralsController : ControllerBase
    {
        private readonly DatabaseContext _context;

        private readonly string _MAPBOX_TOKEN;

        public MuralsController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            this._MAPBOX_TOKEN = config["MAPBOX_TOKEN"];
        }

        // GET: api/Murals
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Mural>>> GetMurals()
        {
            return await _context.Murals.ToListAsync();
        }

        // GET: api/Murals/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Mural>> GetMural(int id)
        {
            var mural = await _context.Murals.FindAsync(id);

            if (mural == null)
            {
                return NotFound();
            }

            return mural;
        }

        // PUT: api/Murals/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMural(int id, Mural mural)
        {
            if (id != mural.Id)
            {
                return BadRequest();
            }

            _context.Entry(mural).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MuralExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Murals
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Mural>> PostMural(Mural mural)
        {
            var client = new HttpClient();
            var resp = await client.GetAsync($"https://api.mapbox.com/geocoding/v5/mapbox.places/{mural.FullAddress}.json?access_token={this._MAPBOX_TOKEN}");

            var json = await JsonDocument.ParseAsync(await resp.Content.ReadAsStreamAsync());
            var root = json.RootElement;
            var feature = root.GetProperty("features").EnumerateArray().First();
            var center = feature.GetProperty("center").EnumerateArray();
            var lng = center.First();
            var lat = center.Skip(1).First();

            Console.WriteLine($"{lat},{lng}");
            mural.Latitude = lat.GetDouble();
            mural.Longitude = lng.GetDouble();
            _context.Murals.Add(mural);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMural", new { id = mural.Id }, mural);
        }

        // DELETE: api/Murals/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Mural>> DeleteMural(int id)
        {
            var mural = await _context.Murals.FindAsync(id);
            if (mural == null)
            {
                return NotFound();
            }

            _context.Murals.Remove(mural);
            await _context.SaveChangesAsync();

            return mural;
        }

        private bool MuralExists(int id)
        {
            return _context.Murals.Any(e => e.Id == id);
        }
    }
}
