using Microsoft.EntityFrameworkCore.Migrations;

namespace muralPass.Migrations
{
    public partial class LongAndLat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Address",
                table: "Murals");

            migrationBuilder.DropColumn(
                name: "City",
                table: "Murals");

            migrationBuilder.DropColumn(
                name: "State",
                table: "Murals");

            migrationBuilder.AddColumn<string>(
                name: "Latitude",
                table: "Murals",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Longitude",
                table: "Murals",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Latitude",
                table: "Murals");

            migrationBuilder.DropColumn(
                name: "Longitude",
                table: "Murals");

            migrationBuilder.AddColumn<string>(
                name: "Address",
                table: "Murals",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Murals",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "State",
                table: "Murals",
                type: "text",
                nullable: true);
        }
    }
}
