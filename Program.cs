using WebApplicationForAlpha.Services;

var builder = WebApplication.CreateBuilder(args);
var theServices = builder.Services;


theServices.AddControllers();
theServices.AddSingleton<VehicleService>();
theServices.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular",
        policy => policy
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod());
});

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();

app.UseCors("AllowAngular");

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
