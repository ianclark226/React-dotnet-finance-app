using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class updatedCommentModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1f23000e-ac89-4ad9-bac3-1dd361f10823");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7a4f7374-f015-4777-8ceb-05deb70cb9b1");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "293301c5-114c-4d24-8715-d82bd9cf87cb", null, "Admin", "ADMIN" },
                    { "8956a149-92bd-4f71-a4b9-992c4dced3d0", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "293301c5-114c-4d24-8715-d82bd9cf87cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8956a149-92bd-4f71-a4b9-992c4dced3d0");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1f23000e-ac89-4ad9-bac3-1dd361f10823", null, "User", "USER" },
                    { "7a4f7374-f015-4777-8ceb-05deb70cb9b1", null, "Admin", "ADMIN" }
                });
        }
    }
}
