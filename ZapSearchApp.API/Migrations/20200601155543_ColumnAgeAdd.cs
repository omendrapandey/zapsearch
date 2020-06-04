using Microsoft.EntityFrameworkCore.Migrations;

namespace ZapSearchApp.API.Migrations
{
    public partial class ColumnAgeAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Age",
                table: "Values",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Values");
        }
    }
}
