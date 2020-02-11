CREATE TABLE [dbo].[Book]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY(1,1), 
    [Name] NCHAR(150) NOT NULL, 
    [Date] DATE NOT NULL, 
    [Rate] INT NOT NULL, 
    [Pages] INT NOT NULL
)
