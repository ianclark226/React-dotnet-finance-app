using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class DbContextFix : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "80733e57-9878-4c31-bc89-2b948952f7fe");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9d28d6b3-08ff-4965-a39e-b962c5fd6a20");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "54989042-c3c6-46cd-8a86-bf1d7c0742e0", null, "Admin", "ADMIN" },
                    { "e65ed4d7-753c-4526-a05a-9da2445af116", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "54989042-c3c6-46cd-8a86-bf1d7c0742e0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e65ed4d7-753c-4526-a05a-9da2445af116");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "80733e57-9878-4c31-bc89-2b948952f7fe", null, "User", "USER" },
                    { "9d28d6b3-08ff-4965-a39e-b962c5fd6a20", null, "Admin", "ADMIN" }
                });
        }
    }
}
