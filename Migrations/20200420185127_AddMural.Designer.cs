﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using muralPass.Models;

namespace muralPass.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20200420185127_AddMural")]
    partial class AddMural
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("muralPass.Models.Mural", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("ArtistName")
                        .HasColumnType("text");

                    b.Property<string>("FullAddress")
                        .HasColumnType("text");

                    b.Property<double>("Latitude")
                        .HasColumnType("double precision");

                    b.Property<double>("Longitude")
                        .HasColumnType("double precision");

                    b.Property<string>("MuralDescription")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Murals");
                });
#pragma warning restore 612, 618
        }
    }
}
