## Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)  
- [Node.js 18+](https://nodejs.org/en/)  
- [Angular CLI 16+](https://angular.io/cli)  


## Getting Started

### Option 1: Open in Visual Studio (Recommended)

1. Open `WebApplicationForAlpha.sln` in Visual Studio.  
2. Press **F5 (Start Debugging)** with 'https'.  
   - The backend API will start automatically.  
   - If Node.js workload is installed, Angular will start automatically and land on the homepage.

### Option 2: Manual Setup

#### 1. Backend (ASP.NET Core API)

1. Open a terminal at the project root:


cd D:\Projects\WebApplicationForAlpha

dotnet restore

dotnet run

cd ClientApp

npm install

npm start
