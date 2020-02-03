CREATE TABLE [dbo].[Book]
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [Name] NCHAR(50) NOT NULL, 
    [Date] DATE NOT NULL, 
    [Rate] INT NOT NULL, 
    [Pages] INT NOT NULL
)
