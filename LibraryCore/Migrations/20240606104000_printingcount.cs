using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibraryCore.Migrations
{
    /// <inheritdoc />
    public partial class printingcount : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PrintingCountTime",
                table: "Files",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PrintingCountTime",
                table: "Files");
        }
    }
}
