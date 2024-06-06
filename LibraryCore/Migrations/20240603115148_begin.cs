using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LibraryCore.Migrations
{
    /// <inheritdoc />
    public partial class begin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Phone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Password = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PrintRequests",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OwnerId = table.Column<int>(type: "int", nullable: false),
                    IsColored = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PrintRequests", x => x.ID);
                    table.ForeignKey(
                        name: "FK_PrintRequests_Customers_OwnerId",
                        column: x => x.OwnerId,
                        principalTable: "Customers",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Files",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FileItself = table.Column<byte[]>(type: "varbinary(max)", nullable: false),
                    NameOfFile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RequestID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Files", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Files_PrintRequests_RequestID",
                        column: x => x.RequestID,
                        principalTable: "PrintRequests",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Files_RequestID",
                table: "Files",
                column: "RequestID");

            migrationBuilder.CreateIndex(
                name: "IX_PrintRequests_OwnerId",
                table: "PrintRequests",
                column: "OwnerId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Files");

            migrationBuilder.DropTable(
                name: "PrintRequests");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
