using Microsoft.EntityFrameworkCore.Migrations;

namespace ZapSearchApp.API.Migrations
{
    public partial class AddCityRow : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Values",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Values");
        }
    }
}
